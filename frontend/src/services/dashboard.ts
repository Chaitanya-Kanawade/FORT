import api from "./api";

export async function getDashboardStats() {
  const response = await api.get("/dashboard/stats");
  return response.data;
}

export async function getProjects() {
  const response = await api.get("/projects/");
  return response.data;
}

export async function createProject(data: {
  project_name: string;
  target: string;
  target_type: string;
}) {
  const response = await api.post("/projects/", data);
  return response.data;
}

export async function getAssessments(projectId: number) {
  const response = await api.get(
    `/projects/${projectId}/assessments`
  );

  return response.data;
}

export async function createAssessment(
  projectId: number,
  data: {
    assessment_name: string;
    assessment_type: string;
  }
) {
  const response = await api.post(
    `/projects/${projectId}/assessments`,
    data
  );

  return response.data;
}