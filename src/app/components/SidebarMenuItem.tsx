'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {

    const pathName = usePathname();

    return (

        <Link
            href={ path }
            className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${ pathName === path && 'bg-blue-800' } hover:bg-white/5 transition ease-linear duration-150`}
        >
            <div>{ icon }</div>
            <div className="flex flex-col">
                <span className={`text-lg leading-5 font-bold ${ pathName === path ? 'text-white' : 'text-slate-300' } `}>
                    { title }
                </span>
                <span className={`text-sm hidden md:block ${ pathName === path ? 'text-white/50' : 'text-slate-500' } `}>
                    { subTitle }
                </span>
            </div>
        </Link>

    )
}
