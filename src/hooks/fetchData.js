import axios from "axios";

const fetchData = async ({id}) => {
    const response = await axios.get(`/api/article/${id}`)
    return response
}
export default fetchData