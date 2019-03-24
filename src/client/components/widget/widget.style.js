import { shadeBlend } from '../../utils';

const styles = theme => ({
  widget: {
    backgroundColor: theme.colors.accent,
    color: theme.colors.target,
    width: '16rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '&[data-collapsed=true]': {
      transition: 'width 0.4s 0.2s',
      width: '0rem',
      '& > div': {
        transition: 'opacity 0.2s',
        opacity: '0.0',
        minWidth: '16rem',
      },
    },
    '&[data-collapsed=false]': {
      transition: 'width 0.4s',
      '& > div': {
        transition: 'opacity 0.4s 0.2s',
        opacity: '1.0',
        minWidth: '16rem',
      },
    },
  },
  header: {
    height: '3.6rem',
    minWidth: '16rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  collapser: {
    transition: 'background-color 0.2s',
    width: '2.6rem',
    height: '2.6rem',
    borderRadius: '0.2rem',
    marginRight: '0.5rem',
    backgroundColor: theme.colors.primary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: shadeBlend(0.12, theme.colors.primary, theme.colors.target),
    },
  },
  iconContainer: {
    width: '2.2rem',
    height: '2.2rem',
    position: 'relative',
  },
  icon: {
    fill: theme.colors.target,
  },
  headerText: {
    marginLeft: '0.8rem',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    '& h6': {
      color: shadeBlend(0.24, theme.colors.target, theme.colors.accent),
    },
  },
  noTarget: {
    flexGrow: 1,
    color: shadeBlend(0.48, theme.colors.target, theme.colors.accent),
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
