import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="110px auto" textAlign="center">
      <Box>
        <Typography variant="h3">
          <IconButton>
            <MarkEmailReadOutlinedIcon fontSize="large" />
          </IconButton>
          Abonează-te la newsletter
        </Typography>
      </Box>
        <Typography>
          pentru meniul zilnic
        </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Introdu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
          Abonare
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
