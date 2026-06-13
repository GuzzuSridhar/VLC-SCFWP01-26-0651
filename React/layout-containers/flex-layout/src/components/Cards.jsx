import FlexBox from "./containers/FlexBox";

const Box = ({ text }) => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#0707f8",
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
        direction="row"
        justify="center"
        align="center"
        wrap="nowrap"
        gap="50px"
        padding="10px"
        background="#fff"
        borderRadius="30px"
        // border="1px solid blue"
        width="75%"
        height="auto"
      >
        <Box text="Card 1" />
        <Box text="Card 2" />
        <Box text="Card 3" />
      </FlexBox>
    </>
  );
}

export default Cards;
