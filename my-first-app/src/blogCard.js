import React from 'react'
import { dumpLogs } from './utils';
import classes from './BlogText.module.css'

const BlogCard = (props) =>{
        dumpLogs(props)
        return (
            <div className = {classes.BlogText}>
              <h3>{props.title}</h3>
              <p>{props.description}</p>  

              <p>Like Count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
              <button onClick={props.onCountLikeBtn}>Like</button>
            </div>
        )
    }

export default BlogCard;