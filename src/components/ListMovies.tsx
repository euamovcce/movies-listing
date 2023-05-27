import { Movie } from "../types/Movie";

type Props = {
    item: Movie;
};

export const ListMovies = ({ item }: Props) => {
    return (
        <>
            <img src={item.avatar} />
            <div className="h-full min-h-[72px]"><p className="text-center font-bold "> {item.titulo}</p></div>
        </>
    );
}
