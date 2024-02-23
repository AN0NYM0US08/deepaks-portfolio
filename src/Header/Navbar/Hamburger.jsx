import React from 'react';
import "./Hamburger.css";

// Header component


// SidebarMenu component
const SidebarMenu = () => {
  return (
    // <div id="sidebarMenu">
    //   <ul className="sidebarMenuInner">
    //     <SidebarMenuItem link="https://vanila.io" target="_blank" text="Company" />
    //     <SidebarMenuItem link="https://instagram.com/plavookac" target="_blank" text="Instagram" />
    //     <SidebarMenuItem link="https://twitter.com/plavookac" target="_blank" text="Twitter" />
    //     <SidebarMenuItem link="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" text="YouTube" />
    //     <SidebarMenuItem link="https://www.linkedin.com/in/plavookac/" target="_blank" text="Linkedin" />
    //   </ul>
    // </div>
    <div id="sidebarMenu" >
      <ul className="sidebarMenuInner" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', margin: 0, padding: 0, borderRadius: 'none' }}>
        <SidebarMenuItem link="https://vanila.io" target="_blank" text="Company" />
        <SidebarMenuItem link="https://instagram.com/plavookac" target="_blank" text="Instagram" />
        <SidebarMenuItem link="https://twitter.com/plavookac" target="_blank" text="Twitter" />
        <SidebarMenuItem link="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" text="YouTube" />
        <SidebarMenuItem link="https://www.linkedin.com/in/plavookac/" target="_blank" text="Linkedin" />
      </ul>
    </div>
  );
};

// SidebarMenuItem component
const SidebarMenuItem = ({ link, target, text }) => {
  return (
    <li><a href={link} target={target}>{text}</a></li>
  );
};

// MainContent component

// App component
const Bar = () => {
  return (
    <div>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <SidebarMenu />
    </div>
  );
};

export default Bar;
