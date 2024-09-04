import React, { useState, useEffect } from 'react';
import { Container, Header, Title, DateTime, Content, DeleteB } from './Zametka.styled.ts';
import { ZametkaProps, Note } from './types';

const Zametka: React.FC<ZametkaProps> = ({ noteId }) => {
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`https://your-server-endpoint.com/notes/${noteId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch the note');
        }

        const data = await response.json();
        setNote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [noteId]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://your-server-endpoint.com/notes/${noteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the note');
      }

      // Успешное удаление: можно выполнить разные действия
      // Например, удалить заметку из состояния, чтобы она исчезла с экрана
      setNote(null);
    } catch (error) {
      console.error('Error deleting the note:', error);
    }
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>Error: {error}</Container>;
  }

  if (!note) {
    return <Container>Note was deleted</Container>; // Отображение после удаления заметки
  }

  return (
    <Container>
      <Header>
        <Title>{note.title}</Title>
        <DeleteB onClick={handleDelete}>X</DeleteB>
      </Header>
      <DateTime>
        {note.date} {note.time}
      </DateTime>
      <Content>{note.content}</Content>
    </Container>
  );
};

export default Zametka;
