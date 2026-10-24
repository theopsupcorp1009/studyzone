# 🎓 StudyZone

A modern student registration and management portal built with **Next.js**, **React**, and **Tailwind CSS**. Administrators can register students, manage subjects, and view detailed records from a clean dashboard, all backed by a dedicated Express and MongoDB REST API.

🔗 **Live App:** [studyzone-psi.vercel.app](https://studyzone-psi.vercel.app/)
📦 **Repository:** [theopsupcorp1009/studyzone](https://github.com/theopsupcorp1009/studyzone)
🖥️ **Server API:** [studyzone-server.onrender.com](https://studyzone-server.onrender.com/)
📦 **Server Repository:** [theopsupcorp1009/studyzone-server](https://github.com/theopsupcorp1009/studyzone-server)

---

## ✨ Features

- **Landing page** with a hero banner and a one-click entry to the student portal
- **Portal dashboard** showing total students, total subjects, recently registered students, and a subject overview
- **Student management** (`/registration-portal/student-list`):
  - Register a new student through a dialog form
  - Course selection populated from the live subjects list
  - Edit and delete students
  - Detailed student profile page with enrolled course, registration date, and contact information
- **Subject management** (`/registration-portal/subjects`):
  - Add, edit, and remove subjects
  - Detailed subject page with course information, duration, and description
- **Client-side validation** for email and phone number, backed by server-side validation
- **Toast notifications** for success and error feedback, including server error messages and connection failures
- Collapsible portal navigation menu with quick links
- Responsive layout that works on mobile, tablet, and desktop
- Built on a **shadcn/ui** component library

---

## 🖥️ Tech Stack

| Layer            | Technology                                          |
|------------------|------------------------------------------------------|
| Framework        | [Next.js](https://nextjs.org/) 16 (App Router)       |
| UI Library       | React 19 with React Compiler                         |
| Styling          | Tailwind CSS v4, daisyUI, tw-animate-css             |
| Components       | shadcn/ui, Base UI                                   |
| Icons            | react-icons, lucide-react                            |
| Notifications    | react-toastify                                       |
| Backend API      | [StudyZone Server](https://github.com/theopsupcorp1009/studyzone-server) (Express + MongoDB) |
| Deployment       | Vercel                                               |

---

## 📂 Project Structure

```
studyzone/
├── public/                                   # Static assets
├── src/
│   ├── app/
│   │   ├── layout.js                         # Root layout
│   │   ├── (main)/
│   │   │   ├── layout.js                     # Public site layout (navbar, footer)
│   │   │   └── page.js                       # Landing page
│   │   └── registration-portal/
│   │       ├── layout.js                     # Portal layout
│   │       ├── page.jsx                      # Portal dashboard
│   │       └── (pages)/
│   │           ├── student-list/
│   │           │   ├── page.jsx              # Student list and management
│   │           │   └── [studentId]/page.jsx  # Student details
│   │           └── subjects/
│   │               ├── page.jsx              # Subject list and management
│   │               └── [subjectId]/page.jsx  # Subject details
│   ├── components/
│   │   ├── Banner.jsx / Navbar.jsx / Footer.jsx
│   │   ├── portalComponents/
│   │   │   ├── PortalNav.jsx                 # Portal navigation menu
│   │   │   ├── TotalCountCard.jsx            # Stat card
│   │   │   ├── AddStudentDialog.jsx
│   │   │   ├── UpdateStudentInfo.jsx
│   │   │   ├── DeleteStudent.jsx
│   │   │   ├── AddSubjectDialog.jsx
│   │   │   ├── UpdateSubjectInfo.jsx
│   │   │   └── RemoveSubjects.jsx
│   │   └── ui/                               # shadcn/ui components
│   ├── hooks/                                # Custom React hooks
│   └── lib/                                  # Utilities
├── components.json                           # shadcn/ui configuration
├── next.config.mjs
├── jsconfig.json
├── package.json
└── .env                                      # Environment variables (never commit)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (recommended: latest LTS)
- npm (or yarn / pnpm / bun)
- A running instance of the [StudyZone Server](https://github.com/theopsupcorp1009/studyzone-server), either locally or the hosted one

### Installation

```bash
# Clone the repository
git clone https://github.com/theopsupcorp1009/studyzone.git
cd studyzone

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_URL=https://studyzone-server.onrender.com
```

`NEXT_PUBLIC_URL` is the base URL of the backend API. To use a local server instead, set it to `http://localhost:5000`.

> Keep `.env` out of version control if it ever holds private values.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## 🎛️ How to Use

1. Open the **Home** page and click **Launch Student Portal**.
2. On the **dashboard**, review total students, total subjects, and recent activity.
3. Go to **Manage Subjects** to add the courses your institute offers.
4. Go to **Manage Students** and click to **register a student**, choosing a course from your subjects.
5. Use **View** to open a full student profile, or the edit and delete actions to maintain records.

---

## 🔗 Backend Integration

This app talks to the StudyZone Server over REST using `NEXT_PUBLIC_URL`:

| Action                | Request                      |
|-----------------------|------------------------------|
| List students         | `GET /students`              |
| Student details       | `GET /students/:id`          |
| Register student      | `POST /students`             |
| Update student        | `PATCH /students/:id`        |
| Delete student        | `DELETE /students/:id`       |
| List subjects         | `GET /subjects`              |
| Subject details       | `GET /subjects/:id`          |
| Add subject           | `POST /subjects`             |
| Update subject        | `PATCH /subjects/:id`        |
| Delete subject        | `DELETE /subjects/:id`       |

Full API documentation lives in the [server README](https://github.com/theopsupcorp1009/studyzone-server#readme).

---

## 🌐 Deployment

This app is deployed on **Vercel**. Any push to the connected branch triggers an automatic build and deployment.

To deploy your own copy:

1. Push this repository to your GitHub account.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add the `NEXT_PUBLIC_URL` environment variable pointing to your deployed server.
4. Vercel auto-detects the Next.js framework, so no extra configuration is needed.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. Add your preferred license (e.g., MIT) here.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/)
- Hosted on [Vercel](https://vercel.com/)

---

## 📝 Project Summary

**StudyZone** is a full-stack student registration and management system split into two projects: a Next.js frontend and an Express and MongoDB backend. The frontend uses the App Router with React 19 and the React Compiler to deliver a responsive admin portal with a stats dashboard, student and subject management dialogs, and detailed record pages, styled with Tailwind CSS, daisyUI, and shadcn/ui. Data is fetched server-side from the REST API for always-fresh pages, while client-side validation and toast notifications give users instant feedback before the server applies its own validation and duplicate checks. The project demonstrates practical experience with full-stack architecture, CRUD workflows, dynamic routing, component-driven UI design, and deploying separate frontend and backend services on Vercel and Render.
