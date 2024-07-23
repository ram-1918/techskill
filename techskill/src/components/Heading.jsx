const type_mapper = {
    h1: '1.7rem',
    h2: '1.6rem',
    h3: '1.5rem',
    h4: '1rem',
    h5: '0.8rem'
}
const Heading = ({text, type}) => {
    return (
        <span style={{fontSize: type_mapper[type]}} className="capitalize font-bold text-sky-700">{text}</span>
    );
};

export default Heading;