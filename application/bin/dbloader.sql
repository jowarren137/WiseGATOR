

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

  UPDATE tutor SET picture = CONCAT('tutor_', id) WHERE id BETWEEN 1 AND 8;