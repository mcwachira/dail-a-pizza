import {useState} from 'react'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";



const defaultFormFields = {
    fullName:'',
    email:'',
    password:'',
    confirmPassword:'',
}
const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name , value} =e.target
        setFormValues({...formValues, [name]: value})
    }

    const resetFormFields = () => {
        setFormValues(defaultFormFields)
    }

    const handleSubmit= async(e) => {

        e.preventDefault();


        //check if password and confirm password are correct

        if(password!== confirmPassword){
            alert('passwords do not match')
            return
        }

        try {
            // dispatch(signUpStart(email,password, displayName))
            resetFormFields()



        } catch (error) {
            if(error.code ==='auth/email-already-in-use'){
                alert('Cannot create user with the email as it is in use')
            } else{
                console.log('error creating user from document', error)
            }
        }
    }


    const {fullName, email, password, confirmPassword} = defaultFormFields


    return (
      <>
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col  sm:justify-center mt-2 items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    {/*<div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>*/}
                    {/*<div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>*/}
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-yellow-400 shadow-md">
                        <label htmlFor="" className="block mt-3  text-gray-700 text-center font-semibold text-2xl">
                            Register
                        </label>
                        <form method="#" action="#" className="mt-10">

                            <div>
                                <input type="text" placeholder="Full Name" className="mt-3 block w-full border-none bg-gray-100 h-14 rounded-lg shadow-lg hover:bg-gray-100 focus:bg-gray-100 focus:ring-0 paceholder:w-full px-5 text-base" required onChange={handleChange} name="fullName" value={fullName}/>
                            </div>

                            <div className="mt-7">
                                <input type="email" placeholder="Email" className="mt-3 block w-full border-none bg-gray-100 h-14 rounded-lg shadow-lg hover:bg-gray-100 focus:bg-gray-100 focus:ring-0 paceholder:w-full px-5 text-base" required onChange={handleChange} name="email" value={email}/>
                            </div>

                            <div className="mt-7">
                                <input type="password" placeholder="password" className="mt-3 block w-full border-none bg-gray-100 h-14 rounded-lg shadow-lg hover:bg-gray-100 focus:bg-gray-100 focus:ring-0 paceholder:w-full px-5 text-base" required onChange={handleChange} name="password" value={password}/>
                            </div>

                            <div className="mt-7">
                                <input type="password" placeholder="Confirm Password" className="mt-3 block w-full border-none bg-gray-100 h-14 rounded-lg shadow-lg hover:bg-gray-100 focus:bg-gray-100 focus:ring-0 paceholder:w-full px-5 text-base" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                            </div>



                            <div className="mt-7">
                                <button className="bg-black w-full py-3 rounded-lg text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Register
                                </button>
                            </div>

                            <div className="flex mt-7 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md"/>
                                    <label className="block font-medium  text-gray-600 text-base w-full">
                                        Register
                                    </label>
                                    <hr className="border-gray-300 border-1 w-full rounded-md"/>
                            </div>

                            <div className="flex mt-7 justify-center w-full">


                                <button className="bg-red-500 border-none px-6 py-2 rounded-lg cursor-pointe text-xl text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                    Google
                                </button>
                            </div>

                            <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2" >Do you have an account ?</label>
                                    <Link  to="/sign-in" className=" text-white transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Log In
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
export default SignUp
