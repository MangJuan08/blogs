import React, { useEffect } from 'react'

const CommentSection = ({commentList}) => {

    useEffect(() => {
    console.log(commentList[0].data.length)
    }, [])

  return (
    <div><br></br>
    <ul>
    {commentList[0].data.length > 0 ? commentList[0].data.map((item, i) => <li key={item.idcomment}> {item.commentText}</li> ) : ""}
    </ul></div>
  )
}

export default CommentSection

/*


{commentList[0].data.length > 0 commentList[0].data.map((item, i) => <li>{item.commentText}</li> : "") }

*/