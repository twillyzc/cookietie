import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgb(240, 243, 244);
  display: grid;
  grid-template-areas:
    'header'
    'title'
    'content';
`;

export const Wrapper = styled.article`
  background: #f1f3f4;
  grid-area: content;
  padding: 1.5rem;
`;
