module.exports = async (bot, message) => {
  if (message.author.bot) return;
  else {
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift();
    if (command === "ping") return bot.commands.get("ping").run(bot, message);
    if (command === "changeTheme")
      return bot.commands.get("changeTheme").run(args[0], message);
    if (command === "currentTheme")
      return bot.commands.get("currentTheme").run(message);
    if (command === "changeLanguage")
      return bot.commands.get("changeLanguage").run(args[0], message);
    if (command === "currentLanguage")
      return bot.commands.get("currentLanguage").run(message);
    if (command === "changeHomepageBanner")
      return bot.commands.get("changeHomepageBanner").run(args[0], message);
  }
};
