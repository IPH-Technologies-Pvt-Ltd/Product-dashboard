import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Product Name", width: 300 },
  { field: "categories", headerName: "Categories", width: 200 },
  { field: "price", headerName: "Price", width: 200 },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "sells",
    headerName: "Sells",
    width: 150,
    headerClassName: "custom-header",
  },
];

const rows = [
  {
    id: "Suit in Sage Green",
    price: "$40.78",
    categories: "Shirts",
    quantity: 60,
    sells: "108",
  },
  {
    id: "Oversized Sweatshirt in Washed Brown",
    price: "$30.92",
    categories: "Trousers",
    quantity: 1000,
    sells: "50",
  },
  {
    id: "Suit in Sage blue",
    price: "$45.76",
    categories: "Hoodie & Sweatshirts",
    quantity: 1300,
    sells: "300",
  },
];

function Table() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          color: "white",
          "& .MuiDataGrid-checkboxInput": {
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default Table;
