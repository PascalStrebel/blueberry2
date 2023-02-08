delete from child_observation;
delete from child;
delete from observation;

INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2021-02-01', '2023-02-01', 'Pascal', 1, 'Strebel', 'AUT');
INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2020-02-01', '2023-02-01', 'Aron', 1, 'Halef', 'IT');
INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2021-08-01', '2023-02-01', 'Adrian', 2, 'Brunner', 'CH');
INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2019-10-01', '2023-02-01', 'Britney', 2, 'Spears', 'US');
INSERT INTO child (birthdate, entry_date, first_name, gender, name, nationality) VALUES ('2021-07-01', '2023-02-01', 'Shanaia', 2, 'Twain', 'CA');

INSERT INTO observation (category, expected_at_months, text) VALUES ('Movement', 36, 'Can ride a tricycle');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Movement', 36, 'Can jump off with both legs');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Posture and Movement', 24, 'Can shoot a ball');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Posture and Movement', 24, 'Can throw a ball');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Posture and Movement', 24, 'Can safelv run');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Posture and Movement', 24, 'Copes with stairs in readjustment step');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Fine and Visual Morot Skills', 24, 'Can turn book pages one by one');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Fine and Visual Morot Skills', 24, 'Can stack four to six blocks');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Fine and Visual Morot Skills', 24, 'Can eat alone');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Fine and Visual Morot Skills', 24, 'Can unwrap candies');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Language', 24, 'Can show body parts');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Language', 24, 'Follows directions or understands announcements');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Language', 24, 'Can speak one word sentences');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Language', 24, 'Uses the word "no" correctly');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Cognitive', 24, 'Arranges the same objects');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Cognitive', 24, 'Can match shapes');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Cognitive', 24, 'Put three cups according to size into each other');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Cognitive', 24, 'Use a staff to grab the contents of a to reach the tube');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Social Development', 24, 'Properly uses in-game items');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Social Development', 24, 'Plays in parallel with peers');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Social Development', 24, 'Shows increasing attachment');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Social Development', 24, 'Is curious');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Emotional Development', 24, 'Seeks the attention of reference persons');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Emotional Development', 24, 'Can express enthusiasm');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Emotional Development', 24, 'Defends his property');
INSERT INTO observation (category, expected_at_months, text) VALUES ('Emotional Development', 24, 'Is interested in the feelings of others');


INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (1, 2, 'Completed', '2023-02-07 13:08:36.000000', 2);
INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (2, 5, 'Completed', '2023-02-07 13:08:36.000000', 1);
INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (2, 10, 'Completed', '2023-02-07 13:08:36.000000', 1);
INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (4, 15, 'Completed', '2023-02-07 13:08:36.000000', 0);
INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (5, 20, 'Completed', '2023-02-07 13:08:36.000000', 2);
INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (3, 9, 'Completed', '2023-02-07 13:08:36.000000', 2);
INSERT INTO child_observation (child_id, observation_id, comment, created_at, points) VALUES (3, 10, 'Completed', '2023-02-07 13:08:36.000000', 2);

commit;