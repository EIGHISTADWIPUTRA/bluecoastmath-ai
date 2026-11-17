// Server lokal untuk uji coba tanpa Vercel CLI.
// Jalankan: npm run dev  →  http://localhost:3000
// Menyajikan file statis dan meneruskan /api/chat ke handler yang sama dengan di Vercel.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { POST as chatPost } from "./api/chat.js";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css" };

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/api/chat") {
    if (req.method !== "POST") { res.writeHead(405).end(); return; }
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const response = await chatPost(new Request(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: Buffer.concat(chunks)
    }));
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(await response.text());
    return;
  }

  const rel = normalize(url.pathname === "/" ? "/index.html" : url.pathname);
  if (rel.includes("..") || /(^|[\\/])\.|[\\/]api[\\/]|dev-server/.test(rel)) { res.writeHead(404).end(); return; }
  try {
    const body = await readFile(join(ROOT, rel));
    res.writeHead(200, { "Content-Type": TYPES[extname(rel)] || "application/octet-stream" }).end(body);
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(PORT, () => console.log(`BluecoastMath dev: http://localhost:${PORT}`));
