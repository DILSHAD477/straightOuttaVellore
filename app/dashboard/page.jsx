'use client'
import Navbar from "@/components/Navbar";
import { useState } from 'react';
import Chart from "react-apexcharts";
import "./page.css";

const Page = () => {
  // Destructuring state and setState from useState hook
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

    return (
      
        <div className="container">
            <Navbar />
      <div className="row">
        <div className="col-md-4">
          <div className="chart-container">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart-container">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart-container">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
