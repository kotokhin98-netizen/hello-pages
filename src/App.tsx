import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <footer className="footer">
        <p>Deployed with ❤️ to GitHub Pages</p>
      </footer>
    </div>
  )
}
