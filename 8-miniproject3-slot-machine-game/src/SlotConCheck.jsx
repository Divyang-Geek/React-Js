// ! 1

// import SlotMatch from "./SlotMatch";
// import SlotNotMatch from "./SlotNotMatch";

// const SlotConCheck = (props) => {
//     let a = props.a;
//     let b = props.b;
//     let c = props.c;

//     if (a === b && b === c) {
//         return (
//             <>
//                 {a} {b} {c}
//                 <SlotMatch />
//             </>
//         );
//     } else {
//         return (
//             <>
//                 {a} {b} {c}
//                 <SlotNotMatch />
//             </>
//         );
//     }
// };

// export default SlotConCheck;

// ! 2

import SlotMatch from "./SlotMatch";
import SlotNotMatch from "./SlotNotMatch";

const SlotConCheck = (props) => {
    let { a, b, c } = props;

    return a === b && b === c ? <SlotMatch a={a} b={b} c={c} /> : <SlotNotMatch a={a} b={b} c={c} />;
};

export default SlotConCheck;
