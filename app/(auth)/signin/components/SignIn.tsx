import SignInForm from "./SignInForm"

const SignIn = () => {
    return (
        <>
            <div className="mb-8">
                {/*<h3 className="mb-1">Login</h3>*/}
                {/*<p>Please enter your credentials to login!</p>*/}
            </div>
           <div className="flex justify-center">
                <SignInForm />
           </div>
        </>
    )
}

export default SignIn
