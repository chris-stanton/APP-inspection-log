

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL unique,
	password VARCHAR(100) NOT NULL
);

CREATE TABLE usersInfo (
	id SERIAL PRIMARY KEY,
	firstName VARCHAR(100) NOT NULL,
	lastName VARCHAR(100) NOT NULL,
	users_id INT NOT NULL,
	companies_id INT NOT NULL,
	active boolean DEFAULT true
);

CREATE TABLE companies (
	id SERIAL PRIMARY KEY,
	companyName VARCHAR(100) NOT NULL,
	streetAddress VARCHAR(500) NOT NULL,
	city VARCHAR(100) NOT NULL,
	state VARCHAR(100) NOT NULL,
	zipCode INT NOT NULL,
	country VARCHAR(100) NOT NULL
);

CREATE TABLE inspectionLogs (
	id SERIAL PRIMARY KEY,
	userInfo_id INT NOT NULL,
	
	active boolean DEFAULT true
);
