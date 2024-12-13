import "./App.css";
import Headers from "./components/Headers";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Headers></Headers>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-full h-screen bg-gray-900"></div>
      </div>
    </>
  );
}

export default App;
