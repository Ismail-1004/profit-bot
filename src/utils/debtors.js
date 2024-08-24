import UserController from "../controllers/UserController.js";

export default async function (ctx) {
  try {
    const debtors = await UserController.getDebtors();

    if (debtors.length === 0) {
      await ctx.reply("Нет должников! 🎉");
    } else {
      const debtorList = debtors
        .map(
          (debtor) =>
            `Имя: ${debtor.name}, Группа: ${debtor.group.name}, Курс: ${
              debtor.group.course
            }, Должен: ${debtor.mustPay - debtor.paid} 💵`
        )
        .join("\n\n");

      await ctx.reply(`Список должников:\n\n${debtorList}`);
    }
  } catch (e) {
    await ctx.reply("Произошла ошибка при получении списка должников.");
  }
}
