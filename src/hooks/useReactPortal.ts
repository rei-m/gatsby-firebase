import { useLayoutEffect, useMemo } from 'react';

const rootStyleMap: { [key: string]: string | number } = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  cursor: 'default',
  'background-color': 'transparent',
  'z-index': 99,
};

const rootStyle = Object.keys(rootStyleMap)
  .map(key => `${key}: ${rootStyleMap[key]}`)
  .join(';');

export const useReactPortal = (portalElementId?: string) => {
  const el = useMemo(() => {
    const div = document.createElement('div');
    div.style.cssText = rootStyle;
    return div;
  }, []);

  useLayoutEffect(() => {
    const body = document.getElementsByTagName('body')[0]!;
    const bodyOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    const rootContainer = document.getElementById(
      portalElementId ? portalElementId : '___gatsby_portal'
    )!;
    rootContainer.appendChild(el);

    return () => {
      rootContainer.removeChild(el);
      body.style.overflow = bodyOverflow;
    };
  }, []);
  return el;
};
