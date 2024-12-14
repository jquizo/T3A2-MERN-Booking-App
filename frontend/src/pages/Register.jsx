import { useForm } from 'react-hook-form';
import { useAppContext } from '../contexts/AppContext.jsx';
import { useMutation } from 'react-query';
import * as apiClient from '../api-client.js';

const Register = () => {

    const { register, watch, handleSubmit } = useForm()

    const mutation = useMutation(apiClient.register, {
        onSuccess:  () => {
            console.log("registration success")
        },
        onError: (error) => {
            console.log(error.message)
        },
    });

    const onSubmit = handleSubmit((data) =>     {
        mutation.mutate(data);
    })

    
    return (
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Register an account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                {/* First Name input */}
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input className="border rounded w-full py-1 px-2 font-normal" {...register("firstName", {required:"This field is required"})}></input>
                </label>
                {/* Last Name input */}
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input className="border rounded w-full py-1 px-2 font-normal" {...register("lastName", {required:"This field is required"})}></input>
                </label>
            </div>
                {/* Email input */}
                    <label className="text-gray-700 text-sm font-bold flex-1">
                    Email
                    <input 
                    type="email"
                    className="border rounded w-full py-1 px-2 font-normal" {...register("email", {required:"This field is required"})}></input>
                </label>
                {/* Password input */}
                    <label className="text-gray-700 text-sm font-bold flex-1">
                    Password
                    <input 
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal" {...register("password", {
                        required:"This field is required",
                        minLength: {
                            value: 6,
                            message: "Password must be a minimum of 6 characters or more"
                        },
                    })}></input>
                </label>
                {/* Confirm password input */}
                    <label className="text-gray-700 text-sm font-bold flex-1">
                    Confirm Password
                    <input 
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal" {...register("confirmPassword", {
                        validate:(val)=> {
                            if(!val){
                                return "This field is required"
                            } else if(watch("password") !== val){
                                return "Your passwords do not match";
                            }
                        },
                    })}></input>
                </label>
                <span>
                    <button 
                    type="submit"
                    className="bg-blue-600 text-white rounded-sm p-2 font-bold hover:bg-blue-500 text-xl">Create Account</button>
                </span>
        </form>
    );
};

export default Register;