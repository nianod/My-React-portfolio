from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import smtplib
import os
from dotenv import load_dotenv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

 
load_dotenv()

class Params(BaseModel):
    namePlaceholder: str
    phoneNoPlaceholder: str
    messagePlaceholder: str

app = FastAPI()

@app.post("/contact_me")
def send_message(params: Params):
    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("SENDER_PASSWORD")
    receiver_email = os.getenv("RECEIVER_EMAIL")

    subject = f"You got a message from {params.namePlaceholder}"
    body = f"""
    Name: {params.namePlaceholder}
    Phone: {params.phoneNoPlaceholder}
    Message: {params.messagePlaceholder}
    """

    
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(message)

        return {"message": "Email sent successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def home():
    return {"Hello": "Arnold, I saw your portfolio. Looks wow!"}
