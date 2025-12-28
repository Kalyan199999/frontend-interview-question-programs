

const Profile = ({user,error})=>
{
    
    return(
        <div className="w-3/4 border-2 border-gray-200 flex flex-col items-center p-2 mb-2">
            {
                error ? <h1 className="text-red-600 text-2xl">{error}</h1> :
                (
                    user && 
                    <div className="flex flex-col items-center gap-2">
                        
                        <img src={user.avatar_url} alt={user.name} className="w-20 h-20 border-2 border-gray-500 rounded-full" />
                        
                        <div className="flex flex-col">
                            { user.bio && <span>Bio:{user.bio}</span>}
                            <span>Profile Link: <a href={`${user.html_url}`} className="text-blue-500">{user.name}</a> </span>
                            <span>Joined: {user.created_at.slice(0,10)}</span>
                            <span>Organizatin: {user.organizations_url}</span>
                            <span>Followers: {user.followers}</span>
                            <span>Following: {user.following}</span>
                            <span>Public repo's: {user.public_repos}</span>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Profile;