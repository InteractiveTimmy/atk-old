import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsList: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: shadeBlend( 0.06, theme.colors.bg, theme.colors.cc ),
    color: theme.colors.fg,
    display: 'flex',
    flexDirection: 'column'
  }
} );

export default styles;