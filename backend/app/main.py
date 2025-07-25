from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from jinja2 import Environment, FileSystemLoader
import shutil
import os

app = FastAPI(title='Static Dashboard Generator')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

UPLOAD_DIR = 'uploads'
EXPORT_DIR = 'exports'
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(EXPORT_DIR, exist_ok=True)

env = Environment(loader=FileSystemLoader('templates'))

@app.post('/upload-csv')
async def upload_csv(file: UploadFile = File(...)):
    filename = file.filename if file.filename is not None else "uploaded_file.csv"
    file_path = os.path.join(UPLOAD_DIR, filename)
    with open(file_path, 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"status": "success", "filename": filename}

@app.post('/export')
async def export_dashboard(html_content: str = Form(...)):
    file_path = os.path.join(EXPORT_DIR, 'dashboard.html')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    return {"status": "exported", "path": file_path}

@app.get('/download')
async def download_dashboard():
    with open(os.path.join(EXPORT_DIR, 'dashboard.html'), 'r', encoding='utf-8') as f:
        content = f.read()
    return HTMLResponse(content=content)

@app.get('/')
async def root():
    return {"message": "Dashboard Generator Backend Running"}
