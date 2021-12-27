import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: '#F1F3F9',
        '&& .MuiTableCell-head': {
          fontWeight: 'bold',
          textTransform: 'capitalize'
        }
      }
    },
    MuiTableBody: {
      root: {
        '&& .MuiTableRow-root:hover': {
          backgroundColor: '#F1F3F9'
        }
      }
    },
    MuiBadge: {
      dot: {
        height: '12px',
        width: '12px'
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        background: '#313131',
        borderRight: 0
      }
    }
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#e94335',
      contrastText: '#000000'
    },
    error: {
      main: '#F53C56'
    },
    warning: {
      main: '#FFBA00'
    },
    success: {
      main: '#2DCE98'
    },
    background: {
      default: '#00000'
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
})

export { theme }
