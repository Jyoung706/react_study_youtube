import { useYoutubeApi } from "@/context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => youtube.relatedVideos(id),
  });
  return <div> Related Videos = {id}</div>;
}
