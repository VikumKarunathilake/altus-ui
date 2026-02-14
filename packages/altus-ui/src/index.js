const plugin = require('tailwindcss/plugin');
const baseStyles = require('./styles/base');
const buttonStyles = require('./styles/buttons');
const formStyles = require('./styles/forms');
const layoutStyles = require('./styles/layout');
const feedbackStyles = require('./styles/feedback');
const complexStyles = require('./styles/complex');

module.exports = plugin(function({ addBase, addComponents, theme }) {
  addBase(baseStyles);

  addComponents({
    ...buttonStyles,
    ...formStyles,
    ...layoutStyles,
    ...feedbackStyles,
    ...complexStyles,
  });
}, {
  theme: {
    extend: {
      colors: {
        altus: {
          bg: 'var(--alt-bg)',
          fg: 'var(--alt-fg)',
          muted: 'var(--alt-muted)',
          border: 'var(--alt-border)',
          primary: 'var(--alt-primary)',
        }
      },
      borderRadius: {
        altus: 'var(--alt-radius)',
      }
    }
  }
});
