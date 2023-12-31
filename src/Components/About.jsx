import React from "react";
import { Layout } from "antd";
import NavigationBar from "./NavigationBar";
// import { SchoolLogo } from "./SchoolLogo";

const { Content, Footer } = Layout;

export function About() {
  return (
    <>
      <Layout className="flex flex-col font-futura min-h-screen">
        <NavigationBar />
        <Content className="flex flex-col justify-between bg-red-200">
          <div className="">
            <p className="text-3xl">About Page</p>
          </div>
        </Content>
        <Footer className="p-0 z-10">{/* <AppFooter /> */}</Footer>
      </Layout>
    </>
  );
}
