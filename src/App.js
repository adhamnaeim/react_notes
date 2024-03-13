/**
 * the main app component that gets supplied to index.js
 */
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import './App.css'
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            {/* a router for the two primary page components */}
            <Route path="/"  element={<NotesListPage/>}/>
            <Route path="/note/:noteId" element={<NotePage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
