import { NextResponse } from 'next/server';

export async function GET() {
  const heapUsed = process.memoryUsage().heapUsed;
  const uptime = process.uptime();

  const metrics = [
    `# HELP nextjs_memory_heap_bytes Memory heap usage of the NextJS process`,
    `# TYPE nextjs_memory_heap_bytes gauge`,
    `nextjs_memory_heap_bytes ${heapUsed}`,
    `# HELP nextjs_uptime_seconds Uptime of the NextJS process in seconds`,
    `# TYPE nextjs_uptime_seconds gauge`,
    `nextjs_uptime_seconds ${uptime}`,
  ].join('\n') + '\n';

  return new NextResponse(metrics, {
    headers: {
      'Content-Type': 'text/plain; version=0.0.4',
    },
  });
}
