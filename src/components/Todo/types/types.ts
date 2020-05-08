export interface TodoItem {
  text: string;
  done: boolean;
  id: number;
}

export interface State {
  tasks: TodoItem[];
  showedItems: string;
}