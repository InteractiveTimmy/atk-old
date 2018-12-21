import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsList: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: shadeBlend( 0.06, theme.widgets.bg, theme.widgets.tc ),
    color: theme.widgets.fg,
    display: 'flex',
    flexDirection: 'column'
  }
} );

export default styles;