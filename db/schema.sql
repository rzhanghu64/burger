CREATE DATABASE mfcc55v8govhfibg;
USE mfcc55v8govhfibg;
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);