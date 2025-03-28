import { useAppContext } from './context/AppContext';
import { useFetchImages } from './hooks/useFetchImages';
import Gallery from './components/Gallery';
import Input from './components/Input';
import Loading from './components/Loading';
import Message from './components/Message';

export default function App() {
  const { keyword } = useAppContext();
  const { data, isLoading, isError } = useFetchImages(keyword);

  return (
    <>
      <Input />
      {data && data.length === 0 && <Message text="No images found" />}
      {isLoading && <Loading />}
      {isError && <Message text="An error occured" />}
      {/* Don't know what causes the runtime error, but set the data to empty array seems work */}
      <Gallery data={data ?? []} />
    </>
  );
}
