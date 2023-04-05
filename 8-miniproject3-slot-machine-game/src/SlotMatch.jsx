const SlotMatch = (props) => {
    return (
        <div className="slotInner">
            <h2>
                {props.a}
                {props.b}
                {props.c}

                <span>This is Matching.</span>
            </h2>
        </div>
    );
};

export default SlotMatch;
