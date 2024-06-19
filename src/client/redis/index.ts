import { Redis } from "ioredis";

export const redisClient = new Redis({
  host: process.env.REDIS_ENDPOINT,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
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
