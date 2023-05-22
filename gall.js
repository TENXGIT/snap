import React from "react";

 const Gall=({data})=>{
   return(
    < >
    {data.map((image) =>
    <div id="image" style={{display:'block',float:'left',marginLeft:"10px",backgroundColor:'white'}}>
    <img  style={{margin:'4px', padding:"4px",borderRadius:"8px" }}src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
   height="180" width="180" alt={image.title}/>
    </div>
    )}
</>
   )
 }
 export default Gall