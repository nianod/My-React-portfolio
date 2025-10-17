from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
import smtplib
import os
from dotenv import load_dotenv
from email.mine.text import MINEText
from email.mine.multipart import MINEMultipart

class params(BaseModel):
    namePlaceholder: str
    phoneNoPlaceholder: int
    messagePlaceholder: str


app = FastAPI()

@app.get("/")
def contact():
    return {"Hello": "Arnold, I saw you portfolio. Looks wow"}

@app.get("/contact_me")
def contact_me():
    return