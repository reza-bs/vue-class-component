import axios from 'axios';
import { ref } from 'vue';

const getUserData = () => {
  const data = ref(null)
  const getData = async () =>{
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=> {
      console.log(res)
      data.value = res.data
      console.log(data.value)
    })
    .catch(err => console.log(err.message))
  }

  return { data, getData }
}

export default getUserData;