import express from "express";
const app = express();
import cors from 'cors';



import fileUploadRoute from "./routes/fileUpload.mjs";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/api", fileUploadRoute);

const port = process.env.PORT || 5173;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

});

// Gracefully handle server shutdown

// This code will gracefully shut down the server when you press Ctrl+C (SIGINT) in your terminal,
//  ensuring that the port is released properly. 

process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
      console.log('Server is gracefully terminated');
      process.exit(0);
    });
  });