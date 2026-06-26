#!/usr/bin/env bash

set -euo pipefail

BACKUP_DIR="./backups"
TIMESTAMP=$(date +%F_%H-%M-%S)

mkdir -p "$BACKUP_DIR"

echo "Starting PostgreSQL backup..."
docker exec -t portfolio-postgres pg_dumpall -U postgres | gzip > "${BACKUP_DIR}/postgres_${TIMESTAMP}.sql.gz"
echo "PostgreSQL backup stored at: ${BACKUP_DIR}/postgres_${TIMESTAMP}.sql.gz"

echo "Starting MongoDB backup..."
docker exec -t portfolio-mongodb mongodump --archive --gzip > "${BACKUP_DIR}/mongo_${TIMESTAMP}.archive.gz"
echo "MongoDB backup stored at: ${BACKUP_DIR}/mongo_${TIMESTAMP}.archive.gz"

echo "Database backups completed successfully."
