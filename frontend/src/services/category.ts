import instance from "@/configs/axios";

export const getCategories = async () => {
    try {
        const response = await instance.get("/categories");

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
