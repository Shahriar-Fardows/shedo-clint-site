import { Link } from 'react-router-dom';
import error from './../assets/Image/error.png' 

const Error = () => {
    
    return (
        <div className='image my-auto'>
            <img className=' w-full relative 'src={error} alt="" />
            <Link to='/' class="btn w-48 my-40 md:my-0 rounded-[4rem] text-white btn-success absolute right-[22%] md:top-[20rem] md:right-[45%] lg:top-[38rem] lg:right-[45%] ">Go Back to Home</Link>
  
        </div>
    );
};

export default Error;