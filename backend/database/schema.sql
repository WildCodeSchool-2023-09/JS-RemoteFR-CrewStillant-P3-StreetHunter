-- Active: 1702912406858@@127.0.0.1@3306@mapping_art_db

DROP DATABASE IF EXISTS mapping_art_db;

CREATE DATABASE IF NOT EXISTS mapping_art_db;

USE mapping_art_db;

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

DROP TABLE IF EXISTS role;

CREATE tABLE
    user (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        username VARCHAR(80) NOT NULL,
        lastname VARCHAR(80) NULL,
        firstname VARCHAR(80) NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        score INT NOT NULL DEFAULT 0,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        city VARCHAR(80) NULL,
        postal_code VARCHAR(255) NULL,
        is_admin BOOLEAN NOT NULL DEFAULT FALSE
    );

CREATE TABLE
    artwork (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        path_pic VARCHAR(255) NOT NULL,
        title VARCHAR(255) NULL,
        adress VARCHAR(255) NOT NULL,
        validated BOOLEAN NOT NULL DEFAULT FALSE,
        category_id INTEGER NOT NULL,
        CONSTRAINT fk_artwork_category FOREIGN KEY(category_id) REFERENCES category(id),
        artist_id INT NOT NULL,
        CONSTRAINT fk_artwork_artist FOREIGN KEY(artist_id) REFERENCES artist(id),
        user_id INT NOT NULL,
        CONSTRAINT fk_artwork_user FOREIGN KEY(user_id) REFERENCES user(id)
    );

SHOW TABLES;