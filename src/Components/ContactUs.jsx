import React, { useState } from "react";
import { Layout } from "antd";
import NavigationBar from "./NavigationBar";
import img1 from "../images/image1.jpeg";
import { Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const { Content, Footer } = Layout;

export function ContactUs() {
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [classOfRegisteration, setClassOfRegisteration] = useState("");
  const [residence, setResidence] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleSubmit = () => {
    // Log the values in the console
    console.log("Student's Name:", studentName);
    console.log("Father's Name:", fatherName);
    console.log("Mother's Name:", motherName);
    console.log("Class For Registeration:", classOfRegisteration);
    console.log("Residence:", residence);
    console.log("Gender", gender);
    console.log("Phone Number", phoneNumber);

    setStudentName("");
    setFatherName("");
    setMotherName("");
    setClassOfRegisteration("");
    setResidence("");
    setGender("");
    setPhoneNumber("");

    setTimeout(() => {
      onClose(); // This will close the modal
    }, 5000);
  };

  return (
    <>
      <Layout className="flex flex-col font-futura min-h-screen">
        <NavigationBar />
        <Content className="flex flex-col justify-start items-center bg-white p-0">
          <img className="w-full" src={img1} alt="Logo" />
          <div className="bg-slate-100 flex flex-col justify-center items-center w-3/4 my-10 rounded-md">
            <div className="flex flex-row w-full justify-start items-start py-3">
              <Link
                href="/home"
                className="text-black hover:text-black hover:underline"
              >
                <p className="tracking-wide pl-6 text-sm cairo text-black">
                  Home
                </p>
              </Link>
              &nbsp;&nbsp;
              <p className="tracking-wide text-sm cairo text-black">></p>
              &nbsp;&nbsp;
              <Link
                href="/contactus"
                className="text-black hover:text-black hover:underline"
              >
                <p className="tracking-wide  text-sm cairo text-[#27384B] ">
                  Contact Us
                </p>
              </Link>
            </div>

            <div className="flex flex-row w-full justify-center items-center ">
              <hr className=" flex flex-row w-10 bg-[#27384B] h-0.5" />
              <p className="text-4xl font-ltc-bodoni-175 text-[#27384B]">
                &nbsp;&nbsp;Contact Us&nbsp;&nbsp;
              </p>
              <hr className="flex flex-row w-10 bg-[#27384B] h-0.5" />
            </div>

            <div className="flex flex-row bg-[#27384B] h-10 items-center p-0 w-3/4 mt-6">
              <div className="bg-[#507FBE] h-full w-1">
                <p className="invisible">i</p>
              </div>
              <div className="text-black hover:text-black">
                <p className="text-white tracking-wider text-xl pl-2">
                  School Address:
                </p>
              </div>
            </div>

            <div className="bg-white flex flex-col w-3/4 font-ltc-bodoni-175 py-2 pl-2 rounded-md">
              <p className=" text-lg text-[#27384B]">
                Eastwood International School
              </p>
              <p className=" text-lg pt-4 text-[#27384B]">
                Raikot Road, Mullanpur,
              </p>
              <p className=" text-lg pt-4 text-[#27384B]">Ludhiana, Punjab,</p>
              <p className=" text-lg pt-4 text-[#27384B]">India</p>
            </div>

            {/* <div className=" flex flex-row w-3/4 font-ltc-bodoni-175 mt-10 py-6">
              <p className="text-xl font-bold text-[#27384B]">Address:</p>
              <div className="flex flex-col w-auto ml-2">
                <p className="text-xl text-[#27384B]">
                  Eastwood International School
                </p>
                <p className="text-xl text-[#27384B]">Raikot Road, Mullanpur</p>
                <p className="text-xl text-[#27384B]">Ludhiana, Punjab</p>
              </div>
            </div> */}

            <div className="flex flex-row bg-[#27384B] h-10 items-center p-0 w-3/4 mt-6">
              <div className="bg-[#507FBE] h-full w-1">
                <p className="invisible">i</p>
              </div>
              <div className="text-black hover:text-black">
                <p className="text-white  tracking-wider  text-xl pl-2">
                  For General Queries:
                </p>
              </div>
            </div>

            <div className="bg-white flex flex-col w-3/4 font-ltc-bodoni-175 py-2 pl-2 rounded-md">
              <p className=" text-lg text-[#27384B]">
                🕒 9 a.m. to 5 p.m. - Monday to Friday
              </p>
              <p className=" text-lg pt-4 text-[#27384B]">
                🕒 9 a.m. to 1 p.m. - Saturday
              </p>
              <p className=" text-lg pt-4 text-[#27384B]">
                During the school holidays, the office operates from Monday to
                Friday
              </p>
            </div>

            <div className="flex flex-row bg-[#27384B] h-10 items-center p-0 w-3/4 mt-6">
              <div className="bg-[#507FBE] h-full w-1">
                <p className="invisible">i</p>
              </div>
              <div className="text-black hover:text-black">
                <p className="text-white tracking-wider text-xl pl-2">
                  Admission Inquiries:
                </p>
              </div>
            </div>
            <div className="bg-white flex flex-col w-3/4 font-ltc-bodoni-175 py-2 pl-2 rounded-md">
              <p className=" text-lg text-[#27384B]">
                For all admissions-related enquiries and to register your child,
                please contact the Admissions Office
              </p>
              <p className=" text-lg pt-4 text-[#27384B]">
                ✉️ Email:{" "}
                <a
                  className="hover:underline text-orange-500 hover:text-orange-300"
                  href="mailto:admission@eastwoodinternational.com"
                >
                  admission@eastwoodinternational.com
                </a>
              </p>
            </div>

            <div className="flex flex-row bg-[#27384B] h-10 items-center p-0 w-3/4 mt-6">
              <div className="bg-[#507FBE] h-full w-1">
                <p className="invisible">i</p>
              </div>
              <div className="text-black hover:text-black">
                <p className="text-white tracking-wider text-xl pl-2">
                  Phone Numbers:
                </p>
              </div>
            </div>
            <div className="bg-white flex flex-col w-3/4 font-ltc-bodoni-175 py-2 pl-2 mb-10 rounded-md">
              <p className=" text-lg pt-4 text-[#27384B]">☎️ 01162880530</p>
              <p className=" text-lg pt-4 text-[#27384B]">📞 94780-72446</p>
              <p className=" text-lg pt-4 text-[#27384B]">📞 98159-34300</p>
            </div>

            <div className="flex flex-row w-full justify-center items-center ">
              <hr className=" flex flex-row w-10 bg-[#27384B] h-0.5" />
              <p className="text-4xl font-ltc-bodoni-175 text-[#27384B]">
                &nbsp;&nbsp;Enquiry Form&nbsp;&nbsp;
              </p>
              <hr className="flex flex-row w-10 bg-[#27384B] h-0.5" />
            </div>
            <div className="font-ltc-bodoni-175 flex flex-col justify-center items-center rounded-md bg-white w-3/4 mt-6 mb-20 flex-wrap md:flex-nowrap gap-4 shadow-xl shadow-slate-300">
              <div className="w-3/4 flex flex-col justify-items-center mt-16">
                <p className="font-ltc-bodoni-175 text-lg pl-2">
                  Student's Name
                </p>
                <Input
                  className="w-full font-ltc-bodoni-175"
                  size="sm"
                  validate={true}
                  radius="sm"
                  isRequired={true}
                  isClearable={true}
                  type="email"
                  fullWidth={false}
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  onClear={() => setStudentName("")}
                  placeholder="Enter Student's Name here"
                />
              </div>
              <div className="w-3/4  flex flex-col justify-items-center">
                <p className="font-ltc-bodoni-175 text-lg pl-2">
                  Father's Name
                </p>
                <Input
                  className="w-full font-ltc-bodoni-175"
                  size="sm"
                  radius="sm"
                  validate={true}
                  isRequired={true}
                  type="email"
                  fullWidth={false}
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  onClear={() => setFatherName("")}
                  placeholder="Enter Father's Name here"
                />
              </div>
              <div className="w-3/4 flex flex-col justify-items-center">
                <p className="font-ltc-bodoni-175 text-lg pl-2">
                  Mother's Name
                </p>
                <Input
                  className="w-full font-ltc-bodoni-175"
                  size="sm"
                  radius="sm"
                  validate={true}
                  isRequired={true}
                  type="email"
                  fullWidth={false}
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  onClear={() => setMotherName("")}
                  placeholder="Enter Mother's Name here"
                />
              </div>
              <div className="w-3/4 flex flex-col justify-items-center">
                <p className="font-ltc-bodoni-175 text-lg pl-2">
                  Class For Registeration
                </p>
                <Input
                  className="w-full font-ltc-bodoni-175"
                  size="sm"
                  radius="sm"
                  validate={true}
                  isRequired={true}
                  type="email"
                  fullWidth={false}
                  value={classOfRegisteration}
                  onChange={(e) => setClassOfRegisteration(e.target.value)}
                  onClear={() => setClassOfRegisteration("")}
                  placeholder="Enter Class for Registeration here"
                />
              </div>
              <div className="w-3/4 flex flex-col justify-items-center">
                <p className="font-ltc-bodoni-175 text-lg pl-2">Residence</p>
                <Input
                  className="w-full font-ltc-bodoni-175"
                  size="sm"
                  radius="sm"
                  validate={true}
                  isRequired={true}
                  type="email"
                  fullWidth={false}
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  onClear={() => setResidence("")}
                  placeholder="Enter Residence here"
                />
              </div>

              <div className="w-3/4  flex flex-col justify-items-center">
                <p className="font-ltc-bodoni-175 text-lg pl-2">Gender</p>
                <Input
                  className="w-full font-ltc-bodoni-175"
                  size="sm"
                  radius="sm"
                  validate={true}
                  isRequired={true}
                  type="email"
                  fullWidth={false}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  onClear={() => setGender("")}
                  placeholder="Enter Gender here"
                />
              </div>

              <div className="w-3/4  flex flex-col justify-items-center">
                <p className="font-ltc-bodoni-175 text-lg pl-2">Phone Number</p>
                <Input
                  className="w-full font-ltc-bodoni-175"
                  size="sm"
                  radius="sm"
                  validate={true}
                  isRequired={true}
                  type="email"
                  fullWidth={false}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onClear={() => setPhoneNumber("")}
                  placeholder="Enter Phone Number here"
                />
              </div>

              <div className="w-2/12 mt-6 mb-10 flex flex-row justify-center items-center">
                <Button
                  className="bg-gradient-to-tr from-[#27384B] to-[#507FBE] text-white shadow-lg"
                  size="md"
                  fullWidth={true}
                  radius="none"
                  color="primary"
                  onPress={() => {
                    onOpen();
                    handleSubmit();
                  }}
                >
                  <p className=" text-base font-ltc-bodoni-175">Submit</p>
                </Button>
              </div>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 justify-center items-center text-xl ciaro">
                        Form Successfully Submitted
                      </ModalHeader>
                      <ModalBody>
                        <p className="ciaro text-lg">
                          Thanks for submitting the form. We will get back to
                          you soon.
                        </p>
                      </ModalBody>
                      <ModalFooter className="flex flex-row justify-center items-center">
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </Content>
        <Footer className="p-0 z-10">{/* <AppFooter /> */}</Footer>
      </Layout>
    </>
  );
}
