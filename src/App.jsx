import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import Button from "./ui/Button";
function App() {
  return (
    <>
      <GlobalStyles />
      <Row>
        <Row type="horiziontal">
          <div>
            <Heading as="h1">Hello World!</Heading>
            {/* <Heading as="h2">Hello World!</Heading>
        <Heading as="h3">Hello World!</Heading> */}
            <Button onClick={() => alert("Check In")}>Check In</Button>
            <Button onClick={() => alert("Check Out")}>Check Out</Button>
          </div>
        </Row>

        <Row type="vertical">
          <Heading>Form</Heading>
          <form action="/">
            <input type="number" placeholder="Number" />
            <input type="number" placeholder="Number" />
          </form>
        </Row>
      </Row>
    </>
  );
}

export default App;
