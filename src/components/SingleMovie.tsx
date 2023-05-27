import { Movie } from "../types/Movie";

type Props = {
    item: Movie;
};

export const SingleMovie = ({ item }: Props) => {
    return (
        <>
            <img src={item.avatar} width={450} />
            <p className="text-center my-6 rounded-md bg-white p-3 font-bold cursor-pointer border-2 text-black">{item.titulo}</p>

        </>
    );
}