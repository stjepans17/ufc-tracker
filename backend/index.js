import express from "express";
import { PORT, MONGODBURL } from "./config.js";
import cors from "cors";
import mongoose from "mongoose";

import route from "./routes/route.js";

const app = express();

app.use(cors());

app.listen(PORT, () => {
    console.log(`App is listening on port : ${PORT}`);
});

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Working");
});

app.use("/data", route);
// mongoose
//     .connect(MONGODBURL)
//     .then(() => {
//         console.log("App is connected to the database");
//         app.listen(PORT, () => {
//             console.log(`App is listening on port : ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
