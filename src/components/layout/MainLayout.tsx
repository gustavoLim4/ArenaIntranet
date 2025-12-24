import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, Toolbar, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PolicyIcon from "@mui/icons-material/Policy";
import BookIcon from '@mui/icons-material/Book';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TireRepairIcon from "@mui/icons-material/TireRepair";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import MemoryIcon from "@mui/icons-material/Memory";

import theme from "../../theme";
import { NavButton } from "./NavButton";
import { EsconderScrollCelular, EsconderScrollDesktop } from "../../styles/stylesComun.styles";
import type { MenuGroup } from "./types";

const drawerWidth = 240;

export default function MainLayout() {
  const [open, setOpen] = useState(true);
  const [openMob, setOpenMob] = useState(false);
  const [openKnowledge, setOpenKnowledge] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    if (location.pathname.startsWith("/conhecimentos")) {
      setOpenKnowledge(true);
    }
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setOpen(!open);
    setOpenMob(!openMob);

    if (open) {
      setOpenKnowledge(false);
    }
  };


  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const homeItem = {
    text: "Início",
    icon: <HomeIcon />,
    path: "/home",
  };

  const menuGroups: MenuGroup[] = [

    {
      title: "Comunicação Interna",
      items: [
        {
          text: "Comunicados Oficiais",
          icon: <ConnectWithoutContactIcon />,
          path: "/comunicadogeral",
        },
      ],
    },
    {
      title: "Conhecimento & Governança",
      items: [
        {
          text: "Base de Conhecimento",
          icon: <PsychologyIcon />,
          expandable: true,
          items: [
            {
              text: "Borracharia",
              icon: <TireRepairIcon />,
              path: "/conhecimentos/borracharia",
            },
            {
              text: "Comercial",
              icon: <StorefrontIcon />,
              path: "/conhecimentos/comercial",
            },
            {
              text: "Compras",
              icon: <ShoppingCartIcon />,
              path: "/conhecimentos/compras",
            },
            {
              text: "Consultoria",
              icon: <SupportAgentIcon />,
              path: "/conhecimentos/consultoria",
            },
            {
              text: "Diretoria",
              icon: <EmojiEventsIcon />,
              path: "/conhecimentos/diretoria",
            },
            {
              text: "E-commerce",
              icon: <ShoppingBagIcon />,
              path: "/conhecimentos/ecommerce",
            },
            {
              text: "Estoque",
              icon: <WarehouseIcon />,
              path: "/conhecimentos/estoque",
            },
            {
              text: "Financeiro",
              icon: <AccountBalanceIcon />,
              path: "/conhecimentos/financeiro",
            },
            {
              text: "Roteirização",
              icon: <AltRouteIcon />,
              path: "/conhecimentos/roteirizacao",
            },
            {
              text: "Tecnologia",
              icon: <MemoryIcon />,
              path: "/conhecimentos/tecnologia",
            },
          ],
        },
        {
          text: "Políticas da Empresa",
          icon: <PolicyIcon />,
          path: "/politicas",
        },
        {
          text: "Manual de Cultura",
          icon: <AutoStoriesIcon />,
          path: "/manualcultura",
        },
      ],
    },
    {
      title: "Pessoas & Estrutura",
      items: [
        {
          text: "Organograma",
          icon: <ApartmentIcon />,
          path: "/organograma",
        },
        {
          text: "Colaboradores",
          icon: <GroupIcon />,
          path: "/colaboradores",
        },
      ],
    },
    {
      title: "Operacional & Suporte",
      items: [
        {
          text: "Chamados de TI",
          icon: <PermContactCalendarIcon />,
          path: "/solicitacoes",
        },
        {
          text: "Atendimento de TI",
          icon: <EmojiPeopleIcon />,
          path: "/atendimentos",
        },
        {
          text: "Inventário",
          icon: <Inventory2Icon />,
          path: "/inventario",
        },
        {
          text: "Canal de Ouvidoria",
          icon: <PermPhoneMsgIcon />,
          path: "/canalouvidoria",
        },
      ],
    },
    {
      title: "Treinamentos & Desenvolvimento",
      items: [
        {
          text: "Treinamentos",
          icon: <BookIcon />,
          path: "/treinamentos",
        },
      ],
    },
  ];
  const currentTitle =
    location.pathname.startsWith(homeItem.path)
      ? homeItem.text
      : (() => {
        for (const group of menuGroups) {
          for (const item of group.items) {
            if (item.path && location.pathname.startsWith(item.path)) {
              return item.text;
            }
            if (item.items) {
              const sub = item.items.find((sub) =>
                location.pathname.startsWith(sub.path)
              );
              if (sub) return sub.text;
            }
          }
        }
        return "Arena Intranet";
      })();



  const renderMenu = (isOpen: boolean, onItemClick?: () => void) => (
    <List sx={{ p: 2 }}>

      <NavButton
        icon={homeItem.icon}
        label={homeItem.text}
        active={location.pathname.startsWith(homeItem.path)}
        onClick={() => {
          navigate(homeItem.path);
          onItemClick?.();
        }}
        open={isOpen}
      />

      {menuGroups.map((group) => (
        <Box key={group.title}>
          {isOpen && (
            <Box sx={{ display: "flex", alignItems: "center", pl: .5, mb: 1, }} >
              <Typography sx={{ fontSize: 12, whiteSpace: "nowrap", mr: 1, }} >
                {group.title}
              </Typography>

              <Divider sx={{ flexGrow: 1, bgcolor: "#e0e0e0ff", mb: .2 }}
              />
            </Box>
          )}

          {group.items.map((item) => {

            if (item.expandable && item.items) {
              const isActive = location.pathname.startsWith("/conhecimentos");

              return (
                <Box key={item.text}>
                  <NavButton
                    icon={item.icon}
                    label={item.text}
                    open={isOpen}
                    active={isActive}
                    expandable
                    expanded={openKnowledge}
                    onClick={() => {
                      if (!isOpen) {
                        setOpen(true);
                      }
                      setOpenKnowledge((prev) => !prev);
                    }}
                  />

                  {openKnowledge && isOpen && (
                    <Box sx={{ ml: 3 }}>
                      {item.items.map((sub) => (
                        <NavButton
                          key={sub.text}
                          icon={sub.icon}
                          label={sub.text}
                          open={isOpen}
                          small
                          active={location.pathname === sub.path}
                          onClick={() => {
                            navigate(sub.path);
                            onItemClick?.();
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              );
            }

            return (
              <NavButton
                key={item.text}
                icon={item.icon}
                label={item.text}
                active={!!item.path && location.pathname.startsWith(item.path)}
                onClick={() => {
                  if (!item.path) return;

                  navigate(item.path);
                  onItemClick?.();
                }}
                open={isOpen}
              />
            );
          })}


        </Box>
      ))}
    </List>
  );

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
            sx={{ flexGrow: 1, textAlign: isMobile ? "center" : "left" }}
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
              width: drawerWidth,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              ...EsconderScrollCelular
            },
          }}
        >
          <Toolbar />
          {renderMenu(true, () => setOpenMob(false))}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: open ? drawerWidth : 90,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: open ? drawerWidth : 90,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              transition: "width 0.3s",
              ...EsconderScrollDesktop
            },
          }}
        >
          <Toolbar />
          {renderMenu(open)}
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          minHeight: "100vh",
          overflowX: "hidden",
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
