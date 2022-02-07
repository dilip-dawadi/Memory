import React, {useState, useRef} from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost} from '../../actions/posts'
import useStyles from './styles'

const CommentSection = ({post}) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles();
    const commentRef = useRef();
    const dispatch = useDispatch();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const handleClick = async () => {
        const finalComment = `${user?.result?.name}: ${comment}`;
       const newComment = await dispatch(commentPost(finalComment, post._id));
       setComments(newComment);
       setComment('');
       commentRef.current.scrollIntoView({behavior: 'smooth'});
    }
         return (
             <div>
        <div className={classes.CommentSection}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h5'>Comments</Typography>
                {comments?.map((c, i) => (
                    <Typography key={i} gutterBottom variant='subtitle1'>
                        <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
                    </Typography>
                ))}
                <div ref={commentRef} />
            </div>
            {user?.result?.name &&(
                    <div style={{width: '70%'}}>
                    <Typography variant='h6' gutterBottom>Write a Comments</Typography>
                    
                    <TextField
                    fullWidth
                    rows={4}
                    variant='outlined'
                    label='Comments'
                    multiline
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} />
                    <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant='contained' onClick={handleClick}color='primary' >Comment</Button>
        </div>
        ) }
        </div>
        </div>
        )
};
export default CommentSection;
