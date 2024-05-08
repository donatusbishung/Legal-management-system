import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Dropdown = ({ label, mainIcon, subItems }) => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setClicked(true);
  };

  return (
    <div>
      <ListItemButton
        className={`customItemsBtn hover:bg-black mb-2 ${clicked ? 'bg-gray-300' : ''}`}
        onClick={handleClick}
      >
        <ListItemIcon style={{ color: 'white' }} >
          {mainIcon}
        </ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className='bg-[#9D9D9D]' component="div" disablePadding>
          {subItems.map((item, index) => (
            <ListItemButton key={index} sx={{ pl: 3 }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default Dropdown;
