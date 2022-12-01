module.exports = async (bot, message) => {
  if (message.author.bot) return;
  else {
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift();
    if (command === "ping") return bot.commands.get("ping").run(bot, message);
    if (command === "changeTheme")
      return bot.commands.get("changeTheme").run(args[0], message);
  }
};
