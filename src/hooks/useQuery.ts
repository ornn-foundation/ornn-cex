import { useRouter } from 'next/router';
import React from 'react';

// Resolves query or returns null
export default function useQuery() {
  const router = useRouter();
  React.useEffect(() => {
    console.log('[useEffect]');
    if (Object.keys(router.query).length > 0) {
      console.log('[query]', router.query);
    }
  }, [router.query]);
}
