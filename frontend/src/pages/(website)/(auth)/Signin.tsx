import { useLocalStorage } from "@/common/hooks/useStorage";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const signinSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
    password: Joi.string().min(6).required(),
});

const Signin = () => {
    const { toast } = useToast();
    const [, setUser] = useLocalStorage("user", {});
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { mutate } = useMutation({
        mutationFn: async (formData: { email: string; password: string }) => {
            const { data } = await axios.post(
                "http://localhost:8080/api/v1/auth/signin",
                formData,
            );
            return data;
        },
        onSuccess: (data) => {
            setUser(data),
                toast({
                    title: "Đăng nhập thành công",
                    variant: "success",
                });
        },
        onError: (error) => console.log(error),
    });

    const onSubmit = (formData: { email: string; password: string }) => {
        mutate(formData);
    };
    return (
        <div className="container">
            <h1 className="text-center text-[32px] font-bold">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    {...register("email", { required: true, minLength: 3 })}
                    placeholder="Email"
                    className="my-5"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <Input
                    type="password"
                    {...register("password", { required: true, minLength: 6 })}
                    placeholder="Password"
                    className="my-5"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <Button className="flex justify-center mx-auto">
                    Đăng nhập
                </Button>
            </form>
            <div className="flex justify-center my-4">
                <Link
                    to={`/signup`}
                    className="px-7 py-3 bg-black text-white text-[18px] rounded-sm"
                >
                    Đăng ký
                </Link>
            </div>
        </div>
    );
};

export default Signin;
