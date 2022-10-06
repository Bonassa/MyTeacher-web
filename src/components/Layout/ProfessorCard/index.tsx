
import { Button } from '@mui/material';
import { Container, Description, Foto, Informacoes, Nome, Valor } from "./styles";

import { ProfessorType } from '../../../@types/professor';

interface ProfessorCardProps {
  data: ProfessorType;
}

export function ProfessorCard({ data } : ProfessorCardProps){
  return (
    <Container>
      <Foto src={data.foto} />

      <Informacoes>
        <Nome>{data.nome}</Nome>

        <Valor>
          {data.valorHora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora
        </Valor>
        
        <Description>{data.descricao}</Description>
        
        <Button sx={{ minWidth: '70%' }}>Marcar Aula com {data.nome}</Button>
      </Informacoes>
    </Container>
  );
}