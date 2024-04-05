DROP DATABASE IF EXISTS expenses_db;
CREATE DATABASE expenses_db_db;

USE expenses_db;

CREATE TABLE expense_values (
  id INT NOT NULL,
  expense_item_name VARCHAR(30),
  expense_item_amount INT,
  PRIMARY KEY (id)
);

CREATE TABLE expense_descriptions(
  id INT,
  expense_description_id INT,
  expense_description VARCHAR(30),
  FOREIGN KEY (expense_description_id)
  ON DELETE SET NULL
);
