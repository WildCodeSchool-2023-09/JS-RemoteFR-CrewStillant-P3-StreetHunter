import { useLoaderData } from "react-router-dom";
import GalleryList from "../../components/Game/Gallery/GalleryList";

export default function GalleryPage() {
  const artworks = useLoaderData();
  return (
    <div className="h-[86vh] overflow-scroll overflow-x-hidden overflow-y-auto">
      <span className="flex flex-row justify-center font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4  text-primary mt-0">
        Galerie
      </span>
      <GalleryList dbartworks={artworks} />
    </div>
  );
}
