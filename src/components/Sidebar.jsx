import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
// import profileImage from "assets/profile.jpeg";
import { shades } from "../theme";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Administrare",
    // text: "Client Facing",
    icon: null,
  },
  {
    text: "Produse",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Clienți",
    icon: <Groups2Outlined />,
  },
  {
    text: "Tranzacții",
    icon: <ReceiptLongOutlined />,
  },
  // {
  //   text: "Geography",
  //   icon: <PublicOutlined />,
  // },
  {
    text: "Statistici vânzări",
    icon: null,
  },
  {
    text: "Ansamblu",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Zilnice",
    icon: <TodayOutlined />,
  },
  {
    text: "Lunare",
    icon: <CalendarMonthOutlined />,
  },
  // {
  //   text: "Breakdown",
  //   icon: <PieChartOutlined />,
  // },
  {
    text: "Management",
    icon: null,
  },
  // {
  //   text: "Admin",
  //   icon: <AdminPanelSettingsOutlined />,
  // },
  // {
  //   text: "Performance",
  //   icon: <TrendingUpOutlined />,
  // },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  // const user = useSelector((state)=> state.auth.user)
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: shades.secondary[500],
              backgroundColor: shades.neutral[100],
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={shades.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  {/* <Typography variant="h4" fontWeight="bold">
                    CANTINA
                  </Typography> */}
                  <Box
                    onClick={() => navigate("/home")}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    color={shades.secondary[500]}
                  >
                    CANTINA
                  </Box>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? shades.secondary[400]
                            : "transparent",
                        color:
                          active === lcText
                            ? shades.primary[900]
                            : shades.neutral[700],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? shades.primary[600]
                              //: shades.secondary[200],
                              : shades.neutral[700],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
               // src={`http://localhost:3001/assets/${user.picturePath}`}
                src={"#"}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: shades.secondary[100] }}
                >
                  {user.firstName}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: shades.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: shades.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box> */}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;