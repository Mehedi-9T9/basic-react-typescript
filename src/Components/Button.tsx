type childrenProps = {
    children: React.ReactNode
}

const Button = ({ children }: childrenProps) => {
    return (
        <button>{children}</button>
    );
};

export default Button;