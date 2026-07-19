from datetime import datetime
from pydantic import BaseModel


class AssessmentCreate(BaseModel):
    assessment_name: str
    assessment_type: str = "Automated"


class AssessmentResponse(BaseModel):
    id: int

    assessment_name: str

    assessment_type: str

    status: str

    progress: int

    project_id: int

    started_at: datetime | None

    completed_at: datetime | None

    created_at: datetime

    model_config = {
        "from_attributes": True
    }