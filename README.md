🛡️ FORT — AI-Powered Vulnerability Assessment & Reconnaissance Platform

FORT (Cyber Fortification & Reconnaissance Toolkit) is an enterprise-grade automated security assessment and vulnerability management platform. Designed for security teams, penetration testers, and DevSecOps engineers, FORT integrates industry-standard scanner tooling with FortAI—a privacy-focused local Retrieval-Augmented Generation (RAG) security analyst engine.

1.🌟 Key Features🌐 Attack Surface & Scope Management: Define project perimeters, IP ranges, and domains with strict target validation guards to prevent out-of-scope scanning.
2.⚡ Automated Security Scanning: Integrated support for Nmap, Nuclei, Gobuster, and custom HTTP probing modules with full job tracking and progress monitors.
3.🤖 FortAI Context Guard & RAG Engine: Local LLM integration powered by Ollama, trained on specialized cybersecurity domain knowledge for contextual risk evaluation without leaking data to external APIs.
4.📊 Interactive Cyber Telemetry: Modern React UI with real-time dashboard visualization, dynamic target risk scoring, and interactive 3D elements powered by Three.js.
5.📑 Executive & Technical Reporting: One-click generation of branded, audit-ready PDF security reports detailing findings, CVE enrichments, and prioritized remediation pathways.
6.🔐 Secure Role-Based Architecture: Complete authorization, JWT authentication, and database migration scripts for audit trail enforcement.
🏗️ System Architecture+----------------------------------+
               |        React + Vite Frontend     |
               | (TypeScript / Tailwind / Three)  |
               +----------------+-----------------+
                                | REST API / WS
                                v
               +----------------------------------+
               |         FastAPI Backend          |
               +-------+------------------+-------+
                       |                  |
        +--------------+--+            +--+----------------+
        | Scanner Engine  |            |  FortAI Engine    |
        | (Nuclei/Gobuster|            | (Ollama + RAG)    |
        +--------+--------+            +--+----------------+
                 |                        |
                 v                        v
        +-----------------+            +-------------------+
        | External Target |            |  Knowledge Base   |
        +-----------------+            +-------------------+
🛠️ Tech StackBackendFramework: Python 3.11+ / FastAPIDatabase & ORM: PostgreSQL / SQLite, SQLAlchemy, Alembic SQL MigrationsTask Scheduling & Processing: Background Job QueuesSecurity Tools Integration: Nmap, Nuclei, Gobuster, Custom HTTP ProbesFrontendFramework: React 18 with TypeScript & ViteStyling: Tailwind CSS & Lucide IconsVisualizations: Three.js & Lucide Cyber UI componentsAI & Knowledge BaseEngine: Ollama (Local Model Hosting)Knowledge RAG: Custom Vector Context Host with domain-specific web app security guides📂 Repository StructureFORT/
├── backend/                  # FastAPI Backend Application
│   ├── app/
│   │   ├── ai/               # Risk engine & AI scoring algorithms
│   │   ├── api/              # API Endpoints (v1 Routes: Recon, Scans, Reports, etc.)
│   │   ├── core/             # Configuration, Security, & Middleware
│   │   ├── crud/             # Database CRUD Operations
│   │   ├── models/           # SQLAlchemy Models
│   │   ├── scanner/          # Scanner Adapters (Gobuster, Nuclei, Nmap)
│   │   ├── schemas/          # Pydantic Schemas
│   │   └── services/         # Business Logic & FortAI RAG Engine
│   ├── fortai_knowledge/     # Cybersecurity Markdown RAG Knowledge Files
│   ├── tests/                # Pytest Test Suites
│   └── requirements.txt      # Python Dependencies
├── frontend/                 # React + Vite Frontend Application
│   ├── public/               # Static Assets & Icons
│   └── src/
│       ├── components/       # Modular UI Components (Modals, Panels, Three Scene)
│       ├── pages/            # View Pages (Dashboard, Findings, FortAI, Reports)
│       ├── services/         # API Integration Layer
│       └── types/            # TypeScript Type Definitions
├── database/                 # SQL Master & Version Migration Scripts
├── docker/                   # Dockerfiles & Nginx Configurations
├── docs/                     # System Specifications, SRS, Architecture & Manuals
├── scripts/                  # Automated Testing & Utility Scripts
├── docker-compose.yml        # Docker Multi-Container Orchestration
└── README.md                 # Project Documentation
🚀 Quick Start GuidePrerequisitesDocker & Docker ComposeNode.js (v18+ recommended for manual local setup)Python (3.11+ for manual backend setup)Ollama (Optional: Required for local FortAI execution)Option 1: Running with Docker (Recommended)Clone the Repositorygit clone https://github.com/your-username/FORT.git
cd FORT
Configure Environmentcp backend/.env.example backend/.env
Build & Spin Up Servicesdocker-compose up --build -d
Access the ApplicationFrontend UI: http://localhost:3000Backend API Docs: http://localhost:8000/docsOption 2: Manual Local SetupBackend Setupcd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create local environment configuration
cp .env.example .env

# Run database migrations
sqlite3 fort.db < ../database/MASTER_MIGRATION_V1.sql

# Start FastAPI server
uvicorn app.main:app --reload --port 8000
Frontend Setupcd frontend

# Install packages
npm install

# Start Vite dev server
npm run dev
⚙️ Environment ConfigurationRefer to backend/.env.example for the full list of configurable options. Key variables include:VariableDescriptionDefault / ExamplePROJECT_NAMEPlatform NameFORTSECRET_KEYJWT Signing Secret Keyyour-secure-secret-keyDATABASE_URLDatabase Connection Stringsqlite:///./fort.dbOLLAMA_BASE_URLLocal Ollama AI Instance URLhttp://localhost:11434FORTAI_MODELActive LLM for Security Analysisllama3🧪 Testing & ValidationRun backend test suites and health-check scripts to confirm target validation and scanner integrity:# Run Backend Pytest Suite
cd backend
pytest

# Run Automated Quality & Health Checks (PowerShell)
.\scripts\run_quality_checks.ps1
🔒 Security & Scope PolicyFORT includes native Scope Management Policies:Scans can only be triggered against domains/IPs explicitly authorized within an active Project Scope.Target adapters automatically parse and strip out invalid target specifications before invoking external binaries (nmap, nuclei, gobuster).📄 LicenseDistributed under the MIT License. See LICENSE for more information.⚠️ DisclaimerThis tool is intended strictly for educational purposes, defensive security fortification, and authorized penetration testing within approved scopes. Unauthorized scanning of third-party systems without prior explicit consent is illegal.
