from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime,
    ForeignKey
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.database import Base


class Finding(Base):
    __tablename__ = "findings"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    severity = Column(String(20), nullable=False)

    status = Column(String(30), default="Open")

    description = Column(Text)

    recommendation = Column(Text)

    cvss_score = Column(String(10))

    confidence = Column(Integer)

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