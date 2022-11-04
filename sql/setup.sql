-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    age INT NOT NULL,
    breed VARCHAR NOT NULL,
    owner VARCHAR NOT NULL
);

INSERT INTO dogs (name, age, breed, owner)
VALUES
  ('Korra', 1, 'Pyrador', 'Charles'),
  ('Lily', 1, 'Pitbull/Shepherd', 'Charles'),
  ('Sadie', 5, 'Shepherd/Rottweiler', 'Katie'),
  ('Grrrtrude', 8, 'Rottweiler, Mini', 'David'),
  ('Hilde', 8, 'German Shepherd', 'Klari'),
  ('Wotann', 7, 'German Shepherd', 'Klari');