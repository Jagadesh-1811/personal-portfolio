import { useEffect, useRef } from 'react';

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);

  // Helper to extract text from children
  const getTextFromChildren = (node) => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getTextFromChildren).join('');
    if (node && node.props && node.props.children) return getTextFromChildren(node.props.children);
    return '';
  };

  const textContent = getTextFromChildren(children);
  const chars = textContent.split('');

  useEffect(() => {
    if (!rootRef.current) return;

    const charElements = rootRef.current.querySelectorAll('.scramble-char');
    if (!charElements.length) return;

    const charData = Array.from(charElements).map((el) => {
      const original = el.textContent;
      return {
        el,
        original,
        scrambling: false,
        timer: null
      };
    });

    const handleMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      charData.forEach((data) => {
        const { el, original } = data;
        const rect = el.getBoundingClientRect();
        const charX = rect.left + rect.width / 2;
        const charY = rect.top + rect.height / 2;

        const dx = mouseX - charX;
        const dy = mouseY - charY;
        const dist = Math.hypot(dx, dy);

        if (dist < radius && !data.scrambling) {
          data.scrambling = true;

          const activeDuration = duration * (1 - dist / radius);
          const steps = Math.ceil(activeDuration / (0.05 / speed));
          let step = 0;

          const interval = setInterval(() => {
            if (step >= steps) {
              clearInterval(interval);
              el.textContent = original;
              data.scrambling = false;
            } else {
              const randChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
              el.textContent = randChar;
              step++;
            }
          }, 40 * (1 / speed));

          data.timer = interval;
        }
      });
    };

    window.addEventListener('pointermove', handleMove);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      charData.forEach((d) => {
        if (d.timer) clearInterval(d.timer);
      });
    };
  }, [radius, duration, speed, scrambleChars, textContent]);

  return (
    <span
      ref={rootRef}
      className={className}
      style={style}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          className="scramble-char inline-block will-change-transform"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default ScrambledText;
