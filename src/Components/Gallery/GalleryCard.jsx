
const GalleryCard = ({image}) => {
    return (
      <div className="">
        <div className="bg-base-100 shadow-xl ">
          <figure>
            <img className="rounded-sm mx-auto w-100 md:h-40"
              src={image.image}
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    );
  };

export default GalleryCard;