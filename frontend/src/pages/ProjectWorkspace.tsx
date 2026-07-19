import { useParams } from "react-router-dom";

export default function ProjectWorkspace() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#09090B] text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400">
        Project Workspace
      </h1>

      <p className="text-zinc-400 mt-3">
        Project ID : {id}
      </p>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">Assessments</h2>
          <p className="text-4xl mt-4">0</p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">Findings</h2>
          <p className="text-4xl mt-4">0</p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">Evidence</h2>
          <p className="text-4xl mt-4">0</p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">Reports</h2>
          <p className="text-4xl mt-4">0</p>
        </div>

      </div>

    </div>
  );
}