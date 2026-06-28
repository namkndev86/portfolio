import { Injectable } from '@nestjs/common';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PlatformEvent } from './events.enum';

export interface EventEnvelope<T = any> {
  type: PlatformEvent | string;
  payload: T;
  timestamp: string;
}

@Injectable()
export class EventBusService {
  private readonly eventSubject$ = new Subject<EventEnvelope>();

  public publish<T = any>(type: PlatformEvent | string, payload: T): void {
    this.eventSubject$.next({
      type,
      payload,
      timestamp: new Date().toISOString(),
    });
  }

  public subscribe<T = any>(type: PlatformEvent | string): Observable<T> {
    return this.eventSubject$.asObservable().pipe(
      filter((envelope) => envelope.type === type),
      map((envelope) => envelope.payload as T),
    );
  }

  public stream(): Observable<EventEnvelope> {
    return this.eventSubject$.asObservable();
  }
}
