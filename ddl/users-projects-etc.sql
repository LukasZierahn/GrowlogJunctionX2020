CREATE TABLE users (
	id int NOT NULL,
    username varchar(255) NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    password_hash varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE projects (
	id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
	projectpack json,
	smart boolean,
    PRIMARY KEY (id)
);

CREATE TABLE userprojects (
	id int NOT NULL AUTO_INCREMENT,
	user_id int NOT NULL,
	project_id int NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE userprojectplants (
	id int NOT NULL AUTO_INCREMENT,
	userproject_id int NOT NULL,
	progress json,
    PRIMARY KEY (id),
	FOREIGN KEY (userproject_id) REFERENCES userprojects(id)
)