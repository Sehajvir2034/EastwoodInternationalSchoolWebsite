import React from "react";
import { Layout } from "antd";
import NavigationBar from "./NavigationBar";
import { SchoolLogo } from "./SchoolLogo";
import ScrollComponent from "./ScrollComponent";

const { Header, Content, Footer } = Layout;

export function Home() {
  return (
    <>
      <Layout className="flex flex-col font-futura min-h-screen">
        {/* <ScrollComponent />
        <div className="flex justify-center items-end bg-white pt-4 pb-3 w-full">
          <SchoolLogo height={100} width={100} />
          <div className="flex flex-col justify-center items-center">
            <p className=" text-red-600 font-ltc-bodoni-175 text-base ">
              Affiliation Code: 123456
            </p>
            <p className="text-[#27384B] font-ltc-bodoni-175 text-5xl pl-10 pb-5">
              Eastwood International School
            </p>
            <p className="text-[#27384B] tracking-wide font-ltc-bodoni-175 text-lg ">
              Affiliated to C.B.S.E, New Delhi
            </p>
          </div>
        </div> */}
        <NavigationBar />
        <Content className="flex flex-col justify-between bg-red-200">
          <div className="h-screen">
            <p className="text-3xl">Hello World</p>
          </div>
        </Content>
        <Footer className="p-0 z-10">{/* <AppFooter /> */}</Footer>
      </Layout>
    </>
  );
}
