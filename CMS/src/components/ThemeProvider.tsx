import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from '@/context/ThemeContext';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  //برای این که تم مورد نظر یک بار فقط موقع مانت انجرا شود
  useEffect(() => {
    //گرفتن تم از لوکال استورج
    const savedTheme = localStorage.getItem('theme') as Theme;
    //  گرفتن تم مروگر
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    // برای اولیت قرار دادن تم سیستم عامل نسبت به تم مرورگر
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    // برای کار با تلوین سی اس اس اضافه یا حذف کردن کلاس دارک
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    //  برای ذخیره در لوکال استورج
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  // به اشتراک گذاشتن  تم و تاگل تم برای فرزندان ThemeContext.Provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
