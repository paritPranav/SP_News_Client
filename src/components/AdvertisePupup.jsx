import React, { useEffect } from 'react'
import Popup from "reactjs-popup";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from 'react';
import axios, { all } from 'axios';
export default function () {
    // const [alladvertisements,setadvertisements]=useState([]);
    const [advertiseposter,setadsizeposter]=useState('');
    // const [adsize,setadsize]=useState(0);
    let alladvertisements=[];
    let adsize=0;
    let advertiseUrl = process.env.REACT_APP_API_URL+"/advertise"
    const fetchadvertises=()=>{
        axios.get(advertiseUrl)
        .then((res)=>{
        //  setadvertisements(res.data);
        alladvertisements=res.data;
        console.log(alladvertisements)
        adsize=alladvertisements.length;
        console.log(adsize);

      if(adsize>0){
       
        fetchspecificad();
      }
      })

      

    }
    let randnum=0;

    const fetchspecificad=()=>{
      console.log("here")
    setOpen(true);
    randnum= Math.floor(Math.random() * adsize + 1);
    setadsizeposter(alladvertisements[randnum-1].Advertise_image);

    }
    useEffect(()=>{
      fetchadvertises();


    },[])


    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
  return (
    <div>
             <Popup
        className="popo"
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
      >
        <div className="modal">
          <a className="close" onClick={closeModal}>
            <AiFillCloseCircle />
          </a>
  
          <img
            src={advertiseposter}
            width="90%"
            style={{ marginLeft: "5%" }}
          ></img>
        </div>
      </Popup>


    </div>
  )
}
