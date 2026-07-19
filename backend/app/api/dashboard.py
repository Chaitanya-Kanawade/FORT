from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.project import Project
from app.models.assessment import Assessment
from app.models.finding import Finding

from app.schemas.dashboard import DashboardStats

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get(
    "/stats",
    response_model=DashboardStats
)
def dashboard_stats(
    db: Session = Depends(get_db)
):
    projects = db.query(Project).count()

    assessments = db.query(
        Assessment
    ).count()

    findings = db.query(
        Finding
    ).count()

    if findings == 0:
        ai_score = 100
    else:
        ai_score = max(
            100 - findings * 2,
            0
        )

    return {
        "projects": projects,
        "assessments": assessments,
        "findings": findings,
        "ai_score": ai_score,
    }