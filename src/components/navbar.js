import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardSharp from '@mui/icons-material/DashboardSharp';
import SearchIcon from '@mui/icons-material/Search';
import Dashboard from './dashboard';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import SellIcon from '@mui/icons-material/Sell';
import { Navigate, Routes, useLocation, useNavigate } from 'react-router';
import { Route } from '@mui/icons-material';
import Addproduct from './addproduct';
import { ListItemButton } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


const navigate = useNavigate();
const {pathname} = useLocation();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Inventory Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItemButton selected = {pathname.includes("dashboard")} onClick={()=> {
            navigate("dashboard")
          }}>
              <ListItemIcon>
                <DashboardSharp />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
          </ListItemButton>

          <ListItemButton selected = {pathname.includes("searchproduct")} onClick ={()=>{
            navigate('searchproduct')
          }}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary={"Search Items"} />
          </ListItemButton>

          <ListItemButton selected = {pathname.includes("addproduct")}  onClick={()=> {
            navigate("addproduct") 
          }}>
              <ListItemIcon>
                <AddCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Add Items"} />
          </ListItemButton>

          <ListItemButton selected = {pathname.includes("removeproduct")}  onClick={()=> {
            navigate("removeproduct") 
          }}>
              <ListItemIcon>
                <RemoveCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Remove Items"} />
          </ListItemButton>

          <ListItemButton selected = {pathname.includes("sellproduct")}  onClick={()=> {
            navigate("sellproduct") 
          }}>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText primary={"Sell"} />
          </ListItemButton>

          {/* {['Dashboard', 'Search Items', 'Add Items', 'Remove Item','Sell'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardSharp /> : <SearchIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
      </Drawer>
       {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
        {/* <DrawerHeader /> */}
        {/* <Typography paragraph> */}
        {/* <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path ='addproduct' element={<Addproduct />}/>
        </Routes> */}
          {/* <Routes>
            <Route path ='addproduct' element={<Addproduct/>}/>
            <Route path ='pendingpurchase' element={<Pendingpurchase/>}/>
            <Route path ='pendingsell' element={<Pendingsell/>}/>
          </Routes> 
        </Typography> */}
        {/* </Box> */}
    </Box>
  );
}

// className ={`${pathname.includes("addproduct")?"text-green-500":""}`}