
const PageIntro = ({pageName, description}) => {
    return (
        <div className="py-10 bg-blue-200 mb-10 rounded-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center mb-3">{pageName}</h2>
            <p className='text-justify px-5'>{description}</p>
        </div>
    );
};

export default PageIntro;