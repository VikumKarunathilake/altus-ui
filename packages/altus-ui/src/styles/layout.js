module.exports = {
  '.altus-card': {
    'backgroundColor': 'var(--alt-bg)',
    'border': '1px solid var(--alt-border)',
    'borderRadius': 'var(--alt-radius)',
    'boxShadow': 'var(--alt-shadow)',
    'padding': '1.5rem',
    'transition': 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      'boxShadow': '0 20px 25px -5px var(--alt-ring)',
    }
  },
  '.altus-divider': {
    'width': '100%',
    'height': '1px',
    'backgroundColor': 'var(--alt-border)',
    'position': 'relative',
    'margin': '2rem 0',
    '&::before': {
      'content': '""',
      'position': 'absolute',
      'left': '0',
      'top': '-2px',
      'width': '5px',
      'height': '5px',
      'borderRadius': '50%',
      'backgroundColor': 'var(--alt-primary)',
    }
  },
  '.altus-navbar': {
    'position': 'sticky',
    'top': '0',
    'zIndex': '100',
    'width': '100%',
    'backgroundColor': 'rgba(var(--alt-bg-rgb), 0.8)',
    'backdropFilter': 'blur(12px)',
    'borderBottom': '1px solid var(--alt-border)',
    'padding': '1rem 0',
    'transition': 'all 0.3s ease',
  },
  '.altus-navbar-container': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'padding': '0 1.5rem',
    'maxWidth': '1280px',
    'margin': '0 auto',
  },
  '.altus-breadcrumbs': {
    'display': 'flex',
    'alignItems': 'center',
    'gap': '0.75rem',
    'listStyle': 'none',
    'padding': '0',
    'margin': '0',
  },
  '.altus-breadcrumb-item': {
    'display': 'flex',
    'alignItems': 'center',
    'gap': '0.75rem',
    'fontSize': '0.875rem',
    'color': 'var(--alt-fg)',
    'opacity': '0.5',
    'transition': 'opacity 0.2s ease',
    '&:hover': {
      'opacity': '0.8',
    },
    '&:not(:last-child)::after': {
      'content': '"/"',
      'opacity': '0.3',
      'fontSize': '0.75rem',
    },
    '&:last-child': {
      'opacity': '1',
      'fontWeight': '700',
      'pointerEvents': 'none',
    }
  },
};
