const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json; charset=utf-8",
};

const sendFile = (filePath, res) => {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    "Content-Type": contentTypes[ext] || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(res);
};

http
  .createServer((req, res) => {
    const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const normalizedPath = requestPath === "/" ? "/index.html" : requestPath;
    const safePath = normalizedPath.startsWith("/") ? normalizedPath.substring(1) : normalizedPath;
    const targetPath = path.join(rootDir, safePath);

    if (!targetPath.startsWith(rootDir)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.stat(targetPath, (statError, stat) => {
      if (!statError && stat.isFile()) {
        sendFile(targetPath, res);
        return;
      }

      if (requestPath.startsWith("/api/")) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "API not found on static export server" }));
        return;
      }

      // Fallback to index.html only for non-file requests to support client-side routing
      const ext = path.extname(targetPath).toLowerCase();
      if (ext && ext !== ".html") {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      const indexPath = path.join(rootDir, "index.html");
      fs.stat(indexPath, (indexError, indexStat) => {
        if (!indexError && indexStat.isFile()) {
          sendFile(indexPath, res);
          return;
        }
        res.writeHead(404);
        res.end("Not found");
      });
    });
  })
  .listen(port, () => {
    console.log(`Static runtime listening on http://localhost:${port}`);
  });
