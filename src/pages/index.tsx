import type { NextPage } from 'next';

import { ProfessorType } from '../@types/professor';

import { ProfessorList } from '../components/Layout/ProfessorList';

const Home: NextPage = () => {
  const professores: ProfessorType[] = [
    {
      id: 1,
      nome: 'Renan Bonassa',
      foto: 'https://www.github.com/Bonassa.png',
      descricao: 'Aulas de tudo',
      valorHora: 260
    },
    {
      id: 2,
      nome: 'Renan Bonassa',
      foto: 'https://github.com/Bonassa.png',
      descricao: 'Aulas de tudo',
      valorHora: 260
    },
    {
      id: 3,
      nome: 'Renan Bonassa',
      foto: 'https://github.com/Bonassa.png',
      descricao: 'Aulas de tudo',
      valorHora: 260
    },
  ]

  return (
    <ProfessorList data={professores} />
  )
}

export default Home