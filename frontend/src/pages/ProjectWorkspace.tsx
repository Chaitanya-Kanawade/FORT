import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import FortButton from "../components/ui/FortButton";
import AssessmentModal from "../components/assessment/AssessmentModal";

import {
  getAssessments,
  createAssessment,
} from "../services/dashboard";

import type { Assessment } from "../types/assessment";

export default function ProjectWorkspace() {
  const { id } = useParams();

  const projectId = Number(id);

  const navigate = useNavigate();

  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function loadAssessments() {
    try {
      const data = await getAssessments(projectId);
      setAssessments(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!projectId) return;
    loadAssessments();
  }, [projectId]);

  async function handleCreateAssessment(data: {
    assessment_name: string;
    assessment_type: string;
  }) {
    await createAssessment(projectId, data);
    await loadAssessments();
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-white p-10">
      <AssessmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateAssessment}
      />

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-cyan-400">
            Project Workspace
          </h1>

          <p className="text-zinc-400 mt-2">
            Project ID : {projectId}
          </p>
        </div>

        <div className="flex gap-4">
          <FortButton onClick={() => setModalOpen(true)}>
            New Assessment
          </FortButton>

          <FortButton
            variant="secondary"
            onClick={() => navigate("/dashboard")}
          >
            Back
          </FortButton>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-zinc-300">Assessments</h2>

          <p className="text-5xl mt-4 text-cyan-400">
            {assessments.length}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-zinc-300">Findings</h2>

          <p className="text-5xl mt-4 text-cyan-400">
            0
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-zinc-300">Evidence</h2>

          <p className="text-5xl mt-4 text-cyan-400">
            0
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
          <h2 className="text-zinc-300">Reports</h2>

          <p className="text-5xl mt-4 text-cyan-400">
            0
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Assessments
          </h2>

          <FortButton onClick={() => setModalOpen(true)}>
            + New
          </FortButton>
        </div>

        {assessments.length === 0 ? (
          <div className="text-center text-zinc-500 py-12">
            No assessments created yet.
          </div>
        ) : (
          <div className="space-y-4">
            {assessments.map((assessment) => (
              <button
                key={assessment.id}
                onClick={() => navigate(`/assessments/${assessment.id}`)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-5 text-left transition-all hover:border-cyan-500 hover:bg-zinc-900"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {assessment.assessment_name}
                    </h3>

                    <p className="text-zinc-400 mt-1">
                      {assessment.assessment_type}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-cyan-400">
                      {assessment.status}
                    </p>

                    <p className="text-zinc-500 text-sm mt-1">
                      {assessment.progress}%
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}