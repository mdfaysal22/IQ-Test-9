import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Analytics = () => {
  const quizsData = useLoaderData();
  const quizs = quizsData.data;
  return (
    <div className="w-full my-6 ">

        <div className="bg-img my-5 py-10">
            <h1 className="text-3xl uppercase font-semibold text-center">WelCome To Our Analytics Page</h1>
        </div>
      <div className="bg-cyan-50 py-10">
        <LineChart
        className="mx-auto"
            width={800}
            height={300}
            data={quizs}
        >
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Analytics;
