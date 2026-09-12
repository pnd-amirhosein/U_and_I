import { log, runMain } from './_shared/logger.mjs';
import { run } from './_shared/process.mjs';

await runMain('Angular Web development orchestration', async () => {
  log.title('Ensemble UI · Angular Web Dev', 'Build the package, then launch the Angular Web demo.');

  log.step('Building Ensemble UI');
  run('npm run build');
  log.success('Ensemble UI build completed.');

  log.step('Starting Angular Web demo');
  run('npm run start', { cwd: '../ensemble-angular-web' });
});
