/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.1.1185 on 2023-02-07 16:32:15.

export interface Child extends Person {
    childObservations: ChildObservation[];
}

export interface ChildObservation {
    id: ChildObservationKey;
    child: Child;
    observation: Observation;
    createdAt: Date;
    points: number;
    comment: string;
}

export interface ChildObservationKey extends Serializable {
    childId: number;
    observationId: number;
}

export interface ChildRepository extends JpaRepository<Child, number> {
}

export interface Observation {
    id: number;
    expectedAtMonths: number;
    category: string;
    text: string;
    childObservations: ChildObservation[];
}

export interface ObservationRepository extends JpaRepository<Observation, number> {
}

export interface Person {
    id: number;
    name: string;
    firstName: string;
    birthdate: Date;
    nationality: string;
    entryDate: Date;
    gender: Gender;
}

export interface Project {
    id: number;
    title: string;
    owner: string;
    toDos: ToDo[];
}

export interface ProjectRepository extends JpaRepository<Project, number> {
}

export interface Role {
    roleName: string;
}

export interface RoleRepository extends JpaRepository<Role, string> {
}

export interface ToDo {
    id: number;
    title: string;
    archived: boolean;
    done: boolean;
}

export interface ToDoRepository extends JpaRepository<ToDo, number> {
}

export interface User {
    loginName: string;
    roles: Role[];
}

export interface UserRepository extends JpaRepository<User, string> {
}

export interface Serializable {
}

export interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {
}

export interface PagingAndSortingRepository<T, ID> extends CrudRepository<T, ID> {
}

export interface QueryByExampleExecutor<T> {
}

export interface CrudRepository<T, ID> extends Repository<T, ID> {
}

export interface Repository<T, ID> {
}

export type Gender = "M" | "W" | "D";
