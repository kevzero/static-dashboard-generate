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
- **Frontend (React + Vite)**:
  - Real-time editing
  - Drag-and-drop widget arrangement
- **Deployment Ready**:
  - Docker Compose for easy setup
  - GitHub Actions CI/CD pipeline ready

---

## ⚙️ Requirements
- Docker & Docker Compose
- Node.js (if running frontend locally without Docker)
- Python 3.10+ (if running backend locally without Docker)

---

## 🚀 Quick Start
```bash
git clone <repo-url>
cd static-dashboard-generator
make up   # or docker-compose up -d
```

### Access URLs
- **Frontend (Editor)**: [http://localhost:5173](http://localhost:5173)
- **Backend (API)**: [http://localhost:8000](http://localhost:8000)

Stop services:
```bash
make down
```

Check logs:
```bash
make logs
```

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
