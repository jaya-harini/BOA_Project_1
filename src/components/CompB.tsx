import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrementB, resetB, setEnable } from "../redux/action";

const CompA = () => {
    const [start, setStart] = React.useState(false);
    const { enable, valB } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    React.useEffect(() => {
        let timer: any;
        if (valB > 0 && enable === "B" && start) {
            timer = setInterval(() => {
                dispatch(decrementB());
            }, 1000);
        } else if (valB <= 0) {
            console.log("enter - val B - ", valB)
            dispatch(resetB());
            dispatch(setEnable("A"));
        }

        return () => {
            if (timer) clearInterval(timer);
        }
    }, [valB, enable, dispatch, start]);

    const startPg = () => {
        if (valB !== 100) {
            dispatch(resetB());
        }
        setStart(true);
    };

    return (
        <button onClick={() => startPg()} disabled={enable != "B"}>
            B: {valB}
        </button>
    );
};

export default CompA;
