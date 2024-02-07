
CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, cat_name VARCHAR(255)
);

CREATE TABLE artist (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, artist_name VARCHAR(255) NOT NULL
);

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, username VARCHAR(80) NOT NULL, lastname VARCHAR(80) NULL, firstname VARCHAR(80) NULL, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, score INT NOT NULL DEFAULT 0, created_at TIMESTAMP NOT NULL DEFAULT NOW(), city VARCHAR(80) NULL, postal_code VARCHAR(255) NULL, is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE messaging (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, body TEXT NOT NULL, created_at DATETIME NOT NULL DEFAULT NOW(), is_read BOOLEAN NOT NULL DEFAULT 0, user_id INT NOT NULL, CONSTRAINT fk_message_user FOREIGN KEY (user_id) REFERENCES user (id)
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
('DaCruz'),
('Nayus'),
('AMO'),
('KozDos'),
(' MissVan'),
('Sabio'),
('Semor'),
('Stork'),
('Madich'),
('Mifamosa'),
('Veks'),
('RATUR'),
('Margay'),
('Ella');

INSERT INTO category (cat_name) VALUES
	 ('Retro'),
	 ('Caligraphy'),
	 ('Abstract'),
	 ('Realistic');

INSERT INTO user (username, lastname, firstname, email, password, score, city, postal_code, is_admin)
VALUES 
('admin', 'admin', 'admin', 'admin@admin.fr', '$argon2id$v=19$m=65536,t=5,p=1$jMYw1NGZo+RAHy5jvgLIGg$JP+lJ8SiGk69Mk/gFmD9SZ7pXsZ+zBoeSY2WXjSRAY8', 0, 'Reims', 51800, 1),
('Forrest', 'Gump', 'Forrest', 'user@user.fr', '$argon2id$v=19$m=65536,t=5,p=1$jMYw1NGZo+RAHy5jvgLIGg$JP+lJ8SiGk69Mk/gFmD9SZ7pXsZ+zBoeSY2WXjSRAY8', 750, 'bordeaux', 30072, 0),
('Lulu', 'Malbéquie', 'Lucie', 'lucie@user.fr', '$argon2id$v=19$m=65536,t=5,p=1$jMYw1NGZo+RAHy5jvgLIGg$JP+lJ8SiGk69Mk/gFmD9SZ7pXsZ+zBoeSY2WXjSRAY8', 500, 'Paris', 75007, 0),
('Jhanemba', 'Onalo', 'Pierre', 'pierre@user.fr', '$argon2id$v=19$m=65536,t=5,p=1$jMYw1NGZo+RAHy5jvgLIGg$JP+lJ8SiGk69Mk/gFmD9SZ7pXsZ+zBoeSY2WXjSRAY8', 750, 'Anglet', 64600, 0),
('Bijoux', 'Petrau', 'Mathieu', 'mathieu@user.fr', '$argon2id$v=19$m=65536,t=5,p=1$jMYw1NGZo+RAHy5jvgLIGg$JP+lJ8SiGk69Mk/gFmD9SZ7pXsZ+zBoeSY2WXjSRAY8', 1000, 'Marseille', 13000, 0);

INSERT INTO messaging (title, body, created_at, is_read, user_id)
VALUES ('ca va pas','Bonjour, ca va pas jai pas mes points','2024-01-25 09:29:15',1,1),('ca va pas','Bonjour, ca va pas jai pas mes points','2024-01-25 09:29:15',0,1);

INSERT INTO artwork (path_pic, title, longitude, latitude, validated, category_id, artist_id, user_id) 
VALUES 
('1.jpg', 'Ragazza', 48.88694500, 2.38465300, 1, 3, 1, 2),
('2.jpg', 'Prades', 42.61915400, 2.42048900, 1, 2, 2, 2),
('3.jpg', 'Toucan', 44.84136200, -0.57956500, 1, 4, 3, 2),
('4.jpg', 'Flecha', 43.49979200, -1.45771800, 1, 3, 4, 3),
('5.jpg', 'Symphonie', 43.49979200, -1.45771800, 0, 3, 5, 3),
('6.jpg', 'Istraille', 43.59773600, 1.44174600, 1, 2, 6, 3),
('7.jpg', 'Camionneur', 47.26033300, -1.56462600, 1, 3, 7, 4),
('8.jpg', 'Bretzel', 48.56964900, 7.75495200, 1, 1, 8, 4),
('9.jpg', 'Calligrapaint', 48.59295900, 7.75278700, 1, 2, 9, 4),
('10.jpg', 'Cheval', 43.60585500, 3.87386700, 1, 1, 10, 5),
('11.jpg', 'Bibliothèque', 45.173447100, 5.724765300, 1, 4, 11, 5),
('12.jpg', 'Renaissance', 49.4324300, 1.08751600, 0, 3, 12, 5),
('13.jpg', 'Marianna', 45.72374100, 3.33860900, 1, 3, 13, 5),
('14.jpg', 'Origines', 44.2986200, 4.09250200, 1, 4, 14, 5);




