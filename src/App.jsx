import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: var(--color-brand-600);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <H1>hii mohamed</H1>
      <Button>check in</Button>
      <Button>check out</Button>
      <Input placeholder="your name" />
    </>
  );
}

export default App;
