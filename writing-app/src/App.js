import "./App.css";
import Sidebar from "./Sidebar/Sidebar.js";

const rootFont = {
  fontFamily: "monospace",
};

function App() {
  return (
    <div style={rootFont}>
      <Sidebar />
    </div>
  );
}

export default App;
