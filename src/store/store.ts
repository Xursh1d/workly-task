import { ColumnType } from "../modules/types";

export const initialState = [
  {
    columnType: "new",
    cards: [
      {
        id: 1,
        title: "UI/UX дизайнер",
        subtitle: "Отдел разработки мобильного приложения",
        profession: "Designer",
        fullName: "John Smith",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "В приоритете",
        members: 3,
        tasks: 5,
      },
      {
        id: 7,
        title: "Human Resource",
        subtitle: "Отдел разработки мобильного приложения",
        profession: "Operations",
        fullName: "Annette Black",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "В приоритете",
        members: 3,
        tasks: 5,
      },
      {
        id: 8,
        title: "Python Developer",
        subtitle: "Restaurant Management",
        profession: "Рекруитер",
        fullName: "Esther Howard",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "В приоритете",
        members: 3,
        tasks: 5,
      },
    ],
  },
  {
    columnType: "current",
    cards: [
      {
        id: 2,
        title: "Маркетолог",
        subtitle: "Отдел маркетинга",
        profession: "Рекруитер",
        fullName: "Floyd Miles",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Второстепенная",
        members: 2,
        tasks: 8,
      },
      {
        id: 3,
        title: "Менеджер по продажам",
        subtitle: "Отдел продаж",
        profession: "Manager",
        fullName: "Jacob Jones",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Второстепенная",
        members: 1,
        tasks: 3,
      },
      {
        id: 4,
        title: "UI/UX дизайнер",
        subtitle: "Отдел разработки мобильного приложения",
        profession: "Writer",
        fullName: "Devon Lane",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Закрытые",
        members: 5,
        tasks: 10,
      },
    ],
  },
  {
    columnType: "closed",
    cards: [],
  },
  {
    columnType: "archive",
    cards: [
      {
        id: 5,
        title: "PHP Developer",
        subtitle: "Housekeepers",
        profession: "Manager",
        fullName: "Tim Brown",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Срочная заявка",
        members: 2,
        tasks: 4,
      },
      {
        id: 6,
        title: "React Developer",
        subtitle: "2 years experience",
        profession: "Manager",
        fullName: "Алексей Щербаков",
        avatarSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Срочная заявка",
        members: 2,
        tasks: 4,
      },
    ],
  },
];
export const columnTypes: { name: string; type: ColumnType }[] = [
  { name: "Новые", type: "new" },
  { name: "Текущие", type: "current" },
  { name: "Закрытые", type: "closed" },
  { name: "Архив", type: "archive" },
];
