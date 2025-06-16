import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontWeight: "bold", fontSize: "6rem" }}
        >
          404
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          Oops... Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>

        <Button
          sx={{ backgroundColor: "#EF6B4A" }}
          variant="contained"
          component={RouterLink}
          to="/"
          size="large"
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
