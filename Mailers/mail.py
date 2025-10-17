from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
import smtplib
import os
from dotenv import load_dotenv
from email.mine.text import MINEText
from email.mine.multipart import MINEMultipart


load_dotenv()

class Params(BaseModel):
    namePlaceholder: str
    phoneNoPlaceholder: int
    messagePlaceholder: str


app = FastAPI()

@app.get("/contact_me")
def send_message(params: Params):
    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("RECEIVER_EMAIL")
    receiver_password = os.getenv("SENDER_PASSWORD")


subject = f"you gat a message from{params.namePlaceholder}"
body = f"""
Name: {params.namePlaceholder}
Phone_No: {params.phoneNoPlaceholder}
Message: {params.messagePlaceholder}
"""

message = MINEMultipart()
message['from'] = sender_email
message['to'] = receiver_email
message['subject'] = subject
message.attach(MIMEtext(body, "plain"))

try:
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(message)

        {"message" : "Email was send"}
    expect Exception as e:

    raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def contact():
    return {"Hello": "Arnold, I saw you portfolio. Looks wow"}



 