
import React from 'react';
import { AppBar, Button, Container, ImageList, ImageListItem, TextField, Toolbar, Typography} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';
function App() {
  
  const natureProducts = [
    {
      id: 1,
      name: "Green Forest",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      id: 2,
      name: "Mountain View",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 3,
      name: "Lake and Trees",
      img: "https://images.unsplash.com/photo-1438786657495-640937046d18"
    },
    {
      id: 4,
      name: "Sunrise in Forest",
      img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c"
    },
    {
      id: 5,
      name: "Foggy Forest",
      img: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d"
    },
    {
      id: 6,
      name: "River Flow",
      img:  "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    
    },
    {
      id: 7,
      name: "Nature Landscape",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      id: 8,
      name: "Trees Reflection",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      id: 9,
      name: "Waterfall Beauty",
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    {
      id: 10,
      name: "Grass Field",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 11,
      name: "Mountain & Lake",
      img: "https://images.unsplash.com/photo-1482192505345-5655af888cc4"
    },
    {
      id: 12,
      name: "Green Hills",
      img: "https://images.unsplash.com/photo-1438786657495-640937046d18"
    },
    {
      id: 13,
      name: "Evening Forest",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      id: 14,
      name: "Calm River",
      img: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee"
    },
    {
      id: 15,
      name: "Nature Beauty",
      img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
    }
  ];
  
  return (
    <div>
      <AppBar>
        <Toolbar >
          <CameraAltIcon/>
          <Typography variant = "h5">Photography</Typography>
        </Toolbar>
      </AppBar>
    <Container style = {{marginTop:"70px",textAlign:"center"}}>
      <Typography variant ="h3">Our Latest Version of Photography</Typography>
      <Typography Paragraph ="h6">Pleasure to take photos as well ,Please fill the below form for any invite requests</Typography>

    </Container>
    <Container>
      <ImageList rowHeight={150} cols={3}>
        {natureProducts.map(imageObj =>
        <ImageListItem key ={imageObj.id} cols={1}>
          <img src = {imageObj.img} alt={imageObj.name} style={{height:"80px" ,width:"380px"}}/>

        </ImageListItem>)}
      </ImageList>
    </Container>
    <center>
    <Container>
      <Typography variant="h4">Contact Form</Typography>
      <form>
        <TextField style={{width:"500px", margin:"5px"}} type = "text" label = "Name" variant = "outlined"></TextField><br/>
        <TextField style={{width:"500px", margin:"5px"}} type = "email" label = "Email " variant = "outlined"></TextField><br/>
        <TextField style={{width:"500px", margin:"5px"}} type = "text" label = "Proposal" variant = "outlined"></TextField><br/>
        <TextField style={{width:"500px", margin:"5px"}} type = "text" label = "Address" variant = "outlined"></TextField><br/>
        <Button variant="contained"> Send <SendIcon /></Button>
      </form>
    </Container>
    </center>
    </div>
  );
}

export default App;
