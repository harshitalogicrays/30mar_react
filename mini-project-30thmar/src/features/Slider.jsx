import React from 'react'
import Image1 from '/src/assets/images/a.jpg'
import Image2 from '/src/assets/images/about-image.png'
import Image3 from '/src/assets/images/c.jpeg'
import Image4 from '/src/assets/images/chair.jpg'
import Image5 from '/src/assets/images/chair5.jpg'
import Image6 from '/src/assets/images/d.jpg'
import Image7 from '/src/assets/images/chair3.webp'

const Slider = () => {
const data = [
    {id:1,image:Image1,title:'image1',desc:'image1 desc'},
    {id:2,image:Image2,title:'image2',desc:'image2 desc'},
    {id:3,image:Image3,title:'image3',desc:'image3 desc'},
    {id:4,image:Image4,title:'image4',desc:'image4 desc'},
    {id:5,image:Image5,title:'image5',desc:'image5 desc'},
    {id:6,image:Image6,title:'image6',desc:'image6 desc'},
    {id:7,image:Image7,title:'image7',desc:'image7 desc'}]
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        {data.map((s,i)=>
            <div class={`carousel-item ${i==0 && 'active'}`} key={s.id} data-bs-interval="2000">
                <img src={s.image} class="d-block w-100" alt={s.title} height={350}/>
                    <div class="carousel-caption d-none d-md-block">
                    <h5>{s.title}</h5>
                    <p>{s.desc}</p>
                </div>
            </div>
      )}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider
