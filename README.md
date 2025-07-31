# Radiant RX analysis Admin Panel

A modern and responsive **Admin Panel** built with **Next.js**, designed for seamless integration with APIs and optimized performance. Ideal for dashboards, content management, and data analytics interfaces.

---

## 📦 Features

- ✅ **Next.js 15+ (App Router)**
- ⚛️ **React 19** with Server Components
- 🎨 **Tailwind CSS** for utility-first styling
- 🧱 **TypeScript** support
- 🔒 **Authentication** (e.g., JWT, Clerk, Auth.js, or custom)
- 🌐 **API Integration** (REST or GraphQL-ready)
- ⚙️ **Reusable UI Components**
- 📊 **Charts** & **Tables** for data visualization
- 📁 Dynamic Routing for admin modules

---

## 📁 Folder Structure

```bash
.
├── src/
│    ├── app/             # App router pages
│    ├── components/      # Shared UI components
│    ├── hooks/           # Custom React hooks
│    ├── providers/       # Custom React providers
│    ├── features/        # App feature
│    ├── lib/             # Utility functions (API, auth, etc.)
├── public/              # Static files
├── types/               # TypeScript types
├── middleware.ts        # Auth and routing middleware
├── tailwind.config.js   # Tailwind CSS config
└── next.config.js       # Next.js config
```

---

## 🚀 Getting Started

1. Clone the Repo

```bash
git clone https://github.com/your-org/admin-panel.git
cd admin-panel
```

2. Install Dependencies

```bash
npm install
```

3. Create a `.env` file in the root:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

4. Run the Dev Server

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser 🚀

---

## 🛠 Available Scripts

```bash
npm run dev         # Run development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```
