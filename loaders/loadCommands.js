const fs = require("fs");

module.exports = async (bot) => {
  fs.readdirSync("./commands")
    .filter((f) => f.endsWith(".js"))
    .forEach(async (file) => {
      let command = require(`../commands/${file}`);
      if (!command.name || typeof command.name !== "string")
        throw new TypeError("command doesnt have name");
      bot.commands.set(command.name, command);
      console.log(`command ${file} loaded successfully`);
    });
};
