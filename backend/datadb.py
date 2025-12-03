from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL_FOR_CONTACT = "sqlite:///./contact_data.db"
SQLALCHEMY_DATABASE_URL_FOR_NEW_SPAM_MESSAGES = "sqlite:///./new_spam_message.db"
engine = create_engine(
    SQLALCHEMY_DATABASE_URL_FOR_CONTACT, connect_args={"check_same_thread": False}
)
engine = create_engine(
    SQLALCHEMY_DATABASE_URL_FOR_NEW_SPAM_MESSAGES, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Contact(Base):
    __tablename__ = "contacts" 

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    text_box = Column(String, nullable=False)

class new_message(Base):

    __tablename__ = "new_msg_spam/notspam" 

    id = Column(Integer, primary_key=True, index=True)
    message = Column(String, nullable=False)
    label = Column(String, nullable=False)



def init_db():
    Base.metadata.create_all(bind=engine)



