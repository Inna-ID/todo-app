import Container from '../Container/Container';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <h1 className="header__title">TODO app</h1>
            </Container>
        </header>
    );
};

export default Header;
