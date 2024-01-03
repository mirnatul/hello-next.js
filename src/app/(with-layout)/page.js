import Image from "next/image";
import image1 from "@/assets/_1fb85d87-1b6f-489d-b5b7-9ba1a88a1595.jpg"

const HomePage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <Image width={600} height={500} src={image1} alt=""></Image>
    </main>
  )
}

export default HomePage;