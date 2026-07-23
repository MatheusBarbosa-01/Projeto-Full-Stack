export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 8 }}>📝 Todo App</h1>
      <p style={{ color: '#666', fontSize: '1.1rem' }}>
        Projeto full stack com Next.js + Neon DB
      </p>
      <div style={{
        marginTop: 40, padding: 24, backgroundColor: '#fff',
        borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <h2>O que vamos construir:</h2>
        <ul style={{ marginTop: 12, paddingLeft: 20 }}>
          <li>Login com GitHub (NextAuth.js)</li>
          <li>Banco de dados PostgreSQL (Neon)</li>
          <li>CRUD de tarefas por usuário</li>
          <li>Deploy na Vercel</li>
        </ul>
      </div>
    </main>
  );
}