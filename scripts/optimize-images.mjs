import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, renameSync } from "node:fs";
import { join, extname, basename, relative, dirname } from "node:path";

const ROOT = new URL("../public/images", import.meta.url).pathname;
const ORIGINALS_ROOT = new URL("../originals", import.meta.url).pathname;
const EXTS = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];
const SKIP_DIRS = ["logo"]; // keep logo.png as-is (referenced directly as favicon/PNG)
const MAX_WIDTH = 1800;
const QUALITY = 86;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.includes(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, files);
    } else if (EXTS.includes(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(ROOT);
console.log(`Found ${files.length} images to convert...`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const before = statSync(file).size;
  const webpPath = file.slice(0, -extname(file).length) + ".webp";

  await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(webpPath);

  const after = statSync(webpPath).size;
  totalBefore += before;
  totalAfter += after;

  // Move (not delete) the original into ./originals, mirroring the folder structure,
  // so it never ships with the site but stays available locally if needed later.
  const originalDest = join(ORIGINALS_ROOT, relative(ROOT, file));
  mkdirSync(dirname(originalDest), { recursive: true });
  renameSync(file, originalDest);

  console.log(
    `${basename(file)} -> ${basename(webpPath)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
  );
}

console.log(
  `\nDone. Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
);
console.log(`Originals moved to: ${ORIGINALS_ROOT}`);
