import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllDrinks = async (signal) => {
  // const res = request.get("drinks", { signal });
  const res = {};
  res.data = {
    data: [
      {
        id: 1,
        name: "Trà dào",
        slug: "tra-dao",
        description: "Trà đào đồ uống...",
        price: "50000.00",
        discount: "0.0000",
        salesOnDay: 0,
        imageSource:
          "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png",
        active: 1,
        typeOfDrink: [
          {
            id: 3,
            name: "Trà",
          },
        ],
        toppings: [
          {
            id: 1,
            name: "Thêm đào",
            price: "7500.0000",
            active: 1,
            drink_id: 1,
          },
        ],
        recipes: [
          {
            id: 1,
            name: "Sữa",
            uom: "kg",
            amount: "0.0450",
          },
          {
            id: 2,
            name: "Đá",
            uom: "kg",
            amount: "0.0150",
          },
          {
            id: 3,
            name: "Đường",
            uom: "kg",
            amount: "0.0250",
          },
          {
            id: 4,
            name: "Trứng",
            uom: "quả",
            amount: "0.0100",
          },
        ],
      },
      {
        id: 2,
        name: "Hồng trà sữa",
        slug: "hong-tra-sua",
        description: "Hồng trà sữa đồ uống phù hợp mọi đối tượng",
        price: "65000.00",
        discount: "0.0000",
        salesOnDay: 0,
        imageSource:
          "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/hong-tra-sua.png",
        active: 1,
        typeOfDrink: [
          {
            id: 3,
            name: "Trà",
          },
        ],
        toppings: [
          {
            id: 2,
            name: "Thêm sữa",
            price: "5000.0000",
            active: 1,
            drink_id: 2,
          },
          {
            id: 3,
            name: "Dâu",
            price: "8000.0000",
            active: 1,
            drink_id: 2,
          },
        ],
        recipes: [
          {
            id: 1,
            name: "Sữa",
            uom: "kg",
            amount: "0.0350",
          },
          {
            id: 3,
            name: "Đường",
            uom: "kg",
            amount: "0.0250",
          },
          {
            id: 4,
            name: "Trứng",
            uom: "quả",
            amount: "0.0100",
          },
        ],
      },
      {
        id: 3,
        name: "Trà xanh Latte",
        slug: "tra-xanh-latte",
        description: "Trà xanh Latte đồ uống...",
        price: "45000.00",
        discount: "0.0000",
        salesOnDay: 0,
        imageSource:
          "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-xanh-latte.png",
        active: 1,
        typeOfDrink: [
          {
            id: 3,
            name: "Trà",
          },
        ],
        toppings: [],
        recipes: [
          {
            id: 2,
            name: "Đá",
            uom: "kg",
            amount: "0.0300",
          },
          {
            id: 4,
            name: "Trứng",
            uom: "quả",
            amount: "0.0400",
          },
          {
            id: 6,
            name: "Cà phê",
            uom: "kg",
            amount: "0.0250",
          },
        ],
      },
      {
        id: 4,
        name: "Trà sữa Phúc Long",
        slug: "tra-sua-phuc-long",
        description: "Trà sữa Phúc Long đồ uống...",
        price: "50000.00",
        discount: "0.0000",
        salesOnDay: 0,
        imageSource:
          "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-sua-phuc-long.png",
        active: 1,
        typeOfDrink: [
          {
            id: 1,
            name: "Trà sữa",
          },
        ],
        toppings: [
          {
            id: 4,
            name: "Thêm thạch",
            price: "7500.0000",
            active: 1,
            drink_id: 4,
          },
          {
            id: 5,
            name: "Thêm trân châu",
            price: "5000.0000",
            active: 1,
            drink_id: 4,
          },
        ],
        recipes: [
          {
            id: 2,
            name: "Đá",
            uom: "kg",
            amount: "0.0350",
          },
          {
            id: 3,
            name: "Đường",
            uom: "kg",
            amount: "0.0250",
          },
          {
            id: 5,
            name: "Trà",
            uom: "kg",
            amount: "0.0350",
          },
        ],
      },
      {
        id: 5,
        name: "Ngọc Viễn Đông",
        slug: "ngoc-vien-dong",
        description: "Ngọc Viễn Đông đồ uống...",
        price: "50000.00",
        discount: "0.0000",
        salesOnDay: 0,
        imageSource:
          "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/ngoc-vien-dong.png",
        active: 1,
        typeOfDrink: [
          {
            id: 1,
            name: "Trà sữa",
          },
        ],
        toppings: [],
        recipes: [
          {
            id: 1,
            name: "Sữa",
            uom: "kg",
            amount: "0.0350",
          },
          {
            id: 2,
            name: "Đá",
            uom: "kg",
            amount: "0.0350",
          },
          {
            id: 3,
            name: "Đường",
            uom: "kg",
            amount: "0.0250",
          },
        ],
      },
    ],
  };
  return res;
};
