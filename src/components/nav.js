import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      applyGradient: ''
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  listenToScroll = () =>{
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height

      console.log(scrolled)
      if(scrolled > 0){
          this.setState({
              applyGradient : 'grad'
          })
      }else{
        this.setState({
            applyGradient : ''
        })
      }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  render() {
    return (
      <div>
        <Navbar  className={`position-fixed w-100 my-nav ${this.state.applyGradient}`} light expand="md">
          <NavbarBrand href="/"><img _ngcontent-c2="" alt="ConveGenius Logo " src="https://s3-ap-southeast-1.amazonaws.com/slate-data/cg-impact-client/assets/icons/cg_logo.png"/> ConveGenius</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">HOME</NavLink>
              </NavItem>
             
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ABOUT US
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   Our Vision
                  </DropdownItem>
                  <DropdownItem>
                    Contact Us
                  </DropdownItem>
                 
                </DropdownMenu>
                
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 IMPACT DASHBOARD
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   Login
                  </DropdownItem>
                  <DropdownItem>
                    View Demo
                  </DropdownItem>
                 
                </DropdownMenu>
                
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}