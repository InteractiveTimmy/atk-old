const styles = theme => ({
  menu: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
  },
  primary: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  secondary: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  account: {
    display: 'flex',
  },
});

export default styles;
