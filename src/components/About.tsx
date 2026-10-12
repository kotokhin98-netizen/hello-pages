export function About() {
  return (
    <section className="card">
      <h2>О проекте</h2>
      <p>
        Этот сайт автоматически деплоится на <strong>GitHub Pages</strong>{' '}
        при push в <code>main</code>. Сборка, тесты и публикация
        выполняются в <strong>GitHub Actions</strong>.
      </p>
    </section>
  )
}
