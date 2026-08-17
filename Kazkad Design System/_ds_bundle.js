/* @ds-bundle: {"format":4,"namespace":"KazkadDesignSystem_9d433b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CaseCard","sourcePath":"components/marketing/CaseCard.jsx"},{"name":"GlowBackdrop","sourcePath":"components/marketing/GlowBackdrop.jsx"},{"name":"GuaranteeCallout","sourcePath":"components/marketing/GuaranteeCallout.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"StatCounter","sourcePath":"components/marketing/StatCounter.jsx"},{"name":"StepItem","sourcePath":"components/marketing/StepItem.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2de2ab3a462d","components/core/Button.jsx":"0c26e8b0b325","components/core/Card.jsx":"ded3504c5e8f","components/core/Icon.jsx":"f3c0d5695ce3","components/core/IconButton.jsx":"a3d5e51d3685","components/core/Logo.jsx":"414b7f433ba2","components/core/Tag.jsx":"a8ded3a84fb6","components/feedback/Dialog.jsx":"c6d38a6a1325","components/feedback/Toast.jsx":"a0109d31b8ee","components/feedback/Tooltip.jsx":"4d2ac5672156","components/forms/Checkbox.jsx":"c4fe837c3452","components/forms/Field.jsx":"970254c9351e","components/forms/Input.jsx":"0c861748b50a","components/forms/Radio.jsx":"43eea12ce81e","components/forms/Select.jsx":"b541313357d3","components/forms/Switch.jsx":"f7b6e8ec30ce","components/forms/Textarea.jsx":"7309f2405fb9","components/marketing/CaseCard.jsx":"7c63495da591","components/marketing/GlowBackdrop.jsx":"e8861fcfe20e","components/marketing/GuaranteeCallout.jsx":"9e5e54cf668b","components/marketing/SectionHeading.jsx":"5c8468a784f2","components/marketing/StatCounter.jsx":"7c18b9831364","components/marketing/StepItem.jsx":"b420b7170e05","components/navigation/NavBar.jsx":"99d8d69c267c","components/navigation/Tabs.jsx":"28caff90276c","ui_kits/website/Cases.jsx":"7082f715de5f","ui_kits/website/Contact.jsx":"dd4a335b7a40","ui_kits/website/Footer.jsx":"2964f4a93587","ui_kits/website/Hero.jsx":"36822f5759d2","ui_kits/website/Method.jsx":"8ffb6db75763","ui_kits/website/Site.jsx":"bdad74c063f2","ui_kits/website/Stages.jsx":"7b2d219b9207"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KazkadDesignSystem_9d433b = window.KazkadDesignSystem_9d433b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Neutral container: 20px radius, hairline border, no shadow until raised or hovered. */
function Card({
  as = 'div',
  tone = 'default',
  padding = 28,
  interactive = false,
  elevated = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid transparent'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid transparent',
      color: 'var(--text-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)`,
      cursor: interactive ? 'pointer' : undefined,
      ...tones[tone],
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-raised)',
        transform: 'translateY(-2px)'
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = () => typeof window !== 'undefined' && window.KZ_ICON_BASE || './assets/icons/';
const CACHE = {};

/** Monochrome Lucide glyph. The SVG file is inlined so it inherits currentColor. */
function Icon({
  name,
  size = 20,
  base,
  style,
  ...rest
}) {
  const px = Number.parseFloat(size) || 20;
  const url = `${base || BASE()}${name}.svg`;
  const [raw, setRaw] = React.useState(CACHE[url] || '');
  React.useEffect(() => {
    if (CACHE[url]) {
      setRaw(CACHE[url]);
      return undefined;
    }
    let alive = true;
    fetch(url).then(r => r.ok ? r.text() : '').then(t => {
      CACHE[url] = t;
      if (alive) setRaw(t);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [url]);
  // Bake the pixel size into the SVG itself, so the glyph can never fall back to its
  // intrinsic size if the wrapper ends up without a resolved width.
  const markup = raw ? raw.replace(/width="[^"]*"/, `width="${px}"`).replace(/height="[^"]*"/, `height="${px}"`) : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: px,
      height: px,
      flex: 'none',
      overflow: 'hidden',
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: {
    color: 'var(--blue-700)',
    background: 'var(--blue-050)'
  },
  neutral: {
    color: 'var(--text-muted)',
    background: 'var(--surface-subtle)'
  },
  ok: {
    color: 'var(--status-ok-text)',
    background: 'var(--status-ok-surface)'
  },
  warn: {
    color: 'var(--status-warn-text)',
    background: 'var(--status-warn-surface)'
  },
  risk: {
    color: 'var(--status-risk-text)',
    background: 'var(--status-risk-surface)'
  }
};

/** Small status marker. Mono type, uppercase, tinted surface. */
function Badge({
  tone = 'accent',
  icon,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...(TONES[tone] || TONES.accent),
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 36,
    padding: '0 14px',
    font: 'var(--type-body-sm)',
    gap: 6
  },
  md: {
    height: 44,
    padding: '0 20px',
    font: 'var(--type-body-sm)',
    gap: 8
  },
  lg: {
    height: 56,
    padding: '0 28px',
    font: 'var(--type-body)',
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--surface-accent)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--ink-000)',
    color: 'var(--ink-800)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: {
    background: 'var(--blue-700)'
  },
  secondary: {
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'var(--state-hover-tint)',
    color: 'var(--text-accent)'
  },
  inverse: {
    background: 'var(--blue-050)'
  }
};

/** Primary call to action. One primary per view; secondary/ghost for everything else. */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: s.font,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-body)',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : undefined,
      transition: 'var(--transition-control)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      opacity: disabled ? 0.4 : 1,
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 20 : 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, children), icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 20 : 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};

/** Square-ish control holding a single glyph. Always give it an aria-label. */
function IconButton({
  icon,
  size = 'md',
  variant = 'secondary',
  disabled = false,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  const base = variant === 'primary' ? {
    background: 'var(--surface-accent)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  } : variant === 'ghost' ? {
    background: 'transparent',
    color: 'var(--text-muted)',
    border: '1px solid transparent'
  } : {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid var(--border-default)'
  };
  const hovered = variant === 'primary' ? {
    background: 'var(--blue-700)'
  } : variant === 'ghost' ? {
    background: 'var(--surface-subtle)',
    color: 'var(--text-body)'
  } : {
    borderColor: 'var(--border-strong)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-control)',
      ...base,
      ...(hover && !disabled ? hovered : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: box <= 32 ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = () => typeof window !== 'undefined' && window.KZ_ASSET_BASE || './assets/';

/** The Kazkad logo. Bitmap crops of the supplied artwork — never redrawn. */
function Logo({
  variant = 'wordmark',
  height = 28,
  style,
  ...rest
}) {
  const src = BASE() + (variant === 'mark' ? 'logo-mark.png' : variant === 'mark-white' ? 'logo-mark-white.png' : variant === 'wordmark-white' ? 'logo-wordmark-white.png' : 'logo-wordmark.png');
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Kazkad"
  }, rest, {
    style: {
      height,
      width: 'auto',
      display: 'block',
      flex: 'none',
      alignSelf: 'flex-start',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill describing a technology or discipline. Optionally selectable. */
function Tag({
  selected = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: interactive ? 'button' : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-chip)',
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      background: selected ? 'var(--surface-inverse)' : 'transparent',
      color: selected ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'transparent' : hover && interactive ? 'var(--border-strong)' : 'var(--border-default)'}`,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal on a navy scrim. Used for the enquiry form and case detail. */
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      background: 'rgba(34,58,92,.44)',
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      padding: 32,
      boxShadow: 'var(--shadow-raised)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ok: {
    icon: 'circle-check',
    color: 'var(--status-ok-text)'
  },
  info: {
    icon: 'info',
    color: 'var(--text-accent)'
  },
  risk: {
    icon: 'circle-alert',
    color: 'var(--status-risk-text)'
  }
};

/** Transient confirmation, bottom-right. Ink surface, white text. */
function Toast({
  tone = 'ok',
  title,
  description,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.ok;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      minWidth: 300,
      maxWidth: 420,
      padding: '16px 16px 16px 18px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-inverse)',
      color: 'var(--ink-000)',
      boxShadow: 'var(--shadow-raised)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    style: {
      color: t.color,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'rgba(255,255,255,.66)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    variant: "ghost",
    size: "sm",
    onClick: onClose,
    style: {
      color: 'rgba(255,255,255,.66)'
    }
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover explainer on an ink surface. Wraps its trigger. */
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 60,
      pointerEvents: 'none',
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      background: 'var(--surface-inverse)',
      color: 'var(--ink-000)',
      font: 'var(--type-body-sm)',
      opacity: show ? 1 : 0,
      transition: `opacity var(--duration-fast) var(--ease-standard)`
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square 20px checkbox; ink fill when checked, never blue-on-blue. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      marginTop: 2,
      background: checked ? 'var(--surface-accent)' : 'var(--surface-card)',
      border: `1px solid ${checked ? 'transparent' : 'var(--border-default)'}`,
      color: 'var(--text-inverse)',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 'var(--lh-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + hint + error wrapper shared by every form control. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: error ? 'var(--status-risk-text)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid) => ({
  width: '100%',
  background: 'var(--surface-card)',
  border: `1px solid ${invalid ? 'var(--status-risk-text)' : focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  boxShadow: focus && !invalid ? `0 0 0 3px var(--focus-ring)` : 'none',
  font: 'var(--type-body)',
  color: 'var(--text-body)',
  transition: 'var(--transition-control), box-shadow var(--duration-fast) var(--ease-standard)',
  outline: 'none'
});

/** Single-line text control. 48px tall, 8px radius, blue focus ring. */
function Input({
  invalid = false,
  icon,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...shell(focus, invalid),
      height: 48,
      padding: icon ? '0 16px 0 44px' : '0 16px',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      position: 'absolute',
      left: 15,
      top: 15,
      color: 'var(--text-faint)'
    }
  }), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Round single-choice control. Group them with a shared `name`. */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      border: `${checked ? '6px' : '1px'} solid ${checked ? 'var(--surface-accent)' : 'var(--border-default)'}`,
      background: 'var(--surface-card)',
      transition: 'var(--transition-control)'
    }
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid) => ({
  width: '100%',
  background: 'var(--surface-card)',
  border: `1px solid ${invalid ? 'var(--status-risk-text)' : focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  boxShadow: focus && !invalid ? `0 0 0 3px var(--focus-ring)` : 'none',
  font: 'var(--type-body)',
  color: 'var(--text-body)',
  transition: 'var(--transition-control), box-shadow var(--duration-fast) var(--ease-standard)',
  outline: 'none'
});

/** Native select in the brand shell, with a chevron drawn on top. */
function Select({
  invalid = false,
  options = [],
  placeholder,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...shell(focus, invalid),
      height: 48,
      padding: '0 44px 0 16px',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 15,
      top: 15,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Binary toggle for instant-effect settings. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--surface-accent)' : 'var(--ink-300)',
      padding: 3,
      display: 'inline-flex',
      alignItems: 'center',
      transition: `background-color var(--duration-base) var(--ease-standard)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--ink-000)',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: `transform var(--duration-base) var(--ease-out)`
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid) => ({
  width: '100%',
  background: 'var(--surface-card)',
  border: `1px solid ${invalid ? 'var(--status-risk-text)' : focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  boxShadow: focus && !invalid ? `0 0 0 3px var(--focus-ring)` : 'none',
  font: 'var(--type-body)',
  color: 'var(--text-body)',
  transition: 'var(--transition-control), box-shadow var(--duration-fast) var(--ease-standard)',
  outline: 'none'
});

/** Multi-line text control. Same shell as Input; min 3 rows. */
function Textarea({
  invalid = false,
  rows = 4,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...shell(focus, invalid),
      padding: '14px 16px',
      resize: 'vertical',
      lineHeight: 'var(--lh-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CaseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILLS = {
  grey: 'var(--ink-500)',
  tint: 'var(--surface-tint)',
  blue: 'var(--surface-accent)',
  subtle: 'var(--surface-subtle)'
};
const SIZES = {
  sm: {
    inset: 12,
    title: 15,
    link: 13,
    square: 24,
    arrow: 13
  },
  md: {
    inset: 15,
    title: 18,
    link: 14,
    square: 30,
    arrow: 15
  }
};

/**
 * The concept board's case tile: a square panel with the title set inside the top-left
 * and the link inside the bottom-left. The blue arrow square in the bottom-right repeats
 * the header CTA's 34×34 motif. Flat fill, 1px hairline, no radius, no shadow.
 */
function CaseCard({
  title,
  image,
  fill = 'tint',
  size = 'md',
  linkLabel = 'посмотреть кейс',
  href = '#',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  // Text over a screenshot or photograph is always white on a scrim; flat fills decide by tone.
  const dark = Boolean(image) || fill === 'blue' || fill === 'grey';
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      position: 'relative',
      display: 'block',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      background: FILLS[fill] || FILLS.tint,
      border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border-default)'}`,
      color: dark ? 'var(--ink-000)' : 'var(--text-strong)',
      transition: `border-color var(--duration-fast) var(--ease-standard)`,
      ...style
    }
  }), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center bottom',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: `transform var(--duration-slow) var(--ease-out)`
    }
  }), image && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-image)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: s.inset,
      top: s.inset,
      right: s.inset,
      zIndex: 1,
      font: `var(--weight-semibold) ${s.title}px/1.28 var(--font-core)`,
      letterSpacing: 'var(--tracking-heading)',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: s.inset,
      bottom: s.inset,
      zIndex: 1,
      font: `var(--weight-medium) ${s.link}px/1 var(--font-core)`
    }
  }, linkLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: s.inset,
      bottom: s.inset,
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.square,
      height: s.square,
      background: dark ? 'var(--ink-000)' : hover ? 'var(--blue-700)' : 'var(--surface-accent)',
      color: dark ? 'var(--blue-600)' : 'var(--ink-000)',
      transition: `background-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)`,
      transform: hover ? 'translateX(2px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: s.arrow
  })));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/GlowBackdrop.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = () => typeof window !== 'undefined' && window.KZ_ASSET_BASE || './assets/';

/** The blurred blue star from the concept board, placed behind a section corner. */
function GlowBackdrop({
  size = 720,
  position = 'top-right',
  opacity = 0.7,
  style,
  ...rest
}) {
  const offsets = {
    'top-right': {
      top: -size * 0.4,
      right: -size * 0.22
    },
    'top-left': {
      top: -size * 0.4,
      left: -size * 0.22
    },
    'bottom-left': {
      bottom: -size * 0.45,
      left: -size * 0.25
    },
    'bottom-right': {
      bottom: -size * 0.45,
      right: -size * 0.25
    },
    center: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    }
  };
  return /*#__PURE__*/React.createElement("img", _extends({
    src: BASE() + 'star-glow.png',
    alt: "",
    "aria-hidden": "true"
  }, rest, {
    style: {
      position: 'absolute',
      width: size,
      height: 'auto',
      opacity,
      pointerEvents: 'none',
      userSelect: 'none',
      zIndex: 0,
      ...offsets[position],
      ...style
    }
  }));
}
Object.assign(__ds_scope, { GlowBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/GlowBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/marketing/GuaranteeCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The three-week promise as a flat typographic band — no icon, no card, no radius.
 * The headline is set large; the condition sits beside it in the same block.
 */
function GuaranteeCallout({
  headline,
  detail,
  tone = 'inverse',
  action,
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr minmax(0,1fr)',
      gap: 48,
      alignItems: 'end',
      padding: '48px 40px',
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-tint)',
      color: inverse ? 'var(--ink-000)' : 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) clamp(24px,2.5vw,36px)/1.1 var(--font-core)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'inherit',
      textWrap: 'balance'
    }
  }, headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, detail && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: 0,
      color: inverse ? 'rgba(255,255,255,.66)' : 'var(--text-muted)'
    }
  }, detail), action));
}
Object.assign(__ds_scope, { GuaranteeCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/GuaranteeCallout.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section opener. Heading first: the brand does not stack a small label above a title.
 * `count` renders the concept's "кейсы 4" pairing, inline and after the heading.
 */
function SectionHeading({
  title,
  lead,
  label,
  count,
  align = 'left',
  level = 'h2',
  style,
  ...rest
}) {
  const H = level;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: align === 'center' ? 760 : 820,
      ...style
    }
  }), /*#__PURE__*/React.createElement(H, {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title, (label || count != null) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)',
      marginLeft: 14,
      verticalAlign: 'middle',
      whiteSpace: 'nowrap'
    }
  }, label, label && count != null ? ' ' : '', count)), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 640
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big number + caption. Used in rows of two to four. */
function StatCounter({
  value,
  suffix,
  caption,
  size = 'md',
  style,
  ...rest
}) {
  const fonts = {
    sm: 'var(--type-h3)',
    md: 'var(--type-h2)',
    lg: 'var(--type-display)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: fonts[size] || fonts.md,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-accent)'
    }
  }, suffix)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StepItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One numbered stage in the process timeline. */
function StepItem({
  index,
  title,
  description,
  duration,
  icon,
  active = false,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 20,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: active ? 'var(--surface-accent)' : 'var(--surface-tint)',
      color: active ? 'var(--text-inverse)' : 'var(--text-accent)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 0
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : index), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: 'var(--border-hairline)',
      marginTop: 8,
      minHeight: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingBottom: last ? 0 : 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-h4)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), duration && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-micro)',
      color: 'var(--text-muted)'
    }
  }, duration)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 560
    }
  }, description)));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Site header, copied from the concept board: logo hard left, lowercase links set
 * left of centre, then a light rectangle and a 34×34 blue square holding the arrow.
 */
function NavBar({
  links = [],
  activeHref,
  cta,
  onCtaClick,
  onNavigate,
  sticky = true,
  scrolled = false,
  dark = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      height: 'var(--nav-height)',
      background: scrolled ? dark ? 'var(--glass-fill-dark)' : 'var(--glass-fill)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      transition: `background-color var(--duration-base) var(--ease-standard)`,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-gutter)',
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('#top');
    },
    style: {
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: dark ? 'wordmark-white' : 'wordmark',
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30,
      marginLeft: 'min(300px, 16vw)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.href);
    },
    style: {
      font: 'var(--type-nav)',
      color: activeHref === l.href ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, l.label))), cta && /*#__PURE__*/React.createElement("div", {
    onClick: onCtaClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 4,
      marginLeft: 'auto',
      height: 34,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 18px',
      flex: 'none',
      background: hover ? dark ? 'rgba(255,255,255,.14)' : 'var(--ink-200)' : dark ? 'rgba(255,255,255,.08)' : 'var(--ink-100)',
      color: 'var(--text-body)',
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      transition: `background-color var(--duration-fast) var(--ease-standard)`,
      whiteSpace: 'nowrap'
    }
  }, cta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      flex: 'none',
      background: hover ? 'var(--blue-700)' : 'var(--surface-accent)',
      color: 'var(--ink-000)',
      transition: `background-color var(--duration-fast) var(--ease-standard)`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  })))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tab strip for switching between sibling views (case verticals, stack). */
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }), items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      onClick: () => onChange && onChange(id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 14px',
        font: 'var(--type-body)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        boxShadow: active ? 'inset 0 -1.5px 0 var(--border-strong)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cases.jsx
try { (() => {
const CASES = [{
  title: 'Разработка продуктовых страниц для яндекса',
  image: '../../assets/case-mobile-app.png',
  fill: 'tint',
  group: 'сервисы'
}, {
  title: 'Разработка сайта для строительной компании',
  image: '../../assets/photo-landscape.jpg',
  fill: 'grey',
  group: 'лендинги'
}, {
  title: 'Личный кабинет для платёжного сервиса',
  fill: 'blue',
  group: 'сервисы'
}, {
  title: 'Портал заявок с интеграцией 1С',
  fill: 'subtle',
  group: 'интеграции'
}];
const BLEED = 'max(40px, calc((100vw - 1280px) / 2 + 40px))';
function Cases() {
  const {
    CaseCard,
    Tabs,
    Button
  } = window.KZ;
  const [tab, setTab] = React.useState('все');
  const shown = tab === 'все' ? CASES : CASES.filter(c => c.group === tab);
  return /*#__PURE__*/React.createElement("section", {
    id: "cases",
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kz-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-bold) clamp(26px,2.6vw,36px)/1.12 var(--font-core)',
      letterSpacing: 'var(--tracking-heading)',
      margin: 0
    }
  }, "\u0427\u0442\u043E \u043C\u044B \u0443\u0436\u0435 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0438", /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)',
      marginLeft: 14,
      verticalAlign: 'middle',
      whiteSpace: 'nowrap'
    }
  }, "\u043A\u0435\u0439\u0441\u044B ", CASES.length)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-right"
  }, "\u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['все', 'сервисы', 'лендинги', 'интеграции'],
    value: tab,
    onChange: setTab
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: BLEED,
      marginTop: 40,
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      width: 'max-content',
      paddingRight: 40
    }
  }, shown.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      flex: 'none',
      width: 340,
      scrollSnapAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(CaseCard, {
    title: c.title,
    image: c.image,
    fill: c.fill,
    onClick: e => e.preventDefault()
  }))))));
}
window.Cases = Cases;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const TG = 'https://t.me/kazkad';
function Contact() {
  const {
    Icon,
    GlowBackdrop
  } = window.KZ;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement(GlowBackdrop, {
    size: 560,
    opacity: 0.38,
    style: {
      bottom: -250,
      left: -140,
      top: 'auto',
      right: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kz-container",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '34% minmax(0,1fr)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      paddingTop: 10
    }
  }, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-bold) clamp(28px,3vw,44px)/1.1 var(--font-core)',
      letterSpacing: '-0.025em',
      margin: 0
    }
  }, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 Telegram \u2014 \u043D\u0430\u0437\u043E\u0432\u0451\u043C \u0441\u0440\u043E\u043A \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-muted)',
      marginTop: 20,
      maxWidth: 520
    }
  }, "\u041E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u0431\u0440\u0438\u0444\u043E\u0432 \u043D\u0430 \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u043F\u043E\u043B\u0435\u0439 \u2014 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0430\u0440\u044B \u0444\u0440\u0430\u0437 \u043E \u0437\u0430\u0434\u0430\u0447\u0435."), /*#__PURE__*/React.createElement("a", {
    href: TG,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      height: 64,
      padding: '0 32px',
      marginTop: 36,
      background: hover ? 'var(--blue-700)' : 'var(--surface-accent)',
      color: 'var(--text-inverse)',
      font: 'var(--weight-semibold) 18px/1 var(--font-core)',
      letterSpacing: '-0.01em',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, "\u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      marginTop: 36,
      paddingTop: 24,
      borderTop: '1px solid var(--border-hairline)',
      font: 'var(--type-body)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@kazkad.ru"
  }, "hello@kazkad.ru"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+70000000000"
  }, "+7 000 000-00-00")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  const {
    Logo
  } = window.KZ;
  const label = {
    font: 'var(--type-body-sm)',
    color: 'var(--text-muted)'
  };
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    font: 'var(--type-body-sm)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-strong)',
      padding: '56px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kz-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '34% 1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "\u0421\u0442\u0443\u0434\u0438\u044F \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438. Python \u0438 React. \u0417\u0430\u043F\u0443\u0441\u043A \u0437\u0430 \u0442\u0440\u0438 \u043D\u0435\u0434\u0435\u043B\u0438.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\u0440\u0430\u0437\u0434\u0435\u043B\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#method"
  }, "\u043C\u0435\u0442\u043E\u0434"), /*#__PURE__*/React.createElement("a", {
    href: "#stages"
  }, "\u044D\u0442\u0430\u043F\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#cases"
  }, "\u043A\u0435\u0439\u0441\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\u0441\u0432\u044F\u0437\u044C"), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/kazkad",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Telegram"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@kazkad.ru"
  }, "hello@kazkad.ru"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+70000000000"
  }, "+7 000 000-00-00"))), /*#__PURE__*/React.createElement("div", {
    className: "kz-container",
    style: {
      marginTop: 48,
      paddingTop: 20,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Kazkad"), /*#__PURE__*/React.createElement("span", null, "Python \xB7 React")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const HERO_CASES = [{
  title: 'Разработка продуктовых страниц для яндекса',
  image: '../../assets/case-mobile-app.png',
  fill: 'tint'
}, {
  title: 'Разработка сайта для строительной компании',
  image: '../../assets/photo-landscape.jpg',
  fill: 'grey'
}, {
  title: 'Личный кабинет для платёжного сервиса',
  fill: 'blue'
}];
function Hero({
  onEnquiry,
  onNavigate,
  activeHref,
  scrolled
}) {
  const {
    NavBar,
    Button,
    CaseCard,
    GlowBackdrop
  } = window.KZ;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(GlowBackdrop, {
    size: 460,
    opacity: 0.55,
    style: {
      top: -40,
      left: '17%',
      right: 'auto',
      bottom: 'auto'
    }
  }), /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      href: '#method',
      label: 'метод'
    }, {
      href: '#stages',
      label: 'этапы'
    }, {
      href: '#cases',
      label: 'кейсы'
    }, {
      href: '#contact',
      label: 'контакты'
    }],
    activeHref: activeHref,
    cta: "\u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443",
    onCtaClick: onEnquiry,
    onNavigate: onNavigate,
    scrolled: scrolled
  }), /*#__PURE__*/React.createElement("div", {
    className: "kz-container",
    style: {
      position: 'relative',
      paddingTop: 110,
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '34% minmax(0,1fr)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      paddingTop: 6
    }
  }, "\u0441\u0442\u0443\u0434\u0438\u044F \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--weight-bold) clamp(34px,3.55vw,52px)/1.06 var(--font-core)',
      letterSpacing: 'var(--tracking-display)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '38%',
      color: 'var(--text-accent)'
    }
  }, "\u0437\u0430 3 \u043D\u0435\u0434\u0435\u043B\u0438"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 48,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      flex: '0 1 420px',
      minWidth: 0,
      font: 'var(--weight-regular) 20px/1.4 var(--font-core)',
      color: 'var(--text-muted)'
    }
  }, "\u041D\u0435 \u0443\u0441\u043F\u0435\u043B\u0438 \u043F\u043E \u043D\u0430\u0448\u0435\u0439 \u0432\u0438\u043D\u0435 \u2014 \u0432\u0435\u0440\u043D\u0451\u043C \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u0441\u0443\u043C\u043C\u044B."), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: onEnquiry,
    style: {
      flex: 'none'
    }
  }, "\u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,210px))',
      gap: 12,
      marginTop: 56
    }
  }, HERO_CASES.map(c => /*#__PURE__*/React.createElement(CaseCard, {
    key: c.title,
    size: "sm",
    title: c.title,
    image: c.image,
    fill: c.fill,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('#cases');
    }
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Method.jsx
try { (() => {
function Method() {
  return /*#__PURE__*/React.createElement("section", {
    id: "method",
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kz-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '34% minmax(0,1fr)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      paddingTop: 6
    }
  }, "\u043A\u043E\u043D\u0446\u0435\u043F\u0442"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-bold) clamp(26px,2.6vw,36px)/1.12 var(--font-core)',
      letterSpacing: 'var(--tracking-heading)',
      margin: 0,
      maxWidth: 640
    }
  }, "\u041A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '34% minmax(0,1fr)',
      alignItems: 'start',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: 48,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      height: 30
    }
  }, [[12, 'var(--ink-200)'], [16, 'var(--ink-200)'], [20, 'var(--ink-300)'], [24, 'var(--blue-300)'], [30, 'var(--surface-accent)']].map(([s, bg]) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: s,
      height: s,
      background: bg
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--border-strong)',
      marginTop: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 5
    }
  }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      background: 'var(--ink-300)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)'
    }
  }, "\u041E\u0442\u0440\u0435\u0437\u0430\u0435\u043C \u0432\u0441\u0451, \u0447\u0442\u043E \u0443\u0434\u043B\u0438\u043D\u044F\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C. \u041E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0442\u043E, \u0447\u0442\u043E \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442, \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442 \u0432\u0440\u0435\u043C\u044F \u0438\u043B\u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442 \u0434\u0435\u043D\u044C\u0433\u0438."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-muted)',
      marginTop: 20
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u044B\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u043A\u0430\u043A \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440: \u043E\u0434\u043D\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u044D\u0442\u0430\u043F\u044B, \u0440\u043E\u043B\u0438 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435. \u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0434\u043E \u0441\u0442\u0430\u0440\u0442\u0430, \u0434\u0430\u043B\u044C\u0448\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043F\u043E AI-First \u043F\u043E\u0434\u0445\u043E\u0434\u0443 \u0438 \u043D\u0430 \u0441\u0432\u043E\u0451\u043C \u043E\u043F\u044B\u0442\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435.")))));
}
window.Method = Method;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Method.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const TG_URL = 'https://t.me/kazkad';
function Site() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('#top');
  const scrollerRef = React.useRef(null);
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      setScrolled(el.scrollTop > 24);
      const ids = ['#top', '#method', '#stages', '#cases', '#contact'];
      let cur = '#top';
      ids.forEach(id => {
        const s = el.querySelector(id);
        if (s && s.getBoundingClientRect().top <= 120) cur = id;
      });
      setActive(cur);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const go = href => {
    const el = scrollerRef.current;
    const target = el && el.querySelector(href);
    if (el && target) el.scrollTo({
      top: href === '#top' ? 0 : target.offsetTop - 88,
      behavior: 'smooth'
    });
  };
  const openTelegram = () => window.open(TG_URL, '_blank', 'noopener');
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollerRef,
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    onEnquiry: openTelegram,
    onNavigate: go,
    activeHref: active,
    scrolled: scrolled
  }), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(Stages, null), /*#__PURE__*/React.createElement(Cases, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.Site = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Stages.jsx
try { (() => {
const RULER = Array.from({
  length: 21
}, (_, i) => i < 3 ? 'var(--ink-000)' : i < 17 ? 'var(--blue-300)' : 'var(--surface-accent)');
const STAGES = [{
  swatch: 'var(--ink-000)',
  days: 'дни 1–3',
  title: 'Скоуп и договор',
  text: 'Описываем каждый экран и интеграцию, фиксируем дату запуска в договоре.'
}, {
  swatch: 'var(--blue-300)',
  days: 'дни 4–17',
  title: 'Дизайн и разработка',
  text: 'Интерфейс по дизайн-системе, Python и React параллельно. Каждый день — сборка на стенде.'
}, {
  swatch: 'var(--surface-accent)',
  days: 'дни 18–21',
  title: 'Приёмка и запуск',
  text: 'Проходим сценарии, проверяем скорость, выкатываем на прод и передаём доступы.'
}];
function Stages() {
  return /*#__PURE__*/React.createElement("section", {
    id: "stages",
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kz-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '34% minmax(0,1fr)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      paddingTop: 6
    }
  }, "\u044D\u0442\u0430\u043F\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-bold) clamp(26px,2.6vw,36px)/1.12 var(--font-core)',
      letterSpacing: 'var(--tracking-heading)',
      margin: 0
    }
  }, "\u0422\u0440\u0438 \u044D\u0442\u0430\u043F\u0430, 21 \u0434\u0435\u043D\u044C"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "\u041A\u0430\u0436\u0434\u044B\u0439 \u044D\u0442\u0430\u043F \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u0434\u043D\u0451\u043C, \u0438 \u0432\u0441\u0435 \u0442\u0440\u0438 \u0441\u0442\u043E\u044F\u0442 \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(21, 1fr)',
      height: 64,
      border: '1px solid var(--border-default)'
    }
  }, RULER.map((bg, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      background: bg,
      borderRight: i === 20 ? 'none' : '1px solid var(--border-hairline)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kz-eyebrow"
  }, "\u0434\u0435\u043D\u044C 1"), /*#__PURE__*/React.createElement("span", {
    className: "kz-eyebrow"
  }, "\u0434\u0435\u043D\u044C 21"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 48,
      marginTop: 48
    }
  }, STAGES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      flex: 'none',
      background: s.swatch,
      border: '1px solid var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "kz-eyebrow"
  }, s.days)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--weight-semibold) 20px/1.25 var(--font-core)',
      letterSpacing: 'var(--tracking-heading)',
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 15px/1.5 var(--font-core)',
      color: 'var(--text-muted)'
    }
  }, s.text))))));
}
window.Stages = Stages;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Stages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.GlowBackdrop = __ds_scope.GlowBackdrop;

__ds_ns.GuaranteeCallout = __ds_scope.GuaranteeCallout;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
