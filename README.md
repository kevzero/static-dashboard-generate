# Static Dashboard Generator

## 📌 Overview
**Static Dashboard Generator** is a complete, no-code solution for building interactive, responsive dashboards using drag-and-drop widgets. Users can load data from CSV, APIs, or databases, customize layouts, and export fully functional dashboards as static HTML for easy deployment.

---

## ✅ Features
- **Drag & Drop Dashboard Builder** – Intuitive interface using React + react-beautiful-dnd.
- **Advanced Widgets**:
  - KPI Cards
  - Charts (Pie, Bar, Line) via Chart.js
  - Filters and text blocks
  - Map placeholders (extendable)
- **Responsive Layout** – Built with TailwindCSS, supports dark mode.
- **Static Export** – Export dashboards as self-contained HTML.
- **Backend (FastAPI)**:
  - CSV Upload and parsing
  - HTML export engine with Jinja2
  - Interactive API docs with Swagger at `/docs`
- **Frontend (React + Vite)**:
  - Real-time editing
  - Drag-and-drop widget arrangement
- **Deployment Ready**:
  - Docker Compose for easy setup
  - GitHub Actions CI/CD pipeline ready

---

## ⚙️ Requirements
- **Docker** & **Docker Compose**
- **Node.js** (if running frontend locally without Docker)
- **Python 3.10+** (if running backend locally without Docker)

---

## 🚀 Quick Start
### **For Windows, Mac, and Linux**
Clone the repo and start services using Docker Compose:

```bash
git clone <repo-url>
cd static-dashboard-generator
docker-compose up -d   # Start all services
```

### Access URLs
- **Frontend (Editor)**: [http://localhost:5173](http://localhost:5173)
- **Backend (API)**: [http://localhost:8000](http://localhost:8000)
- **Backend Docs (Swagger)**: [http://localhost:8000/docs](http://localhost:8000/docs)

### Stop services
```bash
docker-compose down
```

### View logs
- **Windows / Mac / Linux**:
```bash
docker-compose logs -f
```
To check logs for a specific service:
```bash
docker-compose logs frontend
docker-compose logs backend
```

### Rebuild containers (if changes were made)
```bash
docker-compose build --no-cache
```

---

## 🛠 Local Development Without Docker
### **Backend (FastAPI)**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### **Frontend (React + Vite)**
Install Vite and dependencies:
```bash
cd frontend
npm install vite @vitejs/plugin-react --save-dev
npm install react react-dom react-router-dom react-beautiful-dnd chart.js react-chartjs-2 axios tailwindcss @headlessui/react react-icons
npx vite
```
Access frontend at: [http://localhost:5173](http://localhost:5173)

---

## 🛠 Usage
1. Open the dashboard editor in your browser.
2. Drag & drop widgets (charts, KPIs, etc.) into the layout.
3. Upload data via the CSV upload option (backend endpoint `/upload-csv`).
4. Customize widget properties (titles, values, chart types).
5. Click **Export** to generate static HTML.
6. Download or preview the generated dashboard.

---

## 🔗 API Endpoints
- `POST /upload-csv` → Upload CSV files
- `POST /export` → Submit HTML for export
- `GET /download` → Download exported HTML dashboard
- **Swagger Docs** → [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🖼 Architecture
```
[ React Frontend (Drag & Drop UI) ] <----> [ FastAPI Backend (CSV + Export) ]
      | TailwindCSS + Chart.js          |
      | Export Button (calls API)       |
Docker Compose orchestrates both services.
```

---

## 🔮 Future Enhancements
- Database connectors (PostgreSQL, MySQL)
- Additional widgets (Maps, Live Charts)
- Layout persistence via backend storage
- Multi-user collaboration

---

## 📜 License
MIT
