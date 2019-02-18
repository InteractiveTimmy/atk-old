import { shadeBlend } from '../../utils';

const styles = theme => ({
  menuOption: {
    transition: 'background-color 0.2s',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3.6rem',
    width: '3.6rem',
    cursor: 'pointer',
    '&[data-size=medium]': {
      height: '3rem',
      width: '3.6rem',
    },
    '&[data-size=large]': {
      height: '3.6rem',
      width: '3.6rem',
    },
    '&:hover': {
      backgroundColor: shadeBlend(0.12, theme.colors.primary),
    },
  },
  iconContainer: {
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
  },
  tooltip: {
    transition: 'opacity 0.2s',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&[data-visible=true]': {
      transitionDelay: '1s',
      opacity: '1.0',
    },
    '&[data-visible=false]': {
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
