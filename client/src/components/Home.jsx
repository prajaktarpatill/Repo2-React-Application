import { Link } from "react-router";

const Home = () => {
    return (
    <div>
        <h1>Movies Review App - Home</h1>
        <p>
        Hello
        </p>
        <Link className="btn btn-primary" to="/login">Login Here</Link>
    </div>
    )
};

export default Home;
