import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { useLocation } from "react-router-dom";
import { SchoolLogo } from "./SchoolLogo";
import ScrollComponent from "./ScrollComponent";
const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const menuItems = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/about" },
    { label: "For Clinics", route: "/clinics" },
    { label: "Contact Us", route: "/contactus" },
  ];

  return (
    <>
      <ScrollComponent />
      <div className="hidden sm:flex justify-center items-end bg-white pt-4 pb-3 w-full">
        <SchoolLogo height={100} width={100} />
        <div className="flex flex-col justify-center items-center">
          <p className=" text-red-600 font-ltc-bodoni-175 text-base ">
            Affiliation Code: 1630422
          </p>
          <p className="text-[#27384B] font-ltc-bodoni-175 text-5xl pl-10">
            Eastwood International School
          </p>
          <p className="text-[#27384B] tracking-wide font-ltc-bodoni-175 text-lg ">
            Affiliated to C.B.S.E, New Delhi
          </p>
        </div>
      </div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBordered={true}
        maxWidth="full"
        className=" bg-[#27384B]  cairo font-thin"
      >
        <NavbarContent className="sm:hidden md:flex lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=" text-white "
          />
          <NavbarBrand>
            <SchoolLogo height={45} width={45} />
            <Link href="/home" className="text-black hover:text-black gap-4">
              <p className="tracking-wide cairo text-2xl pl-4 text-white uppercase">
                Eastwood
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarBrand className="invisible">
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex md:hidden lg:flex gap-16"
          justify="center"
        >
          <NavbarItem>
            <Link
              className={`text-base text-white hover:text-white ${
                location.pathname === "/home" || location.pathname === "/"
                  ? " border-white border-b-1 pb-1 pt-1"
                  : "border-[#27384B] border-b-1 pb-1 pt-1"
              }`}
              href="/home"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-base text-white hover:text-white ${
                location.pathname === "/about"
                  ? " border-white border-b-1 pb-1 pt-1"
                  : "border-[#27384B] border-b-1 pb-1 pt-1"
              }`}
              href="/about"
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-base text-white hover:text-white ${
                location.pathname === "/gallery"
                  ? " border-white border-b-1 pb-1 pt-1"
                  : "border-[#27384B] border-b-1 pb-1 pt-1"
              }`}
              href="/gallery"
            >
              Gallery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-base text-white hover:text-white ${
                location.pathname === "/infrastructure"
                  ? " border-white border-b-1 pb-1 pt-1"
                  : "border-[#27384B] border-b-1 pb-1 pt-1"
              }`}
              href="/infrastructure"
            >
              Infrastructure
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-base text-white hover:text-white ${
                location.pathname === "/admissions"
                  ? " border-white border-b-1 pb-1 pt-1"
                  : "border-[#27384B] border-b-1 pb-1 pt-1"
              }`}
              href="/admissions"
            >
              Admissions
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-base text-white hover:text-white ${
                location.pathname === "/sections"
                  ? " border-white border-b-1 pb-1 pt-1"
                  : "border-[#27384B] border-b-1 pb-1 pt-1"
              }`}
              href="/sections"
            >
              Classes
            </Link>
          </NavbarItem>
          <Dropdown shouldBlockScroll={false} className="p-0">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <Link
                    className={`text-base text-white hover:text-white ${
                      location.pathname === "/infolink"
                        ? " border-white border-b-1 pb-1 pt-1"
                        : "border-[#27384B] border-b-1 pb-1 pt-1"
                    }`}
                    href="/infolink"
                  >
                    Info-Link
                  </Link>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-full bg-red-400 rounded-lg"
              color="default"
              variant="light"
              // itemClasses={{
              //   base: "gap-4",
              // }}
            >
              <DropdownItem textValue="ff" key="autoscaling" showDivider={true}>
                <p className="ciaro font-light text-base">School Information</p>
              </DropdownItem>

              <DropdownItem key="usage_metrics" showDivider={true}>
                <p className="ciaro font-light text-base">
                  Trustee Information
                </p>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link
              className={`text-base text-white hover:text-white ${
                location.pathname === "/contactus"
                  ? " border-white border-b-1 pb-1 pt-1"
                  : "border-[#27384B] border-b-1 pb-1 pt-1"
              }`}
              href="/contactus"
            >
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarBrand className="invisible">
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenu className="bg-white">
              {menuItems.map((menuItem, index) => (
                <NavbarMenuItem key={index}>
                  <Link
                    href={menuItem.route}
                    className={`text-black hover:text-black ${
                      location.pathname === menuItem.route
                        ? "border-black border-b-1 pb-1 pt-1"
                        : "border-white border-b-1 pb-1 pt-1"
                    }`}
                  >
                    {menuItem.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavigationBar;
