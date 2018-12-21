import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsConfigurationContainer: {
    backgroundColor: shadeBlend( 0.24, theme.colors.bg, theme.colors.cc ),
    color: theme.colors.fg,
    flexShrink: 0
  }
} );

export default styles;