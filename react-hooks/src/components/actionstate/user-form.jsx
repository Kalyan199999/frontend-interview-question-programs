import { useActionState } from 'react';
import './style.css'

 const handleSubmit = async ( prevState ,formData)=>
    {
        console.log(prevState);
        
        const userName =  formData.get('username') || "";
        const password =  formData.get('password') || "";

        if( userName === "" && password === "")
        {
            return {
                error:"username and password cannot be empty",
                data:prevState.data
            }
        }
        else
        {
            return{
                data:{
                    username:userName,
                    password:password
                },
                error:null
            }
        }
    }

const User = ()=>
{
    
    const [ user,submitAction,isLoading] = useActionState( 
                                                handleSubmit , 
                                                {
                                                    data:null,
                                                    error:null
                                                }
                                )
                                
    return(
        <div className="user-data">

            <form action={submitAction} className='user-form'>

                <div>
                    <input type="text" name='username' placeholder='user name' />
                </div>

                <div>
                    <input type="password" name='password' placeholder='password' />
                </div>

                <button>submit</button>

            </form>

            {
                isLoading ? <p className='loading'>loading...</p> : 
                <div>
                    {
                        user.error ? 
                            <p className='error'>{user.error}</p> :
                            
                            null
                    }

                    {
                        user.data ? <>
                                <p className='user-details'>User Name: <strong>{user.data?.username} </strong> </p>
                                <p className='user-details'>Password: <strong>{user.data?.password}</strong></p>
                            </>:
                            null
                    }
                </div>
            }

        </div>
    )
}

export default User;