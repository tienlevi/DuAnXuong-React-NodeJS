import { useLocalStorage } from "@/common/hooks/useStorage";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage("user", {});
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className="container">
            <h1 className="text-[32px] font-bold">Trang cá nhân</h1>
            <div className="flex my-8">
                <div className="">
                    <p className="text-[17px] my-2">Tên tài khoản</p>
                    <p className="text-[17px] my-2">Tên</p>
                    <p className="text-[17px] my-2">Ngày tạo</p>
                </div>
                <div className="ml-12">
                    <p className="text-[17px] my-2">{user?.user?.email}</p>
                    <p className="text-[17px] my-2">{user?.user?.name}</p>
                    <p className="text-[17px] my-2">{user?.user?.updatedAt}</p>
                </div>
            </div>
            <Button onClick={handleLogout}>Đăng xuất</Button>
        </div>
    );
};

export default Profile;
