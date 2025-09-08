import React from "react";
import StatsItem from "./StatsItem"; 

const StatsPage = ({ stats }) => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-slate-800">URL Statistics</h2>
    {stats.length > 0 ? (
      <div className="space-y-6">
        {stats.map((item, index) => (
          <StatsItem key={index} item={item} />
        ))}
      </div>
    ) : (
      <p className="text-slate-600">No statistics to display yet. Shorten some URLs first!</p>
    )}
  </div>
);

export default StatsPage;
