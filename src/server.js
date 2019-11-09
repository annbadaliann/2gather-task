import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";

import App from "./app";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    setTimeout(() => {
      const context = {};
      const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      );

      if (context.url) {
        res.redirect(context.url);
      } else {
        const html = `<!doctype html>
        <html lang="en">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>2gather</title>
              <meta name="keywoard" content="shopping store move like zaza clothes tshirt" />
              <meta name="description" content="Move Like Zaza">
              <meta name="viewport" content="width=device-width, initial-scale=1">
             
              <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpKF69rgtgYwZWCPeqYhdmD-ARYWMBdQE&libraries=places"></script>
  
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ""
              }
              ${
                process.env.NODE_ENV === "production"
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
          </head>
          <body>
              <div id="root">${markup}</div>
              <div id="modal"></div>
          </body>
        </html>`;
        res.status(200).send(html);
      }
    }, 2000);
  });

export default server;
