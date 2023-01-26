import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
		background: {
			default: '#282634',
		},
    primary: {
      main: '#ff4057',
    },
    secondary: {
      main: '#DCDCDC'
    },
	},
	components: {
		MuiDivider: {
			styleOverrides: {
				root: {
					backgroundColor: '#DCDCDC',
				},
			},
		},
	},
});

export default theme;