// MIT License
import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

function Sidebar() {
  return (
    <div >
      <Menu compact vertical>

        <Menu.Item>
          <a href="/">
            Home
          </a>
        </Menu.Item>

        <Menu.Item>
          <Dropdown text='About' pointing>
            <Dropdown.Menu>
              
              <Dropdown.Item>
                <a href="/about">
                  About BTC
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/history">
                  History
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/staff">
                  Staff
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/memberorgs">
                  Member Organizations
                </a>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <a href="/photos">
            Photos
          </a>
        </Menu.Item>

        <Menu.Item>
          <Dropdown text='News and Events' pointing>
            <Dropdown.Menu>

              <Dropdown.Item>
                <a href="/about">
                  About BTC
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/about/history">
                  History
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/about/staff">
                  Staff
                </a>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown text='Campaigns' pointing>
            <Dropdown.Menu>
              <Dropdown.Item>
                <a href="/campaigns">
                  Campaigns
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/campaigns/2020">
                  2020 Campaign
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/campaigns/iz">
                  2020 Campaign
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/campaigns/latinotenantorg">
                  2020 Campaign
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          Tenant Rights
        </Menu.Item>

        <Menu.Item>
          Reports and Scholar Work
        </Menu.Item>

        <Menu.Item>
          Press
        </Menu.Item>

        <Menu.Item>
          <a href="/contact-us">
            Contact Us
          </a>
        </Menu.Item>

      </Menu>
    </div>
  )
}

export default Sidebar;