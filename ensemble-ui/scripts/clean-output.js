// scripts/clean-output.cjs
const { rm } = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

(async () => {
    const targets = [
        "packages/react",
        "packages/angular",
    ];
    for (const target of targets) {
        const fullPath = path.resolve(target);
        console.log(`${chalk.blue(getClock())}  Cleaning ${fullPath}`);
        await rm(fullPath, { recursive: true, force: true });
    }
})();

function getClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    return `[${h}:${m}.0]`;
}