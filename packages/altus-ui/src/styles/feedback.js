module.exports = {
  '.altus-badge': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'padding': '0.25rem 0.625rem',
    'fontSize': '10px',
    'fontWeight': '700',
    'textTransform': 'uppercase',
    'letterSpacing': '0.1em',
    'borderRadius': '9999px',
    'backgroundColor': 'var(--alt-muted)',
    'color': 'var(--alt-fg)',
    'border': '1px solid var(--alt-border)',
  },
  '.altus-skeleton': {
    'backgroundColor': 'var(--alt-muted)',
    'borderRadius': 'var(--alt-radius)',
    'position': 'relative',
    'overflow': 'hidden',
    '&::after': {
      'content': '""',
      'position': 'absolute',
      'inset': '0',
      'transform': 'translateX(-100%)',
      'backgroundImage': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
      'animation': 'altus-shimmer 2s infinite',
    }
  },
  '.altus-spinner': {
    'width': '1.5rem',
    'height': '1.5rem',
    'border': '2px solid var(--alt-muted)',
    'borderTopColor': 'var(--alt-primary)',
    'borderRadius': '50%',
    'animation': 'altus-spin 0.8s linear infinite',
  },
  '.altus-progress': {
    'width': '100%',
    'height': '0.5rem',
    'backgroundColor': 'var(--alt-muted)',
    'borderRadius': '9999px',
    'overflow': 'hidden',
  },
  '.altus-progress-bar': {
    'height': '100%',
    'backgroundColor': 'var(--alt-primary)',
    'transition': 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '.altus-progress-circle': {
    '--progress': '0deg',
    'width': '3.5rem',
    'height': '3.5rem',
    'borderRadius': '50%',
    'background': 'conic-gradient(var(--alt-primary) var(--progress), var(--alt-muted) 0deg)',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'relative',
    '&::before': {
      'content': '""',
      'position': 'absolute',
      'width': '2.75rem',
      'height': '2.75rem',
      'backgroundColor': 'var(--alt-bg)',
      'borderRadius': '50%',
    },
    '& > *': {
      'position': 'relative',
      'zIndex': '1',
    }
  },
  '@keyframes altus-shimmer': {
    '100%': { 'transform': 'translateX(100%)' },
  },
  '@keyframes altus-spin': {
    'to': { 'transform': 'rotate(360deg)' },
  },
};
