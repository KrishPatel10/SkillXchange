import Card from './Card.js';
import Navbar from '../components/Navbar.js';

export default function Cards(){
    return(
        <div className="flex-col mt-12">
            <div className='my-3'>
                <Card/>
            </div>
            <div className='my-3'>
                <Card/>
            </div>
            <div className='my-3'>
                <Card/>
            </div>
        </div>
    )
};