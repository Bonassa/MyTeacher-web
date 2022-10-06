
import { Background, EmptyList, ListaStyled } from './styles';

import { ProfessorType } from '../../../@types/professor';

import { ProfessorCard } from '../ProfessorCard';

interface ProfessorListProps {
  data: ProfessorType[];
}

export function ProfessorList({ data } : ProfessorListProps){
  return (
    <Background>
      {data.length === 0 ? (
        <EmptyList>Nunhum professor encontrado</EmptyList>
      ) : (
        <ListaStyled>
          {data.map((professorInfo : ProfessorType) => (
            <ProfessorCard data={professorInfo} key={professorInfo.id} />
          ))}
        </ListaStyled>
      )}
    </Background>
  );
}