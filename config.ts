import { z } from "zod";

const envSchema = z.object({
  LINEAR_KEY: z.string(),
});

export const ENV = envSchema.parse(process.env);