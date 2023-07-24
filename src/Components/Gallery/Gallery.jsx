import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [images, setImages] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            setImages(data)
        })
    },[])
    
    return (
        <div>
           <section className="m-10">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {
                images.map(image => <GalleryCard key={image.id} image={image}></GalleryCard>)
            }
           </div>
           </section>
        </div>
    );
};

export default Gallery;