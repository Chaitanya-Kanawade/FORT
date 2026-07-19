from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.assessment import (
    AssessmentCreate,
    AssessmentResponse,
)

from app.crud.assessment import (
    create_assessment,
    get_assessments_by_project,
    get_assessment_by_id,
)

from app.core.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    tags=["Assessments"]
)


@router.post(
    "/projects/{project_id}/assessments",
    response_model=AssessmentResponse,
    status_code=201,
)
def create_new_assessment(
    project_id: int,
    assessment: AssessmentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    db_assessment = create_assessment(
        db=db,
        assessment=assessment,
        project_id=project_id,
        current_user=current_user,
    )

    if not db_assessment:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return db_assessment


@router.get(
    "/projects/{project_id}/assessments",
    response_model=List[AssessmentResponse],
)
def list_project_assessments(
    project_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_assessments_by_project(
        db=db,
        project_id=project_id,
        current_user=current_user,
    )


@router.get(
    "/assessments/{assessment_id}",
    response_model=AssessmentResponse,
)
def get_assessment(
    assessment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    assessment = get_assessment_by_id(
        db=db,
        assessment_id=assessment_id,
        current_user=current_user,
    )

    if not assessment:
        raise HTTPException(
            status_code=404,
            detail="Assessment not found",
        )

    return assessment