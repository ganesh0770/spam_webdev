from fastapi import FastAPI, Form, Depends
from pydantic import BaseModel
import torch
import torch.nn as nn
# import pickle
import joblib
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datadb import SessionLocal, init_db, Contact,new_message

init_db()
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
                   "http://localhost:3000","*",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class spam_prediction(nn.Module):
    def __init__(self,input_layer,hidden_layer,output_layers):
        super().__init__()
        self.linear=nn.Sequential(
            nn.Linear(in_features=input_layer,out_features=hidden_layer),
            nn.ReLU(),
            nn.Linear(in_features=hidden_layer,out_features=hidden_layer),
            nn.ReLU(),
            nn.Linear(in_features=hidden_layer,out_features=hidden_layer),
            nn.ReLU(),
            nn.Linear(in_features=hidden_layer,out_features=output_layers),
            nn.Sigmoid()
            
        )
    def forward(self,x:torch.Tensor())->torch.Tensor():
        return self.linear(x)

model=spam_prediction(input_layer=26396, hidden_layer=64,output_layers=1)
model.load_state_dict(torch.load("weights_spam.pkl", map_location="cpu"))
model.eval()

vectorizer = joblib.load("tfidf_vectorizer.joblib")

class Input(BaseModel):
    text: str

class Input_0(BaseModel):
    additional: str

@app.post("/predict")
async def predict(data: Input):
    # print("this is post in fast",data)
    text = data.text.strip()
    print("test",text)
    if not text:
        return {"prediction": "Empty text"}
    x_input = vectorizer.transform([text])  
    x_tensor = torch.tensor(x_input.toarray(), dtype=torch.float32)
    with torch.no_grad():
        x_tensor = torch.tensor(x_tensor, dtype=torch.float32)
        y_pred = model(x_tensor).item()
        is_spam=y_pred > 0.5
        return {"prediction": "Spam" if is_spam else "Not Spam"}
    





def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



@app.post("/contact_data")
def contact_data(
    name: str = Form(...),
    email: str = Form(...),
    text_box: str = Form(...),
    db: Session = Depends(get_db)
):

    # print("Name:", name)
    # print("Email:", email)
    # print("Message:", text_box)

    new_contact = Contact(name=name, email=email, text_box=text_box)
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    # print(f"Saved contact: {new_contact.name}, {new_contact.email}, {new_contact.text_box}")

    return {"message": "contact Data saved successfully!", "id": new_contact.id}




@app.post("/additional_data")
def additional_data(
    message: str = Form(...),
    label: str = Form(...),
    db: Session = Depends(get_db)
    ):
    
    # print("this is backend_addtional data")
    # print(f"this is message{message},label {label}")

    new_data = new_message(message=message, label=label)
    db.add(new_data)
    db.commit()
    db.refresh(new_data)
    
    return {"message": "additonal data received successfully!"}

