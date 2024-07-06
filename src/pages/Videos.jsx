import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return <div className='text-2xl'>Videos Page {keyword ? keyword : "🔥"}</div>;
}
