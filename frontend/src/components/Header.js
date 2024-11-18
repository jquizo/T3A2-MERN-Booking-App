import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className="bg-orange-400 py-5 ">
            <div className="container mx-auto flex justify-between">
                <span className="text-white font-bold text-3xl tracking-tight">
                    <Link to="/">BookMe</Link>
                </span>
            </div>
        </div>
    )
}