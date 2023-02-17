import classes from './Post.module.css'
// const post =["aymane","biti"]
function Post(props) {

    // const choseName = Math.random()>0.5?post[0]:post[1];
    return ( 
        <div className={classes.post}>
            <p className={classes.author}> {props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </div>
     );
}

export default Post;