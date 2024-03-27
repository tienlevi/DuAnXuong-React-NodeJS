import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { addProduct, editProduct, deleteProduct } from "../config/product";
import { IProduct } from "../interface";

interface Input {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  discount: number;
  quantity: number;
}

function useProductMutation({ action }: any) {
  const form = useForm<Input>({
    defaultValues: {
      name: "",
      category: "",
      price: 0,
      image: "",
      description: "",
      discount: 0,
      quantity: 0,
    },
  });

  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "Add":
          await addProduct(product);
          break;
        case "Delete":
          await deleteProduct(product._id!);
          break;
        case "Edit":
          await editProduct(product._id, product);
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Product"],
      });
      // queryClient.invalidateQueries({
      //   queryKey: ["ProductId"],
      // });
    },
  });

  const onSubmit = (product: any) => {
    mutate(product);
    console.log(product);
  };

  return { mutate, form, onSubmit, ...rest };
}

export default useProductMutation;
