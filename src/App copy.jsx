import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStles";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">THE WILD OOOOOOOO</Heading>
            <div>
              <Heading as="h2">Check in and Out</Heading>
              <Button onClick={() => alert("This man")}>Check in</Button>
              <Button
                variations="secondary"
                size="small"
                onClick={() => alert("This man")}>
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <div>
              <Input type="text" placeholder="the aaa"></Input>
              <Input type="text" placeholder="the aaa"></Input>
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
