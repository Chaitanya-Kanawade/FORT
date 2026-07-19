import { useState } from "react";
import FortButton from "../ui/FortButton";
import FortInput from "../ui/FortInput";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (data: {
    project_name: string;
    target: string;
    target_type: string;
  }) => Promise<void>;
}

export default function ProjectModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [projectName, setProjectName] = useState("");
  const [target, setTarget] = useState("");
  const [targetType, setTargetType] = useState("Domain");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleCreate() {
    if (!projectName || !target) return;

    try {
      setLoading(true);

      await onCreate({
        project_name: projectName,
        target,
        target_type: targetType,
      });

      setProjectName("");
      setTarget("");
      setTargetType("Domain");

      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

      <div className="w-[520px] rounded-3xl border border-cyan-500/30 bg-zinc-950 p-8 shadow-[0_0_60px_rgba(6,182,212,.25)]">

        <h2 className="text-3xl font-bold text-cyan-400">
          Initialize New Project
        </h2>

        <p className="text-zinc-400 mt-2 mb-8">
          Create a new offensive security workspace.
        </p>

        <div className="space-y-5">

          <FortInput
            label="Project Name"
            placeholder="OWASP Juice Shop"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          <FortInput
            label="Target"
            placeholder="juice-shop.herokuapp.com"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />

          <div>

            <label className="text-sm text-zinc-300 font-medium">
              Target Type
            </label>

            <select
              className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white outline-none focus:border-cyan-400"
              value={targetType}
              onChange={(e) => setTargetType(e.target.value)}
            >
              <option>Domain</option>
              <option>IP Address</option>
              <option>Web Application</option>
            </select>

          </div>

          <div className="flex gap-3 pt-4">

            <FortButton
              variant="secondary"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </FortButton>

            <FortButton
              fullWidth
              loading={loading}
              onClick={handleCreate}
            >
              Initialize
            </FortButton>

          </div>

        </div>

      </div>

    </div>
  );
}