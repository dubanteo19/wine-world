import { orange } from "@ant-design/colors";
import { MCarousel } from "./MCarousel";
import { BrandIntroduction } from "./BrandIntroduction";
import { Features } from "./Features";
import { Catalog } from "./Catalog";
import { BrandList } from "./BrandList";
import { WineType } from "./WineType";
import { Banner } from "./Banner";
import { EventList } from "./EventList";
import { HotSaleProduct } from "./HotSaleProduct";
import { Blog } from "./Blog";
export const Home = () => {
  return (
    <div
      style={{
        padding: "70px 70px",
        backgroundColor: orange[2],
        display: "flex",
        flexDirection: "column",
        gap: "80px",
      }}
    >
      <MCarousel />
      <BrandIntroduction />
      <Features />
      <Catalog />
      <BrandList />
      <WineType />
      <Banner image="https://winecellar.vn/wp-content/uploads/2022/04/220331-Banner-3.jpg" />
      <HotSaleProduct />
      <EventList />
      <Blog />
      <Banner image="https://winecellar.vn/wp-content/uploads/2024/09/qua-tang-doanh-nghiep-tet-2025-banner-1.jpg" />
    </div>
  );
};
