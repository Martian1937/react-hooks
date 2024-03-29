
import Effect from './components/UseEffect'
import Deposit from './components/Deposit'
import Callback from './components/UseCallback'
import Memo from './components/UseMemo'
import Ref from './components/UseRef'
const routes = [
    {
        path: 'effect',
        title: 'useEffect',
        element: <Deposit />
    },
    {
        path: 'callback',
        title: 'useCallback',
        element: <Callback />
    },
    {
        path: 'memo',
        title: 'useMemo',
        element: <Memo />
    },
    {
        path: 'ref',
        title: 'useRef',
        element: <Ref />
    }
];
export default routes;