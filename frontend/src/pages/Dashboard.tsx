import { useEffect, useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import RecentProjects from "../components/dashboard/RecentProjects";
import AIAssistant from "../components/dashboard/AIAssistant";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import ProjectModal from "../components/modals/ProjectModal";

import {
  FolderOpen,
  Shield,
  Bug,
  BrainCircuit,
} from "lucide-react";

import {
  getDashboardStats,
  createProject,
} from "../services/dashboard";

import type { DashboardStats } from "../types/dashboard";

export default function Dashboard() {

  const [stats, setStats] = useState<DashboardStats>({
    projects: 0,
    assessments: 0,
    findings: 0,
    ai_score: 0,
  });

  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  async function loadDashboard() {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  async function handleCreateProject(data: {
    project_name: string;
    target: string;
    target_type: string;
  }) {

    await createProject(data);

    await loadDashboard();

    window.location.reload();

  }

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#09090B] text-cyan-400 text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#09090B] p-10 overflow-auto">

      <DashboardHeader
        onNewProject={() => setModalOpen(true)}
      />

      <ProjectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateProject}
      />

      <div className="grid grid-cols-4 gap-6 mt-10">

        <StatCard
          title="Projects"
          value={stats.projects}
          subtitle="Database"
          icon={FolderOpen}
        />

        <StatCard
          title="Assessments"
          value={stats.assessments}
          subtitle="Database"
          icon={Shield}
        />

        <StatCard
          title="Findings"
          value={stats.findings}
          subtitle="Database"
          icon={Bug}
        />

        <StatCard
          title="AI Score"
          value={`${stats.ai_score}%`}
          subtitle="Live"
          icon={BrainCircuit}
        />

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <RecentProjects />

        <AIAssistant />

      </div>

      <div className="mt-8">

        <ActivityFeed />

      </div>

    </div>
  );
}