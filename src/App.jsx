import './App.css'
import Navbar from './components/navbar';
import bg from './assets/Rectangle 1.png'


import Card from './components/cars';
import React from 'react';
import Footer from './components/footer';

const FixedStarRating = ({ rating }) => {
  const filledStars = Math.round(rating); // Round the provided rating to the nearest whole number
  const remainingStars = 5 - filledStars; // Calculate the number of empty stars

  const renderStars = (count, type) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} className={`text-${type}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const filledStarElements = renderStars(filledStars, 'yellow-500'); // Render filled stars
  const remainingStarElements = renderStars(remainingStars, 'gray-400'); // Render empty stars

  return (
    <div className="flex">
      {filledStarElements}
      {remainingStarElements}
    </div>
  );
};

const FixedStarRatingBlue = ({ rating }) => {
  const filledStars = Math.round(rating); // Round the provided rating to the nearest whole number
  const remainingStars = 5 - filledStars; // Calculate the number of empty stars

  const renderStars = (count, type) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} className={`text-${type}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const filledStarElements = renderStars(filledStars, 'blue'); // Render filled stars with blue color
  const remainingStarElements = renderStars(remainingStars, 'blue-500'); // Render empty stars in gray

  return (
    <div className="flex">
      {filledStarElements}
      {remainingStarElements}
    </div>
  );
};



function App() {

  return (
    <>
    <Navbar />
    <div className="flex-col overflow-hidden relative flex h-[100dvh] justify-center">
      <img
        loading="lazy"
        className='w-full h-full'
        src={bg}
        alt="Real Estate Image"
      />
      <div className="absolute  top-8 right-8">
        <header className="text-black text-center text-2xl lg:text-3xl font-semibold  max-md:max-w-full ">
          "ZAA: Where Your Next Chapter Begins in Real Estate."
        </header>
        <div className="text-black text-center text-xl font-semibold leading-10 tracking-[3px] self-center max-w-[1113px] ml-14 mt-10 max-md:max-w-full">
          Your Gateway to Real Estate Excellence. <br /> Buy, Sell, Rent -
          Seamlessly.
        </div>
      </div>
    </div>
    <div className="bg-zinc-700 bg-opacity-50 flex flex-col justify-center items-stretch py-12 ">
      <Card />
      <div className="bg-zinc-300  px-8 flex flex-col items-center pt-6 pb-12 w-full max-md:px-5">
      <div className="lg:flex w-full justify-around items-stretch mb-24 max-md:mb-10">
      <div className="flex flex-wrap justify-center justify-between  ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-4xl mx-auto lg:text-8xl lg:text-6xl font-semibold text-gray-800 text-center">
              <div>
                500+
                <div className="text-lg lg:text-2xl font-normal pt-12">villa</div>
              </div>
              <div>
                100+
                <div className="text-lg lg:text-2xl font-normal pt-12">town house</div>
              </div>
              <div>
                115K*
                <div className="text-lg lg:text-2xl font-normal pt-12">chalet</div>
              </div>
              <div>
                95+
                <div className="text-lg lg:text-2xl font-normal pt-12">apartment</div>
              </div>
            </div>
          </div>
          <div className="stars ">
          <div className="flex items-stretch gap-0 mt-7 self-end max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/372da8d061e35add7264af63d39e3f8efa055da4e84868c5fca8a802605523e1?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[46px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8576b7a2d595c9a67d54745201cd597e455bec7b67cf54e507689418a971d138?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[46px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21d0a9eb5a9236bcc76cd1ccff64b1156c9f721ef244a6d04e83023fccde9f61?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[46px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21d0a9eb5a9236bcc76cd1ccff64b1156c9f721ef244a6d04e83023fccde9f61?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[46px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
               <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21d0a9eb5a9236bcc76cd1ccff64b1156c9f721ef244a6d04e83023fccde9f61?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[46px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
          
          </div>
          <div className="flex items-stretch gap-0 self-start max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4393b5051351896bad9487ad95e79e9c7f661dc284c8527efc1fd5aef44a7c89?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4393b5051351896bad9487ad95e79e9c7f661dc284c8527efc1fd5aef44a7c89?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4393b5051351896bad9487ad95e79e9c7f661dc284c8527efc1fd5aef44a7c89?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4393b5051351896bad9487ad95e79e9c7f661dc284c8527efc1fd5aef44a7c89?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
                  <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4393b5051351896bad9487ad95e79e9c7f661dc284c8527efc1fd5aef44a7c89?apiKey=00dd475291cf4f1da724421e257168ca&"
              className="aspect-square object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
         
          </div>
          </div>
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
} 

export default App
