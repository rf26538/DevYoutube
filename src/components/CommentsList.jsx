import React from 'react'
import Comment from './Comment'

const CommentsList = ( { data } ) => {
	return data.map((comment, index) => (
        <div>
            <Comment key={"comment007"+index} data={comment}/>
            <div className=' border border-l-black ml-5'>
                <CommentsList data={comment.replies}/>
            </div>
        </div>
    ))
}

export default CommentsList