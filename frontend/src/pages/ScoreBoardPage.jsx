import { useLoaderData } from "react-router-dom";
import ScoreBoard from "../components/ScoreBoard";

export default function ScorePage() {
  const artDb = useLoaderData();

  return (
    <>
      <ScoreBoard artDb={artDb} />;
    </>
  );
}
