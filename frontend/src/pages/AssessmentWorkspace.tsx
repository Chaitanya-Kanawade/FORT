import { useNavigate, useParams } from "react-router-dom";

import FortButton from "../components/ui/FortButton";

export default function AssessmentWorkspace() {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-white p-10">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-5xl font-bold text-cyan-400">
            Assessment Workspace
          </h1>

          <p className="text-zinc-400 mt-2">
            Assessment ID : {id}
          </p>

        </div>

        <FortButton
          variant="secondary"
          onClick={() => navigate(-1)}
        >
          Back
        </FortButton>

      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">
            Recon
          </h2>

          <p className="text-4xl mt-4 text-cyan-400">
            Ready
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">
            Scan Status
          </h2>

          <p className="text-4xl mt-4 text-yellow-400">
            Pending
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">
            Findings
          </h2>

          <p className="text-4xl mt-4 text-cyan-400">
            0
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

          <h2 className="text-zinc-300">
            Progress
          </h2>

          <p className="text-4xl mt-4 text-cyan-400">
            0%
          </p>

        </div>

      </div>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">

        <h2 className="text-3xl font-bold text-white mb-8">
          Recon Modules
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-xl border border-cyan-500/20 bg-zinc-950 p-6">

            <h3 className="text-2xl font-semibold text-cyan-400">
              Nmap Scan
            </h3>

            <p className="text-zinc-400 mt-3">
              Discover live hosts, open ports,
              services and versions.
            </p>

            <FortButton className="mt-6">
              Run Nmap
            </FortButton>

          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-zinc-950 p-6">

            <h3 className="text-2xl font-semibold text-cyan-400">
              HTTP Probe
            </h3>

            <p className="text-zinc-400 mt-3">
              Discover HTTP/HTTPS services.
            </p>

            <FortButton
              className="mt-6"
              variant="secondary"
            >
              Coming Soon
            </FortButton>

          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-zinc-950 p-6">

            <h3 className="text-2xl font-semibold text-cyan-400">
              Gobuster
            </h3>

            <p className="text-zinc-400 mt-3">
              Directory & File Enumeration.
            </p>

            <FortButton
              className="mt-6"
              variant="secondary"
            >
              Coming Soon
            </FortButton>

          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-zinc-950 p-6">

            <h3 className="text-2xl font-semibold text-cyan-400">
              Nuclei
            </h3>

            <p className="text-zinc-400 mt-3">
              Vulnerability Scanning Engine.
            </p>

            <FortButton
              className="mt-6"
              variant="secondary"
            >
              Coming Soon
            </FortButton>

          </div>

        </div>

      </div>

    </div>
  );
}