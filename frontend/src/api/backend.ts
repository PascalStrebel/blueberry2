import {Child, ChildObservation, ChildObservationKey, Observation} from '@/model/model';
import axios from 'axios';
import {API_ROOT} from '@/config/development';

export const CHILDREN_API = API_ROOT + '/children';
export const OBSERVATION_API = API_ROOT + '/observations';
export const CHILD_OBSERVATION_API = '/childObservations';

export async function getChildren(): Promise<Child[]> {
    const response = await axios.get(CHILDREN_API);
    return response.data._embedded.children;
}

export async function getChildById(id: number): Promise<Child> {
    const response = await axios.get(CHILDREN_API + '/' + id);
    return response.data;
}

export async function createChild(child: Child): Promise<Child> {
    const response = await axios.post(CHILDREN_API, child);
    return response.data;
}

export async function getObservations(): Promise<Observation[]> {
    const response = await axios.get(OBSERVATION_API);
    return response.data._embedded.observations;
}

export async function deleteChild(id: number): Promise<Child[]> {
    const response = await axios.delete(CHILDREN_API + '/' + id);
    return response.data;
}

export async function getObservationById(id: number): Promise<Observation> {
    const response = await axios.get(OBSERVATION_API + '/' + id);
    return response.data;
}

export async function createObservation(
    observation: Observation
): Promise<Observation> {
    const response = await axios.post(OBSERVATION_API, observation);
    return response.data;
}

export async function getChildObservationsById(childId: number): Promise<ChildObservation[]> {
    let response = await axios.get(CHILDREN_API + '/' + childId + CHILD_OBSERVATION_API);
    let childObservations = response.data._embedded.childObservations;
    childObservations = childObservations.map(async (co: ChildObservation) => {
        co.child = await getChildById(co.id.childId);
        co.observation = await getObservationById(co.id.observationId);
    });
    return childObservations;
}

export async function createChildObservation(child: Child, observation: Observation): Promise<void> {
    axios.post(CHILD_OBSERVATION_API, {childId: child.id, observationId: observation.id} as ChildObservationKey);
}
