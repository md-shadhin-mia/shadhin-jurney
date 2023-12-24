CREATE TABLE IF NOT EXISTS test_table(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL
);
-- create table for blog posts
CREATE TABLE IF NOT EXISTS blog_post(
    id serial PRIMARY KEY,
    titile varchar(255) NOT NULL,
    slug varchar(255) NOT NULL,
    contents JSONB NOT NULL,
    published_at timestamp,
    created_at timestamp NOT NULL,
    updated_at timestamp
);

-- create index for slug
CREATE UNIQUE INDEX IF NOT EXISTS blog_post_slug_idx ON blog_post(slug);

