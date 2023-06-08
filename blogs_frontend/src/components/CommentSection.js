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
              <div>
                <br></br>
                <div class="card" key={item.idcomment}>
                  <h5 class="card-header">Featured</h5>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>{item.commentText}</p>
                      <footer class="blockquote-footer">
                     
                        <cite title="Source Title">   {moment(item.datetime_posted).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}{" "}</cite>
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


{commentList[0].data.length > 0 commentList[0].data.map((item, i) => <li>{item.commentText}</li> : "") }

*/
