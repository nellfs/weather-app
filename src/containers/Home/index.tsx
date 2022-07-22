import "./index.css";
import "./clouds.css";

const Home = () => {
  return (
    <div className="background">
      <div className="cloud one" />
      <div className="cloud two" />
      <div className="cloud three" />

      <div className="home">Weather Locator</div>
      <form className="form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
