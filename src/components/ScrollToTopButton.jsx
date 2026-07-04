import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 420);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  useEffect(() => {
    const footer = document.querySelector('.wrapper-footer');

    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.06
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const shouldShow = isVisible && !isFooterVisible;

  return (
    <button
      className={`scroll-to-top${shouldShow ? ' is-visible' : ''}`}
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!shouldShow}
      tabIndex={shouldShow ? 0 : -1}
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
