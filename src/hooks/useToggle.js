import { useMemo, useState } from 'react';

function useToggle(defaultValue = false, reverseValue) {
  const [state, setState] = useState(defaultValue);
  const actions = useMemo(() => {
    const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue
    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
    // useToggle ignore value change
    // }, [defaultValue, reverseValue]);
  }, []);

  return [state, actions];
}

// import React from 'react';
// import { useToggle } from 'ahooks';

// export default () => {
//   const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

//   return (
//     <div>
//       <p>Effects：{state}</p>
//       <p>
//         <button type="button" onClick={toggle}>
//           Toggle
//         </button>
//         <button type="button" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>
//           Set Hello
//         </button>
//         <button type="button" onClick={() => set('World')}>
//           Set World
//         </button>
//         <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
//           Set Left
//         </button>
//         <button type="button" onClick={setRight}>
//           Set Right
//         </button>
//       </p>
//     </div>
//   );
// };
export default useToggle;