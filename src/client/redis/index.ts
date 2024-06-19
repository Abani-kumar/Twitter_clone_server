import { Redis } from "ioredis";

export const redisClient = new Redis(process.env.REDIS_URL!, {
  retryStrategy(times) {
    // Reconnect after
    const delay = Math.min(times * 50, 2000);
    return delay;
  }
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('reconnecting', () => {
  console.log(`Reconnecting to Redis ...`);
});

redisClient.on('end', () => {
  console.log('Redis connection closed');
});

redisClient.on('error', (err) => {
  console.error('Redis error', err);
});
