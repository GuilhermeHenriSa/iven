import { PiDevices } from "react-icons/pi";

function SideBar() {
  return (
    <div className="w-20 h-screen pt-2 bg-gray-900 border-solid border-r-2 border-gray-600  ">
      <ul className="text-center flex-col items-center gap-5 ">
        <li className="hover:bg-gray-600">
          <button>
            <PiDevices fill="white" size={34} />
          </button>
        </li>
        <li className="hover:bg-gray-600">
          <button>
            <PiDevices fill="white" size={34} />
          </button>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
