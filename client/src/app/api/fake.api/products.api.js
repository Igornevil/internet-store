// const description = [
//     {
//         _id: "67rdca3eeb7f6fgeed471198",
//         desc: "button",
//         name: "Кнопочный",
//         color: "primary"
//     },
//     {
//         _id: "67rdca3eeb7f6fgeed471100",
//         desc: "sensory",
//         name: "Сенсорный",
//         color: "secondary"
//     },
//     {
//         _id: "67rdca3eeb7f6fgeed4711012",
//         desc: "network",
//         name: "Поддержка 5g сетей",
//         color: "success"
//     },
//     {
//         _id: "67rdca3eeb7f6fgeed4711011",
//         desc: "dualSim",
//         name: "Поддержка двух симкарт",
//         color: "success"
//     }
// ];
const brands = [
    {
        _id: "1",
        name: "Samsung"
    },
    {
        _id: "2",
        name: "Nokia"
    },
    {
        _id: "3",
        name: "LG"
    },
    {
        _id: "4",
        name: "Iphone"
    },
    {
        _id: "5",
        name: "Huawei"
    },
    {
        _id: "6",
        name: "HTC"
    },
    {
        _id: "7",
        name: "Xiaomi"
    }
];

const products = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Nokia 3310",
        description: ["67rdca3eeb7f6fgeed471198", "67rdca3eeb7f6fgeed4711011"],
        brand: ["2"],
        price: 1000,
        sales: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "LG G7",
        description: ["67rdca3eeb7f6fgeed4711012", "67rdca3eeb7f6fgeed471100"],
        brand: ["3"],
        price: 2000,
        sales: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Nokia S7",
        description: ["67rdca3eeb7f6fgeed4711012"],
        brand: ["2"],
        price: 3500,
        sales: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Samsung G20",
        description: [
            "67rdca3eeb7f6fgeed4711012",
            "67rdca3eeb7f6fgeed471100",
            "67rdca3eeb7f6fgeed4711011"
        ],
        brand: ["1"],
        price: 15500,
        sales: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Iphone 12Pro",
        description: [
            "67rdca3eeb7f6fgeed4711011",
            "67rdca3eeb7f6fgeed471100",
            "67rdca3eeb7f6fgeed4711012"
        ],
        brand: ["4"],
        price: 35000,
        sales: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Iphone 11ProMax",
        description: [
            "67rdca3eeb7f6fgeed4711011",
            "67rdca3eeb7f6fgeed471100",
            "67rdca3eeb7f6fgeed4711012"
        ],
        brand: ["4"],
        price: 28000,
        sales: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Iphone 7",
        description: ["67rdca3eeb7f6fgeed471100", "67rdca3eeb7f6fgeed4711012"],
        brand: ["4"],
        price: 14000,
        sales: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Huawei p20 pro",
        description: [
            "67rdca3eeb7f6fgeed4711011",
            "67rdca3eeb7f6fgeed471100",
            "67rdca3eeb7f6fgeed4711012"
        ],
        brand: ["5"],
        price: 19000,
        sales: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Huawei p40",
        description: [
            "67rdca3eeb7f6fgeed4711011",
            "67rdca3eeb7f6fgeed471100",
            "67rdca3eeb7f6fgeed4711012"
        ],
        brand: ["5"],
        price: 25000,
        sales: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "HTC PlusOne",
        description: ["67rdca3eeb7f6fgeed471100", "67rdca3eeb7f6fgeed4711012"],
        brand: ["6"],
        price: 10000,
        sales: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Samsung Edge",
        description: ["67rdca3eeb7f6fgeed4711011", "67rdca3eeb7f6fgeed471100"],
        brand: ["1"],
        price: 13000,
        sales: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Xiaomi n20",
        description: ["67rdca3eeb7f6fgeed471100", "67rdca3eeb7f6fgeed4711012"],
        brand: ["7"],
        price: 13000,
        sales: 434,
        rate: 5,
        bookmark: false
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products);
        }, 2000);
    });

const fetchBrands = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(brands);
        }, 1000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products.find((products) => products._id === id));
        }, 1000);
    });
export default {
    fetchAll,
    fetchBrands,
    getById
};
