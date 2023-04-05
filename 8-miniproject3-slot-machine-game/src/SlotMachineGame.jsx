// ! 1

// const SlotM = () => {
//     let a = "🙂";
//     let b = "🙂";
//     let c = "🎅";

//     if (a === b && b === c) {
//         return (
//             <>
//                 <div className="slotInner">
//                     <h2>
//                         {a}
//                         {b}
//                         {c}
//                         <span>This is Matching.</span>
//                     </h2>
//                 </div>
//                 <hr />
//             </>
//         );
//     } else {
//         return (
//             <>
//                 <div className="slotInner">
//                     <h2>
//                         {a}
//                         {b}
//                         {c}
//                         <span>This is Not Matching.</span>
//                     </h2>
//                 </div>
//                 <hr />
//             </>
//         );
//     }
// };

// const SlotMachineGame = () => {
//     return (
//         <>
//             <h1 style={{ textAlign: "center", fontWeight: "400" }}>
//                 🎰 Welcome To <span style={{ fontWeight: "Bold" }}>Slot Machine Game</span> 🎰
//             </h1>
//             <SlotM />
//         </>
//     );
// };

// export default SlotMachineGame;

// ! 2

// const elementCenter = {
//     textAlign: "center",
// };

// const SlotM = (props) => {
//     // let a = props.a;
//     // let b = props.b;
//     // let c = props.c;

//     let { a, b, c } = props;

//     if (a === b && b === c) {
//         return (
//             <>
//                 <div className="slotInner">
//                     <h2 style={elementCenter}>
//                         {a}
//                         {b}
//                         {c}
//                         <span>This is Matching.</span>
//                     </h2>
//                 </div>
//             </>
//         );
//     } else {
//         return (
//             <>
//                 <div className="slotInner">
//                     <h2 style={elementCenter}>
//                         {a}
//                         {b}
//                         {c}
//                         <span>This is Not Matching.</span>
//                     </h2>
//                 </div>
//             </>
//         );
//     }
// };

// const SlotMachineGame = () => {
//     return (
//         <>
//             <h1 style={{ textAlign: "center", fontWeight: "400" }}>
//                 🎰 Welcome To <span style={{ fontWeight: "Bold" }}>Slot Machine Game</span> 🎰
//             </h1>
//             <SlotM a="🙂" b="🙂" c="🙂" />
//             <hr />
//             <SlotM a="🙂" b="🙂" c="❤️" />
//             <hr />
//             <SlotM a="🙂" b="🔥" c="🙌" />
//             <hr />
//             <SlotM a="🔥" b="🔥" c="🔥" />
//             <hr />
//         </>
//     );
// };

// export default SlotMachineGame;

// ! 3
import SlotConCheck from "./SlotConCheck";

const SlotMachineGame = () => {
    return (
        <div className="slotMachineGame">
            <h1 style={{ textAlign: "center", fontWeight: "400" }}>
                🎰 Welcome To <span style={{ fontWeight: "Bold" }}>Slot Machine Game</span> 🎰
            </h1>
            <SlotConCheck a="🙂" b="🙂" c="🙂" />
            <hr />
            <SlotConCheck a="🙂" b="🙂" c="❤️" />
            <hr />
            <SlotConCheck a="🙂" b="🔥" c="🙌" />
            <hr />
            <SlotConCheck a="🔥" b="🔥" c="🔥" />
            <hr />
        </div>
    );
};

export default SlotMachineGame;
