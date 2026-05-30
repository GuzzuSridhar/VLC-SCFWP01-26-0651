import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1> Welcome to React Router</h1>
      {/* navigating to the internal page */}
      <Link to="/aboutus">About Us</Link> | {/* navigating to external pages */}
      <a href="https://www.google.com">Google</a>
    </>
  );
}

export default HomePage;
