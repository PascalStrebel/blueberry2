import { onMounted, ref } from 'vue';
import axios from 'axios';

export function useChildren() {
  const children = ref<any>([]);
  onMounted(() => {
    getChildren();
  });
  const getChildren = async function () {
    try {
      children.value = await getChildren();
    } catch (error) {
      console.log(error);
    }
    const response = await axios.get('http://localhost:8080/api/children');
    children.value = response.data;
  };
  return { children, getChildren };
}
