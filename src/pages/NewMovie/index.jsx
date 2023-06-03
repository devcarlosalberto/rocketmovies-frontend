import {
    Container,
    Content,
    Form,
    TwoCol,
    MarksWrapper,
    Marks,
    Buttons,
} from './styles';
import { TextButton } from '../../components/TextButton';
import { Textarea } from '../../components/Textarea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Mark } from '../../components/Mark';

import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export function NewMovie() {
    const navigate = useNavigate();

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [rating, setRating] = useState();

    const [isLoading, setIsLoading] = useState(false);

    function handleBack() {
        navigate(-1);
    }

    function clearInputs() {
        setTitle('');
        setDescription('');
        setRating('');
        setNewTag('');
        setTags([]);
    }

    function handleAddNewTag() {
        setTags((prevState) => [...prevState, newTag]);
        setNewTag('');
    }

    function handleDeleteTag(tagName) {
        setTags((prevState) => prevState.filter((tag) => tag !== tagName));
    }

    async function handleSubmit() {
        setIsLoading(true);

        const newMovie = {
            title,
            description,
            rating,
            tags,
        };

        try {
            const result = await api.post('/notes', newMovie);
            console.log(result);
            alert('Filme adicionado com sucesso!');
            clearInputs();
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error.response.data.message) {
                return alert(error.response.data.message);
            } else {
                return alert('Não foi possível adicionar o filme.');
            }
        }
    }

    return (
        <Container>
            <Header />
            <Content>
                <TextButton
                    icon={FiArrowLeft}
                    title="Voltar"
                    onClick={handleBack}
                />

                <h1>Novo filme</h1>

                <Form>
                    <TwoCol>
                        <Input
                            type="text"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Sua nota (de 0 a 5)"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </TwoCol>

                    <Textarea
                        rows={10}
                        placeholder="Observações"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <MarksWrapper>
                        <span>Marcadores</span>

                        <Marks>
                            {tags.map((tag, index) => (
                                <Mark
                                    key={index}
                                    value={tag}
                                    onClick={() => handleDeleteTag(tag)}
                                />
                            ))}
                            <Mark
                                isNew
                                value={newTag}
                                placeholder="Novo marcador"
                                onChange={(e) => setNewTag(e.target.value)}
                                onClick={handleAddNewTag}
                            />
                        </Marks>
                    </MarksWrapper>

                    <Buttons>
                        <Button
                            title="Salvar"
                            onClick={handleSubmit}
                            isLoading={isLoading}
                        />
                    </Buttons>
                </Form>
            </Content>
        </Container>
    );
}
