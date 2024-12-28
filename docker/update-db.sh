mv docker/db/db.sql.gz docker/db/db-$(date +%Y-%m-%d-%H-%M-%S).sql.gz
docker compose exec -T db mariadb-dump -pu -uu app | gzip -9 > docker/db/db.sql.gz
