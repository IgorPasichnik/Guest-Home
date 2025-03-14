import React from "react";
import Intro from "../../components/intro/index";
import ContactsInformation from "../../components/contactsInformation/index";
import Header from "../../UI/header";
import Footer from "../../UI/footer";

export default function Contacts() {
  return (
    <div className="">
      <Header />
      <Intro
        height="60vh"
        sizeTextButton="20px"
        flexHeight="space-around"
        sizeLogo="115px"
        nameSize="50px"
      />
      <ContactsInformation />
      <Footer />
    </div>
  );
}
