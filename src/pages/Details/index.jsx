import { Container, Content, Title, Creator, Tags, Tag, Text } from './styles';
import { RatingStars } from '../../components/RatingStars';
import { TextButton } from '../../components/TextButton';
import { Header } from '../../components/Header';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { CiClock2 } from 'react-icons/ci';

import { useAuth } from '../../hooks/useAuth';

import dayjs from 'dayjs';

import { api } from '../../services/api';

export function Details() {
    const navigate = useNavigate();
    const params = useParams();
    const { user } = useAuth();

    const [title, setTitle] = useState();
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState();
    const [tags, setTags] = useState();
    const [createdAt, setCreatedAt] = useState();

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder;

    function handleBack() {
        navigate(-1);
    }

    function convertDate(date) {
        const entryFormat = 'YYYY-DD-MM HH:mm:ss';
        const outputFormatting = 'DD/MM/YYYY [às] HH:MM';
        return dayjs(date, entryFormat).format(outputFormatting);
    }

    async function handleLoadingMovie() {
        try {
            const result = await api.get(`/notes/${params.id}`);
            const {
                title,
                description,
                rating,
                created_at: createdAt,
                tags,
            } = result.data;

            setTitle(title);
            setRating(rating);
            setDescription(description);
            setCreatedAt(convertDate(createdAt));
            setTags(tags);
        } catch {
            alert('Erro ao carregar os filmes!');
        }
    }

    useEffect(() => {
        handleLoadingMovie();
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <TextButton
                    icon={FiArrowLeft}
                    title="Voltar"
                    onClick={handleBack}
                />

                <Title>
                    <h1>{title}</h1>
                    <span>
                        <RatingStars rating={rating} size="2rem" />
                    </span>
                </Title>

                <Creator>
                    <div className="author">
                        <img
                            src={avatarUrl}
                            alt="Foto do autor desta postagem"
                        />
                        <span className="author">Por {user.name}</span>
                    </div>
                    <span className="date">
                        <CiClock2 />
                        {createdAt}
                    </span>
                </Creator>

                <Tags>
                    {tags &&
                        tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </Tags>

                <Text>
                    <p>{description}</p>
                </Text>
            </Content>
        </Container>
    );
}
