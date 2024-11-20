import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className="bg-orange-400 py-5 ">
            <div className="container mx-auto flex justify-between">
                <span className="text-white font-bold text-3xl tracking-tight">
                    <Link to="/">BookMe</Link>
                </span>
                <span className="flex space-x-2 ">
                    <Link to="/sign-in" className="flex items-center bg-white text-blue-800 px-3 rounded hover:bg-gray-100">
                    Sign In
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Header;