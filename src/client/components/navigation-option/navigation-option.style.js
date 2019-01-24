import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( ( Object.keys( theme ).length !== 0 ) ?
  ( {
    navigationOption: {
      width: '4em',
      height: '3em',
      flexShrink: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    navigationOptionLarge: {
      width: '4em',
      height: '4em',
      flexShrink: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    icon: {
      width: '2em',
      height: '2em',
    },

    iconLarge: {
      width: '3em',
      height: '3em' 
    },

    hover: {
      position: 'absolute',
      left: '5em',
      padding: '0.25em 0.5em',
      backgroundColor: theme.background,
      color: theme.foreground,
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center'
    }
  } ) : null 
);

export default styles;