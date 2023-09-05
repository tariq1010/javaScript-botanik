import Backdrop from "@mui/material/Backdrop";
import CircularProgressWithLabel from "@mui/material/CircularProgress";

export default function SimpleBackdrop({ loading }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgressWithLabel color="inherit" />
      </Backdrop>
    </div>
  );
}
