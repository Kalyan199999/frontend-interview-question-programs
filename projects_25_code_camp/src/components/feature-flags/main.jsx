import { useContext } from 'react';
import { FeatureFlagContext } from './context/create-context.jsx'

import LightDarkMode from '../light-dark-theme/theme.jsx'
import TicTacToe from '../tic-tac-toe/game.jsx'
import RandomColor from '../random_color_generator/RandomColor'
import Accordion from "../accordion/Accordion";
import TreeView from '../tree-recursive-menu/Menu'
import TestingTabs from '../custom-tabs/test-tabs.jsx'

const FeatureFlags = ()=>
{
    const {loading ,enableFlags} = useContext( FeatureFlagContext );
    
    const componentsInfo = [
            {
                key:"showLightAndDarkMode",
                component:<LightDarkMode />
            },
            {
                key:"showTicTacToeBoard",
                component:<TicTacToe />
            },
            {
                key:"showRandomColorGenerator",
                component:<RandomColor />
            },
            {
                key:"showAccordian",
                component:<Accordion />
            },
            {
                key:"showTreeView",
                component:<TreeView />
            },
            {
                key:'showTabs',
                component:<TestingTabs />
            }
    ]

    const checkComponent = ( key)=>
    {
        return enableFlags[key]
    }

    if( loading ) return <h1>Loading......</h1>

    return(
        <div className='border-2 border-green-500 p-2'>
            <h1 className='text-center text-2xl text-blue-500 font-bold'>Feature Flags</h1>
            <div>
                {
                    componentsInfo.map( ( item,idx ) => checkComponent( item.key ) ? item.component : null  )
                }
            </div>
        </div>
    )
}

export default FeatureFlags;