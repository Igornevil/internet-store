import React from "react";
import { useParams } from "react-router-dom";
import { history } from "../../../utils/history";

const Test = () => {
    const papa = useParams();
    // const history = useNavigate();
    console.log("history - ", history);
    const { id } = useParams();
    console.log("useParams - ", papa);
    console.log(id);

    return <>TEST-Loading.... </>;
};

export default Test;
