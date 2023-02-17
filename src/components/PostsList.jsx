import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";  
import classes from './PostsList.module.css';
// import { useState } from "react";

const PostsList = ({isPosting,onStopPosting}) => {
    // const [modalIsVisible,setModalIsVisible]=useState(true);
    // fetch('http://localhost:3000/posts').then((response => response.json()).then(data=>{
    //     setPosts(data.posts);
    // });
    const [posts,setPosts] = useState([]);
    const [isFetching,setFetching] = useState(false);

    useEffect(()=>{
        async function fetchPosts(){

            setFetching(true);
            const response  = await fetch('http://localhost:3000/posts');

            const resData = await response.json();
            setPosts(resData.posts);
            setFetching(false);

            }    

            fetchPosts();
    },[]);

    function addPostHandler(postData){
        fetch("http://localhost:3000/posts",{
            method: "POST",
            body:JSON.stringify(postData),
            headers: {'Content-Type': 'application/json'},

        })
        setPosts((existingPosts)=>[postData,...existingPosts]);

    }
    return ( 
        <>
        {!isFetching && isPosting && (<Modal onClose={onStopPosting}>
        <NewPost
        onCancel={onStopPosting} onAddPost={addPostHandler}
        />
        </Modal>)}
        {posts.length>0 && 
        <ul className={classes.posts}>

            {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)}

        </ul>
         }

         {
           !isFetching && posts.length == 0 &&(
            <div style={{textAlign: 'center',color: 'white'}}>
                <h2>There are no posts yet</h2>
                <p>Start adding some!</p>
            </div>
            )
         }

         {isFetching && (
              <div style={{textAlign: 'center',color: 'white'}}>
              <p>Loading posts ...</p>
          </div>
         )}
        </>
     );
}
 
export default PostsList;