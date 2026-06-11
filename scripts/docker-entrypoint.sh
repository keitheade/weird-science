#!/bin/sh
set -e

PRISMA_CLI="/app/db-tools/node_modules/prisma/build/index.js"
TSX_CLI="/app/db-tools/node_modules/tsx/dist/cli.mjs"

if [ ! -f /app/data/weird-science.db ]; then
  echo "Initializing database..."
  node "$PRISMA_CLI" db push --schema=/app/prisma/schema.prisma
  NODE_PATH=/app/db-tools/node_modules node "$TSX_CLI" /app/prisma/seed.ts
  echo "Database ready."
fi

exec node server.js
