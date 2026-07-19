import { useState } from "react";

import FortButton from "../ui/FortButton";
import FortInput from "../ui/FortInput";

interface Props {
  open: boolean;

  onClose: () => void;

  onCreate: (data: {
    assessment_name: string;
    assessment_type: string;
  }) => Promise<void>;
}

export default function AssessmentModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] = useState("");

  const [type, setType] = useState("Automated");

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function createAssessment() {
    if (!name) return;

    setLoading(true);

    await onCreate({
      assessment_name: name,
      assessment_type: type,
    });

    setLoading(false);

    setName("");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

      <div className="w-[520px] rounded-3xl border border-cyan-500/20 bg-zinc-950 p-8">

        <h2 className="text-3xl font-bold text-cyan-400">

          New Assessment

        </h2>

        <p className="text-zinc-400 mt-2 mb-8">

          Start a new offensive security assessment.

        </p>

        <div className="space-y-5">

          <FortInput
            label="Assessment Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Infrastructure Scan"
          />

          <div>

            <label className="text-zinc-300 text-sm">

              Assessment Type

            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
            >
              <option>Automated</option>

              <option>Manual</option>

              <option>Hybrid</option>

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
              loading={loading}
              fullWidth
              onClick={createAssessment}
            >
              Create Assessment
            </FortButton>

          </div>

        </div>

      </div>

    </div>
  );
}