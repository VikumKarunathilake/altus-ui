module.exports = {
  '.altus-input': {
    'width': '100%',
    'padding': '0.75rem 1.25rem',
    'fontSize': '0.875rem',
    'backgroundColor': 'var(--alt-bg)',
    'color': 'var(--alt-fg)',
    'border': '1px solid var(--alt-border)',
    'borderRadius': 'var(--alt-radius)',
    'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    'outline': 'none',
    'boxShadow': 'inset 0 1px 2px rgba(0,0,0,0.02)',
    '&::placeholder': {
      'color': 'var(--alt-fg)',
      'opacity': '0.3',
    },
    '&:hover': {
      'borderColor': 'var(--alt-primary)',
      'backgroundColor': 'var(--alt-muted)',
    },
    '&:focus': {
      'borderColor': 'var(--alt-primary)',
      'backgroundColor': 'var(--alt-bg)',
      'boxShadow': '0 0 0 4px var(--alt-ring), inset 0 1px 2px rgba(0,0,0,0.02)',
    }
  },
  '.altus-select': {
    'appearance': 'none',
    'width': '100%',
    'padding': '0.75rem 2.5rem 0.75rem 1.25rem',
    'fontSize': '0.875rem',
    'backgroundColor': 'var(--alt-bg)',
    'color': 'var(--alt-fg)',
    'border': '1px solid var(--alt-border)',
    'borderRadius': 'var(--alt-radius)',
    'cursor': 'pointer',
    'backgroundImage': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'right 1rem center',
    'backgroundSize': '1rem',
    'transition': 'all 0.2s ease',
    '&:focus': {
      'borderColor': 'var(--alt-primary)',
      'boxShadow': '0 0 0 4px var(--alt-ring)',
      'outline': 'none',
    }
  },
  '.altus-checkbox': {
    'appearance': 'none',
    'width': '1.25rem',
    'height': '1.25rem',
    'border': '2px solid var(--alt-border)',
    'borderRadius': '0.375rem',
    'backgroundColor': 'var(--alt-bg)',
    'cursor': 'pointer',
    'position': 'relative',
    'transition': 'all 0.2s ease',
    '&:hover': {
      'borderColor': 'var(--alt-primary)',
    },
    '&:checked': {
      'backgroundColor': 'var(--alt-primary)',
      'borderColor': 'var(--alt-primary)',
    },
    '&:checked::after': {
      'content': '""',
      'position': 'absolute',
      'left': '50%',
      'top': '50%',
      'transform': 'translate(-50%, -50%)',
      'width': '6px',
      'height': '6px',
      'borderRadius': '50%',
      'backgroundColor': 'var(--alt-bg)',
    },
    '&:focus': {
      'boxShadow': '0 0 0 4px var(--alt-ring)',
    }
  },
  '.altus-switch': {
    'appearance': 'none',
    'width': '2.75rem',
    'height': '1.5rem',
    'backgroundColor': 'var(--alt-muted)',
    'borderRadius': '2rem',
    'position': 'relative',
    'cursor': 'pointer',
    'transition': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    'border': '1px solid var(--alt-border)',
    '&::before': {
      'content': '""',
      'position': 'absolute',
      'width': '1.125rem',
      'height': '1.125rem',
      'backgroundColor': 'var(--alt-fg)',
      'borderRadius': '50%',
      'top': '2px',
      'left': '2px',
      'transition': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      'boxShadow': '0 1px 3px rgba(0,0,0,0.1)',
    },
    '&:checked': {
      'backgroundColor': 'var(--alt-primary)',
      'borderColor': 'var(--alt-primary)',
    },
    '&:checked::before': {
      'left': 'calc(2.75rem - 1.25rem - 1px)',
      'backgroundColor': 'var(--alt-bg)',
      'transform': 'scale(1.1)',
    }
  },
  '.altus-label': {
    'display': 'block',
    'fontSize': '0.75rem',
    'fontWeight': '700',
    'textTransform': 'uppercase',
    'letterSpacing': '0.1em',
    'marginBottom': '0.5rem',
    'color': 'var(--alt-fg)',
    'opacity': '0.8',
  },
  '.altus-input-group': {
    'display': 'flex',
    'flexDirection': 'column',
    'gap': '0.5rem',
    'width': '100%',
  },
  '.altus-input-hint': {
    'fontSize': '0.75rem',
    'color': 'var(--alt-fg)',
    'opacity': '0.5',
  },
  '.altus-input-error-msg': {
    'fontSize': '0.75rem',
    'color': '#ef4444',
    'fontWeight': '600',
  },
  '.altus-input-invalid': {
    'borderColor': '#ef4444 !important',
    '&:focus': {
      'boxShadow': '0 0 0 4px rgba(239, 68, 68, 0.15) !important',
    }
  },
};
