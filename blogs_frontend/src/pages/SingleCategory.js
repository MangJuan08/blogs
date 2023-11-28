import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarSection } from "../components/NavbarSection";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleCategory = () => {
    const [posts, setPost] = useState([]);
    const navigate = useNavigate();
    let categoryName = useParams();
    const token = localStorage.getItem("token");


    const fetchPostsCategry = () => {
        let val = Object.values(categoryName);

        axios.post("http://localhost:3001/getPostsOfCategory/" + val.toString()).then((res) => {
            console.log(res.data)
            setPost([res])

        });
    };

    /*const tryController = () => {
        axios.get("https://localhost:7260/api/Values").then((res) => {
            console.log(res)
        });
    }*/

    const getValuesObject = (item) => {
        return Object.values(item.split(','));
    }

    useEffect(() => {
        fetchPostsCategry();
        /* tryController();*/
    }, [])

    if (token) {
        return (
            <div><NavbarSection />
                <div className="container"><br></br><br></br>
                    <div className="row">
                        <div className="col-md-12"><h1>{Object.values(categoryName)}</h1></div>
                        <br></br>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <ul className="list-group">
                                {
                                    posts.length > 0 ?

                                        posts[0].data.map((item, i) => {
                                            return <li key={i} className="list-group-item">

                                                <Link to={`/singlePost/${item.idpost}`}>   {getValuesObject(item.post_titolo)} </Link>
                                            </li>
                                        })
                                        : ""}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
    else {
        navigate("/");
    }

}

export default SingleCategory



/* <Link to={`/singlePost/${Object.values(item.idpost)}`}> {Object.values(item.post_titolo)}  </Link>*/