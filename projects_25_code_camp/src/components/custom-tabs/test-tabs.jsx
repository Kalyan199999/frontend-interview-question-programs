import Tabs from "./tabs"


const RandomeComponents = ()=>
{
    return <h1 className="text-red-700 bg-gray-200">This is a Random component!</h1>
}

const TestingTabs = ()=>
{
    const tabsContents = [
        {
            label:'Tab-1',
            content: <h1 className="text-violet-500">This is Tab1-content.</h1>
        },
        {
            label:'Tab-2',
            content: <h1 className="text-gray-500">This is Tab2-content with some inforamtion!</h1>
        },
        {
            label:'Tab-3',
            content: <h1 className="text-green-500">This is Tab3-content and hello world!</h1>
        },
        {
            label:'Tab-4',
            content: <h1 className="text-blue-500">This is Tab4-content and say thank u!</h1>
        },
        {
            label:'Random',
            content: <RandomeComponents />
        }

    ]
    return <div className='border-2 border-purple-500'>
        <Tabs tabsContents={tabsContents}  />
    </div>
}

export default TestingTabs