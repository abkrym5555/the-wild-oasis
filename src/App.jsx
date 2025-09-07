import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <GlobalStyle />
      <Heading as="h1">hii mohamed</Heading>
      <Heading as="h2">hii mohamed</Heading>
      <Heading as="h3">hii mohamed</Heading>
      <Button>check in</Button>
      <Button>check out</Button>
      <Input placeholder="your name" />
    </>
  );
}

export default App;
