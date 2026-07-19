import { useNavigate, useParams } from "react-router-dom";
import FortButton from "../components/ui/FortButton";

export default function ProjectWorkspace() {

  const { id } = useParams();

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#09090B] text-white p-10">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-5xl font-bold text-cyan-400">

            Project Workspace

          </h1>

          <p className="text-zinc-400 mt-2">

            Project ID : {id}

          </p>

        </div>

        <FortButton
          variant="secondary"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </FortButton>

      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">

            Assessments

          </h2>

          <p className="text-5xl mt-4 text-cyan-400">

            0

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">

            Findings

          </h2>

          <p className="text-5xl mt-4 text-cyan-400">

            0

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">

            Evidence

          </h2>

          <p className="text-5xl mt-4 text-cyan-400">

            0

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">

            Reports

          </h2>

          <p className="text-5xl mt-4 text-cyan-400">

            0

          </p>

        </div>

      </div>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">

        <h2 className="text-2xl font-semibold text-white">

          Offensive Security Workspace

        </h2>

        <p className="text-zinc-400 mt-3">

          Recon, Scanning, Findings, AI Analysis and Reporting
          modules will appear here in the next sprint.

        </p>

      </div>

    </div>

  );

}