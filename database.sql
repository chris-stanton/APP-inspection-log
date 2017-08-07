
-- create posgresql database called inspection-log

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL unique,
	password VARCHAR(100) NOT NULL,
	firstName VARCHAR(100) NOT NULL,
	lastName VARCHAR(100) NOT NULL,
	companies_id INT NOT NULL,
	active boolean DEFAULT true
);

INSERT INTO users (username, password, firstName, lastName, companies_id)
VALUES ('usernameOne', 123, 'chris', 'stanton', 1),
        ('usernameTwo', 123, 'gavin', 'stanton', 2),
        ('usernameThree', 123, 'steph', 'stanton', 3);

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

INSERT INTO companies (companyName, streetAddress, city, state, zipCode, country)
VALUES ('det-tronics', '1234 Industrial blvd.', 'anchorage', 'ak', 12345, 'usa'),
        ('kidde-fenwall', '1234 ammericain blvd.' , 'anchorage', 'ak', 12345, 'usa'),
        ('honeywell', '1234 minnesota rd.', 'minneapolis', 'mn', '55124', 'usa');

CREATE TABLE inspection_sites (
	id SERIAL PRIMARY KEY,
	users_id VARCHAR(1000),
	companies_id INT NOT NULL,
	contactName VARCHAR(100) NOT NULL,
	companyName VARCHAR(100) NOT NULL,
	licenseNumber VARCHAR(500),
	streetAddress VARCHAR(500) NOT NULL,
	city VARCHAR(100) NOT NULL,
	state VARCHAR(100) NOT NULL,
	zipCode INT NOT NULL,
	country VARCHAR(100) NOT NULL,
	phone INT NOT NULL,
	email VARCHAR(100),
	fax VARCHAR(100),
	schedualedDate VARCHAR(100),
	inspectedDate VARCHAR(100),
	active boolean DEFAULT true
);

INSERT INTO inspection_sites (users_id, companies_id, contactName, companyName, licenseNumber, streetAddress, city, state, zipCode, country, phone, email, fax, schedualedDate, inspectedDate, active)
VALUES (1, 1, 'joe meyer', 'electronics for less', 56578556, '6748 follage rd.', 'minneapolis', 'mn', 55827, 'usa', 9527651234, 'newemail@yahoo.com', 9863451234, '1970-01-01T07:05:00.000Z', 'null', 'true'),
        (2, 2, 'doug less', 'EFS', 6238905623, '6531 dodd rd.', 'anchorage', 'ak', 87347, 'usa', 7340984576, 'email@yahoo.com', 9863454339, '1970-01-01T07:06:00.000Z', 'null', 'true'),
        (3, 3, 'abby hopkins', 'oil mining', 3761280945, '33643 woodland rd.', 'houston', 'tx', 94527, 'usa', 8752654789, 'new@yahoo.com', 9868431238, '1970-01-01T07:09:00.000Z', '1970-01-01T07:010:00.000Z', 'false');

CREATE TABLE page_two (
	id SERIAL PRIMARY KEY,
	inspection_site_id VARCHAR(1000) NOT NULL,
	company_id VARCHAR(1000) NOT NULL,
	quantityBells INT,
	circuitStyleBells VARCHAR(100),
	quantityHorns INT,
	circuitStyleHorns VARCHAR(100)
);

INSERT INTO page_two (inspection_site_id, company_id, quantityBells, circuitStyleBells, quantityHorns, circuitStyleHorns)
VALUES (1, 1, 5, 'closed', 1, 'closed'),
        (2, 2, 10, 'open', 5, 'closed'),
        (3, 3, 20, 'open', 10, 'open');

CREATE TABLE page_three (
	id SERIAL PRIMARY KEY,
	inspection_site_id VARCHAR(1000) NOT NULL,
	company_id VARCHAR(1000) NOT NULL,
	quantityBuildingTemp INT,
	circuitStyleBuildingTemp VARCHAR(100),
	quantityWaterTemp INT,
	circuitStyleWaterTemp VARCHAR(100)
);

INSERT INTO page_three (inspection_site_id, company_id, quantityBuildingTemp, circuitStyleBuildingTemp, quantityWaterTemp, circuitStyleWaterTemp)
VALUES (1, 1, 50, 'closed', 10, 'closed'),
        (2, 2, 20, 'open', 23, 'closed'),
        (3, 3, 10, 'open', 10, 'open');

CREATE TABLE page_five (
	id SERIAL PRIMARY KEY,
	inspection_site_id VARCHAR(1000) NOT NULL,
	company_id VARCHAR(1000) NOT NULL,
	monitoringEntityInspected VARCHAR(100),
	monitoringEntityInspector VARCHAR(100),
	monitoringEntityTime VARCHAR(100),
	buildingOccupantsInspected VARCHAR(100),
	buildingOccupantsInspector VARCHAR(100),
	buildingOccupantsTime VARCHAR(100)
);

INSERT INTO page_five (inspection_site_id, company_id, monitoringEntityInspected, monitoringEntityInspector, monitoringEntityTime, buildingOccupantsInspected, buildingOccupantsInspector, buildingOccupantsTime)
VALUES (1, 1, 'true', 'chris stanton', '1970-01-01T07:05:00.000Z', 'true', 'chris stanton', '1970-01-01T07:05:00.000Z'),
        (2, 2, 'true', 'steph stanton', '1970-01-01T07:03:00.000Z', 'true', 'steph stanton', '1970-01-01T07:03:00.000Z'),
        (3, 3, 'true', 'gavin stanton', '1970-01-01T07:10:00.000Z', 'true', 'gavin stanton', '1970-01-01T07:10:00.000Z');


CREATE TABLE page_six (
	id SERIAL PRIMARY KEY,
	inspection_site_id VARCHAR(1000) NOT NULL,
	company_id VARCHAR(1000) NOT NULL,
	controlUnitInspected VARCHAR(100),
	controlUnitComments VARCHAR(5000),
	interfaceEqInspected VARCHAR(100),
	interfaceEqComments VARCHAR(5000)
);

INSERT INTO page_six (inspection_site_id, company_id, quantityBuildingTemp, circuitStyleBuildingTemp, quantityWaterTemp, circuitStyleWaterTemp)
VALUES (1, 1, 10, 'closed', 17, 'closed'),
        (2, 2, 5, 'open', 3, 'closed'),
        (3, 3, 8, 'open', 1, 'open');

CREATE TABLE page_seven (
	id SERIAL PRIMARY KEY,
	inspection_site_id VARCHAR(1000) NOT NULL,
	company_id VARCHAR(1000) NOT NULL,
	phoneSetVisual VARCHAR(100),
	phoneSetFunctional VARCHAR(100),
	phoneSetComments VARCHAR(5000),
	phoneJacksVisual VARCHAR(100),
	phoneJacksFunctional VARCHAR(100),
	phoneJacksComments VARCHAR(5000)
);

INSERT INTO page_seven (inspection_site_id, company_id, quantityBuildingTemp, circuitStyleBuildingTemp, quantityWaterTemp, circuitStyleWaterTemp)
VALUES (1, 1, 20, 'closed', 1, 'open'),
        (2, 2, 5, 'closed', 3, 'open'),
        (3, 3, 12, 'open', 1, 'open');

CREATE TABLE file_upload (
	id SERIAL PRIMARY KEY,
	inspection_site_id VARCHAR(100) NOT NULL,
	company_id VARCHAR(1000) NOT NULL
);

INSERT INTO file_upload (inspection_site_id, company_id)
VALUES (1, 1),
        (2, 2),
        (3, 3);
