import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

API_KEY = os.getenv('AZURE_API_KEY')
ENDPOINT = os.getenv('AZURE_ENDPOINT')
OCR_URL = f"{ENDPOINT}/vision/v3.2/ocr"

def recognize_text(image_path):
    """Send an image to Azure OCR API and return the extracted text."""
    headers = {
        'Ocp-Apim-Subscription-Key': API_KEY,
        'Content-Type': 'application/octet-stream'
    }
    
    # Read the image as binary
    with open(image_path, 'rb') as image_file:
        image_data = image_file.read()

    response = requests.post(OCR_URL, headers=headers, data=image_data)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return None
