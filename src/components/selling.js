import "../selling.css";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";

function selling() {
  return (
    <div className="sellingpoints">
      <div class="sellingpoint">
        <img src={Icon1} alt="icon1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive Uis</p>
      </div>
      <div class="sellingpoint">
        <img src={Icon2} alt="icon2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div class="sellingpoint">
        <img src={Icon3} alt="icon3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the compenents</p>
      </div>
      <div class="sellingpoint">
        <img src={Icon4} alt="icon4" />
        <h3>JSX</h3>
        <p>Statically typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
}

export default selling;
