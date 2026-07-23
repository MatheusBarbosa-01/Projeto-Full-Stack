// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'Minha lista de tarefas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <header>
        <nav id="navbar">
          <li><a href="/" className='page'>Home</a></li>
          <li><a href="/quemSomos" className='page'>Quem Somos</a></li>
          <li><a href="/contato" className='page'>Contato</a></li>
        </nav>
      </header>
      <body>{children}</body>
      <footer id="footer">
        <p>&copy; 2023 Minha Lista de Tarefas. Todos os direitos reservados.</p>
      </footer>
    </html>
  );
}