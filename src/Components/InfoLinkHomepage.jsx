import React from "react";
import { Layout } from "antd";
import NavigationBar from "./NavigationBar";
import img1 from "../images/image1.jpeg";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

import { ListboxWrapper } from "./ListBoxWrapper";

// import { SchoolLogo } from "./SchoolLogo";

const { Content, Footer } = Layout;

export function InfoLinkHomepage() {
  return (
    <>
      <Layout className="flex flex-col font-futura min-h-screen">
        <NavigationBar />
        <Content className="flex flex-col justify-start items-center bg-white p-0 ">
          <img className="w-full" src={img1} alt="Logo" />
          <div className="bg-slate-100 flex flex-row justify-start items-start w-3/4 my-10 rounded-md">
            <ListboxWrapper>
              <div className="flex flex-row bg-yellow-300 h-10 items-center p-0">
                <div className="bg-[#507FBE] h-full w-1">
                  <p className="invisible">i</p>
                </div>
                <p className=" cairo text-xl text-black tracking-wider pl-2">
                  About Us
                </p>
              </div>
              <Listbox
                className="bg-[#27384B]"
                variant="light"
                onAction={(key) => alert(key)}
              >
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      School Information
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Trustee Information
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Transfer Certificate
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Teacher List
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Staff List
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Fee Structure
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Prescribed Books
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Affidavit Regarding Books
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Affiliation Certificate
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Fire Safety Certificate
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      School Building Safety Certificate
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Academic Calender
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Right to Education
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Self Certification Performa
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Society Registration
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Members PTA
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Recognition Certificate
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Water Health and Sanitation
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Board Results of Last 3 Years
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Affiliation to CBSE NOC
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Annual Report
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Library Information
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Enrolment Details
                    </p>
                  </Link>
                </ListboxItem>
                <ListboxItem key="new">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-black "
                  >
                    <p className="cairo tracking-wide text-lg  text-white ">
                      Activity Calender
                    </p>
                  </Link>
                </ListboxItem>
              </Listbox>
            </ListboxWrapper>
            <div className=" w-full mx-4 flex flex-col justify-center items-center">
              <div className="flex flex-row w-full justify-center items-center mt-6">
                <hr className=" flex flex-row w-10 bg-[#27384B] h-0.5" />
                <p className="cairo text-2xl">
                  &nbsp;&nbsp;School Information&nbsp;&nbsp;
                </p>
                <hr className=" flex flex-row w-10 bg-[#27384B] h-0.5" />
              </div>
              <div className="flex flex-col  w-full justify-start items-start mt-2">
                <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-4">
                  <div className="bg-[#507FBE] h-full w-1">
                    <p className="invisible">i</p>
                  </div>
                  <p className=" cairo text-xl text-white pl-2">
                    School Information
                  </p>
                </div>

                <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    Eastwood International School
                  </p>

                  <p className="font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    Raikot Road, Mullanpur
                  </p>

                  <p className="font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    Ludhiana, 141001
                  </p>

                  <p className="font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    Email: admission@eastwoodinternational.com
                  </p>

                  <p className="font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    Phone Number: 01162880530, 9478072446
                  </p>
                </div>
              </div>

              <div className="flex flex-col  w-full justify-start items-start">
                <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                  <div className="bg-[#507FBE] h-full w-1">
                    <p className="invisible">i</p>
                  </div>
                  <p className=" cairo text-xl text-white pl-2">
                    Year of Establishment
                  </p>
                </div>

                <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    2003
                  </p>
                </div>
              </div>

              <div className="flex flex-col  w-full justify-start items-start">
                <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                  <div className="bg-[#507FBE] h-full w-1">
                    <p className="invisible">i</p>
                  </div>
                  <p className=" cairo text-xl text-white pl-2">
                    NOC from State/UT
                  </p>
                </div>

                <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    NOC Number: 11/15/2006-2C:3/17240
                  </p>

                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    NOC Issuing Date: 17 November 2006
                  </p>
                </div>
              </div>

              <div className="flex flex-col  w-full justify-start items-start">
                <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                  <div className="bg-[#507FBE] h-full w-1">
                    <p className="invisible">i</p>
                  </div>
                  <p className=" cairo text-xl text-white pl-2">
                    School Recognizing Authority
                  </p>
                </div>

                <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    C.B.S.E, New Delhi
                  </p>
                </div>
              </div>

              <div className="flex flex-col  w-full justify-start items-start">
                <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                  <div className="bg-[#507FBE] h-full w-1">
                    <p className="invisible">i</p>
                  </div>
                  <p className=" cairo text-xl text-white pl-2">
                    Status of Affiliation
                  </p>
                </div>

                <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    Senior Secondary
                  </p>
                </div>
              </div>

              <div className="flex flex-col  w-full justify-start items-start">
                <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                  <div className="bg-[#507FBE] h-full w-1">
                    <p className="invisible">i</p>
                  </div>
                  <p className=" cairo text-xl text-white pl-2">
                    Permanent/Regular/Provisional
                  </p>
                </div>

                <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    Provisional
                  </p>

                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                    i) Affiliation Number
                  </p>
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    1630422
                  </p>
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                    ii) Year of Affiliation with the Board
                  </p>
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    April 2007
                  </p>
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                    iii) Extension of Affiliation Upto
                  </p>
                  <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                    March 2022
                  </p>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Name under Section 25 of the Company Act, 1956
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Eastwood International Education Trust, Ludhiana, Punjab,
                      India
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Registration Validity
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      22 August 2003 to Permanent
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Name and Manager of the Society/Trust/Company
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                      S. Anand Sarup Singh
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      40 Samsher Avenue, Ferozpur Road Ludhiana, Punjab, India
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Area of School Campus
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                      i) In Squate Meters
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      8360 sq. mtrs.
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                      ii) Built up Area (Sq. Mtrs)
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      2640 sq. mtrs.
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                      iii) Playground Area (Sq. Mtrs)
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      6000 sq. mtrs.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Facilities Available
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Teaching Aids Smart Class
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Indoor Games
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Dance Rooms
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Music Rooms
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Health and Medical Check Up
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Mode of Payment of Salary
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                      i) Bank
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Salary is drawn through Azis Bank, Mullanpur
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3 font-bold">
                      ii) Cheque
                    </p>
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Through single cheque transfer advice
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Name and Contact of Grievance/Redressal Officer
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      Ms. Pritpal Kaur Sekhon, +91 81460-06018
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Academic Session Period
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      March to April
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Vacation Period
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      1st June to 15th July
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-start items-start mb-10">
                  <div className="w-full bg-[#27384B] flex flex-row h-10 items-center p-0 mt-6">
                    <div className="bg-[#507FBE] h-full w-1">
                      <p className="invisible">i</p>
                    </div>
                    <p className=" cairo text-xl text-white pl-2">
                      Admission Period
                    </p>
                  </div>
                  <div className="flex flex-col pl-3 bg-white w-full pb-4 rounded-b-md">
                    <p className=" font-ltc-bodoni-175 text-lg text-[#27384B] pt-3">
                      April to August
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer className="p-0 z-10">{/* <AppFooter /> */}</Footer>
      </Layout>
    </>
  );
}
