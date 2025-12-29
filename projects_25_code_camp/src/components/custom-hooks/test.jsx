
import useFetch from './fetching'

const UseFetchHook = () => {
    const { data, error, loading } = useFetch('https://dummyjson.com/products')
    console.log(data);


    return (
        <div className='flex flex-col items-center border-2 border-red-500'>
            <h1 className='text-green-500 font-bold text-2xl'>Custom hooks</h1>
            {
                loading ? <h1>Loading......</h1>:
                (
                    data && data.products && data.products.length > 0 ? 
                    data.products.map((item )=>
                    {
                        return(
                            <div
                                key={item.id}
                                className='text-blue-400 font-bold'
                            >
                                <h1>{item.title}</h1>
                            </div>
                        )
                    } ) : 
                    <>
                    </>
                )
            }

            {
                error && <h1 className='text-red-400 font-bold'>{error}</h1>
            }
        </div>
    )
}

export default UseFetchHook