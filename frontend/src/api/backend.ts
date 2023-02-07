import { Child } from '@/model/model';
import axios from 'axios';
import {API_ROOT} from "@/config/development";

export const CHILDREN_API = API_ROOT + '/children';

export async function getChildren(): Promise<Child[]> {
  let response = await axios.get(CHILDREN_API);
  return response.data._embedded.children;
}

export async function getChildById(id: number): Promise<Child> {
  let response = await axios.get(CHILDREN_API + id);
  return response.data;
}

export async function createChild(child: Child): Promise<Child> {
  const response = await axios.post(CHILDREN_API, child);
  return response.data;
}
