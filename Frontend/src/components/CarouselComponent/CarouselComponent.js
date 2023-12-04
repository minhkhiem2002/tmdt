import React, { useState, useEffect } from "react";
import { Carousel } from "antd";

const CarouselComponent = () => {
  const [images, setImages] = useState([
    "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/400614643_3483937991872367_5434778182658281758_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGc8X8FQYoQBUp8ei1umg0NUf04w5BdP_lR_TjDkF0_-QUFpiuo9Gp3UKv8DdTOAutNyS5THVYMsmN3QzgzFcuI&_nc_ohc=CYdNHhlAW1gAX9jafv9&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdQaRge9PaN50rMA9IgVPN6xJjh_OIxWkcK4Xg4QyfItQg&oe=6590F5BC",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/376575903_1519389788853729_1545885276058387853_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGsfLAeKIX6fVTA7HFIi1DDhXdYenFj5cSFd1h6cWPlxMdpek9-R2nzDWYM7YNwytkxFgcpzvl2NcLMGL4g4WMa&_nc_ohc=ApaL1EEikTUAX8Vu7I7&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdQpNGHmHYUoM2I1zpnoTSOHclPhMG04z5OoUTL-sL3C3w&oe=6590FCE7",
    "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/401097784_1055468745645027_6405421762098050587_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGff-90RsCrIlyCe5E16Oo6RHkq3b_twJlEeSrdv-3AmdS5lmmDMu163LNi9b4_00oWuHOG99896XUZnbTCSuMY&_nc_ohc=KT0IuZ8syVAAX_EZj3S&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdTy0Rah8EyJi5egUL4QJa95R3AtFM4kXBnf6Oei2WhL9A&oe=65910551",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/393950589_1397919670818857_6934916642213883448_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGobJGIjFAbJ8FGgh9EHZMEQxvWjBPJzQdDG9aME8nNBxsuB9X5yW8aQowLHIOBoBFxYx3s4kB8ILV2MAftVcSv&_nc_ohc=tIBnjJl4N8AAX-RfFF2&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdQ2ma-4BdTsVIJqVNCVd_F0AlHkRKO9Sgp7x08X_N_1hQ&oe=6590FE9F",
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/406371661_365121262596969_2438395749935729002_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFnB5VZJsJ42HAMDuZNuOWvY-MKfmE6mZxj4wp-YTqZnJuS-HGquJYfr89RyXOU7NRFPmCuvbVsFcqe-f0puuef&_nc_ohc=L00EljuyOfMAX-vN5rh&_nc_ht=scontent.fsgn2-7.fna&oh=03_AdTaV3JFsznAGk3QE0MvHx-IEaBgjHcqfDazbcK4m4yj3Q&oe=65910417",
    "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/405992640_322618420536629_4878549675170414350_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFqwPmcp1o704XCPN3Q3YEu2KgbCqHrMFLYqBsKoeswUrQRu1arrGu6s8vD6XQEdzkZJfHpNeoH7QlB7nD7a0bH&_nc_ohc=vnMDfOLcqf4AX808G3P&_nc_ht=scontent.fsgn2-8.fna&oh=03_AdRrKUzDCKfQ7aw1f_ymD7p5LvMFFrjhibD8eMQFLgTeZg&oe=6590F24E",
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
      <Carousel {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={image}
              alt={`slide-${index}`}
              style={{ width: "95%", maxHeight: "400px", objectFit: "cover"}}
            />
            
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
