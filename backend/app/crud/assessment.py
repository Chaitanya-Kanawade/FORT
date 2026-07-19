from sqlalchemy.orm import Session

from app.models.assessment import Assessment
from app.models.project import Project
from app.models.user import User

from app.schemas.assessment import AssessmentCreate


def create_assessment(
    db: Session,
    assessment: AssessmentCreate,
    project_id: int,
    current_user: User,
):
    project = (
        db.query(Project)
        .filter(
            Project.id == project_id,
            Project.user_id == current_user.id,
        )
        .first()
    )

    if not project:
        return None

    db_assessment = Assessment(
        assessment_name=assessment.assessment_name,
        assessment_type=assessment.assessment_type,
        project_id=project.id,
    )

    db.add(db_assessment)
    db.commit()
    db.refresh(db_assessment)

    return db_assessment


def get_assessments_by_project(
    db: Session,
    project_id: int,
    current_user: User,
):
    project = (
        db.query(Project)
        .filter(
            Project.id == project_id,
            Project.user_id == current_user.id,
        )
        .first()
    )

    if not project:
        return []

    return (
        db.query(Assessment)
        .filter(
            Assessment.project_id == project.id
        )
        .order_by(
            Assessment.created_at.desc()
        )
        .all()
    )


def get_assessment_by_id(
    db: Session,
    assessment_id: int,
    current_user: User,
):
    return (
        db.query(Assessment)
        .join(Project)
        .filter(
            Assessment.id == assessment_id,
            Project.user_id == current_user.id,
        )
        .first()
    )