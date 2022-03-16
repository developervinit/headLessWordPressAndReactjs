import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImgComp from "./ImgComp.jsx";
const axios = require("axios");



const Posts = () => {

    const [ posts, setPosts ] = useState([]);

    //url of the wordpress website to extract the post
    const url = "https://ayurvedicstore.dponweb.com/wp-json/wp/v2/posts";

    const getPost = async () => {
        const response = await axios.get(url);
        setPosts(response.data);
    }

    useEffect(() => {
        getPost();
    }, []);

    //removing html from the post content
    function removeHtmlAndSlice(data){
        return data.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 200);
    }
    
    //putting jsx into the variable
    let allPosts = posts.map(post => {
        return <div className="postBox" key={post.id}>
           <ImgComp postContent={post} />
           <div className="contentContainer">
             <div><span>Id:</span> <i>{post.id}</i></div>
             <div className="title"><span>Title:</span> {post.title.rendered}</div>
             <div className="date"><span>Date:</span> {post.date}</div>
             <div className="content">{removeHtmlAndSlice(post.content.rendered)} <Link className="postLink" to={`/post/${post.id}`}>Read More...</Link></div>
           </div>
           
        </div>
  });

    return(<>
    <h1 className="postHeading">Post</h1>
     <div className="postPageContainer">
      {posts.length === 0 ? <h1>✋ Ruko Jaraaa....</h1> : allPosts}
     </div>
    </>)
}

export default Posts;