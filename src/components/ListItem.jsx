import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const Dropdown = ({ label,  icon, }) => {
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <div>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon style={{ color: 'white' }}n>
            {icon}
          </ListItemIcon>
          <ListItemText className='text-[#fff]'  primary={label} />
        </ListItemButton>
      </div>
    );
  };

export default Dropdown;
