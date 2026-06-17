import FlexBox from "./containers/FlexBox";

function Footer() {
  return (
    <FlexBox
      justify="center"
      align="center"
      padding="15px"
      background="#30394d"
      style={{ color: "white" }}
    >
      <p>@copy 20206 My Company</p>
    </FlexBox>
  );
}

export default Footer;
