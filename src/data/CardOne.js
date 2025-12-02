// import React from 'react';
// function CardOne() {
//   // Card data
//  const cardList = [
//   {
//     img: "https://i.imgur.com/w5HYiQZ.png",
//     title: "Growth",
//     description:
//       "Our group of specialists will collaborate with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.",
//   },
//   {
//     img: "https://i.imgur.com/4wouHGC.png",
//     title: "Fitness",
//     description:
//       "Offering a diverse range of exercises for your selection, you'll have all the resources necessary to attain the peak of your physical fitness.",
//   },
//   {
//     img: "https://i.imgur.com/UdPvj8T.png",
//     title: "Diet",
//     description:
//       "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
//   },
// ];
//   return (
//     <>
//        {cardList.map((card, id) => (
//         <div
//           key={id}
//           className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
//         >
//           <img src={card.img} alt="box_img" className="w-[75px] mb-4" />
//           <p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
//           <p className="text-[15px] font-medium leading-2 w-full">
//             {card.description}
//           </p>
//         </div>
//       ))}
//     </>
//   );
// }
// export default CardOne;