import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  navigation: {
    //backgroundColor: shadeBlend( 0.06, theme.colors.bg, theme.colors.tc ),
    backgroundColor: shadeBlend( 0.06, theme.colors.accent, theme.colors.tc ),
    color: theme.colors.fg,

    '&[data-display=Default]': {
      width: '16em',
    },

    '&[data-display=Compact]': {
      fontSize: '1.5em',
      transition: `width ${theme.transition}s`,
      maxWidth: '20em',
      position: 'absolute',
      left: '0',
      right: '0',

      '&[data-visible=true]': {
        width: '100%'
      },
      '&[data-visible=false]': {
        width: '0%'
      }
    },

    '& .branding': {
      backgroundColor: theme.colors.accent,
      height: '4em',
      display: 'flex',
      alignItems: 'center',

      '& .image': {
        width: '2.4em',
        height: '2.4em',
        margin: '0.8em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },

      '& .text': {
        fontWeight: 'bold',
        fontSize: '1.2em',
        color: theme.colors.fg,
        flexGrow: '1'
      }
    },

    '& .options': {
      width: '100%',
      maxHeight: '100%',
      flexGrow: 1,
      flexShrink: 1,

      '& .workspace': {
        transition: 'background-color 0.2s, color 0.2s',
        minHeight: '2em',
        display: 'flex',
        alignItems: 'center',

        '&:hover': {
          backgroundColor: theme.colors.bg,
          color: theme.colors.fg
        },

        '&[data-selected=true]': {
          backgroundColor: theme.colors.bg,
          color: theme.colors.fg,

          '&:hover': {
            backgroundColor: shadeBlend( 0.06, theme.colors.bg, theme.colors.fg )
          }
        },

        '& .icon': {
          height: '1.4em',
          width: '1.4em',
          margin: '0 1.2em'
        },

        '& .name': {
          flexGrow: '1'
        },

        '& .notifications': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75em',
          width: '1.5em',
          height: '1.5em',
          margin: '0 0.5em',
          borderRadius: '0.2em',
          backgroundColor: theme.colors.info
        }
      }
    }
  }
} );

export default styles;