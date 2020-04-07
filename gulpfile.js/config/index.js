switch (process.env.NODE_ENV) {
  case "production":
    module.exports = {
      destFolder: "build"
    };
    break;
  default:
    module.exports = {
      destFolder: "temp"
    };
    break;
}
