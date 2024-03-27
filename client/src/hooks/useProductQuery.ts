import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../config/product";

function useProductQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ["Product"],
    queryFn: async () => {
      try {
        const response = await getProducts();
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { data, isLoading };
}

export default useProductQuery;
