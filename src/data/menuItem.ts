
export interface MenuItem {
    image: any;
    name: string;
    price: number;
}

export const MainmealList: Array<MenuItem> = [
    {
        image: require("@/assets/picture/GlutinousRice.jpg"),
        name: "爌肉飯",
        price: 50,
    },
    {
        image: require("@/assets/picture/ribsWithrice.jpg"),
        name: "排骨飯",
        price: 50,
    },
    {
        image: require("@/assets/picture/BraisedPorkRice.jpg"),
        name: "魯肉飯",
        price: 25,
    },
    {
        image: require("@/assets/picture/noodle.webp"),
        name: "炒麵",
        price: 20,
    },
];

export const SoupList: Array<MenuItem> = [
    {
        image: require("@/assets/picture/LargeIntestinePorkBloodSoup.jpg"),
        name: "大腸豬血湯",
        price: 30,
    },
    {
        image: require("@/assets/picture/Tributeballsoup.webp"),
        name: "貢丸湯",
        price: 20,
    },
    {
        image: require("@/assets/picture/Bambooshootsoup.jpg"),
        name: "竹筍湯",
        price: 20,
    },
]

export const SideDishList: Array<MenuItem> = [
    {
        image: require("@/assets/picture/PoachedEgg.webp"),
        name: "荷包蛋",
        price: 10,
    },
]