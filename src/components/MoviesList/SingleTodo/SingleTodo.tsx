import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { CheckIcon, ViewIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useDataCtx } from '../../../store/dataProvider';
import type { Movie } from '../../../types/types';

const main = {
  w: '100%',
  mt: '5px',
  border: '1px solid lightgray',
  borderRadius: '5px',
  p: '5px 10px',
};

interface Props {
  movieObj: Movie;
}

function SingleTodo({ movieObj }: Props) {
  return (
    <Flex {...main} direction="column" position="relative">
      <Box mb="5px">
        <Heading as="h3" size="md">
          {movieObj.Title}
        </Heading>
      </Box>
      <Box mb="2px">{/* <Text>{movieObj.description}</Text> */}</Box>
      <Box>{/* <Text>{movieObj.status}</Text> */}</Box>
    </Flex>
  );
}

export default SingleTodo;
