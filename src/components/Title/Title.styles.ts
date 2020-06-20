import styled from 'styled-components';

export const Container = styled.div`
  grid-area: title;
  background-color: ${(props) => props.theme.colors.light};
  padding: 1.5rem;
`;
