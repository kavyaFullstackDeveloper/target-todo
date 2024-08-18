import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
  background-color: rgb(245, 244, 235);
`;

const Heading = styled(Typography)(({ theme }) => ({
  color: '#5F6368',
  marginLeft: '25px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    marginLeft: '10px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '28px',
  },
}));

const HeaderBar = ({ handleDrawerToggle }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Header>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle} // Use the function here
          edge="start"
        >
          <Menu />
        </IconButton>
        <img 
          src={logo} 
          alt="logo" 
          style={{ 
            width: isSmallScreen ? 20 : 30,
            marginRight: isSmallScreen ? '10px' : '20px'
          }} 
        />
        <Heading>Targets todo</Heading>
      </Toolbar>
    </Header>
  );
}

export default HeaderBar;
