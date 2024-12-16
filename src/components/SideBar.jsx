import { PiDevices } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";

function SideBar() {
  return (
    <div className="w-20 h-screen pt-2 bg-gray-900 border-solid border-r-2 border-gray-600  ">
      <div className="text-center flex-col gap-4">
        <div className="hover:bg-gray-600">
          <button>
            <RiHome5Line fill="white" size={32} />
          </button>
        </div>
        <div className="hover:bg-gray-600">
          <button>
            <PiDevices fill="white" size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
