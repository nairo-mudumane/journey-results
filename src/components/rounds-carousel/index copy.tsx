import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function RoundsCarousel() {
  return (
    <Carousel
      className="h-screen"
      centerMode
      autoPlay
      swipeable
      axis="vertical"
      verticalSwipe="natural"
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      <div className="w-[100px] h-[100px]">
        <img
          className="w-full object-cover"
          src="https://picsum.photos/id/0/5000/3333"
        />
      </div>
      <div className="max-w-[20rem]">
        <img
          className="w-full object-cover"
          src="https://picsum.photos/id/14/5000/3333"
        />
      </div>
      <div className="max-w-[20rem]">
        <img
          className="w-full object-cover"
          src="https://picsum.photos/id/12/5000/3333"
        />
      </div>
    </Carousel>
  );
}
