import api from '../../services/api';
import Header from '../../components/Header/index';
import { useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
        Container,
        SearchInput,
        MovieContent,
        MoviePoster,
        Details,
        Title,
        Score,
        DateRelease,
        Sinopse,
        GenreContainer,
        PaginationContainer,
        Page,
        Genre,
    } from './styles';

const Home = () => {
    const [dataToSearch, setDataToSearch] = useState<string>('');
    const [arrayOfMovies, setArrayOfMovies] = useState<Imovie[]>([]);
    const [arrayOfGenres, setArrayOfGenres] = useState<IGenre[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const moviesPerPage = 5;
    const baseUrlOfPosters = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    const baseUrlOfGenre = 'genre/movie/list?api_key=7d2986a61ade060274b2a0ef6bf7fb3d&language=pt-br';
    const baseUrlofSearch = 'search/movie?api_key=7d2986a61ade060274b2a0ef6bf7fb3d&language=pt-br&query=';
    const pageParam = '&page='

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;
        setDataToSearch(value);
    }

    useEffect(() => {
        api.get(`${baseUrlofSearch+dataToSearch+pageParam}`).then(response => {
            const moviesQuery = response.data.results;
            const queryPerPage = moviesQuery.slice(
                currentPage*moviesPerPage, 
                currentPage*moviesPerPage+moviesPerPage
            )
            setArrayOfMovies(queryPerPage);
        });
    }, [currentPage, dataToSearch]);

    useEffect(() => {
        api.get(baseUrlOfGenre).then(response => {
            const genreQuery = response.data.genres;
            setArrayOfGenres(genreQuery);
        })
    }, []);

    function getGenre(genreIds: [number], genreList: IGenre[]) {
        const filteredGenres = genreIds.map( id => genreList.find(genre => genre.id === id));
        const newGenre = filteredGenres.map(gen => <Genre>{gen?.name}</Genre>);
        return newGenre;
    }

    return (
        <>
            <Container>
                <Header />
                <SearchInput 
                    placeholder="Busque um filme por nome ou gênero..." 
                    onChange={handleInputChange}
                />
                {arrayOfMovies.map(movie => (
                    <Link 
                        to={`/movies/${movie.id}`} 
                        key={movie.id}
                        style={{textDecoration: 'none'}} 
                    >
                        <MovieContent>
                            <MoviePoster src={`${baseUrlOfPosters}${movie.poster_path}`}/>

                            <Details>
                                <Title>
                                    <h2>{movie.title}</h2>
                                </Title>

                                <Score>{(movie.vote_average) * 10}%</Score>
                                {/* <DateRelease>{new Intl.DateTimeFormat('pt-BR').format(
                                new Date(movie.release_date))}
                                </DateRelease>  */}
                                 <DateRelease>
                                {movie.release_date}
                                </DateRelease> 
                                <Sinopse>{movie.overview}</Sinopse>

                                <GenreContainer>
                                    {getGenre(movie.genre_ids, arrayOfGenres)}
                                </GenreContainer>
                            </Details>
                        </MovieContent>
                    </Link>
                ))}

                <PaginationContainer>
                    <Page onClick={() => {
                        setCurrentPage(0);
                        window.scrollTo(0,0);
                      
                    }}>1</Page>
                    <Page onClick={() => {
                        setCurrentPage(1);
                        window.scrollTo(0,0);
                    }}>2</Page>
                    <Page onClick={() => {
                        setCurrentPage(2);
                        window.scrollTo(0,0);
                    }}>3</Page>
                    <Page onClick={() => {
                        setCurrentPage(3);
                        window.scrollTo(0,0);
                    }}>4</Page>
                    <Page onClick={() => {
                        setCurrentPage(4);
                        window.scrollTo(0,0);
                    }}>5</Page>
 
                </PaginationContainer>
                   
            </Container>
        </>
    );
}

export default Home;
