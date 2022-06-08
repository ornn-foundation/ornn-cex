import React from 'react';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import Hello from '../components/Hello/Hello';
import { useGet } from '../hooks';
import { Button, Container, Header, Input, TitleHead } from '../components';
import { Path } from '../@types/request';

const Home = () => {
  const router = useRouter();
  const { locale, query } = router;
  const { id } = query;
  const [path, setPath] = React.useState<Path>('/posts');
  // const { state } = React.useContext(Context);
  const { loading, data } = useGet({ path });

  const pathCallback = React.useCallback(() => {
    if (id) {
      const slug = id.toString();
      setPath(`/posts/${slug}`);
    } else {
      setPath(`/posts`);
    }
  }, [id]);

  React.useEffect(() => {
    pathCallback();
  }, [pathCallback]);

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
              router
                .push('/market', '/market', { locale })
                .catch((err) => console.log(err));
            }}
          >
            Button
          </Button>
          <Button
            onClick={() => {
              router
                .push(
                  {
                    pathname: '/',
                    query: { id: 1 },
                  },
                  {
                    pathname: '/',
                    query: { id: 1 },
                  },
                  { locale }
                )
                .catch((err) => console.log(err));
            }}
          >
            Param
          </Button>
          <Input aria-label="Demo input" placeholder="Type something..." />
        </Stack>
        <div>{!loading && JSON.stringify(data)}</div>
      </Container.Content>
    </Container>
  );
};

export default Home;
