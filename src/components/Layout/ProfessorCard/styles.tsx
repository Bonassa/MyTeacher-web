
import { styled } from '@mui/material';

export const Container = styled('li')`
  list-style: none;
`;

export const Foto = styled('img')`
  width: 100%;
`;

export const Informacoes = styled('div')`

`;

export const Nome = styled('h3')`
  margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`;

export const Valor = styled('span')`
  margin: 0;
  font-weight: bold;
  color: ${({theme}) => theme.palette.primary.main}
`;

export const Description = styled('p')`
  word-break: break-word;
`;