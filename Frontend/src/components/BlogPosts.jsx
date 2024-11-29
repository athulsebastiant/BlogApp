import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';


const BlogPosts = () => {


    const [items,setItems] = useState([]);
    useEffect(()=>{
        // call typicode api
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setItems(response.data))
        .catch(error => console.log(error));
        
    },[]) //put [] if you just want it to execute once when the page is loaded


    return (
    <div>
        
    <Card style={{ width: '100%',display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gap: '10px',padding: '10px',marginTop:'20px',height:'60px',marginBottom:"20px" }}>
      {
            items.map(item=>(
        
      <Card.Body style={{border:'2px solid',borderRadius:'6px',padding:"4px",display:"flex",flexDirection:"column"}}>
        
        
        <Card.Title style={{backgroundColor:"tomato"}} key={item.id}>Title: {item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{backgroundColor:"grey"}}>Id: {item.id}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{backgroundColor:"rgb(255, 229, 180)"}}>User Id: {item.userId}</Card.Subtitle>
        

        <Card.Text style={{backgroundColor:"skyblue"}}>
          Body: {item.body}
        </Card.Text>
        
        </Card.Body>
          ))
        }

    </Card>




    </div>
  )
}

export default BlogPosts





