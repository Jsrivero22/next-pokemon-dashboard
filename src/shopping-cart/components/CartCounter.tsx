'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, subsTractOne } from "@/store/counter/counterSlice";

import { ButtonCounter } from "./ButtonCounter";
import { useEffect } from "react";

interface Props {
    value: number;
}

export interface CounterResponse {
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {

    const data = await fetch(`/api/counter`)
        .then(res => res.json());

    return data;
}

export const CartCounter = ({ value = 0 }: Props) => {

    const counter = useAppSelector(state => state.counter.count);

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch( initCounterState( value ));
    // }, [ dispatch, value ]);

    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch( initCounterState( count )))
    }, [dispatch])

    return (
        <>
            <span className="text-9xl"> {counter} </span>

            <div className="flex">

                <ButtonCounter onClick={() => dispatch(subsTractOne())}>
                    -1
                </ButtonCounter>

                <ButtonCounter onClick={() => dispatch(addOne())}>
                    +1
                </ButtonCounter>

            </div>
        </>
    )
}
