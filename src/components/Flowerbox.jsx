import Tags from "./Tags";
import data from "../data";



// function Flowerbox(props) {
 const Flowerbox = ({ image, name, price, tags }) => {
   const tagstuff = tags.map((tag, index) => {
     console.log(tag);
     return <Tags tag={tag} key={index} />;
   });
   return (
     <>
       <div className="box">
         <img src={image} />
         <div id="textcontent">
           <h4 id="name">{name}</h4>
           <p id="pricetag">{price}</p>
           <p id="tags">{tagstuff}</p>
         </div>
       </div>
     </>
   );
 };

// }

export default Flowerbox;
