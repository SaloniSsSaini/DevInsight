# 🚀 DevInsight — Intelligent Engineering Analytics Platform

🌐 **Live App:** https://dev-insight-7n5ybtuf0-salonisssainis-projects.vercel.app/
⚙️ **Backend API:** https://devinsight-ab9t.onrender.com

---

## 🧠 What is DevInsight?

DevInsight is a **full-stack engineering intelligence platform** that transforms raw developer activity data into **actionable insights, performance scoring, and decision support systems**.

> It is designed to simulate real-world engineering analytics tools used in high-performing tech teams.

---

## 🎯 Core Idea

```text
Raw Engineering Data → Metrics Engine → Insight Engine → Action Layer
```

Instead of showing numbers, DevInsight answers:

* Why is performance degrading?
* Where is the bottleneck?
* What should the team do next?

---

# 🏗️ SYSTEM ARCHITECTURE

## 🔷 High-Level Architecture

```text
┌────────────────────────────────────────────┐
│              FRONTEND (React)              │
│  - Dashboard UI                           │
│  - Charts & Visualizations                │
│  - User Interaction Layer                 │
└───────────────────┬────────────────────────┘
                    │ REST API
┌───────────────────▼────────────────────────┐
│            BACKEND (Node + Express)        │
│  - Metrics Calculation Engine             │
│  - Insight Engine                         │
│  - Data Aggregation Layer                 │
└───────────────────┬────────────────────────┘
                    │
┌───────────────────▼────────────────────────┐
│              DATA SOURCE                   │
│  - Excel (Simulated Jira/Git/CI data)     │
│  - Issues / PRs / Deployments / Bugs      │
└────────────────────────────────────────────┘
```

---

## 🔄 Data Flow Diagram

```text
[Excel Data]
     ↓
[Data Parser (XLSX)]
     ↓
[Metrics Engine]
     ↓
[Insight Engine]
     ↓
[REST API Layer]
     ↓
[Frontend Dashboard]
     ↓
[User Decisions 🚀]
```

---

## ⚙️ Internal Processing Pipeline

```text
1. Extract → Read Excel (issues, PRs, bugs)
2. Transform → Normalize developer data
3. Compute → Calculate metrics
4. Analyze → Generate insights
5. Output → Send JSON response
```

---

# 👨‍💻 DEVELOPER DASHBOARD

## 🧩 Features

* 📊 Real-time metrics visualization
* 🧠 Smart insight generation
* 🚀 Action recommendations
* 🎯 Performance scoring (0–100)
* 📈 Trend analysis (multi-metric charts)

---

## 📊 Metrics Engine

| Metric               | Formula             |
| -------------------- | ------------------- |
| Lead Time            | PR Created → Deploy |
| Cycle Time           | Start → Done        |
| Bug Rate             | Bugs / Total Issues |
| Deployment Frequency | Count of Deploys    |
| PR Throughput        | Merged PRs          |

---

## 🧠 Performance Scoring Algorithm

```js
Score = 100 
        - (LeadTime × 5) 
        - (BugRate × 50)
```

---

# 👨‍💼 MANAGER DASHBOARD

## 📊 Team Intelligence

* Aggregated team metrics
* Developer ranking system
* Top & bottom performer detection
* Team health score

---

## 🏆 Ranking Logic

```text
Score ↓ = High Risk
Score ↑ = High Performer
```

---

## 🔥 Insights Generated

* 🚨 High bug rate → Quality issue
* ⏳ High lead time → Review bottleneck
* 📉 Low throughput → Productivity gap

---

# 🧠 INSIGHT ENGINE (CORE LOGIC)

Rule-based reasoning system:

```text
IF bugRate > 0.3 → "Improve testing"
IF leadTime > 7 → "Speed up PR reviews"
IF throughput < 10 → "Increase PR frequency"
```

---

# 🎨 UI / UX ENGINEERING

* 🌌 Animated particle background
* 🎨 Glassmorphism UI
* ⚡ Micro-interactions (Framer Motion)
* 📊 Interactive charts (Recharts)
* 🔔 Real-time alert system

---

# 🛠️ TECH STACK

## Frontend

* React (Vite)
* Tailwind CSS
* Framer Motion
* Recharts

## Backend

* Node.js
* Express.js
* XLSX

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# ⚙️ PROJECT STRUCTURE

```text
DevInsight/
├── backend/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── data/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
```

---

# 🚀 SCALABILITY DESIGN

* Modular architecture
* Stateless APIs
* Extendable insight engine
* Plug-and-play data sources

---

# ⚡ PERFORMANCE OPTIMIZATION

* Memoization (React useMemo)
* Efficient aggregation logic
* Minimal API payload
* Component-level rendering

---

# 🔮 FUTURE ROADMAP

* 🤖 AI-powered insights (LLM integration)
* 🔐 Authentication system
* 📡 Real-time data streaming
* 🌐 Custom domain
* 📊 Jira/GitHub integration

---

# 🎤 INTERVIEW EXPLANATION

> “DevInsight is a full-stack analytics system that transforms engineering data into decision intelligence using a metrics engine and insight engine, enabling both developers and managers to optimize productivity.”

---

# 👩‍💻 AUTHOR

**Saloni Saini**
🔗 https://github.com/SaloniSsSaini

---

# ⭐ SUPPORT

If you like this project:

⭐ Star the repo
📢 Share feedback
🚀 Fork & build on top

---

# 🔥 FINAL NOTE

This project demonstrates:

✔ Full-stack development
✔ Data processing pipelines
✔ System design thinking
✔ Real-world engineering analytics

> Built with a focus on **clarity, scalability, and impact** 🚀
