// import React from 'react'
// const cardDataArray =[
//     {img: "../imagesMarc/disney+.webp"},{img: "../imagesMarc/netflix.webp"},{img: "../imagesMarc/tv+.webp"}
// ]
// export default function objet() {
//     return (
//         <div>
//             {cardDataArray.map((cardData,index)=>(
//                 <div key={index}>
//                     <img src={cardData.img} alt="Card Image"/> 
//                 </div>
//             ))}
//         </div>
//     )
// }



import React from 'react';
import styled from 'styled-components';
import img1 from "../imagesMarc/netflix.webp";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  height: 70px; 
  width: 100px;
  
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px; /* Ajouté une bordure arrondie pour l'image */
`;

const CardDataArray = [
  { imge: "../imagesMarc/disney+.webp",titre: "amine" },
  { imge: "../imagesMarc/netflix.webp",titre: "tt" },
  { imge: "../imagesMarc/tv+.webp",titre: "bb" },
  { imge: "../imagesMarc/tv+.webp",titre: "vv" },
  { imge: "../imagesMarc/tv+.webp",titre: "xx" },
];

export default function CardComponent() {
  return (
    <div style={{ display: 'flex', justifyContent:"space-evenly" , marginTop:"100px" ,marginBottom:"50px"}}>
      {CardDataArray.map((cardData, index) => (
        <CardContainer key={index}>
          <CardImage src={cardData.imge} alt={cardData.titre} />
        </CardContainer>
      ))}
    </div>
  );
}
