// Local @mayjournal/fitness check: fail if an em dash (U+2014) appears in any
// file that ships to the deployed site (HTML/CSS). Keeps typographic em dashes
// out of production markup and styles; use "-" or reword instead.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { checkResult, findFilesByExtension } from '@mayjournal/fitness-shared';

// Built from its code point so this source file never contains a literal em dash.
const EM_DASH = String.fromCharCode(0x2014);

// Extensions for files that are served to visitors of the built site.
const SHIPPED_EXTENSIONS = ['.html', '.css'];

/** Returns "line:col" for every em dash occurrence in the given content. */
function findEmDashPositions(content) {
  const positions = [];
  content.split('\n').forEach((line, lineIndex) => {
    let col = line.indexOf(EM_DASH);
    while (col !== -1) {
      positions.push(`${lineIndex + 1}:${col + 1}`);
      col = line.indexOf(EM_DASH, col + 1);
    }
  });
  return positions;
}

/** Fails when any shipped HTML/CSS file contains an em dash (U+2014). */
const noEmDashCheck = {
  name: 'no-em-dash',
  async run(root = process.cwd()) {
    const errors = [];
    let filesChecked = 0;
    for (const ext of SHIPPED_EXTENSIONS) {
      const files = await findFilesByExtension(root, ext);
      for (const file of files) {
        filesChecked += 1;
        const content = readFileSync(join(root, file), 'utf8');
        for (const pos of findEmDashPositions(content)) {
          errors.push(
            `${file}:${pos} - em dash (U+2014) not allowed in shipped files; use "-" or reword`
          );
        }
      }
    }
    return checkResult(errors.length === 0, errors, filesChecked);
  },
  runInProcess: true,
};

export default noEmDashCheck;
