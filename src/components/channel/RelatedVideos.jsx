import { useYoutubeApi } from "@/context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "@/components/video/VideoCard";

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
  return (
    <>
      {isLoading && <span>Loading...</span>}
      {error && <p>something wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </>
  );
}
