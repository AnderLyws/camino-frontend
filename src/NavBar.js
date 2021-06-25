import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ReactBootStrap.Nav fill variant="tabs" defaultActiveKey="/home">
        <ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Link href="/home">
            All Devices
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav.Item>
        <ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Link eventKey="link-1">
            Actived Devices
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav.Item>
        <ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Link eventKey="link-2">
            Not Actived Devices
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav.Item>
        <ReactBootStrap.Nav.Item></ReactBootStrap.Nav.Item>
      </ReactBootStrap.Nav>
    </div>
  );
};

export default NavBar;
