
import React from 'react';
import styled from 'styled-components';
import img1 from "../imagesMarc/netflix.webp";
import img2 from "../imagesMarc/disney+.webp";
import img3 from "../imagesMarc/tv+.webp";
import img4 from "../imagesMarc/canal+.svg";
import img5 from "../imagesMarc/primeVidio.svg";

const CardContainer = styled.div`
  border: 3px solid #ccc;
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
  { imge: img1,titre: "amine" },
  { imge: img2,titre: "tt" },
  { imge: img3,titre: "bb" },
  { imge: img4,titre: "vv" },
  { imge: img5,titre: "xx" },
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
