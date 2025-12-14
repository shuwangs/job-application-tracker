-- db/migrations/jobApps.sql
-- JOB APPLICATIONS INFO 
-- NEEDS -id -company -position -dateApplied -status
DROP TABLE IF EXISTS jobApps;
CREATE TABLE IF NOT EXISTS jobApps (
  id BIGSERIAL PRIMARY KEY,
  company TEXT,
  author VARCHAR(50)
);
