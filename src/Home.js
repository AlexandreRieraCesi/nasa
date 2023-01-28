import { flexbox } from '@mui/system';
import { useState, useEffect } from 'react';
function Home() {
  const [photoData,setPhotoData]=useState({});
  useEffect(()=>{
    fetch(`https://api.nasa.gov/planetary/apod?api_key=1ijOEmaHZfy4u9gLmIkNXXTVoXG8PUxuZly6moMP`)
    .then(response => response.json())
    .then(data => setPhotoData(data));
  },[]); //empty array for running only once then empty array for that
  
  const containerStyle = {
    display:'flex',
    backgroundColor: 'grey',
  };
  const imgStyle = {
    height: '85vh',
    width:'95vw',
  };
  const explanationStyle = {
    height: '55vh',
    marginTop: '12vh',
    padding:20,
    fontSize: 22,
  };
  return (
    <div style={{backgroundColor:'black', height:'100vh', paddingTop:10, margin:'-8px'}}>
      <h1 style={{textAlign:'center', color:'white'}}>NASA PICTURE OF THE DAY</h1>
      <div style={containerStyle}>
        <img style={imgStyle} src={photoData.url} alt={photoData.title} />
        <div style={explanationStyle}>
          <h2 style={{textAlign:'center'}}>{photoData.title}</h2>
          <p style={{fontWeight: 'bold'}}>{photoData.copyright}</p>
          <p style={{fontWeight: 'bold'}}>{photoData.date}</p>
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
