import { useParams } from "react-router-dom";
import Headers from "../components/Headers";
import SideBar from "../components/SideBar";
import { GoPencil } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosConfig";

function ComputerDetails() {
  const { computerId } = useParams();
  const fetchComputerDetails = async () => {
    const response = await api.get(`/${computerId}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["computer-detail"], // Nome único da consulta
    queryFn: fetchComputerDetails, // Função que executa a requisição
  });

  const updatedDate = new Date(data?.updated_at);
  const now = new Date();
  const differenceInMs = now - updatedDate;
  return (
    <div>
      <Headers></Headers>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-full h-screen bg-slate-900">
          <div className="w-full bg-slate-900 h-3/6 grid grid-flow-col grid-rows-7 gap-x-4 p-8">
            <div className="flex ">
              <p className="flex font-bold">
                Computer Name:{" "}
                <p className="ml-2 font-normal">{data?.hostname || "N/A"}</p>
              </p>
            </div>
            <p className="flex">
              System: <p className="ml-2">{data?.os_type || "N/A"}</p>
            </p>
            <p className="flex">
              CPU Count: <p className="ml-2">{data?.process_count || "N/A"}</p>
            </p>
            <p className="flex">
              Domain: <p className="ml-2">{data?.domain || "N/A"}</p>
            </p>
            <p className="flex">
              Last User: <p className="ml-2">{data?.last_user || "N/A"}</p>
            </p>
            <p className="flex">
              Ip Address: <p className="ml-2">{data?.ip_address || "N/A"}</p>
            </p>
            <p className="flex">
              Mac Address: <p className="ml-2">{data?.mac_address}</p>
            </p>
            <p className="flex">
              Tags: <p className="ml-2">%Tags%</p>
              <button className="h-6 ml-2">
                <GoPencil size={20} />
              </button>
            </p>
            <p className="flex">
              Status:{" "}
              <p className="ml-2">
                {differenceInMs < 10 * 60 * 1000 ? "Online " : "Offline"}
              </p>
            </p>
            <p className="flex">
              Last Connected: <p className="ml-2">{data?.updated_at}</p>
            </p>
            <p className="flex">
              Asset Cost: <p className="ml-2">%Cost%</p>
              <button className="h-6 ml-2">
                <GoPencil size={20} />
              </button>
            </p>
            <p className="flex">
              Device Type: <p className="ml-2">%Notebook%</p>
            </p>
            <p className="flex">
              Location: <p className="ml-2">%Location%</p>
              <button className="h-6 ml-2">
                <GoPencil size={20} />
              </button>
            </p>
            <p className="flex">
              Setor Responsavel: <p className="ml-2">%Setor Responsavel%</p>
              <button className="h-6 ml-2">
                <GoPencil size={20} />
              </button>
            </p>
            <p className="flex">
              Storage: <p className="ml-2">%Storage%</p>
            </p>
            <p className="flex">
              First Seen: <p className="ml-2">{data?.created_at}</p>
            </p>
            <p className="flex">
              AV: <p className="ml-2">%AV%</p>
            </p>
            <p className="flex">
              Disk Encryption: <p className="ml-2">%Disk Encryption%</p>
            </p>
            <textarea
              placeholder="Some OBS"
              className="bg-gray-600 text-gray-200 p-2 max-h-36 min-h-10"
            ></textarea>
          </div>
          <div className="flex gap-1">
            <button className="text-gray-100 bg-gray-700 hover:bg-gray-500 p-2 rounded-sm">
              Installed Softwares
            </button>
            <button className="text-gray-100 bg-gray-700 hover:bg-gray-500 p-2 rounded-sm">
              Proccess
            </button>
            <button className="text-gray-100 bg-gray-700 hover:bg-gray-500 p-2 rounded-sm">
              Tags
            </button>
            <button className="text-gray-100 bg-gray-700 hover:bg-gray-500 p-2 rounded-sm">
              Windows Kbs
            </button>
            <button className="text-gray-100 bg-gray-700 hover:bg-gray-500 p-2 rounded-sm">
              Local Accounts
            </button>
          </div>
          <div className="w-full bg-slate-900 h-3/6 border-t-2 border-t-gray-600"></div>
        </div>
      </div>
    </div>
  );
}
export default ComputerDetails;
