BEGIN;

DROP TABLE IF EXISTS blogs, comments CASCADE;

CREATE TABLE blogs (
                        id SERIAL PRIMARY KEY,
                        blog_title VARCHAR(100) NOT NULL,
                        author VARCHAR(100) NOT NULL,
                        content TEXT NOT NULL,
                        blog_date DATE 
);

CREATE TABLE comments (
                        id SERIAL PRIMARY KEY,
                        blogs_id INTEGER,
                        commentor VARCHAR(100),
                        content TEXT NOT NULL,
                        comment_date DATE
);

INSERT INTO blogs (blog_title, author, content, blog_date)
Values
      ('Test blog', 'Marwan', 'Im just a test content on this blog', '2020-04-27'),
      ('Test blog2', 'Marwan', 'Im just another test content on this blog', '2020-04-22');

INSERT INTO comments (blogs_id, commentor, content, comment_date)
Values
      (1, 'James', 'Amazing content, Thank you', '2020-4-28'),
      (1, 'Jake', 'Niceeeeeeee, I like that', '2020-4-29'),
      (5, 'James', 'Amazing content, Thank you', '2020-3-28'),
      (6, 'James', 'Amazing content, Thank you', '2020-3-28'),
      (2, 'James', 'Amazing content, Thank you', '2020-3-28');


COMMIT;