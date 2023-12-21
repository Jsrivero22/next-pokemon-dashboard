'use client';

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from ".."
import { useAppSelector } from "@/store"


export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count );

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                title={ `${ isCart }` }
                subtitle="Products added"
                label="Products"
                icon={ <IoCartOutline size={ 50 } className="text-blue-600" /> }
                href="/dashboard/counter"
            />
        </div>
    )
}
