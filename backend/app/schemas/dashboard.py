from pydantic import BaseModel


class DashboardStats(BaseModel):
    projects: int
    assessments: int
    findings: int
    ai_score: int