import { useLoaderData } from "react-router-dom";
import ScoreBoard from "../components/RankingBoard";

export default function ScorePage() {
  const artDb = useLoaderData();

  return (
    <div className=" h-[77vh] mb-20 overflow-auto">
      <ScoreBoard artDb={artDb} />;
    </div>
  );
}
