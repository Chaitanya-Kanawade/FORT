from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "FORT Framework Backend Running",
        "status": "active",
        "version": "0.1.0"
    }
from app.api.user import router as user_router
from app.api.project import router as project_router
from app.api.dashboard import router as dashboard_router
from app.api.assessment import router as assessment_router


app.include_router(user_router)
app.include_router(project_router)
app.include_router(dashboard_router)
app.include_router(assessment_router)