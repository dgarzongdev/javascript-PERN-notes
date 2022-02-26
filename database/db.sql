CREATE DATABASE notesdb;

CREATE TABLE note(
    id SERIAL PRIMARY KEY,
    title varchar(255) UNIQUE,
    description VARCHAR(255)
);