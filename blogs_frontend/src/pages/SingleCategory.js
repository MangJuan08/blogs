import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarSection } from "../components/NavbarSection";

const SingleCategory = () => {
    const navigate = useNavigate();
    let categoryName = useParams();
    const token = localStorage.getItem("token");

    useEffect(() => {

    }, [])

    if (token) {
        return (
            <div><NavbarSection />{Object.values(categoryName)}</div>
        )
    }
    else {
        navigate("/");
    }

}

export default SingleCategory