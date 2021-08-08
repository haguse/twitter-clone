import React from "react";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";
import Widgets from "./layout/Widgets";
import MiniSidebar from "./layout/MiniSidebar";
import MobileSidebar from "./layout/MobileSidebar";

const App = () => {
  return (
    <>
      <Container>
        <MiniSidebar />
        <Sidebar />
        <Content />
        <Widgets />
        <MobileSidebar />
      </Container>
    </>
  );
};

export default App;
