import React, { useMemo, useRef, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import { useDropzone } from "react-dropzone";
import MaterialReactTable from "material-react-table";
import * as XLSX from "xlsx/xlsx";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export const Crud = () => {
  const [fileNames, setFileNames] = useState();
  const [tableData, setTableData] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone();

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const columns = useMemo(
    () => [
      { accessorKey: "data", header: "Data", enableClickToCopy: true },
      { accessorKey: "nome", header: "Nome", enableClickToCopy: true },
      { accessorKey: "cognome", header: "Cognome", enableClickToCopy: true },
      { accessorKey: "disp", header: "Dispositivo", enableClickToCopy: true },
      { accessorKey: "tipo", header: "Tipo", enableClickToCopy: true },
      { accessorKey: "marca", header: "Marca", enableClickToCopy: true },
      { accessorKey: "modello", header: "Modello", enableClickToCopy: true },
      { accessorKey: "seriale", header: "Seriale", enableClickToCopy: true },
      { accessorKey: "firma", header: "Firma", enableClickToCopy: true },
    ],
    []
  );

  const checkNames = () => {
    setFileNames(acceptedFiles);
  };

  const showNames = () => {
    let arr = Object.keys(fileNames).map((key) => {
      return fileNames[key].name.replace(/_/g, " ");
    });
    let ab = Object.values(arr).map((item) => {
      return item.replace(".pdf", "");
    });

    let cd = Object.values(ab).map((item) => {
      return item.split(" ");
    });

    let ef = cd.map((item) => {
      return {
        data: item[0],
        nome: item[1].toUpperCase(),
        cognome: item[2].toUpperCase(),
        tipo: item[3].toUpperCase(),
        disp: item[4].toUpperCase(),
        marca: item[5],
        modello: item[6],
        seriale: item[7],
        firma: item[8],
      };
    });

    setTableData(ef);
  };

  const clearTable = () => {
    setTableData([]);
  };


    
  const exportToCSV = () => {
    if (tableData.length > 0) {
      const ws = XLSX.utils.json_to_sheet(tableData);

      /* add to workbook */
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "foglio");

      /* generate an XLSX file */
      XLSX.writeFile(wb, "Assegnazione_Restituzione.xlsx");
alert("all goods");
      setTableData([]);
    } else {
      alert("nessun dati da esportare");
    }
  };
  
  return (
    <div>
      <NavbarSection />
      <br></br>
      <div className="container">
        <h1>CRUD</h1>
        <br></br>
        {tableData.length > 0 ? (
          ""
        ) : (
          <div className="container">
            <div
              {...getRootProps({
                style,
              })}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
        )}

        <br></br>

        <button onClick={checkNames}>check names</button>
        <button onClick={showNames}>show names</button>
        <button onClick={clearTable}>clear table</button>
        <button onClick={exportToCSV}>export data table</button>
        <br></br>
        <br></br>
        {tableData.length > 0 ? (
          <MaterialReactTable
            displayColumnDefOptions={{
              "mrt-row-actions": {
                muiTableHeadCellProps: {
                  align: "center",
                },
                size: 120,
              },
            }}
            columns={columns}
            data={tableData}
            editingMode="modal" //default
            enableEditing
            enableStickyHeader
            initialState={{
              sorting: [
                {
                  id: "nome", //sort by age by default on page load
                  asc: true,
                },
              ],
            }}
            enableColumnResizing
            enableColumnOrdering
            columnResizeMode="onChange"
          />
        ) : (
          <p>tabella vuota</p>
        )}
      </div>
    </div>
  );
};
