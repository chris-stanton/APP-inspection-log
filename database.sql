

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL unique,
	password VARCHAR(100) NOT NULL,
	firstName VARCHAR(100) NOT NULL,
	lastName VARCHAR(100) NOT NULL,
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
	country VARCHAR(100) NOT NULL,
	active boolean DEFAULT true
);

CREATE TABLE inspection_sites (
	id SERIAL PRIMARY KEY,
	contactName VARCHAR(100) NOT NULL,
	companyName VARCHAR(100) NOT NULL,
	streetAddress VARCHAR(500) NOT NULL,
	city VARCHAR(100) NOT NULL,
	state VARCHAR(100) NOT NULL,
	zipCode INT NOT NULL,
	country VARCHAR(100) NOT NULL,
	phone INT NOT NULL,
	email VARCHAR(100),
	fax VARCHAR(100),
	active boolean DEFAULT true
);





CREATE TABLE inspection_signatures (
	id SERIAL PRIMARY KEY,
	inspection_sites_id VARCHAR(100) NOT NULL,
	users_id VARCHAR(100) NOT NULL,
	date VARCHAR(100) NOT NULL
);
