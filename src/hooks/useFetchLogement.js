import { useState, useEffect } from 'react';

export default function useFetchLogement(id) {
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/logements.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === id);
        if (found) {
          setLogement(found);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  return { logement, loading, notFound };
}
