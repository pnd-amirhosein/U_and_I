const ANSI = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  gray: '\x1b[90m'
};

const colorEnabled = Boolean(process.stdout.isTTY) && !process.env.NO_COLOR;

function paint(color, value) {
  return colorEnabled ? `${ANSI[color]}${value}${ANSI.reset}` : value;
}

function timestamp() {
  return new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

function line(label, color, message, stream = console.log) {
  const time = paint('gray', timestamp());
  const tag = paint(color, label.padEnd(7));
  stream(`${time}  ${tag} ${message}`);
}

export const log = {
  title(title, subtitle) {
    const width = Math.max(54, title.length + 8);
    const rule = '─'.repeat(width);
    console.log(`\n${paint('cyan', rule)}`);
    console.log(`${paint('bold', title)}`);
    if (subtitle) console.log(paint('dim', subtitle));
    console.log(`${paint('cyan', rule)}\n`);
  },

  info(message) {
    line('INFO', 'blue', message);
  },

  step(message) {
    line('STEP', 'cyan', message);
  },

  command(command) {
    line('RUN', 'cyan', paint('dim', command));
  },

  success(message) {
    line('OK', 'green', message);
  },

  warn(message) {
    line('WARN', 'yellow', message, console.warn);
  },

  error(message) {
    line('ERROR', 'red', message, console.error);
  },

  detail(label, value) {
    line('DETAIL', 'gray', `${label}: ${value}`);
  },

  done(message) {
    console.log('');
    line('DONE', 'green', paint('bold', message));
  }
};

export function formatError(error) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export async function runMain(name, operation) {
  try {
    await operation();
  } catch (error) {
    log.error(`${name} failed: ${formatError(error)}`);
    if (process.env.EUI_DEBUG && error instanceof Error && error.stack) {
      console.error(error.stack);
    }
    process.exitCode = 1;
  }
}
