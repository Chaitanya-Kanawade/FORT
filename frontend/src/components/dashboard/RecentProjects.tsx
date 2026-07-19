import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProjects } from "../../services/dashboard";
import type { Project } from "../../types/project";

export default function RecentProjects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProjects();
  }, []);

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/60 p-6">

      <h2 className="text-white text-2xl font-semibold mb-6">
        Recent Projects
      </h2>

      <div className="space-y-4">

        {projects.length === 0 && (
          <div className="text-zinc-500 text-center py-8">
            No projects found.
          </div>
        )}

        {projects.map((project) => (

          <button
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="
              w-full
              rounded-xl
              border
              border-zinc-700
              bg-zinc-950
              p-5
              text-left
              transition-all
              duration-300
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(6,182,212,.25)]
            "
          >
            <div className="flex justify-between">

              <div>

                <h3 className="text-white font-semibold">
                  {project.project_name}
                </h3>

                <p className="text-zinc-400 mt-1">
                  {project.target}
                </p>

              </div>

              <span className="text-cyan-400">
                {project.status}
              </span>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}