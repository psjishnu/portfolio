import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import "../src/styles/main_style.css";
import Progress from "./components/Progress";

const App = () => {
  const [scrollPostion, setscrollPostion] = useState(0);

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;
    const Position = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setscrollPostion(Position);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  useEffect(() => {
    listenToScrollEvent();
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="App">
      <Progress scroll={scrollPostion + "%"} />
      <HomePage />
    </div>
  );
};

export default App;
