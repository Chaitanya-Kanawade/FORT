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
  description: string;
}) {
  const response = await api.post("/projects/", data);
  return response.data;
}