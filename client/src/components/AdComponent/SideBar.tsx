import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import "./style.scss";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          {/* <img src={imageSrc.logo} alt="" /> */}
        </div>
        <div className="sidebar-profile">
          <img
            src="https://flixtv.volkovdesign.com/admin/img/user.svg"
            alt=""
          />
          <p>Admin</p>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-item">
            <div className="sidebar-item-icon">
              <HomeIcon />
            </div>
            <div className="sidebar-item-text">
              <p>Trang chủ</p>
            </div>
          </div>
          <Link to="/" className="sidebar-item">
            <div className="sidebar-item-icon">
              <SettingsIcon />
            </div>
            <div className="sidebar-item-text">
              <p>Sản phẩm</p>
            </div>
          </Link>
          <div className="sidebar-item">
            <div className="sidebar-item-icon">
              <LogoutIcon />
            </div>
            <div className="sidebar-item-text">
              <p>Đăng xuất</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
