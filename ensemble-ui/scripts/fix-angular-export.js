const { readFile, writeFile } = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

(async () => {
    const indexPath = path.resolve("packages/angular/index.ts");

    console.log(`${chalk.cyan(getClock())}  Patching Angular exports...`);

    let content = await readFile(indexPath, "utf8");

    const exportLine = `export * from './components';`;

    if (!content.includes(exportLine)) {
        content = `${exportLine}\n\n${content}`;
        await writeFile(indexPath, content, "utf8");

        console.log(`${chalk.green(getClock())}  Angular exports patched.`);
    }
    else {
        console.log(`${chalk.yellow(getClock())}  Angular exports already present.`);
    }

})().catch(err => {
    console.error(`${chalk.red(getClock())}  ${err.message}`);
    process.exit(1);
});

function getClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    return `[${h}:${m}.0]`;
}