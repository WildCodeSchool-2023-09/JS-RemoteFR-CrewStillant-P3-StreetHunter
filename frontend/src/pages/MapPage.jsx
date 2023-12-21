import LeafletMap from "../components/Game/Map/LeafletMap";

export default function MapPage() {
  return (
    <div className="">
      <span className="flex flex-row justify-center font-extrabold text-6xl mb-4 text-primary mt-0">
        LA CARTE
      </span>
      <LeafletMap />
    </div>
  );
}
