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

const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

const SignUp = () => {
    const { toast } = useToast();
    const [, setUser] = useLocalStorage("user", {});
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: joiResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const { mutate } = useMutation({
        mutationFn: async (formData: {
            name: string;
            email: string;
            password: string;
        }) => {
            const { data } = await axios.post(
                "http://localhost:8080/api/v1/auth/signup",
                formData,
            );
            return data;
        },
        onSuccess: (data) => {
            setUser(data),
                toast({
                    title: "Đăng ký thành công",
                    variant: "success",
                });
        },
        onError: (error) => console.log(error),
    });

    const onSubmit = (formData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) => {
        mutate(formData);
    };
    return (
        <div className="container">
            <h1 className="text-center text-[32px] font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    {...register("name", { required: true, minLength: 3 })}
                    placeholder="Name"
                    className="my-5"
                />
                {errors.name && <p>{errors.name.message}</p>}
                <Input
                    type="text"
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Không phải kiểu email",
                        },
                    })}
                    placeholder="Email"
                    className="my-5"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <Input
                    type="password"
                    {...register("password", { required: true, minLength: 3 })}
                    placeholder="Password"
                    className="my-5"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <Input
                    type="password"
                    {...register("confirmPassword", {
                        required: true,
                        validate: (value) => {
                            console.log(value);

                            if (value !== watch("password")) {
                                return "không trùng mật khẩu";
                            }
                        },
                    })}
                    placeholder="Confirm Password"
                    className="my-5"
                />
                {errors.confirmPassword && (
                    <p className="text-red">{errors.confirmPassword.message}</p>
                )}

                <Button className="flex justify-center mx-auto">Đăng ký</Button>
            </form>
            <div className="flex justify-center my-4">
                <Link
                    to={`/signin`}
                    className="px-7 py-3 bg-black text-white text-[18px] rounded-sm"
                >
                    Đăng nhập
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
