import React from 'react'
import { signInWithGooglePopup, createUserProfileDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const logoGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserProfileDocumentFromAuth(user);
        console.log(userDocRef); 
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logoGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SignIn