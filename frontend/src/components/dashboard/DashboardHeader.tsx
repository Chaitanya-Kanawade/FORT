import FortButton from "../ui/FortButton";
import { Plus } from "lucide-react";

interface Props {
  onNewProject: () => void;
}

export default function DashboardHeader({
  onNewProject,
}: Props) {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-3">
          Welcome to FORT Framework
        </p>
      </div>

      <FortButton onClick={onNewProject}>
        <Plus size={18} />
        New Project
      </FortButton>

    </div>
  );
}