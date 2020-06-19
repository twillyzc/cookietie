import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgb(240, 243, 244);
  display: grid;
  grid-template-areas:
    'header'
    'title'
    'content'
    'footer';
  @media only screen and (min-width: 600px) {
    grid-template-areas:
      'header header header header'
      '. title title .'
      '. content content .'
      '. . . footer';
  }
`;

export const Wrapper = styled.article`
  background: #f1f3f4;
  grid-area: content;
  padding: 1.5rem;
`;
