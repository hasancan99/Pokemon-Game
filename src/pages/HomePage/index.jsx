import { Link } from "react-router-dom";

const linkStyle = {
  color: "#1746A2",
};
export default function Homepage() {
  return (
    <>
      <h1>Welcome to the the best Superhero Match game in the world!</h1>
      
        <em>
          <Link to="/game" style={linkStyle}>
            Play Now!
          </Link>
          </em>
    </>
  );
}
