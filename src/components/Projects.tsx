const projects = [
  { name: 'Go CLI', desc: 'Публикация бинарников в Releases' },
  { name: 'Go GUI', desc: 'Fyne + MSYS2 + 3 раннера' },
  { name: 'Hello Pages', desc: 'Деплой на GitHub Pages' },
]

export function Projects() {
  return (
    <section className="card">
      <h2>Проекты серии</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong> — {p.desc}
          </li>
        ))}
      </ul>
    </section>
  )
}
