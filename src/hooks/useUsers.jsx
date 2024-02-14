import { useQuery } from "@tanstack/react-query";
import useAxiosPubic from "./useAxiosPubic";

const useUsers = () => {
    const axiosPublic = useAxiosPubic();
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      const data = await res.data;
      return data;
    },
  });
  return [users, isLoading, isError, error];
};

export default useUsers;