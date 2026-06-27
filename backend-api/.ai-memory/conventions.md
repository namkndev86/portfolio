# Backend Development Conventions

This document establishes development standards and conventions specific to `backend-api`.

## Module & File Conventions
* **Structure**: Feature modules reside under `src/modules/<feature>/`.
* **Naming**:
  * Controllers: `name.controller.ts` (`NameController`)
  * Services: `name.service.ts` (`NameService`)
  * Modules: `name.module.ts` (`NameModule`)
  * DTOs: `create-name.dto.ts`, `update-name.dto.ts`
* **Route Prefixes**: All controllers must use `@Controller('feature')` under the global `/api/v1/` prefix.

## Database & ORM Conventions
* **Prisma**: All database queries must go through `PrismaService`. Never construct raw SQL unless performing complex analytical migrations.
* **Migrations**: Every schema change in `prisma/schema.prisma` must be committed with an explicit migration name via `npx prisma migrate dev --name <description>`.
* **Seeding**: Initial development datasets must be maintained in `prisma/seed.ts`.
