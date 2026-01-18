"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Chart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartInstance.current = echarts.init(chartRef.current);

    const days = Array.from({ length: 10 }, (_, i) => `2025-01-${i + 1}`);
    const data1 = days.map(() => Math.floor(Math.random() * 300));
    const data2 = days.map(() => Math.floor(Math.random() * 150));

    const option: echarts.EChartsOption = {
      tooltip: { trigger: "axis" },
      legend: { top: 0 },
      grid: {
        top: 40,
        left: 40,
        right: 20,
        bottom: 30,
      },
      xAxis: {
        type: "category",
        data: days,
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Grid Power",
          type: "line",
          smooth: true,
          areaStyle: {},
          data: data1,
        },
        {
          name: "Generator",
          type: "line",
          smooth: true,
          areaStyle: {},
          data: data2,
        },
      ],
    };

    chartInstance.current.setOption(option);

    const resize = () => chartInstance.current?.resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      chartInstance.current?.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      className="w-full h-70 lg:h-[320px]"
    />
  );
};

export default Chart;
