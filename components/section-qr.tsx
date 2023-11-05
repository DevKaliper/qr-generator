import LoadingInfinite from "./ui/loading-animation"

interface QrProps {
    link: string;

}

const  SectionQR: React.FC<QrProps> = ({link}) => {
    if (link){
        return (
            <h2>REcibo el link</h2>
        )
    }

    return (
        <article className="h-full w-full lg:w-2/5 flex flex-col justify-center items-center  shadow-lg  rounded-lg">
            <h2 className="font-semibold lg:text-2xl my-3">Your Magnificant code will appear here :)</h2>
            <div>
                <LoadingInfinite />
                
            </div>
            <i className="my-2">{' ℹ First you need click the Generate button. '}</i>
          
        </article>
    )

}

export default SectionQR;