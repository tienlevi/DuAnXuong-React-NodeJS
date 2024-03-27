import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import "./style.scss";

function Overview() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header-profile">
        <h2>Dashboard</h2>
      </header>
      <SideBar />
      <main>
        <div className="overview-profile">
          <h1>Trang chủ</h1>
        </div>
        <footer className="footer-profile">
          © FlixTV.template, 2021. Create by Dmitry Volkov
        </footer>
      </main>
    </>
  );
}

export default Overview;
