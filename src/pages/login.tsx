import React from 'react';
import { Layout } from '../components';

const Login = () => {
  return (
    <Layout>
      <Layout.Menu>
        <div>Menu</div>
      </Layout.Menu>

      <Layout.Content>
        <div>Login</div>
      </Layout.Content>
      
      <Layout.Sidebar>
        <div>Sidebar</div>
      </Layout.Sidebar>
    </Layout>
  );
};

export default Login;
