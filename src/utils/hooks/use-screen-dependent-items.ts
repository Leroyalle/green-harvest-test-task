import { useEffect, useState } from 'react';

/**
 * Хук, который возвращает массив элементов, количество которых зависит от ширины экрана.
 * @param items - массив элементов
 * @returns массив видимых элементов
 */

export const useScreenDependentItems = <T>(items: T[]) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(items.slice(0, 1));
      } else if (window.innerWidth < 1024) {
        setVisibleItems(items.slice(0, 2));
      } else {
        setVisibleItems(items.slice(0, 3));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items]);

  return {
    visibleItems,
  };
};
