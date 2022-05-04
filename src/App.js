import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    else if (scrolled <= 300) setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="App">
      <Header />
      <div className="full">
        <Menu />
        <div className="col-md-9 main">
          <Registration />
          <Footer />
        </div>
        <div className="clearfix"></div>
      </div>
      <span
        id="toTop"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <span id="toTopHover" style={{ opacity: 1 }}></span>
      </span>
    </div>
  );
}

export default App;
