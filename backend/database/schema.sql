-- Active: 1701507911414@@127.0.0.1@3306@mapping_art_db


CREATE TABLE
    category (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        cat_name VARCHAR(255)
    );

CREATE TABLE
    artist (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        artist_name VARCHAR(255) NOT NULL
    );

CREATE TABLE
    user (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        username VARCHAR(80) NOT NULL,
        lastname VARCHAR(80) NULL,
        firstname VARCHAR(80) NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        score INT NOT NULL DEFAULT 0,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        city VARCHAR(80) NULL,
        postal_code VARCHAR(255) NULL,
        is_admin BOOLEAN NOT NULL DEFAULT FALSE
    );

CREATE TABLE
    messaging (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        title VARCHAR (255) NOT NULL,
        body TEXT NOT NULL,
        created_at DATETIME NOT NULL DEFAULT NOW(),
        is_read BOOLEAN NOT NULL DEFAULT 0,
        user_id INT NOT NULL,
        CONSTRAINT fk_message_user FOREIGN KEY (user_id) REFERENCES user(id)
    );

CREATE TABLE
    artwork (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        path_pic VARCHAR(255) NOT NULL,
        title VARCHAR(255) NULL,
        longitude DECIMAL(11, 8) NOT NULL,
        latitude DECIMAL(10, 8) NOT NULL,
        validated BOOLEAN NOT NULL DEFAULT FALSE,
        category_id INT NOT NULL,
        artist_id INT NULL,
        user_id INT NOT NULL,
        CONSTRAINT fk_artwork_category FOREIGN KEY (category_id) REFERENCES category(id),
        CONSTRAINT fk_artwork_artist FOREIGN KEY (artist_id) REFERENCES artist(id),
        CONSTRAINT fk_artwork_user FOREIGN KEY (user_id) REFERENCES user(id)
    );


INSERT INTO artist (artist_name)
VALUES
('Ernest Pignon-Ernest'),
('Miss.Tic'),
('JR (Jean René)'),
('Blek le Rat');

INSERT INTO category (cat_name) VALUES
	 ('Retro'),
	 ('Caligraphy'),
	 ('Abstract'),
	 ('Realistic');

INSERT INTO user (username, lastname, firstname, email, password, score, city, postal_code, is_admin)
VALUES 
('Forrest', 'Gump', 'Forrest', 'user@user.fr', '$argon2id$v=19$m=65536,t=5,p=1$iQTGXofQBSs532+J4e2mng$7DWWbEQGHBsOaUqSG+DwIwNdCbCcDLiv8EcojDqUwog', 250, 'bordeaux', 30072, 0),
('admin', 'admin', 'admin', 'admin@admin.fr', '$argon2id$v=19$m=65536,t=5,p=1$jMYw1NGZo+RAHy5jvgLIGg$JP+lJ8SiGk69Mk/gFmD9SZ7pXsZ+zBoeSY2WXjSRAY8', 250, 'Reims', 51800, 1);

INSERT INTO messaging (title, body, created_at, is_read, user_id)
VALUES ('ca va pas','Bonjour, ca va pas jai pas mes points','2024-01-25 09:29:15',1,1),('ca va pas','Bonjour, ca va pas jai pas mes points','2024-01-25 09:29:15',0,1);

INSERT INTO artwork (path_pic, title, longitude, latitude, validated, category_id, artist_id, user_id) 
VALUES 
('mural_by_SWED_1706213027893.jpg', 'Old Angel', 43.59748200, 1.44534100, 1, 4, 1, 1),
('Paris_La_Butte-aux-Cailles_1706223077579.png', 'choupi rats', 50.69531300, 3.15569300, 0, 4, 2, 1);
