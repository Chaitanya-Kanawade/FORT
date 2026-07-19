import {
  LayoutDashboard,
  FolderOpen,
  Shield,
  Bug,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
  },
  {
    icon: FolderOpen,
    name: "Projects",
  },
  {
    icon: Shield,
    name: "Assessments",
  },
  {
    icon: Bug,
    name: "Findings",
  },
  {
    icon: FileText,
    name: "Reports",
  },
  {
    icon: Settings,
    name: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 border-r border-cyan-500/10 flex flex-col">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-cyan-400">
          FORT
        </h1>

        <p className="text-zinc-500 mt-2">
          Offensive Security
        </p>

      </div>

      <nav className="px-5 flex-1">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-4 rounded-xl p-4 mb-3 text-zinc-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
            >
              <Icon size={22} />

              {item.name}
            </button>
          );
        })}

      </nav>

    </aside>
  );
}