import { useLoaderData } from "react-router-dom";
import ValidationRoom from "../components/ValidationRoom";

export default function ValidationPage() {
  const validationFetch = useLoaderData();

  return (
    <>
      <ValidationRoom artwork={validationFetch} />;
    </>
  );
}
