import { Image } from '../hooks/useFetchImages';
import ImageCard from './ImageCard';

type GalleryProps = {
  data: Image[];
};

export default function Gallery({ data }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {data && data.map((image) => <ImageCard key={image.id} image={image} />)}
    </div>
  );
}
