import express from "express";
import cors from "cors";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import React from "react";
import {fetchPopularRepos} from "../shared/api";

const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  fetchPopularRepos().then(data => {
    const markup = renderToString(<App data={data} />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="../../public/bundle.js" defer></script>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
    `);
  })
});

app.listen(3000, () => {
    console.log("Server is listening...");
  });
// 12/4: Tiffany
// line