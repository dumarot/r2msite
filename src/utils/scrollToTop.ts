export const scrollToTop = (behavior: ScrollBehavior = 'auto') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};
