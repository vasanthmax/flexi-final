import React, { useEffect } from 'react';
import AuthSection from './../components/AuthSection';
import { useRouter, useHistory } from './../util/router.js';

function AuthPage(props) {
  const router = useRouter();
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem('profile');

    if (user) {
      history.push('/');
    }
  }, []);

  return (
    <AuthSection
      bgColor='default'
      size='medium'
      bgImage=''
      bgImageOpacity={1}
      type={router.query.type}
      providers={['l']}
      afterAuthPath={router.query.next || '/dashboard'}
      // token={token}
    />
  );
}

export default AuthPage;
