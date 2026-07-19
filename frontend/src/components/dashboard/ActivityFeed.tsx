import {
  ShieldCheck,
  ScanSearch,
  FileText,
  Bug,
} from "lucide-react";

const activities = [
  {
    icon: ScanSearch,
    color: "text-cyan-400",
    title: "Recon Scan Started",
    desc: "OWASP Juice Shop",
    time: "2 min ago",
  },
  {
    icon: Bug,
    color: "text-red-400",
    title: "Critical Finding Detected",
    desc: "SQL Injection",
    time: "6 min ago",
  },
  {
    icon: ShieldCheck,
    color: "text-green-400",
    title: "Assessment Completed",
    desc: "Metasploitable VM",
    time: "12 min ago",
  },
  {
    icon: FileText,
    color: "text-yellow-400",
    title: "Report Generated",
    desc: "Executive Report",
    time: "18 min ago",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/60 backdrop-blur-xl p-6">

      <h2 className="text-xl font-semibold text-white mb-6">
        Live Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-none"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-zinc-800 p-3">
                  <Icon
                    size={22}
                    className={item.color}
                  />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    {item.desc}
                  </p>
                </div>

              </div>

              <span className="text-xs text-zinc-500">
                {item.time}
              </span>
            </div>
          );
        })}

      </div>

    </div>
  );
}