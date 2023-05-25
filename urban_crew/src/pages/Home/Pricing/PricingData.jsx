// import starterPlan from "../../../assets/images/starter-plan.svg"

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
                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="20"></path>
            </svg>
        ),
        title: "Starter Plan",
        description: "To void spirit seasons.",
        price: {
            currency: "$",
            amount: 19,
            type: "month",
        },
        priceServices: ["Constant desire renewal", "Two him darkness", "Given be divided days"],
        url: "/",
    },
];

export default PricingData;
