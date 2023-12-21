
interface Props {
    children : React.ReactNode;
    onClick  : () => void;
}

export const ButtonCounter = ({ children, onClick }: Props) => {

    return (
        <button
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={ onClick }
        >
            { children }
        </button>
    )
}
