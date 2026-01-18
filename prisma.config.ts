import 'dotenv/config'
import { defineConfig } from 'prisma/config'
import { PrismaPg } from '@prisma/adapter-pg'

export default defineConfig({
  schema: 'prisma/schema.prisma',

  // REQUIRED for prisma migrate dev
  datasource: {
    url: process.env.DATABASE_URL!,
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    }),
  },

  migrations: {
    seed: 'npx ts-node prisma/seed.ts',
  },
})
