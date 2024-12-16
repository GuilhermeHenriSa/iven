import "./App.css";
import Headers from "./components/Headers";
import SideBar from "./components/SideBar";
import ComputersPage from "./pages/ComputersPage";

function App() {
  return (
    <>
      <Headers></Headers>
      <div className="flex">
        <SideBar></SideBar>
        <ComputersPage></ComputersPage>
      </div>
    </>
  );
}

export default App;
