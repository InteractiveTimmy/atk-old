import { shadeBlend } from '../../utils';

const styles = theme => ({
  applet: {
    backgroundColor: theme.colors.background,
    color: theme.colors.forground,
    overflowY: 'auto',
    flexGrow: '1',
    flexShrink: '1',
    display: 'flex',
    flexDirction: 'column',
  },
  noTarget: {
    flexGrow: 1,
    color: shadeBlend(0.48, theme.colors.forground, theme.colors.background),
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
