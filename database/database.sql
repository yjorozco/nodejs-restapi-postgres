CREATE  DATABASE fistapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('joe','joe@ibm.com'),
            ('ryan','ryan@fazweb.com');

