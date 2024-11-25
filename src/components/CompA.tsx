import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increamentA, resetA, setEnable } from "../redux/action";

const CompA = () => {
    const [start, setStart] = React.useState(false);
    const { enable, valA } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        let timer: any;
        if (valA < 100 && enable === "A" && start) {
            timer = setInterval(() => {
                dispatch(increamentA());
            }, 1000);
        } else if (valA >= 100) {
            console.log("enter - val A - ", valA)
            dispatch(resetA());
            dispatch(setEnable("B"));
        }

        return () => {
            if (timer) clearInterval(timer);
        }

    }, [valA, enable, dispatch, start]);

    const startPg = () => {
        if (valA !== 0) {
            dispatch(resetA());
        }
        setStart(true);
    };

    return (
        <button onClick={() => startPg()} disabled={enable != "A"}>
            A: {valA}
        </button>
    );
};

export default CompA;
