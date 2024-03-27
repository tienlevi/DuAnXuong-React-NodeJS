import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../config/product";

function useProductQueryId(id: any) {
  const { data, isLoading } = useQuery({
    queryKey: ["ProductId"],
    queryFn: async () => {
      try {
        const response = await getProductById(id);
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { data, isLoading };
}

export default useProductQueryId;
