import React from 'react'
import './AddBlog.css'
const AddBlog = () => {
  return (
    <div id="AB">

    <form id="BF">
<h2>Add a Blog</h2>
<label for="BlogName">Blog Name</label>
    <input type="text" name="BlogName" id="BlogName" placeholder='Enter BlogName' />
   
<label for="Description">Blog Description</label>
    <textarea type="text" name="Description" id="Description" placeholder='Enter Description'/>
    
<label for="Author">Blog Author</label>
    <input type="text" name="Author" id="Author" placeholder='Enter Blog Author Name' />
   
    


    </form>



    </div>
  )
}

export default AddBlog