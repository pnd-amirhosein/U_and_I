import { execSync } from "child_process";
import { rmSync } from "fs";
import { resolve } from "path";

const run = (cmd) => {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  execSync(cmd, { stdio: "inherit" });
};

try {
  console.log("🏗 Building Stencil + React wrapper...");
  run("npm run build:core && npm run build:react");

  // Vite caches package entrypoint resolution. The React entrypoint is generated
  // during the build, so make sure an older missing/stale entrypoint is not reused.
  rmSync(resolve("../ensemble-react/node_modules/.vite"), { recursive: true, force: true });

  console.log("🚀 Starting React app...");
  run("cd ../ensemble-react && npm run dev -- --force");
} catch (err) {
  console.error("❌ React build orchestration failed:", err);
  process.exit(1);
}
