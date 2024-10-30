'use client';
import { Button } from '@/components/ui/button';
import * as React from 'react';

export function Card() {
    // State to control opacity
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        // Timeout to trigger the transition after 500ms
        const timer = setTimeout(() => {
            setVisible(true);
        }, 250); // Delay for the effect

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []); // Run only once on mount

    return (
        <div className={`w-full h-auto tab:w-[800px] m-auto transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className='w-auto h-auto border mx-3 rounded-lg flex flex-col gap-4 shadow-lg bg-slate-50'>
                <div className='m-auto mt-3'>
                    <div className='w-[200px] h-80 bg-slate-400'></div>
                </div>
                
                <div className='m-auto'>
                    <h1 className='font-bold text-3xl'>Naruto Shipuden</h1>
                    <h1 className='text-center'>⭐⭐⭐</h1>
                    
                </div>
                <div className='m-auto text-center mb-3 text-base text-slate-500'>
                    <hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem molestias error obcaecati!</p>
                </div>
                <div className='m-auto my-3'>
                    <Button variant="outline" className='transition-all ease-in-out bg-red-500 text-white hover:border-red-500 hover:text-red-500 hover:font-bold'>Watch</Button>
                </div>
            </div>
        </div>
    );
}
