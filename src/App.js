import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Create from "./create"
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SearchBox from './SearchBox';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
     <SearchBox /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />}/>
          <Route path="/blogs/:id" element={<BlogDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
