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


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    project_name = Column(String(150), nullable=False)

    target = Column(String(255), nullable=False)

    target_type = Column(String(30), nullable=False)

    status = Column(String(30), default="Draft")

    scan_profile = Column(String(30), default="Standard")

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    owner = relationship("User")