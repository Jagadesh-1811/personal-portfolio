import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#111638', '#0D1333'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  menuButtonColor = '#E2E8F0',
  accentColor = '#00D4FF',
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);

  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);

  const textInnerRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);

  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
      if (preContainer) gsap.set(preContainer, { xPercent: 0, opacity: 1 });

      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map(el => ({ el, start: offscreen }));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(panel, { xPercent: offscreen }, { xPercent: 0, duration: panelDuration, ease: 'power4.out' }, panelInsertTime);

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } }, itemsStart);
      if (numberEls.length) {
        tl.to(numberEls, { duration: 0.6, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.08, from: 'start' } }, itemsStart + 0.1);
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;
      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: { each: 0.08, from: 'start' } }, socialsStart + 0.04);
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => { busyRef.current = false; });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;

    closeTweenRef.current = gsap.to([...layers, panel], {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
        if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        busyRef.current = false;
      },
    });
  }, [position]);

  const animateIcon = useCallback(opening => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.timeline({ defaults: { ease: 'power4.out' } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0);
    }
  }, []);

  const animateColor = useCallback(opening => {
    const btn = toggleBtnRef.current;
    if (!btn) return;
    colorTweenRef.current?.kill();
    // Always keep the button on cyan so it never merges with the dark navy panel
    gsap.to(btn, {
      duration: 0.2,
      ease: 'power2.out',
      backgroundColor: 'var(--primary, #810102)',
      color: 'var(--surface, #fff7e8)',
      boxShadow: opening
        ? '0 0 20px rgba(129,1,2,0.5)'
        : '0 0 0 rgba(129,1,2,0)',
    });
  }, []);

  const animateText = useCallback(opening => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();
    const currentLabel = opening ? 'Menu' : 'Close';
    const cycles = 3;
    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    const targetLabel = opening ? 'Close' : 'Menu';
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });
    const finalShift = ((seq.length - 1) / seq.length) * 100;
    textCycleAnimRef.current = gsap.to(inner, { yPercent: -finalShift, duration: 0.5 + seq.length * 0.07, ease: 'power4.out' });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) { onMenuOpen?.(); playOpen(); }
    else { onMenuClose?.(); playClose(); }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    onMenuClose?.();
    playClose();
    animateIcon(false);
    animateColor(false);
    animateText(false);
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;
    const handler = e => {
      if (panelRef.current && !panelRef.current.contains(e.target) && toggleBtnRef.current && !toggleBtnRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [closeOnClickAway, open, closeMenu]);

  /* ── Pre-layer colours ──────────────────────────────── */
  const raw = colors && colors.length ? colors.slice(0, 4) : ['#111638', '#0D1333'];
  let layerColors = [...raw];
  if (layerColors.length >= 3) layerColors.splice(Math.floor(layerColors.length / 2), 1);

  return (
    <div className="sm-scope fixed inset-0 z-50 pointer-events-none">
      <div
        className={'staggered-menu-wrapper pointer-events-none relative w-full h-full' + (className ? ' ' + className : '')}
        style={accentColor ? { '--sm-accent': accentColor } : undefined}
        data-position={position}
        data-open={open || undefined}
      >
        {/* ── Stagger layers ── */}
        <div ref={preLayersRef} className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none" aria-hidden="true">
          {layerColors.map((c, i) => (
            <div key={i} className="sm-prelayer absolute inset-0" style={{ background: c }} />
          ))}
        </div>

        {/* ── Header bar ── */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 h-[60px] pointer-events-none z-20"
          style={{ borderBottom: open ? `1px solid #1E2756` : 'none' }}>
          {/* Logo / brand */}
          <div className="pointer-events-auto select-none flex items-center gap-3">
            <img
              src="/portfolio-mark.svg"
              alt="Jagadeeshwar CV Logo"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />

          </div>

          {/* Toggle button — theme pill */}
          <button
            ref={toggleBtnRef}
            onClick={toggleMenu}
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="pointer-events-auto cursor-pointer inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all duration-200"
            style={{
              background: 'var(--primary, #810102)',
              color: 'var(--surface, #fff7e8)',
              border: 'none',
              borderRadius: '6px',
              padding: '9px 20px',
              letterSpacing: '0.16em',
              boxShadow: '0 0 0 rgba(129, 1, 2, 0)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent, #bc4229)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(129, 1, 2, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--primary, #810102)';
              e.currentTarget.style.boxShadow = '0 0 0 rgba(129, 1, 2, 0)';
            }}
          >
            <span className="relative inline-block h-[1em] overflow-hidden" style={{ minWidth: '3.2em' }}>
              <span ref={textInnerRef} className="flex flex-col leading-none">
                {textLines.map((l, i) => (
                  <span key={i} className="block h-[1em] leading-none">{l}</span>
                ))}
              </span>
            </span>
            <span ref={iconRef} className="relative w-[14px] h-[14px] inline-flex items-center justify-center">
              <span ref={plusHRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] rounded-sm" style={{ background: 'currentColor' }} />
              <span ref={plusVRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] rounded-sm" style={{ background: 'currentColor' }} />
            </span>
          </button>
        </header>

        {/* ── Slide-in panel ── */}
        <aside
          ref={panelRef}
          aria-hidden={!open}
          className="absolute top-0 right-0 h-full flex flex-col overflow-y-auto pointer-events-auto z-10"
          style={{
            width: 'clamp(280px, 36vw, 420px)',
            background: 'var(--surface, #fff7e8)',
            borderLeft: '1px solid var(--muted, rgba(121, 87, 77, 0.2))',
            padding: '5.5rem 2.5rem 2.5rem',
          }}
        >
          {/* Nav items */}
          <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-1"
            data-numbering={displayItemNumbering || undefined}>
            {items.map((it, idx) => (
              <li key={it.label + idx} className="sm-panel-itemWrap relative overflow-hidden leading-none">
                <a
                  className="sm-panel-item relative font-bold uppercase inline-block no-underline pr-[1.4em] transition-colors duration-150"
                  href={it.link}
                  aria-label={it.ariaLabel}
                  data-index={idx + 1}
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', color: 'var(--text, #111)', lineHeight: 1 }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary, #810102)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text, #111)'}
                >
                  <span className="sm-panel-itemLabel inline-block" style={{ transformOrigin: '50% 100%' }}>
                    {it.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--muted, rgba(121, 87, 77, 0.2))', margin: '2rem 0' }} />

          {/* Socials */}
          {displaySocials && socialItems.length > 0 && (
            <div className="sm-socials mt-auto flex flex-col gap-3">
              <h3 className="sm-socials-title m-0 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--primary, #810102)' }}>
                Socials
              </h3>
              <ul className="sm-socials-list list-none m-0 p-0 flex flex-row flex-wrap gap-4">
                {socialItems.map((s, i) => (
                  <li key={s.label + i}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link flex items-center gap-2 text-base font-medium no-underline transition-colors duration-200"
                      style={{ color: 'var(--muted, #666)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--primary, #810102)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted, #666)'}
                    >
                      {s.icon && <span className="opacity-80">{s.icon}</span>}
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default StaggeredMenu;
