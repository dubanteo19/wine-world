import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
interface Props {
  images: string[];
}
export const ProductCarousel: React.FC<Props> = ({ images }) => {
  return (
    <div>
      <Carousel
        thumbWidth={60}
        showArrows={true}
        showStatus={false}
        autoPlay={true}
      >
        {images.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} width={300} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
