import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  onSubmit: (todoName: string) => void;
}

const Container = styled.form`
  padding: 16px;
`;

const AddTodoForm = ({ onSubmit }: Props) => {
  const textInput = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.SyntheticEvent<{}>) => {
    e.preventDefault();
    if (!textInput.current) {
      return;
    }
    onSubmit(textInput.current.value);
    textInput.current.value = '';
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input type="text" ref={textInput} />
      <button type="submit">Add Todo</button>
    </Container>
  );
};

export default AddTodoForm;
