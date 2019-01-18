import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( ( Object.keys( theme ).length !== 0 ) ? {
  brand: {
    height: '4em',
    backgroundColor: shadeBlend( 0.09, theme.accent, theme.target ),
    flexShrink: '0',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none'
  },

  logo: {
    height: '3.2em',
    width: '3.2em',
    margin: '0.4em'
  },

  name: {
    fontSize: '1.2em'
  }
} : null );

export default styles;