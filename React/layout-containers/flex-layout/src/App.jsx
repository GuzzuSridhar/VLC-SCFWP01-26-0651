import Cards from "./components/Cards";
import FlexBox from "./components/containers/FlexBox";

function App() {
  return (
    <>
      {/* Cards display  */}
      <FlexBox
        direction="row"
        justify="center"
        align="center"
        wrap="wrap"
        // border="1px solid red "
        gap="10px"
        padding="50px"
        background="white"
        // borderRadius="30px"
      >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </FlexBox>
    </>
  );
}

export default App;
