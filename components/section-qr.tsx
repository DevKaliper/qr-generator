import { NEXT_FONT_MANIFEST } from "next/dist/shared/lib/constants";
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
  const onImageCownload = () => {
    const svg = document.getElementById("QRcode");
    console.log(svg)
    if (svg) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "QRCode";
        downloadLink.href = `${pngFile}`;
        downloadLink.click();
      };
      const svgData = svg.outerHTML;
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
    
  };


    if(link){
        return(
            <ContainerSection>
                <h2 className="my-3 font-semibold  lg:text-2xl">
                    Its Done! Your QR code is ready

                </h2>
                <div className="">
                    <QrGenerator link={link} />
                </div>

                <Button className="my-5" onClick={onImageCownload}>
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
