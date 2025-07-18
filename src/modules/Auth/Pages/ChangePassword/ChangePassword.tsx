import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { VALIDATE } from "../../../Utils/Validations";
import { BASE_URL } from "../../../Utils/baseUrl";
import { AuthSchema, Response } from "../../../Utils/Interfaces";
import Cookies from "js-cookie";

export default function ChangePassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchema>();
  const token = Cookies.get("authBookToken");

  const onSubmit: SubmitHandler<AuthSchema> = async (
    data: AuthSchema
  ): Promise<void> => {
    try {
      const response = await axios.post<Response>(
        `${BASE_URL}/auth/change-password`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
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
        Change Your Password Easily
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
          label="Old Password"
          id="changePassword"
          type="password"
          autoComplete="password"
          placeholder="********"
          sx={{ mt: 2 }}
          helperText={errors?.password?.message}
          error={!!errors?.password?.message}
          {...register("password", VALIDATE.password)}
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
          required
          label="New Password"
          id="changeNewPassword"
          type="password"
          autoComplete="password_new"
          placeholder="********"
          sx={{ mt: 2 }}
          helperText={errors?.password_new?.message}
          error={!!errors?.password_new?.message}
          {...register("password_new", VALIDATE.password)}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#757575",
          }}
        ></Typography>
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
          Save
        </Button>
      </Box>
    </Grid>
  );
}
