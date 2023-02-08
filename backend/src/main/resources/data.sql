delete from child_observation;
delete from child;
delete from observation;

INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2023-02-01', '2023-02-01', 'Ich', 1, 'Nicht', 'CH');
INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2023-02-01', '2023-02-01', 'Du', 1, 'Doch', 'DE');
INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2023-02-01', '2023-02-01', 'Mir', 2, 'Nöd', 'US');
INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2023-02-01', '2023-02-01', 'Ihr', 2, 'Nöd', 'CA');

INSERT INTO observation (category, expected_at_months, text) VALUES ('Movement', 36, 'Can ride a tricycle');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Movement', 36, 'Can jump off with both legs');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Coordination', 36, 'Can thread large beads onto a string');

INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (1, 1, 'Completed', '2023-02-07 13:08:36.000000', 2);

commit;