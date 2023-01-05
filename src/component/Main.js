import logo from "../image0.jpg";
import "../App.css";

export default function Main() {
  let name = "DEV Uka Yura";
  let style = {
    color: name.includes("Uka") ? "#2ecc71" : "white",
    fontSize: name.includes("Uka") ? "56px" : "16px",
  };
  return (
    <div className="App-header">
      <h1 style={style}>{name}</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
