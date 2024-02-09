import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://pdfmagic-bice.vercel.app/api"
})
// https://pdfmagic-bice.vercel.app/api

const useAxiosPubic = () => {
    return axiosPublic;
};

export default useAxiosPubic;