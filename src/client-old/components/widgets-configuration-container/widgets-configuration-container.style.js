import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsConfigurationContainer: {
    backgroundColor: shadeBlend( 0.24, theme.widgets.bg, theme.widgets.tc ),
    color: theme.widgets.fg,
    flexShrink: 0
  }
} );

export default styles;