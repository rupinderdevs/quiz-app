import { useState } from 'react';
import { FormAction, Input } from 'src/components';
import { signupFields } from 'src/data';
import logo from "src/assets/images/logo.png";
import { Link } from 'react-router-dom';



const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

const Signup = () => {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    console.log('signupState', signupState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState)
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount = () => {

    }

    return (
        <div>
            <img src={logo} className="m-auto w-9/12" alt="logo" />
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={signupState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />

                        )
                    }
                    <FormAction handleSubmit={handleSubmit} text="Register" />
                </div>



            </form>
            <span className='flex gap-2 pt-3 justify-center   '>Already Have an Account <Link to="/logon" className='text-primary font-medium'>Login</Link></span>
        </div>
    )
}
export default Signup;