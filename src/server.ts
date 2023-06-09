import app from "./app";

const PORT = process.env.PORT || 5000;
export default app.listen(PORT, () =>
  console.log(`Server running in port: ${PORT}`)
);
