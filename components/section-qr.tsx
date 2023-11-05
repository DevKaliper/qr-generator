import QrGenerator from "./QRgenerator";
import { Button } from "./ui/button";
import LoadingInfinite from "./ui/loading-animation";

interface QrProps {
  link: string;
}
function ContainerSection({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex h-full w-full flex-col items-center justify-center rounded-lg  shadow-lg  lg:w-2/5">
        {children}
    </article>
  );
}

const SectionQR: React.FC<QrProps> = ({ link }) => {
    if(link){
        return(
            <ContainerSection>
                <h2 className="my-3 font-semibold  lg:text-2xl">
                    Its Done! Your QR code is ready

                </h2>
                <div className="">
                    <QrGenerator link={link} />
                </div>

                <Button className="my-5">
                    Share
                </Button>
                
            </ContainerSection>
        )
    }
  return (
    <ContainerSection>
         <h2 className="my-3 font-semibold lg:text-2xl">
        Your Magnificant code will appear here :)
      </h2>
      <div>
        <LoadingInfinite />
      </div>
      <i className="my-2">{" ℹ First you need click the Generate button. "}</i>
    </ContainerSection>
   
  );
};

export default SectionQR;
