# 🎨 Modern Admin Dashboard CMS

A beautiful, responsive admin dashboard built with React, TypeScript, and Tailwind CSS. Features dark mode support, modern UI components, and comprehensive functionality for managing users, products, analytics, and more.

## ✨ Features

### 🎯 Core Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **TypeScript**: Full type safety and better development experience
- **Real-time Data**: Live charts and analytics with Recharts

### 📊 Dashboard Components

- **Analytics Dashboard**: Revenue charts, user statistics, and performance metrics
- **User Management**: CRUD operations for user accounts with search and pagination
- **Product Management**: Inventory management with stock tracking
- **Sales Analytics**: Revenue tracking and order management
- **Mail System**: Inbox interface with message preview
- **Feedback System**: User feedback collection and management

### 🎨 UI Components

- **Custom Components**: Built with shadcn/ui for consistency
- **Interactive Charts**: Beautiful data visualization
- **Data Tables**: Sortable, searchable tables with pagination
- **Form Components**: Validated forms with React Hook Form
- **Modal Dialogs**: Confirmation dialogs and alerts
- **Navigation**: Sidebar navigation with active states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/admin-dashboard-cms.git
cd admin-dashboard-cms
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── layouts/        # Layout components
│   └── ...             # Feature-specific components
├── pages/              # Page components
├── data/               # Mock data and types
├── types/              # TypeScript type definitions
├── lib/                # Utility functions
└── routes.tsx          # Application routing
```

## 🎨 Theme System

The application supports both light and dark themes:

- **Automatic Detection**: Detects user's system preference
- **Manual Toggle**: Click the theme toggle button in the navbar
- **Persistent**: Remembers user's choice across sessions
- **Smooth Transitions**: Beautiful theme switching animations

## 📱 Responsive Design

- **Desktop**: Full-featured dashboard with sidebar navigation
- **Tablet**: Optimized layout with collapsible sidebar
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🛠️ Built With

- **React 19** - Modern React with latest features
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Recharts** - Beautiful charts and data visualization
- **Lucide React** - Beautiful icons
- **shadcn/ui** - High-quality UI components
- **React Hook Form** - Form handling and validation
- **Sonner** - Toast notifications

## 📊 Features Overview

### Dashboard

- Revenue statistics with trend indicators
- User growth charts
- Recent transactions
- New member registrations

### User Management

- User listing with search and pagination
- Add, edit, and delete users
- User status management (Active, Passive, Pending)
- Avatar and profile management

### Product Management

- Product catalog with categories
- Stock level tracking
- Price management
- Product status indicators

### Analytics

- Traffic source analysis
- Device usage statistics
- Revenue trends
- Performance metrics

### Mail System

- Inbox interface
- Message preview
- Read/unread status
- Responsive mail layout

## 🎯 Key Features

### Dark Mode

- 🌙/☀️ Theme toggle in navbar
- Automatic system preference detection
- Persistent theme storage
- Smooth transitions

### Data Management

- Search functionality across all tables
- Pagination for large datasets
- Sort and filter capabilities
- Bulk operations support

### User Experience

- Loading states and animations
- Toast notifications
- Confirmation dialogs
- Error handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide](https://lucide.dev/) for beautiful icons
- [Recharts](https://recharts.org/) for data visualization

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [simurgh420)

---

## 🇮🇷 نسخه فارسی

یک داشبورد ادمین مدرن با React، TypeScript و Tailwind CSS که از دارک‌مود پشتیبانی می‌کند و شامل صفحه‌های مدیریت کاربران، محصولات، تحلیل‌ها، فروش، ایمیل و… است.

### ✨ ویژگی‌ها

- **رابط کاربری مدرن** با طراحی تمیز و حرفه‌ای
- **پشتیبانی از دارک‌مود** با ذخیره ترجیح کاربر
- **واکنش‌گرا** برای دسکتاپ، تبلت و موبایل
- **TypeScript** برای ایمنی تایپ و DX بهتر
- **نمودارهای زنده** با Recharts

### 🚀 شروع سریع

1. نصب پیش‌نیازها: Node.js 18+
2. نصب وابستگی‌ها:

```bash
npm install
```

3. اجرای پروژه در حالت توسعه:

```bash
npm run dev
```

4. باز کردن در مرورگر: `http://localhost:5173`

### 📁 ساختار پروژه

```
src/
├── components/          # کامپوننت‌های قابل استفاده مجدد
│   ├── ui/              # کامپوننت‌های shadcn/ui
│   ├── layouts/         # لایه‌بندی‌ها
│   └── ...              # سایر کامپوننت‌ها
├── pages/               # صفحات
├── data/                # داده‌های نمونه
├── types/               # تایپ‌ها
└── routes.tsx           # مسیرها
```

### 🎨 سیستم تم

- تشخیص خودکار تم سیستم
- دکمه تغییر تم در نوار بالا
- ذخیره تم در localStorage
- ترنزیشن نرم هنگام تغییر تم

### 📊 مدیریت داده

- جستجو در جداول
- صفحه‌بندی
- فیلتر و مرتب‌سازی

### 📞 پشتیبانی

- در صورت وجود سوال، یک Issue در گیت‌هاب ثبت کنید.
- سازنده: [simurgh](https://github.com/simurgh)
