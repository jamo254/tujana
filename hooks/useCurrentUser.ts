import useSwr from "swr";

import fetcher from "@/lib/fetcher";


  //swr helps us to fetch data
  
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/current', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};
  
  

export default useCurrentUser;
