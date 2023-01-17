import { useEffect, useState } from "react";
import axios from "axios";

export default function Cuisinedetailimage ({id, isLoading, setIsLoading}) {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        axios
        .get(`https://preview.contentful.com/spaces/3nafpp0jo6h4/environments/master/assets/${id}?access_token=AVeF52oB3JFEvqE6w8LJB1NIqFhPlN4cQhi6bc6sYG4`)
        .then((response) => {
        setImageUrl('https:'+ response.data.fields.file.url)
        })
        .catch((err) => {
        console.log(err);
        });
        },
        []);

        
    

    return(
        <img src={imageUrl} className="image margin-bottom1"/>
        )
    }