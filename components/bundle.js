/* @ds-bundle: {"format":4,"namespace":"TeemeupCart","components":[{"name":"DeviceFrame"},{"name":"CartHeader"},{"name":"CourseMark"},{"name":"BottomBar"},{"name":"Button"},{"name":"IconButton"},{"name":"YardageReadout"},{"name":"HoleMap"},{"name":"StatusTag"},{"name":"BobAvatar"},{"name":"ChatBubble"},{"name":"MicButton"},{"name":"AnswerCard"},{"name":"PromptChip"},{"name":"Composer"},{"name":"Banner"},{"name":"AlertSheet"},{"name":"AlertTakeover"},{"name":"QRPanel"},{"name":"ChoiceCard"},{"name":"GolferRow"},{"name":"MenuItem"},{"name":"CategoryTabs"},{"name":"QuantityStepper"},{"name":"Keypad"},{"name":"Icon"}]} */
(function () {
  var R = window.React, h = R.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  var PATHS = {
    sparkles: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z',
    mic: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3ZM19 10v2a7 7 0 0 1-14 0v-2M12 19v3',
    help: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20ZM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01',
    signal: 'M2 20h.01M7 20v-4M12 20v-8M17 20V8',
    battery: 'M4 7h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM22 11v2M6 10v4M10 10v4',
    batteryLow: 'M4 7h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM22 11v2M6 10v4',
    lightning: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
    alert: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01',
    ban: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20ZM4.9 4.9l14.2 14.2',
    check: 'M20 6 9 17l-5-5',
    checkCircle: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3',
    wifiOff: 'M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.17-2.65M10.66 5c4.01-.36 8.14.9 11.34 3.76M16.85 11.25a10 10 0 0 1 2.22 1.68M5 13a10 10 0 0 1 5.24-2.76M2 2l20 20',
    clock: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20ZM12 6v6l4 2',
    message: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z',
    shelter: 'M3 10 12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z',
    arrowRight: 'M5 12h14M12 5l7 7-7 7',
    arrowUp: 'M12 19V5M5 12l7-7 7 7',
    arrowDown: 'M12 5v14M19 12l-7 7-7-7',
    chevronLeft: 'm15 18-6-6 6-6',
    chevronRight: 'm9 18 6-6-6-6',
    cart: 'M4 17h16v-5l-3-6H7l-3 6zM4 12h16M8 19a2 2 0 1 0 0-4a2 2 0 1 0 0 4ZM16 19a2 2 0 1 0 0-4a2 2 0 1 0 0 4Z',
    walk: 'M13 6a2 2 0 1 0 0-4a2 2 0 1 0 0 4ZM9 21l2-6 3 3v3M8 11l3-3 3 2 3 1M11 8l-1 5',
    phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
    lock: 'M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2ZM7 11V7a5 5 0 0 1 10 0v4',
    plug: 'M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z',
    search: 'M11 19a8 8 0 1 0 0-16a8 8 0 1 0 0 16ZM21 21l-4.3-4.3',
    nfc: 'M6 8.3a6 6 0 0 1 0 7.4M9.5 5.5a10 10 0 0 1 0 13M13 3a14 14 0 0 1 0 18',
    volume: 'M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14',
    food: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7',
    music: 'M9 18V5l12-2v13M6 21a3 3 0 1 0 0-6a3 3 0 1 0 0 6ZM18 19a3 3 0 1 0 0-6a3 3 0 1 0 0 6Z',
    mapPinOff: 'M12.75 7.09a3 3 0 0 1 2.16 2.16M17.41 17.41A60 60 0 0 1 12 22s-8-6-8-12a8 8 0 0 1 1.6-4.8M8.42 3.24A8 8 0 0 1 20 10c0 1.4-.36 2.76-.96 4.04M2 2l20 20',
    x: 'M18 6 6 18M6 6l12 12',
    send: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zM21.854 2.147l-10.94 10.939',
    flag: 'M7 22V2l11 5.5L7 13M4 22h7',
    plus: 'M5 12h14M12 5v14',
    minus: 'M5 12h14',
    droplet: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z',
    play: 'm7 4 13 8-13 8V4z',
    pause: 'M7 4h3v16H7zM14 4h3v16h-3z',
    skipBack: 'M19 20 9 12l10-8v16zM5 19V5',
    skipForward: 'm5 4 10 8-10 8V4zM19 5v14',
    lifebuoy: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20ZM12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8ZM4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24',
    keyboard: 'M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2ZM6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10'
  };
  var ICON_NAMES = Object.keys(PATHS);

  function Icon(p) {
    var s = p.size || 20;
    return h('svg', {
      className: cx('tmc-icon', p.className), width: s, height: s, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth: p.strokeWidth || 2, strokeLinecap: 'round', strokeLinejoin: 'round',
      role: p.label ? 'img' : undefined, 'aria-label': p.label, 'aria-hidden': p.label ? undefined : 'true', style: p.style
    }, h('path', { d: PATHS[p.name] || '' }));
  }

  function DeviceFrame(p) {
    return h('div', { className: cx('tmc-device', p.className), 'data-theme': p.theme || 'day', style: p.style }, p.children);
  }

  function CourseMark(p) {
    var st = {};
    if (p.accent) st.background = p.accent;
    if (p.onAccent) st.color = p.onAccent;
    if (p.size) { st.width = p.size; st.height = p.size; st.fontSize = Math.round(p.size * 0.38); }
    return h('div', { className: 'tmc-mark', style: st, role: 'img', 'aria-label': p.label || p.monogram }, p.monogram);
  }

  function IconButton(p) {
    return h('button', {
      type: 'button', className: cx('tmc-iconbtn', p.size === 'sm' && 'tmc-iconbtn-sm', p.variant === 'map' && 'tmc-iconbtn-map', p.className),
      'aria-label': p.label, onClick: p.onClick, style: p.style
    }, h(Icon, { name: p.icon, size: p.size === 'sm' ? 20 : 24 }));
  }

  function CartHeader(p) {
    var lead = p.onBack || p.back
      ? h(IconButton, { icon: 'chevronLeft', label: 'Back', size: 'sm', onClick: p.onBack })
      : (p.monogram ? h(CourseMark, { monogram: p.monogram, accent: p.accent, onAccent: p.onAccent, label: p.course }) : null);
    var right = p.right !== undefined ? p.right
      : (p.battery != null ? h('div', { className: 'tmc-hd-status' },
          h(Icon, { name: 'signal', size: 18, label: p.offline ? 'No signal' : 'Signal' }),
          h(Icon, { name: p.battery < 25 ? 'batteryLow' : 'battery', size: 18, label: 'Battery' }), p.battery + '%')
        : (p.device ? h('div', { className: 'tmc-hd-status' }, p.device) : null));
    return h('header', { className: 'tmc-hd' }, lead,
      h('div', { className: 'tmc-hd-title' }, p.title, p.meta ? h('span', { className: 'tmc-hd-meta' }, ' · ' + p.meta) : null),
      right);
  }

  function BobAvatar(p) {
    var s = p.size || 40;
    return h('div', { className: cx('tmc-bob', p.onAccent && 'tmc-bob-on'), style: { width: s, height: s }, role: 'img', 'aria-label': 'Bob' },
      h(Icon, { name: 'sparkles', size: Math.round(s * 0.5) }));
  }

  function Button(p) {
    var v = p.variant || 'primary';
    return h('button', {
      type: p.type || 'button', disabled: p.disabled, onClick: p.onClick, 'aria-label': p['aria-label'], style: p.style,
      className: cx('tmc-btn', 'tmc-btn-' + v, p.block && 'tmc-block', p.pill && 'tmc-pill', p.className)
    }, p.icon ? h(Icon, { name: p.icon }) : null, p.children);
  }

  // The dock: Bob raised in the centre (tap to chat, hold to talk), destinations either side.
  // MVP: Hole · Bob · Help. Phase 3: Hole · Food · Bob · Music · Help. Bob never moves.
  function DockItem(p) {
    var on = p.active === p.id;
    return h('button', { type: 'button', className: 'tmc-dock-item', onClick: p.onClick, 'aria-current': on ? 'page' : undefined },
      h('span', { className: 'tmc-dock-ico' }, h(Icon, { name: p.icon, size: 26, strokeWidth: on ? 2.4 : 2 })),
      h('span', { className: 'tmc-dock-label' }, p.label));
  }
  function BottomBar(p) {
    var full = p.items === 'full';
    var a = p.active || 'hole';
    var item = function (id, icon, label, fn) { return h(DockItem, { key: id, id: id, icon: icon, label: label, active: a, onClick: fn }); };
    var bob = h('button', { key: 'bob', type: 'button', className: 'tmc-dock-bob', onClick: p.onTalk, onPointerDown: p.onHoldStart,
        'aria-label': 'Ask Bob. Tap to chat, hold to talk', 'aria-current': a === 'bob' ? 'page' : undefined },
      h('span', { className: 'tmc-dock-bob-btn' }, h(Icon, { name: 'sparkles', size: 30 }),
        h('span', { className: 'tmc-dock-mic', 'aria-hidden': 'true' }, h(Icon, { name: 'mic', size: 15, strokeWidth: 2.4 }))),
      h('span', { className: 'tmc-dock-label' }, 'Ask Bob'));
    var kids = full
      ? [item('hole', 'flag', 'Hole', p.onHole), item('food', 'food', 'Food', p.onFood), bob, item('music', 'music', 'Music', p.onMusic), item('help', 'lifebuoy', 'Help', p.onHelp)]
      : [item('hole', 'flag', 'Hole', p.onHole), bob, item('help', 'lifebuoy', 'Help', p.onHelp)];
    return h('nav', { className: cx('tmc-dock', full && 'tmc-dock-full'), 'aria-label': 'Main' }, kids);
  }

  function YardageReadout(p) {
    var u = p.unit === 'm' ? 'm' : 'yds';
    return h('div', { className: 'tmc-yd', role: 'group', 'aria-label': 'Distance to the green in ' + (u === 'm' ? 'meters' : 'yards') },
      h('div', null, h('div', { className: 'tmc-yd-l' }, 'Front'), h('div', { className: 'tmc-yd-s' }, p.front)),
      h('div', null, h('div', { className: 'tmc-yd-l' }, 'Middle · ' + u), h('div', { className: 'tmc-yd-h' }, p.middle)),
      h('div', null, h('div', { className: 'tmc-yd-l' }, 'Back'), h('div', { className: 'tmc-yd-s' }, p.back)));
  }

  var mapSeq = 0;
  // Tree clumps along both sides of the hole: [x, y, radius] in the 328 x 412 map space.
  var TREES = [[14, 176, 22], [34, 206, 18], [12, 240, 24], [40, 278, 22], [16, 314, 20], [44, 350, 24], [18, 392, 22],
    [300, 136, 18], [318, 172, 20], [296, 210, 24], [320, 252, 22], [292, 292, 26], [318, 336, 22], [288, 376, 24], [316, 404, 20],
    [100, 14, 18], [140, 8, 16], [276, 6, 14]];
  function HoleMap(p) {
    var ref = R.useRef(null);
    if (ref.current === null) ref.current = 'tmcz' + (++mapSeq);
    var id = ref.current;
    var labels = p.hazards || [{ text: 'Water 236', x: 94, y: 153 }, { text: 'Bunker 214', x: 134, y: 249 }];
    // Geometry in the 328 x 412 map space. Defaults fit the drawn stand-in; a real image passes its own.
    var me = p.me || (p.walker ? { x: 160, y: 330 } : { x: 152, y: 352 });
    var pin = p.pin || { x: 212, y: 66 };
    var tapAt = p.tapAt || { x: 232, y: 170 };
    var zonePath = p.zonePath || 'M248 30L312 22L320 78L262 92Z';
    var zoneAt = p.zoneLabelAt || { x: 284, y: 107 };
    var tapW = String(p.tap || '').length * 9 + 16;
    var tapLabelX = Math.min(tapAt.x + 16, 324 - tapW);
    var dot = p.walker
      ? h('g', { key: 'me', transform: 'translate(' + (me.x - 160) + ' ' + (me.y - 330) + ')' },
          h('circle', { cx: 160, cy: 330, r: 19, fill: '#ffffff' }), h('circle', { cx: 160, cy: 330, r: 16, fill: 'var(--primary)' }),
          h('circle', { cx: 160, cy: 322, r: 2.8, fill: '#ffffff' }),
          h('path', { d: 'M160 326v8M155 329l5-1 5 1M156 341l4-7 4 7', stroke: '#ffffff', strokeWidth: 2, fill: 'none', strokeLinecap: 'round' }))
      : h('g', { key: 'me' }, h('circle', { cx: me.x, cy: me.y, r: 14, fill: '#ffffff' }), h('circle', { cx: me.x, cy: me.y, r: 9, fill: 'var(--primary)' }));
    var FAIRWAY = 'M150 400C138 320 146 262 184 214C220 168 226 126 214 76';
    var WATER = 'M36 52C78 30 128 50 142 92C150 122 112 140 80 130C42 120 22 82 36 52Z';
    var stop = function (o, c, a) { return h('stop', { offset: o, style: { stopColor: c, stopOpacity: a == null ? 1 : a } }); };
    var trees = TREES.map(function (t, i) {
      var x = t[0], y = t[1], r = t[2];
      return h('g', { key: 't' + i },
        h('ellipse', { cx: x + r * 0.28, cy: y + r * 0.32, rx: r, ry: r * 0.92, fill: '#000000', opacity: 0.34 }),
        h('circle', { cx: x, cy: y, r: r, fill: 'url(#' + id + 'c)' }),
        h('circle', { cx: x - r * 0.38, cy: y - r * 0.3, r: r * 0.55, fill: 'url(#' + id + 'c)' }),
        h('circle', { cx: x + r * 0.32, cy: y + r * 0.1, r: r * 0.5, fill: 'url(#' + id + 'c)', opacity: 0.9 }));
    });
    var art = h('svg', { className: 'tmc-map-art', viewBox: '0 0 328 412', preserveAspectRatio: 'xMidYMid slice', role: 'img', 'aria-label': p.label || 'Hole map' },
      h('defs', null,
        h('pattern', { id: id, width: 10, height: 10, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' },
          h('rect', { width: 10, height: 10, fill: 'var(--zone-tint)' }), h('rect', { width: 4, height: 10, fill: 'var(--zone)' })),
        h('pattern', { id: id + 's', width: 26, height: 26, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(-38)' },
          h('rect', { width: 13, height: 26, fill: '#ffffff', opacity: 0.09 })),
        h('pattern', { id: id + 'gs', width: 10, height: 10, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(20)' },
          h('rect', { width: 5, height: 10, fill: '#ffffff', opacity: 0.08 })),
        h('filter', { id: id + 'n', x: 0, y: 0, width: '100%', height: '100%' },
          h('feTurbulence', { type: 'fractalNoise', baseFrequency: 0.85, numOctaves: 2, seed: 4 }),
          h('feColorMatrix', { type: 'matrix', values: '0 0 0 0 0  0 0 0 0 0.05  0 0 0 0 0  0 0 0 -1.4 0.82' })),
        h('filter', { id: id + 'm', x: 0, y: 0, width: '100%', height: '100%' },
          h('feTurbulence', { type: 'fractalNoise', baseFrequency: 0.018, numOctaves: 3, seed: 9 }),
          h('feColorMatrix', { type: 'matrix', values: '0 0 0 0 0.04  0 0 0 0 0.12  0 0 0 0 0.03  0 0 0 -2.6 1.45' })),
        h('radialGradient', { id: id + 'c', cx: '38%', cy: '35%', r: '70%' }, stop('0', '#4f8a3f'), stop('0.55', '#2f6230'), stop('1', 'var(--map-trees)')),
        h('radialGradient', { id: id + 'g', cx: '45%', cy: '40%', r: '65%' }, stop('0', '#8fcf68'), stop('1', 'var(--map-green)')),
        h('radialGradient', { id: id + 'b', cx: '45%', cy: '40%', r: '70%' }, stop('0', '#f4ecd0'), stop('1', 'var(--map-sand)')),
        h('linearGradient', { id: id + 'w', x1: 0, y1: 0, x2: 1, y2: 1 }, stop('0', '#3d93c6'), stop('0.6', 'var(--map-water)'), stop('1', '#1c5684'))),
      p.image ? h('image', { className: 'tmc-map-base', href: p.image, x: 0, y: 0, width: 328, height: 412, preserveAspectRatio: 'xMidYMid slice' }) :
      h('g', { className: 'tmc-map-base' },
        h('rect', { width: 328, height: 412, fill: 'var(--map-rough)' }),
        h('rect', { width: 328, height: 412, filter: 'url(#' + id + 'm)' }),
        h('path', { d: FAIRWAY, stroke: 'var(--map-rough-cut)', strokeWidth: 104, fill: 'none', strokeLinecap: 'round' }),
        h('path', { d: FAIRWAY, stroke: 'var(--map-fairway)', strokeWidth: 80, fill: 'none', strokeLinecap: 'round' }),
        h('path', { d: FAIRWAY, stroke: 'url(#' + id + 's)', strokeWidth: 80, fill: 'none', strokeLinecap: 'round' }),
        h('path', { d: 'M110 405C98 330 100 272 124 230C146 192 154 160 150 124', stroke: 'var(--map-path)', strokeWidth: 5, fill: 'none', strokeLinecap: 'round', opacity: 0.85 }),
        h('ellipse', { cx: 212, cy: 66, rx: 54, ry: 41, fill: 'var(--map-fringe)' }),
        h('ellipse', { cx: 212, cy: 66, rx: 46, ry: 34, fill: 'url(#' + id + 'g)' }),
        h('ellipse', { cx: 212, cy: 66, rx: 46, ry: 34, fill: 'url(#' + id + 'gs)' }),
        h('path', { d: WATER, fill: 'none', stroke: '#9cc59a', strokeWidth: 6, opacity: 0.5 }),
        h('path', { d: WATER, fill: 'url(#' + id + 'w)', stroke: 'var(--map-penalty)', strokeWidth: 2 }),
        h('path', { d: 'M56 62C80 52 108 62 120 84', stroke: '#ffffff', strokeWidth: 2, fill: 'none', opacity: 0.18, strokeLinecap: 'round' }),
        h('ellipse', { cx: 160, cy: 226, rx: 26, ry: 14, fill: 'url(#' + id + 'b)', stroke: '#000000', strokeOpacity: 0.18, strokeWidth: 1.5 }),
        h('ellipse', { cx: 166, cy: 96, rx: 14, ry: 9, fill: 'url(#' + id + 'b)', stroke: '#000000', strokeOpacity: 0.18, strokeWidth: 1.5 }),
        h('rect', { x: 132, y: 384, width: 38, height: 14, rx: 3, fill: 'var(--map-fringe)' }),
        h('rect', { x: 138, y: 364, width: 26, height: 11, rx: 3, fill: 'var(--map-fringe)' }),
        trees,
        h('rect', { width: 328, height: 412, filter: 'url(#' + id + 'n)', opacity: 0.55 })),
      p.zone ? h('path', { d: zonePath, fill: 'url(#' + id + ')', stroke: 'var(--zone)', strokeWidth: 2 }) : null,
      p.inZone ? h('path', { d: 'M' + (me.x - 50) + ' ' + (me.y - 60) + 'L' + (me.x + 50) + ' ' + (me.y - 70) + 'L' + (me.x + 60) + ' 412L' + (me.x - 60) + ' 412Z', fill: 'url(#' + id + ')', stroke: 'var(--zone)', strokeWidth: 2 }) : null,
      h('g', { transform: 'translate(' + (pin.x - 212) + ' ' + (pin.y - 66) + ')' },
        h('path', { d: 'M215 68l9 3', stroke: '#000000', strokeOpacity: 0.3, strokeWidth: 3, strokeLinecap: 'round' }),
        h('circle', { cx: 212, cy: 66, r: 2.5, fill: '#0a1e2c' }),
        h('path', { d: 'M212 66V36l16 6-16 6', stroke: '#ffffff', strokeWidth: 2.5, fill: '#ffffff' })),
      p.tap ? h('g', null, h('path', { d: 'M' + me.x + ' ' + me.y + 'L' + tapAt.x + ' ' + tapAt.y, stroke: '#ffffff', strokeWidth: 2, strokeDasharray: '5 5' }),
        h('circle', { cx: tapAt.x, cy: tapAt.y, r: 12, fill: 'none', stroke: '#ffffff', strokeWidth: 3 })) : null,
      dot,
      h('g', { fontSize: 14, fontWeight: 700, fill: '#ffffff', fontFamily: 'inherit' },
        labels.map(function (l, i) {
          var w = l.text.length * 8 + 18;
          return h('g', { key: i }, h('rect', { x: l.x - w / 2, y: l.y - 13, width: w, height: 26, rx: 13, fill: 'var(--map-label)' }),
            h('text', { x: l.x, y: l.y + 5, textAnchor: 'middle' }, l.text));
        }),
        p.tap ? h('g', null, h('rect', { x: tapLabelX, y: tapAt.y - 10, width: tapW, height: 30, rx: 15, fill: '#ffffff' }),
          h('text', { x: tapLabelX + tapW / 2, y: tapAt.y + 10, textAnchor: 'middle', fill: '#0a1e2c', fontSize: 16 }, p.tap)) : null,
        p.zone ? h('g', null, h('rect', { x: zoneAt.x - 38, y: zoneAt.y - 11, width: 76, height: 22, rx: 11, fill: 'var(--zone)' }),
          h('text', { x: zoneAt.x, y: zoneAt.y + 4, textAnchor: 'middle', fill: '#0a1e2c', fontSize: 12 }, p.zoneLabel || 'No carts')) : null),
      p.credit ? h('text', { x: 6, y: 13, fontSize: 9, fontWeight: 600, fill: '#ffffff', opacity: 0.9, fontFamily: 'inherit', style: { paintOrder: 'stroke' }, stroke: '#0a1e2c', strokeWidth: 2, strokeOpacity: 0.5 }, p.credit) : null);
    return h('div', { className: 'tmc-map', style: p.height ? { flex: 'none', height: p.height } : undefined }, art,
      p.nav === false ? null : h(R.Fragment, null,
        h(IconButton, { icon: 'chevronLeft', label: 'Previous hole', variant: 'map', className: 'tmc-map-nav', style: { left: 12, position: 'absolute' } }),
        h(IconButton, { icon: 'chevronRight', label: 'Next hole', variant: 'map', className: 'tmc-map-nav', style: { right: 12, position: 'absolute' } })));
  }

  var TAG_ICONS = { go: 'check', lightning: 'lightning', zone: 'alert', warning: 'batteryLow' };
  function StatusTag(p) {
    var t = p.tone || 'neutral';
    var ic = p.icon === false ? null : (p.icon || TAG_ICONS[t]);
    return h('span', { className: cx('tmc-tag', 'tmc-tag-' + t) }, ic ? h(Icon, { name: ic, size: 14 }) : null, p.children);
  }

  function ChatBubble(p) {
    if (p.from === 'golfer') {
      return h('div', { className: 'tmc-msg tmc-msg-golfer' }, h('div', { className: 'tmc-bubble tmc-bubble-golfer' }, p.children));
    }
    return h('div', { className: 'tmc-msg' }, h(BobAvatar, { size: 36 }),
      h('div', null, p.showName === false ? null : h('div', { className: 'tmc-msg-name' }, 'Bob'), h('div', { className: 'tmc-bubble tmc-bubble-bob' }, p.children)));
  }

  function MicButton(p) {
    var listening = p.state === 'listening';
    var bars = [];
    if (listening) for (var i = 0; i < 11; i++) bars.push(h('i', { key: i, style: { height: Math.round(18 + 50 * Math.abs(Math.sin(i * 0.9 + 1))) } }));
    return h('div', { className: 'tmc-micwrap' },
      listening ? h('div', { className: 'tmc-wave', 'aria-hidden': 'true' }, bars) : null,
      h('button', { type: 'button', className: cx('tmc-mic', listening && 'tmc-mic-listening'), 'aria-label': listening ? 'Release to send' : 'Hold to talk to Bob', onClick: p.onClick },
        h(Icon, { name: 'mic', size: 48 })),
      h('div', { className: 'tmc-mic-label' }, p.label || (listening ? 'Listening… release to send' : 'Hold to talk, or tap')));
  }

  // One suggested question or quick reply. 56px tall: tapped with a glove.
  function PromptChip(p) {
    return h('button', { type: 'button', className: cx('tmc-chip', p.className), onClick: p.onClick },
      p.icon ? h(Icon, { name: p.icon, size: 18 }) : null, h('span', null, p.children));
  }

  // Chat with Bob: type a message, or tap the mic to speak. The right button is the mic while the
  // field is empty and turns into Send as soon as there is text, so voice and chat share one bar.
  var composerSeq = 0;
  function Composer(p) {
    var st = R.useState(p.value || ''), v = st[0], set = st[1];
    var ref = R.useRef(null);
    if (ref.current === null) ref.current = 'tmc-composer-' + (++composerSeq);
    var hasText = String(v).trim().length > 0;
    var locked = !!p.locked;
    return h('form', { className: 'tmc-composer', onSubmit: function (e) { e.preventDefault(); if (hasText && p.onSend) { p.onSend(v); set(''); } } },
      h('label', { className: 'tmc-sr', htmlFor: ref.current }, 'Message Bob'),
      h('input', { id: ref.current, className: 'tmc-composer-input', value: v, disabled: locked, autoComplete: 'off', enterKeyHint: 'send',
        placeholder: locked ? (p.lockedHint || 'Voice only while moving') : (p.placeholder || 'Message Bob'),
        onChange: function (e) { set(e.target.value); } }),
      hasText && !locked
        ? h('button', { type: 'submit', className: 'tmc-composer-btn', 'aria-label': 'Send to Bob' }, h(Icon, { name: 'send', size: 22 }))
        : h('button', { type: 'button', className: cx('tmc-composer-btn', p.listening && 'tmc-composer-live'), 'aria-label': p.listening ? 'Release to send' : 'Hold to talk to Bob', onClick: p.onVoice },
            h(Icon, { name: 'mic', size: 24 })));
  }

  function AnswerCard(p) {
    return h('div', { className: 'tmc-answer' },
      p.question ? h('div', { className: 'tmc-answer-q' }, '“' + p.question + '”') : null,
      h('div', { className: 'tmc-answer-h' }, p.headline),
      p.children ? h('div', { className: 'tmc-answer-b' }, p.children) : null,
      p.spoken === false ? null : h('div', { className: 'tmc-answer-s' }, h(Icon, { name: 'volume', size: 16 }), 'Spoken through the speaker'));
  }

  var BANNER_ICONS = { offline: 'wifiOff', suspended: 'lightning', clear: 'checkCircle', zone: 'alert', battery: 'batteryLow' };
  function Banner(p) {
    var t = p.tone || 'offline';
    return h('div', { className: cx('tmc-banner', 'tmc-banner-' + t), role: t === 'suspended' || t === 'zone' ? 'alert' : 'status' },
      h(Icon, { name: BANNER_ICONS[t], size: 22 }), h('div', null, p.children));
  }

  var SHEET = { pace: ['clock', ''], message: ['message', ''], zone: ['alert', 'tmc-tile-zone'], battery: ['batteryLow', 'tmc-tile-warning'], exited: ['checkCircle', 'tmc-tile-go'] };
  function AlertSheet(p) {
    var s = SHEET[p.tone || 'pace'];
    return h('div', { className: 'tmc-sheet', role: 'alertdialog', 'aria-label': p.title },
      h('div', { className: 'tmc-sheet-head' }, h('div', { className: cx('tmc-tile', s[1]) }, h(Icon, { name: s[0], size: 24 })),
        h('div', null, p.overline ? h('div', { style: { fontSize: 12, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--muted-foreground)' } }, p.overline) : null,
          h('div', { className: 'tmc-sheet-title' }, p.title))),
      p.children ? h('div', { className: 'tmc-sheet-body' }, p.children) : null,
      p.action ? h(Button, { block: true, variant: p.actionVariant || 'secondary', onClick: p.onAction }, p.action) : null,
      // A warning that needs no tap: it says how it goes away instead of asking for an OK while driving.
      p.autoDismiss ? h('div', { className: 'tmc-sheet-auto' }, h(Icon, { name: 'clock', size: 18 }), p.autoDismiss) : null);
  }

  var TAKE = { lightning: 'lightning', zone: 'ban', clear: 'checkCircle' };
  function AlertTakeover(p) {
    var k = p.kind || 'lightning';
    var light = k === 'zone';
    return h('div', { className: cx('tmc-take', 'tmc-take-' + k, p.escalated && 'tmc-take-escalated'), role: 'alert', style: p.flash && k === 'lightning' ? { background: 'var(--lightning-flash)' } : undefined },
      h('div', { className: 'tmc-take-badge' }, h(Icon, { name: p.icon || TAKE[k], size: 52 })),
      h('div', { className: 'tmc-take-title' }, p.title),
      // Escalated: a second, heavier panel right under the title, so it reads as a different state at a glance.
      p.escalated ? h('div', { className: 'tmc-take-esc' }, h(Icon, { name: 'alert', size: 28 }),
        h('div', null, h('div', { className: 'tmc-take-esc-t' }, p.escalated), p.escalatedDetail ? h('div', { className: 'tmc-take-esc-d' }, p.escalatedDetail) : null)) : null,
      p.message ? h('div', { className: 'tmc-take-msg' }, p.message) : null,
      p.detail ? h('div', { className: 'tmc-take-detail' }, h(Icon, { name: p.detailIcon || (k === 'lightning' ? 'shelter' : 'arrowDown'), size: 26 }), h('div', { style: { flex: 1 } }, p.detail)) : null,
      h('div', { className: 'tmc-take-spacer' }),
      p.footnote ? h('div', { className: 'tmc-take-foot' }, p.footnote) : null,
      p.action ? h(Button, { block: true, variant: light ? 'primary' : 'onalert', onClick: p.onAction }, p.action) : null);
  }

  function QRPanel(p) {
    var mods = [];
    for (var y = 0; y < 29; y++) for (var x = 0; x < 29; x++) {
      var inF = (x < 8 && y < 8) || (x > 20 && y < 8) || (x < 8 && y > 20);
      if (!inF && ((x * 7 + y * 13 + x * y * 3) % 5 < 2)) mods.push('M' + x + ' ' + y + 'h1v1h-1z');
    }
    var fp = function (ox, oy) { return 'M' + ox + ' ' + oy + 'h7v7h-7zM' + (ox + 1) + ' ' + (oy + 1) + 'v5h5v-5zM' + (ox + 2) + ' ' + (oy + 2) + 'h3v3h-3z'; };
    return h('div', { className: 'tmc-card tmc-qr' },
      h('svg', { className: 'tmc-qr-code', width: p.size || 140, height: p.size || 140, viewBox: '0 0 29 29', shapeRendering: 'crispEdges', role: 'img', 'aria-label': 'Pairing code' },
        h('path', { d: mods.join(''), fill: '#0a1e2c' }), h('path', { d: fp(0, 0) + fp(22, 0) + fp(0, 22), fill: '#0a1e2c', fillRule: 'evenodd' })),
      h('div', { className: 'tmc-qr-title' }, p.title || 'Scan with your phone camera'),
      h('div', { className: 'tmc-qr-hint' }, p.hint || 'Opens Teemeup and pairs this cart to your tee time.'));
  }

  function ChoiceCard(p) {
    return h('button', { type: 'button', className: 'tmc-choice', 'aria-pressed': p.selected ? 'true' : 'false', onClick: p.onSelect },
      h('div', { className: 'tmc-choice-top' }, h('div', { className: 'tmc-tile' }, h(Icon, { name: p.icon, size: 28 })),
        p.selected ? h('div', { className: 'tmc-check' }, h(Icon, { name: 'check', size: 16 })) : null),
      h('div', { className: 'tmc-choice-title' }, p.title),
      p.description ? h('div', { className: 'tmc-choice-desc' }, p.description) : null);
  }

  // Food and drink. Not yet ordered: the whole card is one big button that adds it.
  // In the order: the card grows a quantity row (− / ✕, count, +) so it can be changed right there.
  function MenuItem(p) {
    var q = p.qty || 0;
    var media = p.image ? h('img', { className: 'tmc-menu-img', src: p.image, alt: '' })
      : h('span', { className: 'tmc-menu-img tmc-menu-noimg', 'aria-hidden': 'true' }, h(Icon, { name: p.icon || 'food', size: 30 }));
    var text = h('span', { className: 'tmc-menu-text' },
      p.tag ? h('span', { className: 'tmc-menu-tag' }, p.tag) : null,
      h('span', { className: 'tmc-menu-name' }, p.name),
      p.description ? h('span', { className: 'tmc-menu-desc' }, p.description) : null,
      h('span', { className: 'tmc-menu-price' }, p.price));
    if (!q) {
      return h('button', { type: 'button', className: 'tmc-menu-item', onClick: p.onAdd, 'aria-label': 'Add ' + p.name + ', ' + p.price },
        media, text, h('span', { className: 'tmc-menu-add', 'aria-hidden': 'true' }, h(Icon, { name: 'plus', size: 24 })));
    }
    return h('div', { className: 'tmc-menu-item tmc-menu-item-on', role: 'group', 'aria-label': p.name + ', ' + q + ' in your order' },
      h('div', { className: 'tmc-menu-row' }, media, text),
      h('div', { className: 'tmc-menu-qty' },
        h('button', { type: 'button', onClick: p.onRemove, 'aria-label': q === 1 ? 'Remove ' + p.name : 'One less ' + p.name },
          h(Icon, { name: q === 1 ? 'x' : 'minus', size: 22 })),
        h('output', { 'aria-live': 'polite' }, q + ' in your order'),
        h('button', { type: 'button', onClick: p.onAdd, 'aria-label': 'One more ' + p.name }, h(Icon, { name: 'plus', size: 22 }))));
  }

  function CategoryTabs(p) {
    return h('div', { className: 'tmc-tabs', role: 'tablist', 'aria-label': p.label || 'Categories' },
      (p.items || []).map(function (it) {
        var on = it.id === p.active;
        return h('button', { key: it.id, type: 'button', role: 'tab', 'aria-selected': on ? 'true' : 'false', className: cx('tmc-tab', on && 'tmc-tab-on'),
          onClick: function () { if (p.onChange) p.onChange(it.id); } }, it.label);
      }));
  }

  function QuantityStepper(p) {
    var v = p.value || 0;
    return h('div', { className: 'tmc-stepper', role: 'group', 'aria-label': (p.label || 'Quantity') },
      h('button', { type: 'button', 'aria-label': v <= 1 ? 'Remove ' + (p.label || 'item') : 'One less', onClick: p.onDecrease }, h(Icon, { name: v <= 1 ? 'x' : 'minus', size: 22 })),
      h('output', { 'aria-live': 'polite' }, v),
      h('button', { type: 'button', 'aria-label': 'One more', onClick: p.onIncrease }, h(Icon, { name: 'plus', size: 22 })));
  }

  function GolferRow(p) {
    var initials = p.initials || String(p.name || '').split(' ').map(function (w) { return w.charAt(0); }).join('').slice(0, 2);
    return h('div', { className: 'tmc-card tmc-golfer' }, h('div', { className: 'tmc-initials', 'aria-hidden': 'true' }, initials),
      h('div', { className: 'tmc-golfer-name' }, p.name),
      p.status ? h(StatusTag, { tone: p.tone || 'go', icon: false }, p.status) : null);
  }

  function Keypad(p) {
    var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Clear', '0', 'Delete'];
    var filled = p.filled || 0, dots = [];
    for (var i = 0; i < (p.length || 4); i++) dots.push(h('i', { key: i, className: i < filled ? 'on' : '' }));
    return h('div', { className: 'tmc-root', style: { display: 'flex', flexDirection: 'column', gap: 16 } },
      h('div', { className: 'tmc-dots', role: 'img', 'aria-label': filled + ' of ' + (p.length || 4) + ' digits entered' }, dots),
      h('div', { className: 'tmc-keypad' }, keys.map(function (k) {
        return h('button', { key: k, type: 'button', className: cx('tmc-key', k.length > 1 && 'tmc-key-word'), onClick: p.onKey ? function () { p.onKey(k); } : undefined }, k);
      })));
  }

  var api = { Icon: Icon, iconNames: ICON_NAMES, DeviceFrame: DeviceFrame, CourseMark: CourseMark, IconButton: IconButton, CartHeader: CartHeader, BobAvatar: BobAvatar,
    Button: Button, BottomBar: BottomBar, YardageReadout: YardageReadout, HoleMap: HoleMap, StatusTag: StatusTag, ChatBubble: ChatBubble, MicButton: MicButton,
    AnswerCard: AnswerCard, PromptChip: PromptChip, Composer: Composer, Banner: Banner, AlertSheet: AlertSheet, AlertTakeover: AlertTakeover, QRPanel: QRPanel, ChoiceCard: ChoiceCard, GolferRow: GolferRow, MenuItem: MenuItem, CategoryTabs: CategoryTabs, QuantityStepper: QuantityStepper, Keypad: Keypad };
  window.TeemeupCart = window.TeemeupCart || {};
  Object.assign(window.TeemeupCart, api);
})();
