import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Gall from './components/Gall/gall';
const apiKey='053b95d15ca4de50460d618497dee6b1';



function App() {
  const [data,setdata]=useState('')
  const [search,setsearch]=useState('')
const handelchange=(e)=>{
  setsearch(e.target.value)
}
  const handelsubmit=(e)=>{
    e.preventDefault();
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      res=>setdata(res.data.photos.photo)
     )
  }
  const handel_beaches=(e)=>{
    e.preventDefault();
    const search='beaches';
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
               res=>{setdata(res.data.photos.photo)}
    ).catch(
      (err)=>{console.log("err",err)}
    )
  }
  const handel_birds=(e)=>{
    e.preventDefault();
    const search="birds";
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      res=>{setdata(res.data.photos.photo)}
    ).catch((err=>err))
  }
  const handel_food=(e)=>{
    e.preventDefault();
    const search="food"
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      responce=>{setdata(responce.data.photos.photo)}
    )
  }
  const handel_mount=(e)=>{
    const search="mountain";
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      res=>{setdata(res.data.photos.photo)}
    )
  }
  
  return (
    <div className="App">
      <section style={{backgroundColor:'rgb(0,128,128)'}}>
      <lable style={{color:'rgb(224,255,255)'}}>search:</lable>
     <input className='input' onChange={handelchange}></input><br/>
     <button onClick={handelsubmit}>search</button>
     <div>
     <button style={{backgroundColor:'rgb(0,255,255)'}} onClick={handel_mount}>MOUNTAIN</button>
     <button style={{backgroundColor:'rgb(0,255,255)'}} onClick={handel_food}>FOOD</button>
     <button style={{backgroundColor:'rgb(0,255,255)'}} onClick={handel_beaches}>BEACHES</button>
     <button style={{backgroundColor:'rgb(0,255,255)'}} onClick={handel_birds}>BIRDS</button>
     
     
     </div>
     </section>
     <div style={{backgroundColor:'red'}}>
      {data.length>=1?<Gall data={data}/>:"NO IMAGE FOUND"}
     </div>
    </div>
    
  );
}

export default App;
