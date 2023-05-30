const PricingData = [
    {
        id: 1,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Navigate Circle</title>
                <path
                    d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351
        175.24A10.73 10.73 0 00336.76 161z"
                ></path>
                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="20"></path>
            </svg>
        ),
        title: "Starter Plan",
        description: "To void spirit seasons.",
        price: {
            currency: "$",
            amount: 19,
            type: "Month",
        },
        priceServices: ["Constant desire renewal", "Two him darkness", "Given be divided days"],
        url: "/pricing",
    },
    {
        id: 2,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Shield Checkmark</title>
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                    d="M336
                                                176L225.2 304 176 255.8"
                />
                <path
                    d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z
                                                "
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                />
            </svg>
        ),
        title: "Standard Plan",
        description: "Herb which spirit days.",
        price: {
            currency: "$",
            amount: 39,
            type: "Month",
        },
        priceServices: ["Constant desire renewal", "Two him darkness", "Given be divided days"],
        url: "/pricing",
        recommended: true,
    },
    {
        id: 3,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Speedometer</title>
                <path
                    d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3
                                                14z"
                />
                <path
                    d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18
                                                0 00480 287.9C480 164.2 379.7 64 256 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                />
                <path
                    fill="none"
                    stroke="currentColor
                                                "
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="20"
                    d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"
                />
            </svg>
        ),
        title: "Standard Plan",
        description: "Fruit form grass heaven.",
        price: {
            currency: "$",
            amount: 69,
            type: "Month",
        },
        priceServices: ["Constant desire renewal", "Two him darkness", "Given be divided days"],
        url: "/pricing",
    },
];

export default PricingData;
