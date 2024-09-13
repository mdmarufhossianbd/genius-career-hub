'use client'
const Subscribe = () => {
    
    const hanldeSubscrbe = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email);
    }
    return (
        <div>
            <form onSubmit={hanldeSubscrbe} className="space-y-2">
                <input className="px-2 py-2 rounded-md focus:outline-none border lg:w-[80%] w-full" type="email" name="email" placeholder="example@email.com" required />
                <input className="py-2 rounded-md bg-black hover:bg-red-600 duration-300 lg:w-[80%] w-full text-white hover:cursor-pointer" type="submit" value="Subscribe" />
            </form>
        </div>
    );
};

export default Subscribe;