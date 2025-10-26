import { execSync } from "child_process";

const run = (cmd) => {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  execSync(cmd, { stdio: "inherit" });
};

try {
  console.log("🏗 Building Stencil...");
  run("npm run build");

  console.log("🚀 Starting Angular app...");
  run("cd ../ensemble-docntest && npm run start");
} catch (err) {
  console.error("❌ Build orchestration failed:", err);
  process.exit(1);
}
