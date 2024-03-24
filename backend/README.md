# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Prisma CLI commands

To manually re-generate the client with the Prisma CLI.

```bash
bunx prisma generate
```

To create a new migration, edit `schema.prisma` file then:

```bash
bunx prisma init --datasource-provider sqlite
```
