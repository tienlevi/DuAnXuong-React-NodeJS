import axios from "axios";

const uploadFileCloudinary = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "demo-upload"); // Thay bằng upload preset của bạn
        formData.append("folder", "reactjs");
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dbjkk9wg0/upload", // Thay bằng cloudinary name của bạn
            formData,
        );
        return response.data.url;
    } catch (error) {
        // handle error here
        console.error(error);
    }
};

export { uploadFileCloudinary };
