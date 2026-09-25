import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    // Force an instant jump regardless of the site's `scroll-behavior:
    // smooth` — this fires on a fresh page load/route change, before the
    // user has any scroll position to orient from, so there's nothing for
    // an animation to preserve context with.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    el.scrollIntoView({ behavior: 'auto' });
    html.style.scrollBehavior = previous;
  }, [pathname, hash]);

  return null;
}
