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
    'footer'
    'sidebar';

  @media only screen and (min-width: 600px) {
    grid-template-areas:
      'header header header header'
      'sidebar title title .'
      'sidebar content content .'
      'sidebar . . footer';
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.05);
  }
`;

export const Wrapper = styled.article`
  background: #f1f3f4;
  grid-area: content;
  padding: 0.5rem;

  @media only screen and (min-width: 600px) {
    padding: 1.5rem;
  }
`;
