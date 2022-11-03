--  || psql --user postgres --host 127.0.0.1 --port 5432

CREATE DATABASE todo;

CREATE TABLE todolist(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);