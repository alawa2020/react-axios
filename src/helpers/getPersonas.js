import axios from 'axios'

const getPersonas = async(api) => {
    
    const url = api;
    const res = await axios.get(url);
    const data = await res.data;

    return data;
}

export default getPersonas;