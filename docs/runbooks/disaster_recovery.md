# Runbook: Emergency Procedures & Disaster Recovery

This document outlines operations to restore systems during backend/database incidents or pipeline issues.

## 1. Database Backups & Restore

### PostgreSQL Backup
```bash
# Export schema and contents to a compressed dump file
docker exec -t portfolio_postgres_db pg_dumpall -U postgres | gzip > backup_postgres_$(date +%F).sql.gz
```

### PostgreSQL Restore
```bash
# Restore PostgreSQL from a compressed dump file
gunzip -c backup_postgres_YYYY-MM-DD.sql.gz | docker exec -i portfolio_postgres_db psql -U postgres
```

### MongoDB Backup
```bash
# Backup MongoDB collections
docker exec -t portfolio_mongodb mongodump --out /data/db/backup_mongo_$(date +%F)
```

---

## 2. Flushing Redis Cache
If a stale page cache or invalid session data is breaking UI routes, flush the Redis store.

```bash
# Flush all keys
docker exec -it portfolio_redis_cache redis-cli flushall
```

---

## 3. High CPU / Memory Alerts
When container CPU or Memory metrics exceed 90% threshold:

1. Identify the container using high resources:
   ```bash
   docker stats
   ```
2. Inspect application logs:
   ```bash
   docker logs --tail 200 portfolio_backend-api
   ```
3. Restart the specific container:
   ```bash
   docker service update --force portfolio_backend-api
   ```
