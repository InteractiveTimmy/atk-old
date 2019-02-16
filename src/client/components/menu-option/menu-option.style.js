const styles = theme => ({
  menuOption: {
    position: 'relative',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    width: '2rem',
    height: '2rem',
    margin: '0.5rem',
  },
  icon: {
    fill: '#777',
    stroke: '#ff0000',
    width: '100%',
    height: '100%',
  },
  nameContainer: {
    marginLeft: '0.5rem',
    '&:hover .tooltip': {
      opacity: '1.0',
    },
  },
  tooltip: {
    position: 'absolute',
    left: '100%',
    padding: '0.2rem 0.6rem',
    marginLeft: '0.8rem',
    whiteSpace: 'nowrap',
    borderWidth: '0.05rem',
    borderStyle: 'solid',
    borderRadius: '0.2rem',
    backgroundColor: theme.colors.background,
    color: theme.colors.foreground,
    borderColor: theme.colors.foreground,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipArrow: {
    position: 'absolute',
    top: '50%',
    right: '100%',
    marginTop: '-0.4rem',
    borderWidth: '0.4rem',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRightColor: theme.colors.foreground,
  },
});

export default styles;
