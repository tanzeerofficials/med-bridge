import React from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
     Z`;
const colors = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];
export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    // recharts types demand that JSX.Element is returned, even if nothing is rendered
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
}

const Chart = ({ bookedDoctors }) => {
  return (
    <div className="flex justify-center items-center py-6 rounded-2xl mx-2 md:mx-[4rem] mt-10 mb-10 bg-white">
     
        <BarChart width={600} height={300} data={bookedDoctors} margin={margin}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="fee" shape={<TriangleBar />}>
            {bookedDoctors.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              ></Cell>
            ))}
          </Bar>
        </BarChart>
   
    </div>
  );
};

export default Chart;
