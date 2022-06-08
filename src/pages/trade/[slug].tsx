import React from 'react';
import { useRouter } from 'next/router';
import { TitleHead, Header, Container } from '../../components';

const Slug = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);

  return (
    <Container>
      <TitleHead title="Slug" />
      <Header />
      <Container.Content>Slug</Container.Content>
    </Container>
  );
};

export default Slug;
