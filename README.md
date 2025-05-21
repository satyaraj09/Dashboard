# React Frontend Developer – Test Assignment

This project is a **Responsive Dashboard UI** built using [shadcn/ui](https://ui.shadcn.com/) components. The assignment was completed as part of a frontend developer test.

## Live Demo

🔗 [View Live Site](https://your-deployment-link.com)  
📦 [GitHub Repository](https://github.com/satyaraj09/Dashboard)

---

## Project Overview

This project includes:

- ✅ **Sidebar Navigation**
- ✅ **Responsive design**
- ✅ **React Router for basic routing**
- ✅ **Dashboard Table UI with dummy data**
- ✅ **Sidebars with routing to Error Page**
- ✅ **Loading skeleton & minimal loading state**
- ✅ **Implementing Searching and Sorting Methods**


The UI is **not a pixel-perfect copy** of the reference image but almost **same** and represents it with Shadcn components in a clean, modern way.

---

## Components Used

### Sidebar Block

```bash
npx shadcn@latest add sidebar-07
```

### Components

```bash
npx shadcn@latest add checkbox
npx shadcn@latest add select
npx shadcn@latest add table
```

## Run Locally

1. Clone the repository

```bash
git clone https://github.com/satyaraj09/Dashboard
cd Dashboard
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```


## 📁 Folder Structure

```
/src
├── /components
│   │   └──ui                 # shadcn-ui components
│   ├── app-sidebar.tsx       # shadcn-ui block modified
│   ├── ChatBot.tsx           # ChatBot Floating Button
│   ├── data-table.tsx        # shadcn-ui block modified
│   ├── Error.tsx             # Error Page
│   └── nav-main.tsx          # shadcn-ui block modified
├── /data
│   ├── articles.ts
│   └── navMenu.ts
├── /pages
│   └── Dashboard.tsx
├── App.tsx
├── index.css
└── main.tsx
```

