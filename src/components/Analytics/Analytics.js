import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const quizsData = useLoaderData();
  const quizs = quizsData.data;
  return (
    <div className="w-full ">
      <div className="bg-img py-10">
        <h1 className="text-md md:text-xl lg:text-3xl uppercase font-semibold text-center">
          WelCome To Our Analytics Page
        </h1>
      </div>
      <div className="bg-cyan-100 mt-5">
        <div className="mx-1  md:mx-24 py-10">
          <ResponsiveContainer minWidth={100} height={300}>
            <LineChart data={quizs}>
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Our Quiz Report</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
