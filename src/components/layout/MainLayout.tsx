import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, Toolbar, Typography, useMediaQuery } from "@mui/material";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import theme from "../../theme";
import MenuIcon from '@mui/icons-material/Menu';
import { NavButton } from "./NavButton";

const drawerWidth = 240;

export default function MainLayout() {
  const [open, setOpen] = useState(true);
  const [openMob, setOpenMob] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));



  const handleDrawerToggle = () => {
    setOpen(!open);
    setOpenMob(!openMob);
  };

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const menuItems = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
      path: "/home",
    },
    {
      text: "Solicitações",
      icon: <PermContactCalendarIcon />,
      path: "/solicitacoes",
    },
    {
      text: "Atendimentos",
      icon: <EmojiPeopleIcon />,
      path: "/atendimentos",
    },
    {
      text: "Inventario",
      icon: <Inventory2Icon />,
      path: "/inventario",
    },
    {
      text: "Usuários",
      icon: <GroupIcon />,
      path: "/usuarios",
    },
  ];

  const currentTitle =
    menuItems.find((item) =>
      location.pathname.startsWith(item.path)
    )?.text || "Arena intranet";


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.secondary.main,

        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {currentTitle}
          </Typography>

          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={openMob}
          onClose={() => setOpenMob(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 215,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
          }}
        >
          <Toolbar />
          <Divider />

          <List sx={{ p: 2 }}>
            {menuItems.map((item) => (
              <NavButton
                key={item.text}
                icon={item.icon}
                label={item.text}
                active={location.pathname.startsWith(item.path)}
                onClick={() => {
                  navigate(item.path);
                  setOpenMob(false);
                }}
                open={true}
              />
            ))}
          </List>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: open ? drawerWidth : 90,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: open ? drawerWidth : 90,
              boxSizing: "border-box",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              transition: "width 0.3s",
            },
          }}
        >
          <Toolbar />
          <Divider />
          <List sx={{ p: 2 }}>
            {menuItems.map((item) => (
              <NavButton
                key={item.text}
                icon={item.icon}
                label={item.text}
                active={location.pathname.startsWith(item.path)}
                onClick={() => navigate(item.path)}
                open={open}
              />
            ))}
          </List>
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.paper,
          p: 2,
          minHeight: "100vh",
          overflowX: "hidden"
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
