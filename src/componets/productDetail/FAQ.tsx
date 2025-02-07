import { red } from "@ant-design/colors";
import { Collapse, CollapseProps, Divider } from "antd";
export const FAQ = () => {
  const faqItems: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <span style={{ fontSize: "20px" }}>
          Địa chỉ các cửa hàng của WINECELLAR.vn ở đâu?
        </span>
      ),
      children: (
        <div>
          <p>Cảm ơn quý khách đã quan tâm đến sản phẩm của wineworld.vn.</p>
          <strong>
            Quý khách có thể tìm kiếm cửa hàng mua rượu vang của wineworld.vn
            tại thành phố Hồ Chí Minh:
          </strong>
          <ul>
            <li>188 Nguyễn Văn Thủ, Quận 1: 091 673 3416</li>
            <li>58 Song Hành, thành phố Thủ Đức: 091 673 3415</li>
            <li>253 Nam Kỳ Khởi Nghĩa,Quận 3: 091 673 3414</li>
          </ul>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span style={{ fontSize: "20px" }}>
          Làm sao để chọn được chai vang phù hợp nhất?
        </span>
      ),
      children: (
        <ul>
          <li>
            Trò chuyện trực tiếp với chúng tôi: Đội ngũ nhân viên chuyên nghiệp,
            tận tâm sẽ tư vấn cho quý khách dòng vang phù hợp nhất.
          </li>
          <li>Liên hệ với chúng tôi qua HOTLINE: 094 669 8008</li>

          <li>Nhắn tin qua Fanpage WINECELLAR.vn</li>
        </ul>
      ),
    },
    {
      key: "3",
      label: (
        <span style={{ fontSize: "20px" }}>
          Thời gian giao hàng trong bao lâu?
        </span>
      ),
      children: (
        <p>
          Ngay sau khi tiếp nhận được yêu cầu từ quý khách, chúng tôi sẽ chuẩn
          bị, đóng gói sản phẩm và vận chuyển tới tận tay quý khách trong thời
          gian nhanh nhất có thể.
        </p>
      ),
    },
  ];
  return (
    <div style={{ marginTop: "40px", padding: "0 150px" }}>
      <Divider style={{ borderColor: red[8] }} variant="dashed">
        <h1
          style={{
            color: red[8],
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          NHỮNG CÂU HỎI THƯỜNG GẶP
        </h1>
      </Divider>
      <Collapse items={faqItems} />
    </div>
  );
};
