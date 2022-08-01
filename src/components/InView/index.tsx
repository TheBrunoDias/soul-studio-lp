import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  from?: 'left' | 'right' | 'top' | 'down';
  duration?: number;
  delay?: number;
};

export const InView: React.FC<Props> = ({ children, from = 'down', duration = 1000, delay = 50 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getDirection = () => {
    if (from === 'down') return 'translate-y-10';
    if (from === 'left') return '-translate-x-10';
    if (from === 'right') return 'translate-x-10';
    if (from === 'top') return '-translate-y-10';

    return 'translate-y-10';
  };

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, isVisible]);

  return (
    <div
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      className={`${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : getDirection()
      } transition  opacity-0 ease-in-out w-full`}
      ref={containerRef}
    >
      {children}
    </div>
  );
};
