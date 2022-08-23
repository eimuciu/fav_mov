import SingleTodo from './SingleTodo/SingleTodo';
import { Heading, Box } from '@chakra-ui/react';
import { Movie } from '../../types/types';

interface Props {
  data: Movie[];
}

function MoviesList({ data }: Props) {
  console.log(data);
  return (
    <Box mt="50px" w="100%">
      <Heading as="h2" size="xl" mb="15px">
        My list
      </Heading>
      {data.map((mobj: any) => (
        <SingleTodo key={mobj.Title + mobj.Poster} movieObj={mobj} />
      ))}
    </Box>
  );
}

export default MoviesList;
