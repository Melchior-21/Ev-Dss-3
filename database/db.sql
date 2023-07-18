CREATE DATABASE crudnodejsmysql;

--using the DATABASE

use crudnodejsmysql;

--creating a TABLE

CREATE TABLE pelicula {
    Id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(50) NOT NULL,
    Gender VARCHAR(50) NOT NULL,
    YEAR VARCHAR(11) NOT NULL,
    Director VARCHAR(50) NOT NULL,
    Editorial VARCHAR(50) NOT NULL,
    Country VARCHAR(50) NOT NULL,
    Format VARCHAR(50) NOT NULL,
};

--tp show all TABLES
SHOW TABLES;

--to describe the TABLE

describe pelicula;
