export interface Assessment {
  id: number;
  assessment_name: string;
  assessment_type: string;
  status: string;
  progress: number;
  project_id: number;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
}