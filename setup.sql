DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;
CREATE TABLE items(
    id INT not null AUTO_INCREMENT,
    name VARCHAR(255) not null,
    done INT not null default 0,
    primary key (id)
);
