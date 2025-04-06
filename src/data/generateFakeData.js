const fs = require("fs");
const { random, floor } = Math;

let dataCount = 10000;

const lastNames = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Васильев",
  "Михайлов",
  "Новиков",
  "Фёдоров",
  "Морозов",
  "Волков",
  "Алексеев",
  "Лебедев",
  "Семенов",
];

const firstNames = [
  "Александр",
  "Михаил",
  "Иван",
  "Дмитрий",
  "Артем",
  "Сергей",
  "Николай",
  "Владимир",
  "Андрей",
  "Виктор",
  "Константин",
  "Евгений",
  "Максим",
  "Олег",
  "Юрий",
];

const companies = [
  "ТехноСервис",
  "АльфаСофт",
  "ГлобалТрейд",
  "РосИнвест",
  "НаноТех",
  "СтройПроект",
  "ФинКонсалт",
  "МедиаГрупп",
  "АвтоПром",
  "ЭкоФарм",
  "ЛогистикПро",
  "ЭнергоТех",
  "ИнфоСистем",
  "МедСервис",
  "ФудМаркет",
];

const departments = [
  "Разработка",
  "Продажи",
  "Бухгалтерия",
  "Логистика",
  "HR",
  "Маркетинг",
  "Техническая поддержка",
  "Финансовый отдел",
  "Аналитика",
  "Закупки",
  "Юридический отдел",
  "Дизайн",
  "Реклама",
  "Контроль качества",
  "Производство",
];

const jobTitles = [
  "Менеджер",
  "Разработчик",
  "Аналитик",
  "Бухгалтер",
  "Дизайнер",
  "Инженер",
  "Маркетолог",
  "Оператор",
  "Специалист по продажам",
  "Юрист",
  "Тестировщик",
  "Руководитель отдела",
  "Директор",
  "Консультант",
  "Системный администратор",
];

const getRandomValue = (list) => list[floor(random() * list.length)];

const data = [];
for (let i = 0; i < dataCount; i++) {
  const id = i + 1;
  const lastName = getRandomValue(lastNames);
  const firstName = getRandomValue(firstNames);

  data.push({
    id: id,
    name: `${lastName} ${firstName}`,
    department: getRandomValue(departments),
    company: getRandomValue(companies),
    jobTitle: getRandomValue(jobTitles),
  });
}

fs.writeFileSync("data.json", JSON.stringify(data));
