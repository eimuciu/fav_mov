import { Button, Heading } from '@chakra-ui/react';

const logoutBtn = {
  top: '0',
  right: '0',
};

interface Props {
  logout: () => void;
}

function Header({ logout }: Props) {
  return (
    <>
      <Button
        {...logoutBtn}
        position="absolute"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
      <Heading>Favorite Movies</Heading>
    </>
  );
}

export default Header;
