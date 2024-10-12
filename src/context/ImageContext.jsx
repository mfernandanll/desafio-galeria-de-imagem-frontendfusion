import { createContext, useState, useEffect, useContext } from 'react';
import { fetchImages } from '../services/fetchImages';

const ImagesContext = createContext();

export function ImagesProvider({ children }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchImages();
      setImages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <ImagesContext.Provider value={{ images, loading, error }}>
      {children}
    </ImagesContext.Provider>
  );
}

export function useImages() {
  return useContext(ImagesContext);
}
