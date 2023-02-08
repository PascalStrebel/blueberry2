delete from child_observation;
delete from child;
delete from observation;

INSERT INTO child (id, birthdate, entry_date, first_name, gender, name, nationality) VALUES (1, '2023-02-01', '2023-02-01', 'Ich', 1, 'Nicht', 'CH');

INSERT INTO observation (id, category, expected_at_months, text) VALUES (1, 'Movement', 36, 'Can ride a tricycle');
INSERT INTO observation (id, category, expected_at_months, text) VALUES (2, 'Movement', 36, 'Can jump off with both legs');
INSERT INTO observation (id, category, expected_at_months, text) VALUES (3, 'Coordination', 36, 'Can thread large beads onto a string');

INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (1, 1, 'Completed', '2023-02-07 13:08:36.000000', 2);

commit;