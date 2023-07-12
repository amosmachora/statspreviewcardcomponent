import "./App.css";
import image from "./images/image-header-desktop.jpg";

function App() {
  return (
    <div className="App flex__container">
      <div className="App__left">
        <p className="Main__text">
          Get <span className="insights">insights</span> that help your business
          grow.
        </p>
        <p className="sub__text">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="App__left-bottom flex__container">
          <div className="first-section">
            <p className="number">10K+</p>
            <p className="description">Companies</p>
          </div>
          <div className="second-section">
            <p className="number">314</p>
            <p className="description">Templates</p>
          </div>
          <div className="first-section">
            <p className="number">12M+</p>
            <p className="description">Queries</p>
          </div>
        </div>
      </div>
      <div className="App__right">
        <img src={image} alt="People on computers" />
      </div>
    </div>
  );
}

export default App;
