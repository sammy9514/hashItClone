import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
// import ColorChanger from "./Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {/* <ColorChanger /> */}
    </div>
  );
};
