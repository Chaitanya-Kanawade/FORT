import { useEffect, useState } from "react";

import { getProjects } from "../../services/dashboard";

import type { Project } from "../../types/project";

export default function RecentProjects() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {

        async function loadProjects() {

            const data = await getProjects();

            setProjects(data);

        }

        loadProjects();

    }, []);

    return (

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/60 p-6">

            <h2 className="text-white text-2xl font-semibold mb-6">

                Recent Projects

            </h2>

            <div className="space-y-4">

                {projects.map(project => (

                    <div

                        key={project.id}

                        className="rounded-xl border border-zinc-700 bg-zinc-950 p-5"

                    >

                        <div className="flex justify-between">

                            <div>

                                <h3 className="text-white font-semibold">

                                    {project.project_name}

                                </h3>

                                <p className="text-zinc-400">

                                    {project.target}

                                </p>

                            </div>

                            <span className="text-cyan-400">

                                {project.status}

                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}