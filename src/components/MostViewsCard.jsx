import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MostViewsCard(props) {
  const [Desc, setDesc] = useState(props.posts.Post_Description);
  const shortDesc = Desc ? Desc.substring(0, 50) : "";
  const [Title, setTitle] = useState(props.posts.Post_Title);
  const [image, setImage] = useState(props.posts.Post_Image);
  const [id, setid] = useState(props.posts._id);

  return (
    <div className="container">
      <Link
        to={"/fullpost" + "/" + id}
        style={{ textDecoration: "None", color: "black" }}
      >
        <div className="innercontainer">
          <div style={{ paddingTop: "5px", paddingLeft: "10px" }}>
            <h3>Most Viewed Story...</h3>
          </div>
          <div className="imgpart">
            <img
              className="cardimg"
              style={{ paddingTop: "10px" }}
              src={image}
              alt="Loading"
            />
          </div>
          <div className="infopart">
            <h4>{Title?.substring(0, 80)}...</h4>
            <p>
              {shortDesc}...<span style={{ color: "blue" }}>read More</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
