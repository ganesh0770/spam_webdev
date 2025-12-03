from sqlalchemy.orm import Session
from datadb import SessionLocal, Contact,new_message

db: Session = SessionLocal()

contacts = db.query(Contact).all()
msg = db.query(new_message).all()
for c in contacts:
    print(c.id, c.name, c.email, c.text_box)
for c in msg:
    print(c.id, c.message, c.label)