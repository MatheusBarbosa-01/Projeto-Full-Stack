// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'Minha lista de tarefas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}