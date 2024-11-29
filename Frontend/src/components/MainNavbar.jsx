import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import BlogPosts from './BlogPosts'
import AddBlog from './AddBlog'
import './MainNavbar.css'
const Navbar = () => {
  return (
    
    <div>
    <Router>
    
<nav>

  <Link to="/">Home</Link>
  <Link to="/addBlog">Add Blog</Link>
  
</nav>

    

<Routes>

  <Route path='/' element={<BlogPosts />}/>
  
  <Route path='/addBlog' element={<AddBlog />}/>
  
  </Routes>




    </Router>
</div>


)
}

export default Navbar