BEGIN;

DROP TABLE IF EXISTS blogs, comments CASCADE;

CREATE TABLE blogs (
                        id SERIAL PRIMARY KEY,
                        AUTHOR VARCHAR(100) NOT NULL,
                        content TEXT NOT NULL,
                        blog_date DATE 
);

CREATE TABLE comments(
                        id SERIAL PRIMARY KEY,
                        blogs_id,
                        name VARCHAR(100) NOT NULL,
                        content TEXT NOT NULL,
                        comment_date DATE
)