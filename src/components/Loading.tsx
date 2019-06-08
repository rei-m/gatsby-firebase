import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useReactPortal } from '@src/hooks/useReactPortal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #fff;
`;

const Loading = () => {
  const el = useReactPortal();

  if (el == null) {
    return <div>ろーでぃんぐ中</div>;
  }

  const handleOnClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Container onClick={handleOnClick}>ろーでぃんぐ中</Container>,
    el
  );
};

export default Loading;
