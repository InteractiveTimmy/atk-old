import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  workspaces: {
    transition: 'width 0.2s',
    backgroundColor: theme.colors.workspaces.bg,
    color: theme.colors.workspaces.fg,
    width: '12em',

    [`@media ( max-width: ${theme.compactThreshold} )`]: {
      width: '0em',

      '&.expanded': {
        width: '100%'
      }
    }
  }
} );

export default styles;