import React from "react";
import Header from "./components/Header/Header";
import Contact from "./components/Pages/Contact";
import Page from "./components/Pages/Page";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Contact/>
      <Page title="Soap" p="We have the best kinds of soap you can get in the market in these days our soap is made from real diamonds" image="https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png"/>
      <Page title="Another Title" p="This is another title" image="https://img.freepik.com/free-photo/abstract-futuristic-background-with-3d-design_1361-3532.jpg?w=2000"/>
      <Page title="Yet Another Title" p="The titles wont end" image="https://covid19.ag.org/-/media/COVID19/Home-Header-Slider/header_bg.png"/>
    </React.Fragment>
  );
}

export default App;   
