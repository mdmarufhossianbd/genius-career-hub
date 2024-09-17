
const PageIntro = ({pageName}) => {
    return (
        <div className="py-10 bg-blue-200 my-10 rounded-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">{pageName}</h2>
        </div>
    );
};

export default PageIntro;