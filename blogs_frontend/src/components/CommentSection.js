import React, { useEffect } from "react";
import * as moment from "moment";

const CommentSection = ({ commentList }) => {
  useEffect(() => {
    console.log(commentList[0].data.length);
  }, []);

  return (
    <div>
      <br></br>
      <ul>
        {commentList[0].data.length > 0
          ? commentList[0].data.map((item, i) => (
            <div key={item.idcomment}>
              <br></br>
              <div className="card shadow " >
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{item.commentText}</p>
                    <footer className="blockquote-footer">

                      <cite title="Source Title">   {moment(item.datetime_posted).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )} by {item.username}</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))
          : ""}
      </ul>
    </div>
  );
};

export default CommentSection;

/*


<div class="d-flex position-relative">
  <img src="..." class="flex-shrink-0 me-3" alt="...">
  <div>
    <h5 class="mt-0">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>

*/
