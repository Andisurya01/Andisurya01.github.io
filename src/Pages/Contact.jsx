import React from "react";
import Navbar from "../AllComponentsHere/Components Home/navbar";
import Footerandi from "../AllComponentsHere/Components Home/Footerandi";
import Sapaan from "../AllComponentsHere/components contact/Sapaan";
import ListContact from "../AllComponentsHere/components contact/ListContact";

const Contact = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Sapaan></Sapaan>
            <ListContact/>
            <Footerandi></Footerandi>
        </div>
    )

}

export default Contact;