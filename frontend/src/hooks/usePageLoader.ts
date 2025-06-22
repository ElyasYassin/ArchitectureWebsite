import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const routesWithLoader = ['/home','/accessibilite', '/galerie', '/technologies'];

export function usePageLoader(delay = 1000) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const shouldLoad = routesWithLoader.includes(location.pathname);
    if (shouldLoad) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), delay);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  return loading;
}