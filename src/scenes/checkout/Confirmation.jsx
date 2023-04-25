
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Home from "../../scenes/Home";
import { clearCart } from "../../state/authRedux";


const Confirmation = () => {
  const dispatch = useDispatch();
  dispatch(clearCart());

  return (
    <>
    <Box m="50px auto" width="80%" height="3vh">
      <Alert severity="success">
        <AlertTitle>Comanda a fost plasata cu succes</AlertTitle>
        Ai plasat o comanda! —{" "}
        <strong>Te invitam sa o ridici azi in intervalul 12 -16. Multumim!</strong>
      </Alert>
    </Box>
    <Home/>
    </>
  );
};

export default Confirmation;
