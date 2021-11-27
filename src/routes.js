import Layout from './components/Layout'
import Effect from './components/UseEffect'
import Callback from './components/UseCallback'
import Memo from './components/UseMemo'
const routes = [
    {
        path: 'effect',
        title: 'useEffect',
        element: <Effect />
    },
    {
        path: 'callback',
        title: 'userCallback',
        element: <Callback />
    },
    {
        path: 'memo',
        title: 'userMemo',
        element: <Memo />
    }
];
export default routes;