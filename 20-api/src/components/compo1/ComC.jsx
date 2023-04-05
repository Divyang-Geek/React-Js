import { FirstName, LastName } from "./ComMain";

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fName) => {
                    return (
                        <LastName.Consumer>
                            {(lName) => {
                                return (
                                    <h1>
                                        My Name is {fName} {lName}
                                    </h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>
    );
};

export default ComC;
