import React, { useMemo } from "react";
import * as moment from "moment";
import { useNavigate } from "react-router-dom";
import MaterialReactTable from "material-react-table";
import { Box, Typography } from "@mui/material";

const PostsSection = ({ posts }) => {
  const navigate = useNavigate();
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
              <br></br>
              <figure>
                <figcaption class="blockquote-footer">
                  Posted when:{" "}
                  {moment(row.original.post_date).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}{" "}
                  - Posted by: <cite>{row.original.username}</cite>
                </figcaption>
              </figure>
            </Typography>
          </Box>
        )}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => {
            navigate("/singlePost/" + row.original.idpost);
          },
          sx: { cursor: "pointer" },
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
