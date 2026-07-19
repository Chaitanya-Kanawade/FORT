from sqlalchemy.orm import Session

from app.models.project import Project
from app.schemas.project import ProjectCreate
from app.models.user import User


def create_project(
    db: Session,
    project: ProjectCreate,
    owner: User
):
    db_project = Project(
        project_name=project.project_name,
        target=project.target,
        target_type=project.target_type,
        user_id=owner.id
    )

    db.add(db_project)
    db.commit()
    db.refresh(db_project)

    return db_project


def get_projects_by_user(
    db: Session,
    owner: User
):
    return (
        db.query(Project)
        .filter(Project.user_id == owner.id)
        .all()
    )


def get_project_by_id(
    db: Session,
    project_id: int,
    owner: User
):
    return (
        db.query(Project)
        .filter(
            Project.id == project_id,
            Project.user_id == owner.id
        )
        .first()
    )