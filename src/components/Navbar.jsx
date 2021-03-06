import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import { Typography } from '@material-ui/core';
import HamburgerMenu from 'react-hamburger-menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box mb={4}>
      <AppBar
        position="absolute"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          color: '#544C4C',
        }}
      >
        <Toolbar>
          <Box m={3}>
            <CodeRoundedIcon fontSize="large" />
          </Box>
          <Typography variant="h4" style={{ flexGrow: '1', fontWeight: '700' }}>
            Vexio
          </Typography>
          <Box m={2} onClick={() => setOpen(!open)}>
            <HamburgerMenu
              isOpen={open}
              width={30}
              height={20}
              strokeWidth={2}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </Box>
          {/* <Overlay isOpen={open} setOpen={setOpen} /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
