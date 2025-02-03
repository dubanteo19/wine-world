import { Carousel, Image } from "antd";

export const MCarousel = () => {
  const carouselData = [
    {
      src: "https://winecellar.vn/wp-content/uploads/2022/04/banner-dauzac.jpg",
      target: "/",
    },
    {
      src: "https://winecellar.vn/wp-content/uploads/2022/04/banner-crocus-scaled.jpg",
      target: "/",
    },

    {
      src: "https://winecellar.vn/wp-content/uploads/2022/04/banner-hop-qua-f-gold-scaled.jpg",
      target: "/",
    },
  ];
  return (
    <Carousel
      style={{ borderRadius: "10px" }}
      arrows
      infinite
      autoplay
      pauseOnHover={false}
    >
      {carouselData.map((item, index) => {
        return (
          <div key={index}>
            <Image src={item.src} preview={false} />
          </div>
        );
      })}
    </Carousel>
  );
};
