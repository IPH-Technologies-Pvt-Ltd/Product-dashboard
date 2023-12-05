import React from "react";
import Navbar from "./Navbar";
import Sales from "./Sales";
import Orders from "./Orders";
import Revenue from "./Revenue";
import Visitors from "./Visitors";
import Barchart from "./Barchart";
import Realtimeuser from "./Realtimeuser";
import "material-icons/iconfont/material-icons.css";
import Table from "./Table";
import Drawers from "./Drawer";

function Home() {
  return (
    <>
      <div className="row ">
        {" "}
        <div
          className=" custom col-3 sm-12"
          style={{ backgroundColor: "#131313", color: "white" }}
        >
          <Drawers />
        </div>
        <div
          className="col-9 sm-12"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {" "}
          <div className="py-3">
            <Navbar />
            <h2 className="my-4 ms-3">Dashboard</h2>

            <div className="row">
              <div className="col-sm-3 mb-2">
                <div className="card" style={{ backgroundColor: "#1f1f1f" }}>
                  <div className="card-body ">
                    <Sales />
                  </div>
                </div>
              </div>

              <div className="col-sm-3 mb-2">
                <div className="card" style={{ backgroundColor: "#1f1f1f" }}>
                  <div className="card-body">
                    <Orders />
                  </div>
                </div>
              </div>

              <div className="col-sm-3 mb-2">
                <div className="card" style={{ backgroundColor: "#1f1f1f" }}>
                  <div className="card-body">
                    <Visitors />
                  </div>
                </div>
              </div>

              <div className="col-sm-3 mb-2">
                <div className="card" style={{ backgroundColor: "#1f1f1f" }}>
                  <div className="card-body">
                    <Revenue />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-8 col-lg-8 col-md-6">
                <div
                  className="card"
                  style={{
                    backgroundColor: "#1f1f1f",
                    borderRadius: "10px",
                  }}
                >
                  <div className="card-body">
                    <Barchart />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-4 col-md-6">
                <div className="card" style={{ backgroundColor: "#1f1f1f" }}>
                  <div className="card-body ">
                    <Realtimeuser />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 ms-1">
              <div
                className="card "
                style={{
                  backgroundColor: "#1f1f1f",

                  borderRadius: "10px",
                }}
              >
                <div className="card-body">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
