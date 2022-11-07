import { Tedis } from "tedis";

const redisConnection = new Tedis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

export default redisConnection;
