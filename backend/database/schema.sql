-- Active: 1702912406858@@127.0.0.1@3306@mapping_art_db

DROP DATABASE IF EXISTS mapping_art_db;

CREATE DATABASE IF NOT EXISTS mapping_art_db;

USE mapping_art_db;

CREATE tABLE
    user (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        username VARCHAR(80) NOT NULL,
        lastname VARCHAR(80) NULL,
        firstname VARCHAR(80) NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        score INT NOT NULL DEFAULT 0,
        created_at TIMESTAMP NOT NULL,
        city VARCHAR(80) NULL,
        postal_code VARCHAR(255) NULL,
        role_id INT NOT NULL
    );

CREATE TABLE
    artwork (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        path_pic VARCHAR(255) NOT NULL,
        title VARCHAR(255) NULL,
        adress VARCHAR(255) NOT NULL,
        validated BOOLEAN NOT NULL DEFAULT FALSE,
        category_id INTEGER NOT NULL,
        artist_id INT NOT NULL,
        user_id INT NOT NULL
    );

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

CREATE TABLE
    role (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        role_name VARCHAR(255) NOT NULL
    );

SHOW TABLES;