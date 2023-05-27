import './styles/global.css'
import { api } from './api';
import { useEffect, useState } from 'react';
import { Movie } from './types/Movie';
import { ListMovies } from './components/ListMovies';
import * as Dialog from '@radix-ui/react-dialog';
import { SingleMovie } from './components/SingleMovie';
import './App.css'
import { X } from 'phosphor-react'

export function App() {

  useEffect(() => {
    loadMovies();
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    try {
      setLoading(true);
      let json = await api.getMovies();
      setLoading(false);
      setMovies(json);
    } catch {
      setLoading(false);
    }
  }
  return (
    <>
      {loading &&
        <div> Carregando...</div>
      }
      {!loading &&
        <div className=' grid grid-cols-4 gap-12 my-5 mx-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {movies.map((item, index) => (
            <div key={index} className='flex items-center flex-col  w-full text-center gap-5'>
              <ListMovies item={item} />

              <Dialog.Root>
                <Dialog.Trigger
                  type="button"
                  className=" h-full btn btn4"
                >
                  Show more

                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
                  <Dialog.Content className='top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 max-sm:max-w-[70%] max-sm:w-full '>
                    <div className='bg-black/40 px-12 pt-12 pb-6 rounded-xl border-2 border-gray-400'><SingleMovie item={item} /></div>

                    <Dialog.Close className='absolute  text-lg top-1 right-1 focus:outline-none  text-gray-100 hover:text-gray-400'>
                      <X size={24} />
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          ))}
        </div>
      }

    </>
  )
}


