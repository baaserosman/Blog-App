import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpWithGoogle } from "../../auth/firebase";
import { AuthContext } from "../../context/AuthContext";
import { Grid, TextField, Button, Box } from "@mui/material";
import { successNote } from "../../utils/customToastify";

const LoginComp = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    currentUser && navigate("/");
  }, [currentUser]);

  const handleLogin = () => {
    signIn(email, password);
    navigate("/");
    console.log(currentUser);
  };

  const handleGoogleSingIn = () => {
    signUpWithGoogle();
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="email"
            name="email"
            variant="outlined"
            type="email"
            required
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            // onBlur={handleBlur}
            // helperText={touched.email && errors.email}
            // error={touched.email && Boolean(errors.email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            required
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onBlur={handleBlur}
            // helperText={touched.password && errors.password}
            // error={touched.password && Boolean(errors.password)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{ bgcolor: "#056582", fontWeight: "bold", boxShadow: "" }}
          >
            LOGIN
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: "#056582", fontWeight: "bold" }}
            onClick={handleGoogleSingIn}
          >
            CONTINUE WITH GOOGLE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginComp;
