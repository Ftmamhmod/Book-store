import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { VALIDATE } from "../../../Utils/Validations";
import { BASE_URL } from "../../../Utils/baseUrl";
import { AuthSchema, Response } from "../../../Utils/Interfaces";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchema>();

  const onSubmit: SubmitHandler<AuthSchema> = async (
    data: AuthSchema
  ): Promise<void> => {
    try {
      const response = await axios.post<Response>(
        `${BASE_URL}/auth/login`,
        data
      );
      Cookies.set("authBookToken", response?.data?.data?.accessToken, {
        expires: 365,
      });
      toast.success("Login successful!");
      navigate("/dashboard/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          (Array.isArray(error.response?.data?.message)
            ? error.response?.data?.message[0]
            : error?.response?.data?.message) || "Something went wrong!";
        toast.error(errorMessage);
      } else {
        toast.error("Unexpected error occurred!");
      }
    }
  };

  return (
    <Grid sx={{ width: "100%" }}>
      <Typography component={"p"} sx={{ mt: 2, color: "#6b6b87" }}>
        Welcome back!
      </Typography>
      <Typography component={"h1"} variant="h5" fontWeight={"bold"}>
        Login to your account
      </Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component={"form"}
        noValidate
        sx={{ mt: 2, width: "100%" }}
      >
        <TextField
          fullWidth
          required
          label="Email"
          id="loginEmail"
          type="email"
          autoComplete="email"
          placeholder="user@email.com"
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#6251DD",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#6251DD",
            },
          }}
          helperText={errors?.email?.message}
          error={!!errors?.email?.message}
          {...register("email", VALIDATE.email)}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#757575",
          }}
        ></Typography>
        <TextField
          fullWidth
          label="Password"
          id="loginPassword"
          type="password"
          autoComplete="password"
          variant="outlined"
          placeholder="********"
          required
          sx={{
            mt: 3,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#6251DD",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#6251DD",
            },
          }}
          helperText={errors?.password?.message}
          {...register("password", VALIDATE.password)}
          error={!!errors?.password?.message}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#757575",
          }}
        ></Typography>
        <Grid container alignItems={"center"}>
          <Grid size={{ xs: 6 }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#6251DD",
                    "&.Mui-checked": {
                      color: "#6251DD",
                    },
                  }}
                  value="remember"
                />
              }
              label="Remember Me"
              sx={{ color: "#6251dd" }}
            />
          </Grid>
          <Grid size={{ xs: 6 }} onClick={() => navigate("/forget-password")}>
            <Typography
              variant={"body2"}
              sx={{
                color: "#6251dd",
                cursor: "pointer",
                textAlign: "end",
                width: "100%",
              }}
            >
              Forget Password?
            </Typography>
          </Grid>
        </Grid>
        <Button
          disabled={isSubmitting}
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#EF6B4A",
            paddingBlock: "10px",
            mb: 1,
            mt: 2,
          }}
        >
          Login
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => navigate("/register")}
          type="button"
          sx={{
            backgroundColor: "#ffffff",
            color: "#6251DD",
            borderColor: "#6251DD",
            paddingBlock: "10px",
          }}
        >
          Register
        </Button>
      </Box>
    </Grid>
  );
}
