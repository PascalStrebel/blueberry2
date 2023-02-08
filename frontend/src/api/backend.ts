import { Child, Observation } from '@/model/model';
import axios from 'axios';
import { API_ROOT } from '@/config/development';

export const CHILDREN_API = API_ROOT + '/children';
export const OBSERVATION_API = API_ROOT + '/observations';

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

export async function getObservationById(id: number): Promise<Observation> {
  const response = await axios.get(OBSERVATION_API + id);
  return response.data;
}

export async function createObservation(
  observation: Observation
): Promise<Observation> {
  const response = await axios.post(OBSERVATION_API, observation);
  return response.data;
}
