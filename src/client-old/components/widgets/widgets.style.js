import { shadeBlend } from "../../utils";

const styles = theme => ( {
  Widgets: {
    width: '20em',
    backgroundColor: shadeBlend( 0.06, theme.widgets.bg, theme.widgets.tc ),
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  }
} );

export default styles;