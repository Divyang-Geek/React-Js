import bannerImage1 from "../../../assets/images/banner-image.jpg";
import bannerImage2 from "../../../assets/images/banner-image2.jpg";

export const BannerSliderData = [
    {
        id: 1,
        img: bannerImage1,
        content: [
            {
                text: {
                    text: "Strategy",
                    isHighlight: true,
                },
            },
            {
                text: {
                    text: " and Growth ",
                    isHighlight: false,
                },
            },
            {
                text: {
                    text: "Solutions ",
                    isHighlight: true,
                },
            },
            {
                text: {
                    text: "and Growth",
                    isHighlight: false,
                },
            },
        ],
        link: "/about",
    },
    {
        id: 2,
        img: bannerImage2,
        content: [
            {
                text: {
                    text: "An ",
                    isHighlight: false,
                },
            },
            {
                text: {
                    text: " Exclusive ",
                    isHighlight: true,
                },
            },
            {
                text: {
                    text: "Learning ",
                    isHighlight: false,
                },
            },
            {
                text: {
                    text: "Journey",
                    isHighlight: true,
                },
            },
            {
                text: {
                    text: "For Consulting",
                    isHighlight: false,
                },
            },
        ],
        link: "/about",
    },
];
