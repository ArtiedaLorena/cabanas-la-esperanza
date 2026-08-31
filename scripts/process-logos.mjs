import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

async function removeNearColor(input, match, threshold = 28) {
  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const [tr, tg, tb] = match;

  for (let i = 0; i < data.length; i += 4) {
    const dr = Math.abs(data[i] - tr);
    const dg = Math.abs(data[i + 1] - tg);
    const db = Math.abs(data[i + 2] - tb);
    if (dr < threshold && dg < threshold && db < threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

const logosDir = path.resolve("logos");
const outDir = path.resolve("public/logos");
await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(path.resolve("public"), { recursive: true });

const full = await removeNearColor(path.join(logosDir, "1.png"), [245, 240, 230], 36);
await full
  .clone()
  .trim()
  .png()
  .toFile(path.join(outDir, "logo-full.png"));
await sharp(path.join(outDir, "logo-full.png"))
  .resize({ width: 720, withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile(path.join(outDir, "logo-full.webp"));

const markLight = await removeNearColor(path.join(logosDir, "2.png"), [245, 240, 230], 36);
await markLight
  .clone()
  .trim()
  .png()
  .toFile(path.join(outDir, "logo-mark.png"));
await sharp(path.join(outDir, "logo-mark.png"))
  .resize({ width: 320 })
  .webp({ quality: 90 })
  .toFile(path.join(outDir, "logo-mark.webp"));

const markDark = await removeNearColor(path.join(logosDir, "3.png"), [0, 0, 0], 28);
await markDark
  .clone()
  .trim()
  .png()
  .toFile(path.join(outDir, "logo-mark-on-dark.png"));
await sharp(path.join(outDir, "logo-mark-on-dark.png"))
  .resize({ width: 320 })
  .webp({ quality: 90 })
  .toFile(path.join(outDir, "logo-mark-on-dark.webp"));

const cream = { r: 246, g: 240, b: 231, alpha: 1 };

async function favicon(size, dest) {
  await sharp(path.join(outDir, "logo-mark.png"))
    .resize(Math.round(size * 0.78), Math.round(size * 0.78), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .extend({
      top: Math.round(size * 0.11),
      bottom: Math.round(size * 0.11),
      left: Math.round(size * 0.11),
      right: Math.round(size * 0.11),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .flatten({ background: cream })
    .png()
    .toFile(dest);
}

await favicon(32, path.resolve("public/favicon-32.png"));
await favicon(48, path.resolve("public/favicon-48.png"));
await favicon(192, path.resolve("public/favicon-192.png"));
await favicon(180, path.resolve("public/apple-touch-icon.png"));

await sharp(path.resolve("public/favicon-32.png"))
  .png()
  .toFile(path.resolve("public/favicon.png"));

console.log("logos ready");
