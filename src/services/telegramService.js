import { Bot, Keyboard } from "grammy";
import debtors from "../utils/debtors.js";
import groups from "../utils/groups.js";
import profit from "../utils/profit.js";

const bot = new Bot(process.env.TOKEN);

bot.command("start", async (ctx) => {
  const startKeyboard = new Keyboard()
    .text("Группы")
    .text("Должники")
    .row()
    .text("Прибыль")
    .resized();

  await ctx.reply(
    "Привет! - Давай посмотрим кто тебе должен и сколько ты уже заработал 🤖"
  );

  await ctx.reply("С чего начнем? Выберай 👇", {
    reply_markup: startKeyboard,
  });
});

bot.hears(["Группы", "Должники", "Прибыль"], async (ctx) => {
  const command = ctx.message.text.toLocaleLowerCase();
  if (command === 'группы') return groups(ctx);
  if (command === 'должники') return debtors(ctx);
  if (command === 'прибыль') return profit(ctx);
});

bot.start();
export default bot;
