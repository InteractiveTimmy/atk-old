import { shadeBlend } from '../../utils';

const styles = theme => ({
  menuOption: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  optionContainer: {
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.6rem',
    cursor: 'pointer',
    '&[data-size=small]': {
      height: '2.6rem',
    },
    '&[data-size=medium]': {
      height: '3rem',
    },
    '&[data-size=large]': {
      height: '3.6rem',
    },
    '&[data-outline=success]': { stroke: theme.colors.success },
    '&[data-outline=processing]': { stroke: theme.colors.processing },
    '&[data-outline=warning]': { stroke: theme.colors.warning },
    '&[data-outline=error]': { stroke: theme.colors.error },
    '&:hover': {
      backgroundColor: shadeBlend(0.12, theme.colors.primary),
    },
    '&[data-selected=true]': {
      backgroundColor: shadeBlend(0.12, theme.colors.primary),
      '&:hover': {
        backgroundColor: shadeBlend(0.24, theme.colors.primary),
      },
    },
  },
  iconContainer: {
    '&[data-size=small]': {
      height: '1.8rem',
      width: '1.8rem',
    },
    '&[data-size=medium]': {
      height: '2.2rem',
      width: '2.2rem',
    },
    '&[data-size=large]': {
      height: '2.8rem',
      width: '2.8rem',
    },
  },
  icon: {
    fill: theme.colors.target,
    strokeWidth: '0.05em',
  },
  tooltip: {
    zIndex: '1',
    opacity: '0.0',
    position: 'absolute',
    left: '100%',
    padding: '0.2rem 0.6rem',
    marginLeft: '0.8rem',
    whiteSpace: 'nowrap',
    borderWidth: '0.05rem',
    borderStyle: 'solid',
    borderRadius: '0.2rem',
    backgroundColor: theme.colors.primary,
    color: theme.colors.target,
    borderColor: theme.colors.primary,
    '&[data-visible=true]': {
      transition: 'opacity 0.4s 0.2s',
      visibility: 'visible',
      opacity: '1.0',
    },
    '&[data-visible=false]': {
      transition: 'opacity 0.2s, visibility 0.2s 0.1s',
      visibility: 'hidden',
      opacity: '0.0',
    },
  },
  tooltipArrow: {
    position: 'absolute',
    top: '50%',
    right: '100%',
    marginTop: '-0.4rem',
    borderWidth: '0.4rem',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRightColor: theme.colors.primary,
  },
  tooltipText: {
    fontSize: '0.8rem',
  },
});

export default styles;
