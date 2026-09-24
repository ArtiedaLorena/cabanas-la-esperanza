import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.resolve("fotos");
const outDir = path.resolve("public/images");

const mapping = [
  ["la-esperanza-cochera.png", "cabana-cochera"],
  ["Captura de pantalla 2026-08-31 113030.png", "pileta-sierras"],
  ["la-esperanza-frente.png", "cabana-galeria"],
  ["la-esperanza-parrilla.png", "cabana-parrilla"],
  ["complejo-cartel-san-martin.png", "cabana-cartel"],
  ["Captura de pantalla 2026-08-31 113126.png", "quincho-parrilla"],
  ["la-promesa-predio.png", "complejo-pileta"],
  ["Captura de pantalla 2026-08-31 113208.png", "dique-entorno"],
  ["Captura de pantalla 2026-08-31 113218.png", "sierras-comechingones"],
  ["Captura de pantalla 2026-08-31 113310.png", "atardecer-luces"],
  ["la-esperanza-parrilla.png", "cabana-atardecer"],
  ["la-esperanza-cochera.png", "cabana-cochera-sol"],
  ["la-esperanza-parrilla.png", "cabana-frente-patio"],
  ["Captura de pantalla 2026-08-31 131547.png", "cartel-entrada"],
  ["Captura de pantalla 2026-08-31 131556.png", "parrilla-ladrillo"],
  ["la-esperanza-entrada.png", "entrada-principal"],
  ["la-promesa-frente.png", "cabana-madera-pileta"],
  ["Captura de pantalla 2026-08-31 132627.png", "jardin-atardecer"],
  ["547355696_1113314467609254_4137714184686664885_n.jpg", "camino-sierras"],
  ["e54edd9f-497d-4aa4-b273-a5bd7b110c00.webp", "panorama-valle"],
  ["chorrosanignacio2_tripin.webp", "chorro-san-ignacio"],
  ["dique_piscu_yaco_visita san luis.webp", "dique-piscu-yaco"],
  ["laguna_milagrosa-un paraiso prop.jpg", "laguna-milagrosa"],
  ["la_cueva_del_indio_jolucho_merlo.jpg", "cueva-del-indio"],
  ["Quebrada del Tala-el corrdor noticias.jpg", "quebrada-del-tala"],
  ["cascada_esmeralda_red turismo argentina.jpg", "cascada-esmeralda"],
];

await fs.mkdir(outDir, { recursive: true });

for (const [file, slug] of mapping) {
  const src = path.join(inputDir, file);
  const buffer = await sharp(src).rotate().toBuffer();
  const meta = await sharp(buffer).metadata();
  const maxWidth = Math.min(1600, meta.width ?? 1600);

  await sharp(buffer)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(path.join(outDir, `${slug}.webp`));

  await sharp(buffer)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(outDir, `${slug}.jpg`));

  const smWidth = Math.min(480, meta.width ?? 480);
  await sharp(buffer)
    .resize({ width: smWidth })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(outDir, `${slug}-sm.webp`));

  console.log(`ok ${slug} ${meta.width}x${meta.height}`);
}

console.log("done");
