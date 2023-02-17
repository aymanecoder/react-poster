
import classes from './NewPost.module.css';
import { useState } from 'react';
const NewPost = (props) => {
  const [entredBody,setEntredBody]=useState('');
    const [entredAuthor,setEntredAuthor]=useState('');


    function BodyChangeHandler(event){
        
        setEntredBody(event.target.value)
    
    }
    
    function AuthorChangeHandler(event){
        setEntredAuthor(event.target.value)
    }
    function SubmitHandler(event){
      event.preventDefault();
      const postData ={
          body: entredBody,
          author:entredAuthor
      };
      // console.log(postData);
      props.onAddPost(postData);
      onCancel();

    }

    return ( 
        <form className={classes.form} onSubmit={SubmitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={BodyChangeHandler}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={AuthorChangeHandler}/>
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button>Submit</button>

        </p>
      </form>
     );
}
 
export default NewPost;