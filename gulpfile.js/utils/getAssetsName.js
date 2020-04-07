const fs = require("fs");
const path = require("path");

const { destFolder } = require("../config");

function getAssetsName() {
  if (process.env.NODE_ENV !== "production") {
    return {
      app: "app.js",
      style: "style.css"
    };
  }

  const pathToScript = path.join(process.cwd(), destFolder, "scripts");
  const pathToStyle = path.join(process.cwd(), destFolder, "styles");

  const scripts = fs.readdirSync(pathToScript);
  const styles = fs.readdirSync(pathToStyle);

  return { app: scripts[0], style: styles[0] };
}

module.exports = getAssetsName;
