import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsConfigurations: {
    height: '3em',
    backgroundColor: shadeBlend( 0.18, theme.colors.bg, theme.colors.cc ),
    color: theme.colors.fg,
    flexShrink: 0,
    display: 'flex'
  }
} );

export default styles;