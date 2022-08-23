import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import type { Movie } from '../../../types/types';
import Image from 'next/image';
import css from './MovieCard.module.css';

interface Props {
  movieObj: Movie;
}

function SingleTodo({ movieObj }: Props) {
  return (
    <Flex className={css.main}>
      <Box>
        <Image
          src={movieObj.Poster !== 'N/A' ? movieObj.Poster : '/noimage.jpg'}
          alt={movieObj.Title}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </Box>
      <Flex p="10px" className={css.textCont}>
        <Heading as="h3" size="md">
          {movieObj.Title}
        </Heading>
        <Text mt="5px">Year: {movieObj.Year}</Text>
      </Flex>
    </Flex>
  );
}

export default SingleTodo;
