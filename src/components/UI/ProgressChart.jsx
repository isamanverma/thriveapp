import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsAccessibility from "highcharts/modules/accessibility";

import weightData from "./weightData.json";

highchartsAccessibility(Highcharts);

export default function ProgressChart() {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const combinedData = [];

    weightData.forEach((yearData) => {
      const { year, months } = yearData;
      months.forEach((monthData) => {
        const { month, weeks } = monthData;
        weeks.forEach((weekData) => {
          const { week, weight } = weekData;
          combinedData.push({
            x: `${year}-${month}-Week ${week}`,
            y: weight,
          });
        });
      });
    });

    const chartOptions = {
      chart: {
        type: "spline",
      },
      title: {
        text: "Progress",
      },
      xAxis: {
        type: "category",
        title: {
          text: "Weeks",
        },
      },
      yAxis: {
        title: {
          text: "Weight (kg)",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        formatter: function () {
          return `Week ${this.x}: ${this.y} kg`;
        },
      },
      series: [
        {
          data: combinedData.map((entry) => entry.y),
        },
      ],
    };

    setOptions(chartOptions);
  }, []);

  return options ? (
    <HighchartsReact highcharts={Highcharts} options={options} />
  ) : (
    <div>Loading...</div>
  );
}
