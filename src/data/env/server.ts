import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SESSION_SECRET: z.string().min(1),
    COOKIE_SECURE: z.enum(["0", "1"]).default("0"),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    SESSION_SECRET: process.env.SESSION_SECRET,
    COOKIE_SECURE: process.env.COOKIE_SECURE,
  },
});
