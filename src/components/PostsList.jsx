import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";
import classes from './PostsList.module.css';


const PostsList = ({isPosting,onStopPosting}) => {
    // const [modalIsVisible,setModalIsVisible]=useState(true);
    const [entredBody,setEntredBody]=useState('');
    const [entredAuthor,setEntredAuthor]=useState('');


    function BodyChangeHandler(event){
        
        setEntredBody(event.target.value)
    
    }
    
    function AuthorChangeHandler(event){
        setEntredAuthor(event.target.value)
    }
    return ( 
        <>
        {isPosting && (<Modal onClose={onStopPosting}>
        <NewPost
        onCancel={onStopPosting}
        />
        </Modal>)}
        
        <ul className={classes.posts}>

            

        </ul>
        
        </>
     );
}
 
export default PostsList;