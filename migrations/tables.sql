-- this files exicuted top to bottom using index so do not change existing sql.only add new statements to buttom 

CREATE TABLE IF NOT EXISTS test_table(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL
);
-- create table for blog posts
CREATE TABLE IF NOT EXISTS blog_post(
    id serial PRIMARY KEY,
    -- titile varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    slug varchar(255) NOT NULL,
    contents JSONB NOT NULL,
    published_at timestamp,
    created_at timestamp NOT NULL,
    updated_at timestamp
);

-- create index for slug
CREATE UNIQUE INDEX IF NOT EXISTS blog_post_slug_idx ON blog_post(slug);



-- create user tables

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name varchar(255),
    username varchar(255) UNIQUE NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) UNIQUE NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp
);

CREATE UNIQUE INDEX if NOT EXISTS users_username_ids ON users(username);

alter table users drop constraint users_password_key;