import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import SinglePost from './SinglePost';
import CreateBlog from './CreateBlog';

function App() {
  return (
    <Router>
      <div className='container'>

        <header className='header'>
          <Navbar />
        </header>

        <section className='content'>
          <Routes>
              <Route exact path="/" element={<Home />} />
          </Routes>

          <Routes>
              <Route path="/post/:id" element={<SinglePost />} />
          </Routes>

          <Routes>
              <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </section>

      </div>
    </Router>
    
  );
}

export default App;
