import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarSection } from "../components/NavbarSection";
import axios from "axios";

const SingleCategory = () => {
    const [posts, setPost] = useState([]);
    const navigate = useNavigate();
    let categoryName = useParams();
    const token = localStorage.getItem("token");


    const fetchPostsCategry = () => {
        let val = Object.values(categoryName);

        axios.post("http://localhost:3001/getPostsOfCategory/" + val.toString()).then((res) => {
            console.log(res)
            setPost([posts])

        });
    };
    useEffect(() => {
        fetchPostsCategry();
        if (posts.length > 0) {
            console.log("hello")
        }
        else { console.log("hi") }
    }, [])

    if (token) {
        return (
            <div><NavbarSection />
                <div className="container"><br></br><br></br>
                    <div className="row">
                        <div className="col-md-12"><h1>{Object.values(categoryName)}</h1></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <ul className="list-group">
                                {
                                    /*posts.length > 0 ?
                               
                                        posts.data.map((item, index) => {


                                            return <li className="list-group-item" key={index}>{Object.values(item)}</li>
                                        }

                                        )
                                        : ""*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        navigate("/");
    }

}

export default SingleCategory