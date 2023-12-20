'use client';

import { useState } from "react";
import { ButtonCounter } from "./ButtonCounter";

interface Props {
    value: number;
}

export const CartCounter = ({ value = 0 }: Props) => {

    const [ counter, setCounter ] = useState(value);

    const handleIncrement = () => setCounter(counter + 1);

    const handleDecrement = () => setCounter(counter - 1);

    return (
        <>
            <span className="text-9xl"> {counter} </span>

            <div className="flex">

                <ButtonCounter onClick={ handleDecrement }>
                    -1
                </ButtonCounter>

                <ButtonCounter onClick={ handleIncrement }>
                    +1
                </ButtonCounter>

            </div>
        </>
    )
}
