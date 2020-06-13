import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgb(240, 243, 244);
  display: grid;
  grid-template-areas:
    'title'
    'content';
  padding-top: 50px;
`;

export const Wrapper = styled.article`
  margin-top: 100px;
  background: #f1f3f4;
  grid-area: content;
`;
