
'use client'
import { useState } from 'react';
import Chart from "react-apexcharts";
import "./Dashboard.css";

const Dashborad = () => {
  // State for the first chart
  const [state1, setState1] = useState({
    options: {
      chart: {
        id: "basic-bar-1"
      },
      xaxis: {
        categories: [
          "01-11-2023 12:00",
          "01-11-2023 1:00",
          "01-11-2023 02:00",
          "01-11-2023 03:00",
          "01-11-2023 04:00",
          "01-11-2023 05:00",
          "01-11-2023 06:00",
          "01-11-2023 07:00",
          "01-11-2023 08:00",
          "01-11-2023 09:00",
          "01-11-2023 10:00"
        ]
      }
    },
    series: [
      {
        name: "series-1",
        data: [15, 13, 10, 7, 9, 6, 9, 8, 11, 12, 15]
      }
    ]
  });

  // State for the second chart
  const [state2, setState2] = useState({
    options: {
      chart: {
        id: "basic-bar-2"
      },
      xaxis: {
        categories: [
          "02-11-2023 12:00",
          "02-11-2023 1:00",
          "02-11-2023 02:00",
          "02-11-2023 03:00",
          "02-11-2023 04:00",
          "02-11-2023 05:00",
          "02-11-2023 06:00",
          "02-11-2023 07:00",
          "02-11-2023 08:00",
          "02-11-2023 09:00",
          "02-11-2023 10:00"
        ]
      }
    },
    series: [
      {
        name: "series-2",
        data: [20, 18, 25, 30, 28, 22, 25, 28, 30, 32, 35]
      }
    ]
  });

  // State for the third chart
  const [state3, setState3] = useState({
    options: {
      chart: {
        id: "basic-bar-3"
      },
      xaxis: {
        categories: [
          "03-11-2023 12:00",
          "03-11-2023 1:00",
          "03-11-2023 02:00",
          "03-11-2023 03:00",
          "03-11-2023 04:00",
          "03-11-2023 05:00",
          "03-11-2023 06:00",
          "03-11-2023 07:00",
          "03-11-2023 08:00",
          "03-11-2023 09:00",
          "03-11-2023 10:00"
        ]
      }
    },
    series: [
      {
        name: "series-3",
        data: [10, 8, 12, 15, 17, 20, 22, 25, 28, 30, 32]
      }
    ]
  });

  return (
    <div className="nav">
      
      <div className="header">Traffic congestion at Junction 41:</div>
      <div className="container">
        
        <div className="row">
          <div className="col-md-4">
            <div className="chart-container">
              <Chart
                options={state1.options}
                series={state1.series}
                type="bar"
                width="100%"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="chart-container">
              <Chart
                options={state2.options}
                series={state2.series}
                type="bar"
                width="100%"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="chart-container">
              <Chart
                options={state3.options}
                series={state3.series}
                type="bar"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
