import React, {useMemo} from "react";
import MaterialReactTable from "material-react-table";



interface IPost {
  posts: {
    idpost: number;
    idUser: number;
    post_corpo: string;
    post_titolo: string;
    post_date: string;
    category_post: string;
    username: string;
  }
}

export const Posts = ({ posts }: IPost) => {
  console.log(typeof(posts));
  let result = Object.values(posts);
  console.log(result)


  const columns = useMemo(
    () => [
      { accessorKey: "post_titolo", header: "Titolo", enableClickToCopy: true },
    ],
    []
  );

  return <div>


  </div>;
};





/*<MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 20,
          },
        }}
        columns={columns}
        data={result}
      />
*/