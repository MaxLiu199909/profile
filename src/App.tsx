import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import ProjectFour from './pages/ProjectFour';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const routerBasename = (() => {
    if (import.meta.env.DEV) {
      return '/';
    }

    if (!window.location.hostname.endsWith('github.io')) {
      return '/';
    }

    const [repoSegment] = window.location.pathname.split('/').filter(Boolean);
    return repoSegment ? `/${repoSegment}` : '/';
  })();

  return (
    <LanguageProvider>
      <Router basename={routerBasename}>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-one" element={<ProjectOne />} />
            <Route path="/project-two" element={<ProjectTwo />} />
            <Route path="/project-three" element={<ProjectThree />} />
            <Route path="/project-four" element={<ProjectFour />} />
          </Routes>
          <footer className="bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
              <p>{new Date().getFullYear()} Max Liu. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
