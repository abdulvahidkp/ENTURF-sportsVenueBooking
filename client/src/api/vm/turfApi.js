import axios from "../axios"

const GET_TURFS = '/vm/turfs'

export const getTurfs = async () => {
    const token = localStorage.getItem('vm');
    try {
        const { data } = await axios.get(GET_TURFS, {
            headers: {
                Authorization: token
            }
        });
        return data;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}