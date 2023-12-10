

CREATE DATABASE gatorDB;

USE gatorDB;

CREATE TABLE `topics` (
  `subject` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`subject`),
  UNIQUE INDEX `subject_UNIQUE` (`subject` ASC) VISIBLE);

CREATE TABLE `tutors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `subject_id` VARCHAR(4) NOT NULL,
  `description` TEXT NULL,
  `flyer` VARCHAR(50) NULL,
  `picture` VARCHAR(50) NULL,
  `video` VARCHAR(50) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_topic_idx` (`subject_id` ASC) VISIBLE,
  CONSTRAINT `fk_topic`
    FOREIGN KEY (`subject_id`)
    REFERENCES `topics` (`Subject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

 INSERT INTO topics (subject)
    VALUES
	 ('ARTH'),
	('ASTR'),
	('BUS'),
	 ('CSC'),
	('DM'),
	('MATH');

    INSERT INTO tutors (id, name, subject_id)
    VALUES
	(1, 'Philip Karnatsevich', 'CSC'),
	(2, 'Joaquin Warren', 'BUS'),
	(3, 'Ronnie Huang', 'ASTR'),
	(4, 'Karl Moreno', 'DM'),
	(5, 'Darien Banuelos', 'ARTH'),
	(6, 'Sean Ryan', 'CSC'),
	(7, 'Joe Schmuck', 'MATH'),
	(8, 'John Doe', 'CSC'); 

  UPDATE tutors SET picture = CONCAT('tutor_', id) WHERE id BETWEEN 1 AND 8;

  -- Create the 'users' table
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `password` BINARY(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create the 'messages' table
CREATE TABLE `messages` (
  `TutorID` INT NOT NULL,
  `SenderID` INT NOT NULL,
  `TutorPostID` INT NOT NULL,
  `Date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Message` TEXT NOT NULL,
  INDEX `fk_TutorID_idx` (`TutorID` ASC) VISIBLE,
  INDEX `fk_SenderID_idx` (`SenderID` ASC) VISIBLE,
  CONSTRAINT `fk_TutorID`
    FOREIGN KEY (`TutorID`)
    REFERENCES `tutors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SenderID`
    FOREIGN KEY (`SenderID`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Inserting data into 'users' from 'tutors'
INSERT INTO users (id, name, email, password)
SELECT id, name, 
       CONCAT(LOWER(name), '@example.com') AS email, 
       UNHEX(SHA1('defaultPassword')) AS password
FROM tutors;

--------------------------------------------------

ALTER TABLE `messages`
MODIFY `TutorPostID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

ALTER TABLE `tutors`
ADD COLUMN `user_id` INT NOT NULL;

SET FOREIGN_KEY_CHECKS=0;

ALTER TABLE `tutors`
ADD CONSTRAINT `fk_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `users` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

UPDATE tutors SET user_id = id WHERE id BETWEEN 1 AND 8;