export const log: {
  title(title: string, subtitle?: string): void;
  info(message: string): void;
  step(message: string): void;
  command(command: string): void;
  success(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  detail(label: string, value: unknown): void;
  done(message: string): void;
};

export function formatError(error: unknown): string;
export function runMain(name: string, operation: () => void | Promise<void>): Promise<void>;
