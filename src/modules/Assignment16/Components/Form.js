import React,{useState} from "react";
import "./index.css";
import {
  
  Modal,
  
} from "@material-ui/core";
    const Form =(props) => {
        const [data, setData] = useState({
            id:"",
            image_url: "",
            post_title: "",
            categories: "",
            content: "",
            publishedby: "",
            views: "",
        });

        const{id,image_url,post_title,categories,content,publishedby,views} = data

        const handleChange = (e) => {
            setData({ ...data, [e.target.name]: e.target.value });
        };
        const handleSubmit = async(e) => {
          e.preventDefault();

          try {
            const response = await fetch(
              'https://v1.nocodeapi.com/yash1234/google_sheets/zdqfhomEHwSkVouu?tabId=Sheet1', 
              {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json',
                },
                body: JSON.stringify([
                  [id,image_url,
                  post_title,
                  categories,
                  content,
                  publishedby,
                  views],
                ]),
              }
              );
             await response.json();
             setData({ ...data,id:"",image_url: "",
             post_title: "",
             categories: "",
             content: "",
             publishedby: "",
             views: "",});
             console.log(image_url);
          } catch (err) {
            console.log(err);
            
          }
        };

    
  return (
  
    <>
      <div className="wrapper">
      <Modal  open={props.open} closeAfterTransition>
        <div className="form-wrapper">
          <h2>POSTING DATA</h2>
          <form  onSubmit={handleSubmit}>

          <div className="email">
              <label htmlFor="id">ID</label>
              <input type="text" name="id"  
              value = {id}
              onChange={handleChange}/>
            </div>
            <div className="email">
              <label htmlFor="image_url">Image URL</label>
              <input type="text" name="image_url"  
              value = {image_url}
              onChange={handleChange}/>
            </div>
            <div className="email">
              <label htmlFor="post_title">Views</label>
              <input type="text" name="post_title"  
              value = {post_title}
              onChange={handleChange}/>
            </div>

            <div className="email">
              <label htmlFor="categories">Title</label>
              <input type="text" name="categories"  
              value = {categories}
              onChange={handleChange}/>
            </div>
            <div className="email">
              <label htmlFor="content">Categories</label>
              <input type="text" name="content"  
              value = {content}
               onChange={handleChange}/>
            </div>
            <div className="email">
              <label htmlFor="publishedby">Content</label>
              <input type="text" name="publishedby" 
              value = {publishedby}
                onChange={handleChange} />
            </div>
            <div className="email">
              <label htmlFor="views">Published by</label>
              <input type="text" name="views"  
              value = {views}
              onChange={handleChange}/>
            </div>
           

            <button type='submit'>
          Submit
        </button>
        <button type='close' onClick={props.handleModal}>
          close
        </button>
          </form>
        </div>
        </Modal>
      </div>
    </>
  );
}
export default Form;