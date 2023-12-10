import React from 'react';
import image1 from '../assets/Rectangle 34624133.png';
import image2 from '../assets/Rectangle 34624134.png';
import image3 from '../assets/Rectangle 34624135.png';
import image4 from '../assets/Rectangle 34624136.png';
const contentData = [
    {
      imageUrl: image1,
      title: 'Asset Management',
      description:
        "One stakeholder status revision only building reach your leverage. Meeting launch build monday then points welcome t-shaped tent mint. Look knowledge productive say old welcome meeting nail our. Weaponize charts that's hits illustration per.",
    },
    {
      imageUrl: image2,
      title: 'Asset Management',
      description:
        "One stakeholder status revision only building reach your leverage. Meeting launch build monday then points welcome t-shaped tent mint. Look knowledge productive say old welcome meeting nail our. Weaponize charts that's hits illustration per.",
    },
    {
      imageUrl: image3,
      title: 'Asset Management',
      description:
        "One stakeholder status revision only building reach your leverage. Meeting launch build monday then points welcome t-shaped tent mint. Look knowledge productive say old welcome meeting nail our. Weaponize charts that's hits illustration per.",
    },
  ];
  
  
  const Card = () => {
    const cardStyle = {
      position: 'relative',
      height: '25rem', // Set the height of each card to 25rem (400px)
    };
  
    const imgStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        top: '0',
        left: '0',
        filter: 'grayscale(100%)', // Apply grayscale filter to the image
      };
  
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {contentData.map((data, index) => (
            <div
              key={index}
              className="shadow-sm bg-gray-600 bg-opacity-70 relative z-[1] flex flex-col justify-center items-center px-16 py-12 border-[1px] border-solid border-blue-500 max-md:max-w-full max-md:px-5 mb-8 overflow-hidden"
              style={cardStyle}
            >
              <img src={data.imageUrl} alt={data.title} style={imgStyle} />
              <div className="absolute z-50 top-0 left-0 w-full h-full bg-gray-600 opacity-70 mix-blend-multiply"></div>
              <div className="flex z-50 w-[1292px] max-w-full flex-col items-stretch mt-32 mb-80 max-md:my-10">
                <div className="text-white text-center text-xl font-bold  tracking-[3px] max-md:max-w-full">
                  <span className="text-yellow-300 pb-5 ">Service</span>
                  <p className='py-4'>{data.title}</p>
                  <span className="text-white text-sm">{data.description}</span>
                  <span className="text-yellow-300">
                    <br /> <br />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
  
  export default Card;