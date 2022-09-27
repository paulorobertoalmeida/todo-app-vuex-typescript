export type TaskItem = {
  id: number;
  text: string;
  completed: boolean;
};

export type State = {
  loading: boolean;
  items: TaskItem[];
};

export const state: State = {
  loading: false,
  items: [],
};
