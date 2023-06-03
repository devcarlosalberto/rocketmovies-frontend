import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Container, Profile } from './styles';
import { Input } from '../../components/Input';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';

export function Header({ setTitleSearch, onSearch }) {
    const navigate = useNavigate('/');

    const { user, signOut } = useAuth();

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder;

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            onSearch();
        }
    }
    function handleSignOut() {
        signOut();
        navigate('/');
    }

    return (
        <Container>
            <Link to="/">RocketMovies</Link>

            <Input
                placeholder="Pesquisar pelo título"
                onChange={(e) => setTitleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>{user.name}</strong>
                    </Link>
                    <button onClick={handleSignOut}>sair</button>
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    );
}
