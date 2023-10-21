

CREATE DATABASE gatorDB;

USE gatorDB;
    
    CREATE TABLE tutors (
      id INT UNSIGNED NOT NULL,
      name VARCHAR(100) NOT NULL,
      topic VARCHAR(4) NOT NULL,
      description TEXT,
      flyer VARCHAR(50),
      picture VARCHAR(50),
      video VARCHAR(50)
  );

    INSERT INTO tutors (id, name, topic)
    VALUES
	(112345678, 'Philip Karnatsevich', 'CSC'),
	(123456789, 'Joaquin Warren', 'BUS'),
	(234567891, 'Ronnie Huang', 'ASTR'),
	(345678912, 'Karl Moreno', 'DM'),
	(456789123, 'Darien Banuelos', 'ARTH'),
	(567891234), 'Sean Ryan', 'CSC'),
	(678912345), 'Joe Schmuck', 'MATH'),
	(789123456), 'John Doe', 'CSC'); 
