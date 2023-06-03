import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Top, Sections } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { api } from '../../services/api';

export function Home() {
    const [movies, setMovies] = useState();
    const [titleSearch, setTitleSearch] = useState('');

    async function loadingMovies() {
        try {
            const result = await api.get(`/notes?title=${titleSearch}&tags=`);
            const movies = result.data;
            setMovies(movies);
        } catch {
            alert('Erro ao carregar os filmes.');
        }
    }

    async function handleSearchMovies() {
        await loadingMovies();
    }

    useEffect(() => {
        loadingMovies();
    }, []);

    return (
        <Container>
            <Header
                setTitleSearch={setTitleSearch}
                onSearch={handleSearchMovies}
            />
            <Content>
                <Top>
                    <h2>Meus filmes</h2>
                    <Link to="/newMovie">
                        <Button
                            icon={FiPlus}
                            title="Adicionar filme"
                            size="20.7rem"
                        />
                    </Link>
                </Top>
                <Sections>
                    {movies &&
                        movies.map((movie) => (
                            <Section
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                note={movie.rating}
                                text={movie.description}
                                tags={movie.tags}
                            />
                        ))}
                </Sections>
            </Content>
        </Container>
    );
}
