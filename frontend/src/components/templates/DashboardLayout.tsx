import { Link } from "react-router-dom";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "200px",
        background: "#333",
        color: "white",
        padding: "20px"
      }}>
        <h3>Dashboard</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/analytics" style={{ color: "white" }}>Analytics</Link>
          <Link to="/settings" style={{ color: "white" }}>Settings</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>

        {/* Header */}
        <div style={{
          background: "#f5f5f5",
          padding: "15px",
          borderBottom: "1px solid #ddd"
        }}>
          <h2>Enterprise Dashboard</h2>
        </div>

        {/* Page Content */}
        <div style={{ padding: "20px" }}>
          {children}
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;