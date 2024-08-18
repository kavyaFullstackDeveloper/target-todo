import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import LabelIcon from '@mui/icons-material/Label';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavList = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust for mobile devices
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Adjust for tablet devices
    const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Adjust for desktop devices

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
        { id: 4, name: 'Label', icon: <LabelIcon />, route: '/label' }
    ];

    const listItemStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Stack icons and text vertically on mobile
        alignItems: isMobile ? 'center' : 'flex-start', // Center content on mobile
        padding: isMobile ? '10px 0' : '10px 16px' // Adjust padding for smaller screens
    };

    return (
        <List>
            {
                navList.map(list => (
                    <ListItem button key={list.id} style={listItemStyle}>
                        <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit', width: '100%', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <ListItemIcon style={{ alignItems: 'center' }}>
                                {list.icon}
                            </ListItemIcon>
                            <ListItemText primary={list.name} style={{ textAlign: isMobile ? 'center' : 'left', marginLeft: isMobile ? 0 : '8px' }} />
                        </Link>
                    </ListItem>
                ))
            }
        </List>
    );
}

export default NavList;
