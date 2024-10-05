import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
    return (
        <div className='absolute top-1/2 right-1/2'>
            <ImSpinner9 size={50} className="animate-spin" />
        </div>
    );
};

export default Loading;