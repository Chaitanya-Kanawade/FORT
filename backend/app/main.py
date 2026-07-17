from fastapi import FastAPI

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
