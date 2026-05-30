import StatusMsg from "./StatusMsg";

function CheckSal(props) {
  let salStatus;
  let sal = props.sal;

  //   if (sal <= 5000) {
  //     salStatus = "Low";
  //   } else if (sal >= 5001 && sal <= 10000) {
  //     salStatus = "Medium";
  //   } else {
  //     salStatus = "High";
  //   }

  //   alternatively
  salStatus =
    sal <= 5000 ? "Low" : sal >= 5001 && sal <= 10000 ? "Medium" : "High";

  return <StatusMsg status={salStatus} />;
}

export default CheckSal;
