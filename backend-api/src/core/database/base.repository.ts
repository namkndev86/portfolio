export interface IRepository<T> {
  findMany(params?: any): Promise<T[]>;
  findOne(params: any): Promise<T | null>;
  create(data: any): Promise<T>;
  update(params: any, data: any): Promise<T>;
  delete(params: any): Promise<T>;
}

export abstract class BaseRepository<T> implements IRepository<T> {
  abstract findMany(params?: any): Promise<T[]>;
  abstract findOne(params: any): Promise<T | null>;
  abstract create(data: any): Promise<T>;
  abstract update(params: any, data: any): Promise<T>;
  abstract delete(params: any): Promise<T>;
}
