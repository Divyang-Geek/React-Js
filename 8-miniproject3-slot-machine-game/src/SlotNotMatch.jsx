const SlotNotMatch = (props) => {
    return (
        <div className="slotInner">
            <h2>
                {props.a}
                {props.b}
                {props.c}
                <span>This Not is Matching.</span>
            </h2>
        </div>
    );
};

export default SlotNotMatch;
