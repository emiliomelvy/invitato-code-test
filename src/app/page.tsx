// import Image from "next/image";
// import { AspectRatio, Image } from "@chakra-ui/react";
import "./globals.css";
import WeddingAnnouncement from "./WeddingAnnouncement";

// interface CustomCSSProperties extends React.CSSProperties {
//   "--image-url"?: string;
// }

export default function Home() {
  return (
    <>
      <WeddingAnnouncement />
    </>
    // left https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920
    // <AspectRatio maxW="400px" ratio={4 / 3}>
    //   <Image
    //     src="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539"
    //     alt="naruto"
    //     objectFit="cover"
    //   />
    // </AspectRatio>
    // <div
    //   style={
    //     {
    //       "--image-url": `url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539)`,
    //     } as CustomCSSProperties
    //   }
    //   className="bg-[image:var(--image-url)]"
    // >
    //   <div>Home</div>
    //   <div>
    //     <Image
    //       src={
    //         "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539"
    //       }
    //       alt="test"
    //       width={200}
    //       height={200}
    //     />
    //   </div>
    // </div>
  );
}
