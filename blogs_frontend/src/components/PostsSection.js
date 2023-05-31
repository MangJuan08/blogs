import React, { useState, useEffect, useMemo } from "react";
import * as moment from "moment";
import { Link } from "react-router-dom";
import MaterialReactTable from "material-react-table";
import { Box, Typography } from "@mui/material";

const styleCards = {
  marginBottom: "20px",
};
const PostsSection = ({ posts }) => {

  console.log(posts[0]);

  const columns = useMemo(
    () => [
      { accessorKey: "post_titolo", header: "Titolo", enableClickToCopy: true },
    ],
    []
  );

  return (
    <div>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 20,
          },
        }}
        columns={columns}
        data={posts[0].data}
        enableStickyHeader
        enableColumnResizing
        enableColumnOrdering
        getRowId={(row) => console.log(row.idpost)}
        renderDetailPanel={({ row }) => (
          <Box
            sx={{
              display: "grid",
              marginLeft: "100px",
              gridTemplateColumns: "1fr 1fr",
              width: "100%",
            }}
          >
            <Typography>
              <p>
                <br></br>

                <figure>
                  <figcaption class="blockquote-footer">
                    Posted when:{" "}
                    {moment(posts[0].data.post_date).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </figcaption>
                </figure>
              </p>
            </Typography>
          </Box>
        )}

        muiTableBodyRowProps={({ row }) => ({
          //implement row selection click events manually
          onClick: () => {
            window.location.href="http://localhost:3000/singlePost/"+row.original.idpost;
            console.log(row.original.idpost)
          },
          sx: { cursor: 'pointer' }
           
        })}
      />
    </div>
  );
};

export default PostsSection;

/*  {posts[0].data.map((item, i) => {
        return (
          <div className="card" style={styleCards} key={i}>
            <div className="card-header">
              <h6>{item.post_titolo}</h6>
            </div>
            <div className="card-body">
              <Link to={`http://localhost:3000/singlePost/${item.idpost}`}>
                {item.post_corpo.substring(0, 50) + ". . . . . . . . . . "}
              </Link>
            </div>
            <div className="card-footer text-body-secondary">
              <p>{moment(item.post_date).format("MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
          </div>
        );
      })}*/
