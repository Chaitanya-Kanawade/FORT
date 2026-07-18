from fastapi import FastAPI

from app.database.database import Base, engine

# Import all models
from app.models.user import User
from app.models.project import Project
from app.models.assessment import Assessment
from app.models.finding import Finding
from app.models.evidence import Evidence
from app.models.report import Report

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="FORT Framework API",
    version="0.1.0",
    description="AI-powered Security Assessment Workspace"
)


@app.get("/")
def root():
    return {
        "message": "FORT Framework Backend Running",
        "status": "active",
        "version": "0.1.0"
    }
from app.api.user import router as user_router

app.include_router(user_router)