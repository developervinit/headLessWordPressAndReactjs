import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImgComp from "./ImgComp";
const axios = require("axios");

//this is a post component to show the perticular post according perticular id

const PostComp = () => {

    const [ postContent, setPostContent ] = useState({});

    let params = useParams();

    //url of the wordpress website to extract the post by id
    let postUrl = `https://ayurvedicstore.dponweb.com/wp-json/wp/v2/posts/${params.id}`;

    const fetchPostById = async (url) => {
        const response = await axios.get(url);

        setPostContent(response.data);
    }

    useEffect(() => {
        fetchPostById(postUrl);
    }, [postUrl]);


    //removing html from the post content
    function removeHtmlAndSlice(data){
        return data.replace(/<\/?[^>]+(>|$)/g, "");
    }

    //putting jsx into the variable
    let renderedPost = <div className="">
         <ImgComp postContent={postContent} />
         <div className="postCompId"><span>ID: </span>{postContent.id}</div>
         <div className="postCompDate"><span>Date: </span>{postContent.date}</div>
         <div className="postCompTitle"><span>Title: </span>{postContent.title && postContent.title.rendered}</div>
         <div className="postCompContent">{postContent.content && removeHtmlAndSlice(postContent.content.rendered)}</div>
    </div>

    return(<>
       <div className="postCompHeading">Post</div>
       <div className="postCompContainer">
         {Object.keys(postContent).length === 0 ? <h1 className="postCompLoading">✋ Ruko Jaraaa....</h1> : renderedPost}
        </div>
    </>)
}

export default PostComp;