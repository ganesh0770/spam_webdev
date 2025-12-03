##Project Structure

project/
│── frontend/
│   └── (React/tailwindcss/nextjs)
│── backend/
│   └── (FastAPI app)
│── .gitignore
└── README.md


###**Frontend — Setup**

1️⃣ Install dependencies:
cd frontend
npm install

2️⃣ Run development server:
npm run dev      # or: npm start


###**Backend (FastAPI) — Setup**

1️⃣ Install dependencies:
cd backend

2️⃣ Create a virtual environment
Run this inside your backend folder:
python -m venv venv


3️⃣ Activate the virtual environment:
Windows:
venv\Scripts\activate

Mac / Linux:
source venv/bin/activate

4️⃣ Install FastAPI and dependencies:
pip install "fastapi[standard]" or pip install  fastapi uvicorn

5️⃣ Install requirements.txt:
pip install -r requirements.txt

6️⃣ Running FastAPI sever in venv:
fastapi dev main.py or uvicorn main:app --reload


