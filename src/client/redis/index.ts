import { Redis } from "ioredis";

export const redisClient = new Redis(process.env.REDIS_URL!);

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
