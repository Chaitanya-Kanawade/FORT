from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.database import Base


class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)

    report_name = Column(String(255), nullable=False)

    report_type = Column(String(50), default="Technical")

    file_path = Column(String(500), nullable=True)

    status = Column(String(30), default="Generated")

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    assessment_id = Column(
        Integer,
        ForeignKey("assessments.id"),
        nullable=False
    )

    assessment = relationship("Assessment")