
import { styled } from '@mui/material';

export const Background = styled('div')`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;

  background-color: ${({theme}) => theme.palette.background.default}
`;

export const ListaStyled = styled('ul')`
  max-width: 1080px;
  padding: ${({theme}) => theme.spacing(10, 2, 10, 2)};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme}) => theme.spacing(9)};
  
  ${({theme}) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    gap: ${({theme}) => theme.spacing(7)};
  }
`;

export const EmptyList = styled('h3')`
  font-size: 1.3rem;
  margin: ${({theme}) => theme.spacing(10, 0)};
`;