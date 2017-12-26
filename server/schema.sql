CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200),
  roomid int NOT NULL,
  PRIMARY KEY (ID)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(200),
  PRIMARY KEY (ID)
)

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(200),
  PRIMARY KEY (ID)
)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

