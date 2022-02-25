import { useAdd } from '../index';
import { renderHook, act } from '@testing-library/react-hooks'

describe('useAdd tests', ()=>{
let result;
   beforeEach(()=>{
    const hooks = renderHook(() => {
        const { count, action} = useAdd()
        return {
            count,
            changeCount: action.changeCount,
        }
    });
    result = hooks.result;
   });
   it('should be defined', () => {
        expect(useAdd).toBeDefined();
    });

   it('should increment counter', () => {

    act(() => {
        result.current.changeCount()
    })
    act(() => {
        result.current.changeCount()
    })

    expect(result.current.count).toBe(2)
})
})