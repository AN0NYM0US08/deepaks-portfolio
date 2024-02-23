import React from "react";
import "./App.css";
import MainHeader from "./Header/Mainheader";
import Creator from "./Creator/Creator";
import MenuContainer from "./logo/Card";
import ProjectCard from "./projects/ProjectCard";
import MessageBox from "./Message/MessageBox";
import Footer from "./Footer/Footer";
// import Bar from "./Header/Navbar/Hamburger";


function App() {
  return (
    <div className="app">
      <MainHeader />
      <Creator />
      <MenuContainer />
      <ProjectCard />
      <MessageBox />
      <Footer />
    </div>
  );
}

export default App;
