'use client'
import * as React from 'react';

export function Header () {
    // State to control opacity
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        // Timeout to trigger the transition after 500ms
        const timer = setTimeout(() => {
            setVisible(true);
        }, 100); // Delay for the effect

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []); // Run only once on mount
  return (
    <div className={`flex flex-col items-center w-full my-20 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      <div>
        <h1 className='text-6xl text-red-600 font-bold'>Movie ZK</h1>
        </div>
      <div>
        <p className='text-slate-500'>just for fun witf the movie🦄</p>
        </div>
    </div>
  );
}
