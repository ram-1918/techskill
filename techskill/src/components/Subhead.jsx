const Subhead = ({text}) => {
    const styles = "w-full text-center font-light text-xl text-sky-700 underline underline-offset-2";
    return <span className={styles}>{text}</span>;
};

export default Subhead;