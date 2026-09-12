import { spawnSync } from 'node:child_process';
import { log } from './logger.mjs';

export function run(command, options = {}) {
  const { cwd = process.cwd(), env = process.env } = options;

  log.command(command);

  const result = spawnSync(command, {
    cwd,
    env,
    shell: true,
    stdio: 'inherit'
  });

  if (result.error) throw result.error;

  if (result.status !== 0) {
    throw new Error(`Command exited with code ${result.status}: ${command}`);
  }
}
