import { useParams } from "react-router-dom";
import Headers from "../components/Headers";
import SideBar from "../components/SideBar";

function ComputerDetails() {
  const { computerId } = useParams();
  console.log(computerId);
  return (
    <div>
      <Headers></Headers>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-full h-screen bg-slate-900">
          <div className="w-full bg-slate-900 h-3/6"></div>
          <div className="w-full bg-slate-900 h-3/6 border-t-2 border-t-gray-600"></div>
        </div>
      </div>
    </div>
  );
}
export default ComputerDetails;
