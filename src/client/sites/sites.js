const sites = [
  {
    name: 'Compact',
    condition: ( ) => ( window.innerWidth < 992 )
  },
  {
    name: 'Default',
    condition: ( ) => ( true )
  }
];

export default sites;