from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.project import (
    ProjectCreate,
    ProjectResponse,
)

from app.crud.project import (
    create_project,
    get_projects_by_user,
    get_project_by_id,
)

from app.core.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)


@router.post(
    "/",
    response_model=ProjectResponse,
    status_code=201
)
def create_new_project(
    project: ProjectCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return create_project(
        db,
        project,
        current_user
    )


@router.get(
    "/",
    response_model=List[ProjectResponse]
)
def get_my_projects(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_projects_by_user(
        db,
        current_user
    )


@router.get(
    "/{project_id}",
    response_model=ProjectResponse
)
def get_project(
    project_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    project = get_project_by_id(
        db,
        project_id,
        current_user
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    return project