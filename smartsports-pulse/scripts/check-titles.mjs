import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const FORBIDDEN = /\b(bet|bets|betting|casino|casinos|slot|slots|gambling)\b/i;
const FORBIDDEN_KO = /(카지노|슬롯머신|도박|불법사이트|먹튀|베팅|배팅|토토)/;

const dirs = ['src/content/blog', 'src/content/guides'];

async function titlesIn(dir) {
  const abs = path.join(process.cwd(), dir);
  const files = await readdir(abs);
  const rows = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const text = await readFile(path.join(abs, file), 'utf8');
    const title = text.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] ?? '';
    rows.push({ file: path.join(dir, file), title });
  }
  return rows;
}

async function pageTitles() {
  const abs = path.join(process.cwd(), 'src/pages');
  const files = await readdir(abs, { recursive: true });
  const rows = [];
  for (const file of files) {
    if (!String(file).endsWith('.astro')) continue;
    const rel = path.join('src/pages', file);
    const text = await readFile(path.join(process.cwd(), rel), 'utf8');
    const title = text.match(/\btitle=["']([^"']+)["']/)?.[1] ?? '';
    if (title) rows.push({ file: rel, title });
  }
  return rows;
}

const rows = [...(await Promise.all(dirs.map(titlesIn))).flat(), ...(await pageTitles())];
const violations = rows.filter(
  (row) => FORBIDDEN.test(row.title) || FORBIDDEN_KO.test(row.title),
);

if (violations.length) {
  console.error('Forbidden keywords in titles:');
  for (const row of violations) console.error(`- ${row.file}: ${row.title}`);
  process.exit(1);
}

console.log(`Checked ${rows.length} titles. No forbidden gambling keywords.`);
