import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { JobsTicker } from "./components/Ticker";
import styled from "styled-components";

function App() {
  // let [setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleLoaderComplete();
  //   }, 6000);
  // }, []);

  // const handleLoaderComplete = () => {
  //   setLoading(false);
  // };

  return (
 
    <>
      <Navbar />
      <CONTAINER className="App">
        <Home />
        <JobsTicker />
        <About />
        <Projects />
        <Contact />
      </CONTAINER>
    </>
  );
}

const CONTAINER = styled.div`
  width: min(80rem, 100%);
  margin-inline: auto;
  padding-inline: 1.25rem;
`;

export default App;
