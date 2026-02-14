module.exports = {
  '.btn-altus': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'padding': '0.75rem 1.5rem',
    'fontSize': '0.875rem',
    'fontWeight': '600',
    'borderRadius': 'var(--alt-radius)',
    'backgroundColor': 'var(--alt-fg)',
    'color': 'var(--alt-bg)',
    'boxShadow': 'var(--alt-shadow)',
    'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    'cursor': 'pointer',
    'border': '1px solid transparent',
    '&:hover': {
      'opacity': '0.9',
      'transform': 'translateY(-1px)',
      'boxShadow': '0 10px 15px -3px var(--alt-ring)',
    },
    '&:active': {
      'transform': 'translateY(0)',
    }
  },
  '.btn-altus-outline': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'padding': '0.75rem 1.5rem',
    'fontSize': '0.875rem',
    'fontWeight': '600',
    'borderRadius': 'var(--alt-radius)',
    'backgroundColor': 'transparent',
    'color': 'var(--alt-fg)',
    'border': '1px solid var(--alt-border)',
    'transition': 'all 0.2s ease',
    '&:hover': {
      'backgroundColor': 'var(--alt-muted)',
      'borderColor': 'var(--alt-primary)',
    }
  },
  '.btn-altus-ghost': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'padding': '0.75rem 1.5rem',
    'fontSize': '0.875rem',
    'fontWeight': '600',
    'borderRadius': 'var(--alt-radius)',
    'backgroundColor': 'transparent',
    'color': 'var(--alt-fg)',
    'transition': 'all 0.2s ease',
    'cursor': 'pointer',
    'border': '1px solid transparent',
    '&:hover': {
      'backgroundColor': 'var(--alt-muted)',
      'color': 'var(--alt-primary)',
    }
  },
  '.btn-altus-icon': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': '2.5rem',
    'height': '2.5rem',
    'borderRadius': 'var(--alt-radius)',
    'backgroundColor': 'transparent',
    'color': 'var(--alt-fg)',
    'border': '1px solid var(--alt-border)',
    'transition': 'all 0.2s ease',
    'cursor': 'pointer',
    '&:hover': {
      'backgroundColor': 'var(--alt-muted)',
      'borderColor': 'var(--alt-primary)',
    }
  },
  '.btn-altus-fab': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': '3.5rem',
    'height': '3.5rem',
    'borderRadius': '9999px',
    'backgroundColor': 'var(--alt-fg)',
    'color': 'var(--alt-bg)',
    'boxShadow': '0 10px 25px -5px var(--alt-ring)',
    'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    'cursor': 'pointer',
    'border': 'none',
    '&:hover': {
      'transform': 'scale(1.05) translateY(-2px)',
      'boxShadow': '0 20px 30px -5px var(--alt-ring)',
    },
    '&:active': {
      'transform': 'scale(0.95)',
    }
  },
};
