import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "../app/store";
import { updateUsers } from "../features/dashboard/dashboardSlice";

import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography, Button } from "@mui/material";
const Dashboard = () => {

  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.dashboard.users);
  const sales = useSelector((state: RootState) => state.dashboard.sales);
  const revenue = useSelector((state: RootState) => state.dashboard.revenue);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateUsers(users + Math.floor(Math.random() * 10)));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, users]);

  const increaseUsers = () => {
    dispatch(updateUsers(users + 100));
  };

  return (
    <div>
<Grid container spacing={3}>

  <Grid size={{ xs: 12, md: 4 }}>
    <Card>
      <CardContent>
        <Typography variant="h6">Active Users</Typography>
        <Typography variant="h4">{users}</Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid size={{ xs: 12, md: 4 }}>
    <Card>
      <CardContent>
        <Typography variant="h6">Sales</Typography>
        <Typography variant="h4">{sales}</Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid size={{ xs: 12, md: 4 }}>
    <Card>
      <CardContent>
        <Typography variant="h6">Revenue</Typography>
        <Typography variant="h4">{revenue}</Typography>
      </CardContent>
    </Card>
  </Grid>

</Grid>

      <Button
        variant="contained"
        style={{ marginTop: "20px" }}
        onClick={increaseUsers}
      >
        Increase Users
      </Button>

    </div>
  );
};

export default Dashboard;