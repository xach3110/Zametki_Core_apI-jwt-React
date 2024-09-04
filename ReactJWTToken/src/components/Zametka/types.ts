export interface Note {
  title: string;
  date: string;
  time: string;
  content: string;
}

export interface ZametkaProps {
  noteId: string; // Предполагается, что вы передаете ID заметки для запроса
}
