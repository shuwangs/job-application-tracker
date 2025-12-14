-- db/migrations/migration-1765676413858.sql
DROP TABLE IF EXISTS test;
CREATE TABLE IF NOT EXISTS test (
  id BIGSERIAL PRIMARY KEY,
  quote TEXT,
  author VARCHAR(50)
);
