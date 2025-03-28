import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

const imageSchema = z.object({
  id: z.string(),
  urls: z.object({
    regular: z.string().url()
  }),
  alt_description: z.string().optional()
});

const imageResponseSchema = z.object({
  results: z.array(imageSchema)
});

export type Image = z.infer<typeof imageSchema>;

export function useFetchImages(keyword: string) {
  const url = `https://api.unsplash.com/search/photos/?client_id=${
    import.meta.env.VITE_API_KEY
  }`;

  const { data, error, isError, isLoading } = useQuery<Image[]>({
    queryKey: [keyword],
    queryFn: async (): Promise<Image[]> => {
      const response = await axios.get(`${url}&query=${keyword}`);
      const parsedResponse = imageResponseSchema.safeParse(response.data);

      if (!parsedResponse.success) {
        throw new Error('Unable to fetch images. Parsing failed.');
      }

      return parsedResponse.data.results;
    },
    enabled: !!keyword
  });

  return { data, error, isError, isLoading };
}
