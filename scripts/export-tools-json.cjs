const fs = require("fs");
const path = require("path");

const sourcePath = path.join(process.cwd(), "src", "data", "tools.ts");
const targetPath = path.join(process.cwd(), "src", "data", "tools.json");
const source = fs.readFileSync(sourcePath, "utf8");
const match = source.match(/export const tools: AITool\[] = (\[[\s\S]*\]);/);

if (!match) {
  throw new Error("Cannot find tools array in src/data/tools.ts");
}

const tools = Function(`"use strict"; return (${match[1]});`)();
fs.writeFileSync(targetPath, `${JSON.stringify(tools, null, 2)}\n`, "utf8");
console.log(`Exported ${tools.length} tools to ${targetPath}`);
