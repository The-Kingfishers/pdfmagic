// import { useQuery } from '@tanstack/react-query';
// import useAxiosPubic from './useAxiosPubic';
// import { useParams } from 'next/navigation';

// const useService = () => {
//     const id = useParams()
//     const axiosPublic = useAxiosPubic();
//     const { data: service = []} = useQuery({
//         queryKey: ['service'],
//         queryFn: async () => {
//             const res = await axiosPublic.get(`/services/${id}`)
//             const data = await res.data;
//             return data;
//         }
//     })
//     return [service]
// };

// export default useService;