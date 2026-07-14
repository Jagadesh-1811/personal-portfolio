import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  surfaceColor,
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const resolvedSurfaceColor = surfaceColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const radius = ((w * w) / 4 + h * h) / (2 * h);
        const diameter = Math.ceil(2 * radius) + 2;
        const delta = Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (w * w) / 4))) + 1;
        const originY = diameter - delta;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector('.pill-label');
        const hoverLabel = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, { scale: 1, duration: 0.6, ease });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, { width: 'auto', duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center',
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    '--base': baseColor,
    '--nav-surface': resolvedSurfaceColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '64px',
    '--logo': '52px',
    '--pill-pad-x': '28px',
    '--pill-gap': '4px',
  };

  return (
    <>
      {/* ── Logo in Top-Left ── */}
      <div className="absolute top-[1.5em] left-4 md:left-8" style={{ zIndex: 1000, ...cssVars }}>
        <a
          href="#top"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={(el) => {
            logoRef.current = el;
          }}
          className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden border border-[rgba(129,1,2,0.18)] shadow-[inset_0_1px_rgba(255,255,255,0.72),0_10px_20px_rgba(67,24,16,0.08)]"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            background: 'var(--nav-surface)',
          }}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-contain block" />
        </a>
      </div>

      {/* ── Center Desktop Nav Bar ── */}
      <div className="hidden md:block fixed top-[1.5em] left-1/2 -translate-x-1/2" style={{ zIndex: 1000, ...cssVars }}>
        <nav
          ref={navItemsRef}
          className={`pill-nav relative flex items-center rounded-full border border-[rgba(129,1,2,0.18)] shadow-[inset_0_1px_rgba(255,255,255,0.72),0_10px_20px_rgba(67,24,16,0.08)] ${className}`}
          aria-label="Primary"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--nav-surface)',
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 h-full"
            style={{ gap: 'var(--pill-gap)', padding: 3 }}
          >
            {items.map((item, i) => {
              const pillStyle = {
                background: 'var(--pill-bg, #fff)',
                color: 'var(--pill-text, var(--base, #000))',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)',
              };

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    className="relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0"
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full block pointer-events-none"
                      style={{ background: 'var(--base, #000)', willChange: 'transform' }}
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack relative inline-block" style={{ lineHeight: 1, zIndex: 2 }}>
                      <span className="pill-label relative inline-block" style={{ lineHeight: 1, zIndex: 2, willChange: 'transform' }}>
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-0 inline-block"
                        style={{ color: 'var(--hover-text, #fff)', willChange: 'transform, opacity' }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ── Mobile Hamburger Trigger (Top-Right) ── */}
      <div className="md:hidden fixed top-[1.5em] right-4" style={{ zIndex: 1000, ...cssVars }}>
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="rounded-full border border-[rgba(129,1,2,0.18)] shadow-[inset_0_1px_rgba(255,255,255,0.72),0_10px_20px_rgba(67,24,16,0.08)] flex flex-col items-center justify-center cursor-pointer p-0 relative"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            gap: 4,
            background: 'var(--nav-surface)',
          }}
        >
          <span className="hamburger-line w-4 h-0.5 rounded origin-center" style={{ background: 'var(--base, #000)' }} />
          <span className="hamburger-line w-4 h-0.5 rounded origin-center" style={{ background: 'var(--base, #000)' }} />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed top-[5.2em] left-4 right-4 rounded-[27px] shadow-[0_18px_40px_rgba(67,24,16,0.14)] origin-top border border-[rgba(129,1,2,0.12)]"
        style={{ ...cssVars, background: 'var(--nav-surface)', backdropFilter: 'blur(14px)', zIndex: 998 }}
      >
        <ul className="list-none m-0 flex flex-col" style={{ padding: 4, gap: 4 }}>
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3 px-4 text-[16px] font-semibold rounded-[50px] transition-all duration-200"
                style={{ background: 'var(--pill-bg, #fff)', color: 'var(--pill-text, #fff)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PillNav;
