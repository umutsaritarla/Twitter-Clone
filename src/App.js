import React from "react";
import Container from "./layouts/Container";
import Sidebar from "./layouts/Sidebar";
import Content from "./layouts/Content";
import Widgets from "./layouts/Widgets";

function App() {
  return (
    <Container>
      <Sidebar/>
      <Content/>
      <Widgets/>
    </Container>
  );
}

export default App;
