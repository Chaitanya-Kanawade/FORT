from datetime import datetime
from pydantic import BaseModel


class ProjectCreate(BaseModel):
    project_name: str
    target: str
    target_type: str


class ProjectResponse(BaseModel):
    id: int
    project_name: str
    target: str
    target_type: str
    status: str
    scan_profile: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }