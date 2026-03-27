import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";

const userData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1000 },
  { month: "May", users: 1200 },
];

const salesData = [
  { month: "Jan", sales: 240 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 350 },
  { month: "Apr", sales: 400 },
  { month: "May", sales: 450 },
];

const Analytics = () => {
  return (
    <div>
      <h2>Analytics Dashboard</h2>

      {/* User Growth Chart */}
      <h3>User Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={userData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>

      {/* Sales Chart */}
      <h3 style={{ marginTop: "40px" }}>Monthly Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Analytics;