import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-weight: 800;
  font-size: 30px;
`;
const Button = styled.button`
  font-weight: 800;
  font-size: 1rem;
  border: none;
  padding: 0.8rem 1.2rem;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  border-radius: 1.2rem;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>Hello World!</H1>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
