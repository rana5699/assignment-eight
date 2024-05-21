/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { getReadBooksIdFromLs } from "../../Utilities/localStortage";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "red",
  "purple",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadPage = () => {
  const [readBooks, setReadBooks] = useState([]);
  console.log("readBooks:", readBooks);

  const readId = getReadBooksIdFromLs();

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const matchedReadBooks = data.filter((item) =>
          readId.includes(item.book_id)
        );
        setReadBooks(matchedReadBooks);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  const data =
    Array.isArray(readBooks) && readBooks.length > 0
      ? readBooks.map((book) => ({
          name: book?.book_name,
          pages: book?.total_pages,
        }))
      : [];

  return (
    <div className="bg-gray-200 w-10/12 mx-auto my-5 rounded-xl p-5">
      <div className="w-full h-96 md:h-[500px] lg:h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" />
            <YAxis />
            <Bar
              dataKey="pages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReadPage;
