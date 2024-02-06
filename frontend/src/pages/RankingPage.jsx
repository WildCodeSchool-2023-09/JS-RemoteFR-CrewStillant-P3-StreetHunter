import { useLoaderData, useOutletContext, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ScoreBoard from "../components/RankingBoard";

export default function ScorePage() {
  const artDb = useLoaderData();
  const { auth } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);

  return (
    <div className=" h-[84vh]">
      <span className="flex flex-row justify-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary mt-0">
        SCORES
      </span>
      <ScoreBoard artDb={artDb} />;
    </div>
  );
}
