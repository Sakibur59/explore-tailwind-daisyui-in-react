import React from "react";
import { Line, LineChart } from "recharts";

const ResultsChart = () => {
  const ResultData = [
    {
      id: 1,
      name: "Rahim",
      description: "A hardworking student with strong interest in science.",
      physics: 85,
      chemistry: 78,
      math: 90,
    },
    {
      id: 2,
      name: "Karim",
      description: "Consistent performer with balanced results.",
      physics: 72,
      chemistry: 80,
      math: 75,
    },
    {
      id: 3,
      name: "Ayesha",
      description: "Top scorer with excellent academic performance.",
      physics: 88,
      chemistry: 92,
      math: 95,
    },
    {
      id: 4,
      name: "Nusrat",
      description: "Improving student with steady progress.",
      physics: 65,
      chemistry: 70,
      math: 68,
    },
    {
      id: 5,
      name: "Hasan",
      description: "Strong in math and analytical thinking.",
      physics: 90,
      chemistry: 85,
      math: 88,
    },
    {
      id: 6,
      name: "Mim",
      description: "Focused and disciplined learner.",
      physics: 78,
      chemistry: 82,
      math: 80,
    },
    {
      id: 7,
      name: "Sabbir",
      description: "Needs improvement but shows potential.",
      physics: 60,
      chemistry: 65,
      math: 70,
    },
    {
      id: 8,
      name: "Tania",
      description: "Excellent student with top grades in all subjects.",
      physics: 92,
      chemistry: 89,
      math: 94,
    },
    {
      id: 9,
      name: "Fahim",
      description: "Average performer with consistent effort.",
      physics: 74,
      chemistry: 77,
      math: 73,
    },
    {
      id: 10,
      name: "Lamia",
      description: "High achiever with strong academic skills.",
      physics: 86,
      chemistry: 88,
      math: 91,
    },
  ];
  return (
    <div>
      <LineChart width={500} height={500} data={ResultData}>
        <Line dataKey="math"></Line>
        <Line dataKey="physics"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
