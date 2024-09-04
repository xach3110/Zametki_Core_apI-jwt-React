import React, { FC, useState } from 'react';
import { AddzametkaWrapper, Form, Label, Input, Button } from './Addzametka.styled.ts';

interface AddzametkaProps {}

const Addzametka: FC<AddzametkaProps> = () => {
  const [fieldOne, setFieldOne] = useState('');
  const [fieldTwo, setFieldTwo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      fieldOne,
      fieldTwo,
    };

    try {
      const response = await fetch('https://your-server-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      console.log('Data submitted successfully:', data);
      setFieldOne('');
      setFieldTwo('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <AddzametkaWrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            value={fieldOne}
            onChange={(e) => setFieldOne(e.target.value)}
          />
        </Label>
        <Label>
          Text:
          <Input
            type="text"
            value={fieldTwo}
            onChange={(e) => setFieldTwo(e.target.value)}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </AddzametkaWrapper>
  );
};

export default Addzametka;
