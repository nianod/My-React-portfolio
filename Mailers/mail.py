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


@app.get("/")
def contact():
    return {"Hello": "Arnold, I saw you portfolio. Looks wow"}



 