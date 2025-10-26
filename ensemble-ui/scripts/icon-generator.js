const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const ICON_TYPES = ["solid", "outline", "mini", "micro"];
const ICONS_SRC = path.resolve("packages/icons");
const OUTPUT_DIR = path.resolve("src/components/icons");

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const getAllIconNames = () => {
    const names = new Set();
    ICON_TYPES.forEach((type) => {
        const folder = path.join(ICONS_SRC, type);

        if (fs.existsSync(folder)) {
            fs.readdirSync(folder)
                .filter((f) => f.endsWith(".svg"))
                .forEach((f) => names.add(path.basename(f, ".svg")));
        }
    });
    return [...names];
};

function toPascalCase(name) {
    // split on anything non-alphanumeric, drop empties
    const parts = name.split(/[^a-zA-Z0-9]+/).filter(Boolean);
    if (parts.length === 0) return "_Icon";

    const pascal = parts
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join("");

    // If it starts with a digit, prefix underscore to make a valid identifier
    if (/^[0-9]/.test(pascal)) {
        return "_" + pascal;
    }
    return pascal;
}

const createComponent = (iconName) => {
    const cases = [];

    ICON_TYPES.forEach((type) => {
        const filePath = path.join(ICONS_SRC, type, `${iconName}.svg`);
        if (fs.existsSync(filePath)) {
            const svg = fs.readFileSync(filePath, "utf8").replace(/`/g, "\\`");
            cases.push(`case '${type}': return \`${svg}\`;`);
        }
    });

    const pascal = toPascalCase(iconName);
    const className = `EUIIcon${pascal}`;
    const tag = `eui-icon-${iconName}`;

    const component = `import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: '${tag}',
  shadow: false,
})
export class ${className} {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      ${cases.join("\n      ")}
      default:
        return '';
    }
  }

  render() {
    const svg = this.getSvg();
    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => !['type', 'class'].includes(attr.name))
      .reduce((acc:any, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {});
      
    return (
      <Host>
        <div {...attrs} innerHTML={svg}></div>
      </Host>
    );
  }
}
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, `${iconName}.tsx`), component, "utf8");
};

const main = () => {
    const icons = getAllIconNames();
    console.log(`${chalk.blue(getClock())} Generating ${icons.length} icon components...`);
    icons.forEach(createComponent);
    console.log(`${chalk.green(getClock())} Component generation is done!`);
};

main();


function getClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    return `[${h}:${m}.0]`;
}