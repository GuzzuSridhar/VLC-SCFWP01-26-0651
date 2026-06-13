import FlexBox from "./containers/FlexBox";

const Box = ({ text }) => {
  return (
    <div
      style={{
        padding: "20px",
        background: "blue",
        color: "white",
        borderRadius: "30px",
        minWidth: "100px",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
};

function Cards() {
  return (
    <>
      <FlexBox
        direction="column"
        justify="center"
        align="center"
        wrap="nowrap"
        gap="10px"
        padding="10px"
        background="white"
        borderRadius="30px"
        border="1px solid blue"
        width="auto"
        height="10vh"
      >
        <Box text="Card 1" />
        <Box text="Card 2" />
        <Box text="Card 3" />
      </FlexBox>
    </>
  );
}

export default Cards;
