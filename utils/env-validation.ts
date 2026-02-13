import { z } from 'zod';

const envSchema = z.object({
  TINA_PUBLIC_IS_LOCAL: z.string().default('true'),
  TINA_PUBLIC_REF_NAME: z.string().optional(),
  NEXT_PUBLIC_REF_NAME: z.string().default('RWP'),
  GITHUB_PERSONAL_ACCESS_TOKEN: z.string().optional(),
  GITHUB_OWNER: z.string().optional(),
  GITHUB_REPO: z.string().optional(),
  GITHUB_BRANCH: z.string().optional(),
  MONGODB_URI: z.string().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
});

export const env = envSchema.parse({
  TINA_PUBLIC_IS_LOCAL: process.env.TINA_PUBLIC_IS_LOCAL,
  TINA_PUBLIC_REF_NAME: process.env.TINA_PUBLIC_REF_NAME,
  NEXT_PUBLIC_REF_NAME: process.env.NEXT_PUBLIC_REF_NAME,
  GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  GITHUB_OWNER: process.env.GITHUB_OWNER,
  GITHUB_REPO: process.env.GITHUB_REPO,
  GITHUB_BRANCH: process.env.GITHUB_BRANCH,
  MONGODB_URI: process.env.MONGODB_URI,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});

export type Env = z.infer<typeof envSchema>;
