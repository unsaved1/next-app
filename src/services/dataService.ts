import axios from "axios"

const dataService = () => {
    const getData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/programming/ten`);
        return res.data;
    }

    return {getData};
}

export default dataService;
