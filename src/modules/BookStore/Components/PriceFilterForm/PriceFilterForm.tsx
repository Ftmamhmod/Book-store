import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface PriceFilterFormInputs {
  minPrice: string;
  maxPrice: string;
}

export default function PriceFilterForm() {
  const { handleSubmit } = useForm<PriceFilterFormInputs>({
    defaultValues: {
      minPrice: "",
      maxPrice: "",
    },
  });

  const onSubmit: SubmitHandler<PriceFilterFormInputs> = (data) => {
    console.log("Filter values:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: "20px 0" }}
    >
      <Typography>Price Range:</Typography>
    </Box>
  );
}
