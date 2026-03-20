import { rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const paths = [
  join(process.cwd(), 'public', '_redirects'),
  join(process.cwd(), 'dist', '_redirects'),
];

for (const filePath of paths) {
  if (existsSync(filePath)) {
    rmSync(filePath, { force: true });
    console.log(`Removed ${filePath}`);
  }
}
