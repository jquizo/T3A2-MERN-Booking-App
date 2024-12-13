import { useForm } from 'react-hook-form';
import { useAppContext } from '../contexts/AppContext.jsx';

const Register = () => {

    const { register, watch, handleSubmit } = useForm()


    return (
        <form className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Register an account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input className="border rounded w-full py-1 px-2 font-normal"></input>
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input className="border rounded w-full py-1 px-2 font-normal"></input>
                </label>
            </div>
        </form>
    );
};

export default Register;