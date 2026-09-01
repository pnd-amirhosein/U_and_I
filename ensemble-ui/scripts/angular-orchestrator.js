import { execSync } from "child_process";

const run = (cmd) => {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  execSync(cmd, { stdio: "inherit" });
};

try {
  console.log("🏗 Building Stencil + Angular APF...");
  // Keep Angular dev independent from the React packaging step.
  run("npm run build:core && npm run build:angular");

  console.log("🚀 Starting Angular app...");
  run("cd ../ensemble-angular && npm run start");
} catch (err) {
  console.error("❌ Angular build orchestration failed:", err);
  process.exit(1);
}
