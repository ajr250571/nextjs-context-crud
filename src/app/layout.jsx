import { TaskProvider } from "@/context/TasksContex";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="container mx-auto px-4 h-screen">
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
