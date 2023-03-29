export interface Column {
  columnType: string;
  cards: CardData[];
}

export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  profession: string;
  fullName: string;
  avatarSrc: string;
  status: string;
  members: number;
  tasks: number;
}

export type ColumnType = "new" | "current" | "closed" | "archive";

