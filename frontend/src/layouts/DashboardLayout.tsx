import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../pages/Dashboard";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#09090B]">

      <Sidebar />

      <Dashboard />

    </div>
  );
}