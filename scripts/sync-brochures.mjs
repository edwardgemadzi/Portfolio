// Copies portfolio PDFs from ~/Portfolio (built by the portfolio-case-study skill)
// into public/brochures and writes data/brochures.json for the site to render.
// Run: npm run sync:brochures   (re-run whenever ~/Portfolio is rebuilt)
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const SRC = process.env.PORTFOLIO_DIR || path.join(os.homedir(), "Portfolio");
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "public", "brochures");
const DATA = path.join(ROOT, "data", "brochures.json");

const portfolio = JSON.parse(fs.readFileSync(path.join(SRC, "portfolio.json"), "utf8"));
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const copy = (from, toName) => {
  if (!fs.existsSync(from)) return null;
  fs.copyFileSync(from, path.join(OUT, toName));
  return `/brochures/${toName}`;
};

const projects = [];
for (const slug of portfolio.projects ?? []) {
  const dir = path.join(SRC, slug);
  const contentFile = path.join(dir, "content.json");
  if (!fs.existsSync(contentFile)) {
    console.warn(`skip ${slug}: no content.json`);
    continue;
  }
  const c = JSON.parse(fs.readFileSync(contentFile, "utf8"));
  const coverSrc = c.images?.cover ? path.join(dir, c.images.cover) : null;
  projects.push({
    slug,
    title: c.title,
    subtitle: c.subtitle,
    client: c.client?.named ? c.client.name : c.client?.descriptor,
    year: c.year,
    summary: c.summary,
    role: c.role ?? null,
    duration: c.duration ?? null,
    problem: c.problem ?? [],
    solution: c.solution ?? [],
    features: c.features ?? [],
    security: c.security ?? [],
    outcomes: c.outcomes ?? [],
    stack: c.stack ?? [],
    accent: c.accent,
    live: c.links?.live ?? null,
    caseStudyPdf: copy(path.join(dir, `${slug}-case-study.pdf`), `${slug}-case-study.pdf`),
    carouselPdf: copy(path.join(dir, `${slug}-carousel.pdf`), `${slug}-carousel.pdf`),
    cover: coverSrc ? copy(coverSrc, `${slug}-cover${path.extname(coverSrc)}`) : null,
    thumbnail: copy(path.join(dir, "carousel-png", "slide-01.png"), `${slug}-slide-01.png`),
    // Gallery shots are already curated by the case-study skill (sample data, blurred faces).
    gallery: (c.images?.gallery ?? [])
      .map((g) => ({
        src: copy(path.join(dir, g.src), `${slug}-${path.basename(g.src)}`),
        caption: g.caption,
        device: g.device,
      }))
      .filter((g) => g.src),
  });
}

const manifest = {
  generatedAt: new Date().toISOString(),
  portfolioPdf: copy(path.join(SRC, "Portfolio.pdf"), "Portfolio.pdf"),
  projects,
};
fs.writeFileSync(DATA, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Synced ${projects.length} projects -> public/brochures, data/brochures.json`);
