const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents: intents });
const loadCommands = require("./loaders/loadCommands");
const loadEvents = require("./loaders/loadEvents");
const config = require("./config");

bot.commands = new Discord.Collection();

bot.login(config.token);
loadCommands(bot);
loadEvents(bot);

bot.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  else {
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift();
    if (command === "ping") return bot.commands.get("ping").run(bot, message);
    if (command === "changeTheme")
      return bot.commands.get("changeTheme").run(args[0], message);
  }
});
bot.on("ready", async () => {
  console.log(`${bot.user.tag} est en ligne`);
});
