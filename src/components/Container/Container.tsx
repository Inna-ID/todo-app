import './Container.scss';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="container">{children}</div>;
};

export default Container;
