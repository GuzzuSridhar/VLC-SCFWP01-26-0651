import chris from "../assets/christopher-campbell.jpg";
import jurica from "../assets/jurica-koletic.jpg";

const imgStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "50%",
  margin: "10px",
};

function AssestsImage() {
  return (
    <>
      <img src={chris} alt="Christopher Campbell" style={imgStyle} />
      <img src={jurica} alt="Jurica Koletic" style={imgStyle} />
    </>
  );
}

export default AssestsImage;
