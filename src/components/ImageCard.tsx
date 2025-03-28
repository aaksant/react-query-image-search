import { type Image } from '../hooks/useFetchImages';

type ImageCardProps = {
  image: Image;
};

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <article className="rounded-lg overflow-hidden shadow-sm cursor-pointer">
      <img
        src={image?.urls?.regular}
        alt={image.alt_description}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-700">{image.alt_description}</p>
      </div>
    </article>
  );
}
