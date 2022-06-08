import React from 'react';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import Hello from '../components/Hello/Hello';
import { useGet } from '../hooks';
import { Button, Container, Header, Input, TitleHead } from '../components';

const Home = () => {
  const router = useRouter();
  const { locale } = router;
  // const { state } = React.useContext(Context);
  const { loading, data } = useGet({ path: '/posts' });

  return (
    <Container>
      <TitleHead />
      <Header />
      <Container.Content>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Hello />
        <Stack spacing={2} direction="row">
          <Button
            onClick={() => {
              router.push('/market', '/market', { locale });
            }}
          >
            Button
          </Button>
          <Input aria-label="Demo input" placeholder="Type something..." />
        </Stack>
        <div>{!loading && JSON.stringify(data)}</div>
      </Container.Content>
    </Container>
  );
};

export default Home;
