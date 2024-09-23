import { ReactNode } from "react"

const PopUp = ({ children, setIsPopUp, isPopUp }: {
    children: ReactNode, setIsPopUp: any, isPopUp: any
}) => {

    return (
        <>
            <div
                className={isPopUp ? "fixed inset-0 flex justify-center items-center px-12 bg-black bg-opacity-50" : "hidden"}
                onClick={() => setIsPopUp(false)}>
                <div className=" flex flex-col justify-between   bg-white p-5 rounded-lg shadow-md shadow-slate-300  max-w-[800px] sm:flex-row sm:h-[550px]" onClick={(e) => e.stopPropagation()}>

                    {children}
                </div>

            </div>
        </>
    )
}

export default PopUp