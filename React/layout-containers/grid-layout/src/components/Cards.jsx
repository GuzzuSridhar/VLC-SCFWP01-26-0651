import Grid from "./containers/Grid";

const Box = ({ text }) => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#1c62f0",
        color: "white",
        borderRadius: "10px",
        textAlign: "center",
        minWidth: "100px",
      }}
    >
      {text}
    </div>
  );
};

function Cards() {
  return (
    <>
      <Grid columns="repeat(4,1fr)" gap="40px" margin="20px 0">
        <Box text="Card 1" />
        <Box text="Card 2" />
        <Box text="Card 3" />
        <Box text="Card 4" />
      </Grid>

      <Grid
        columns=".5fr 4fr"
        gap="50px"
        // rows="100px 100px 100px 100px"
        justifyItems="center"
        alignItems="center"
      >
        <Box text="Card 1" />
        <Box text="Card 2" />
        <Box text="Card 3" />
        <Box text="Card 4" />
        <Box text="Card 5" />
        <Box text="Card 6" />
      </Grid>
    </>
  );
}

export default Cards;
