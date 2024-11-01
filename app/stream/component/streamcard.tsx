'use client'
import * as React from 'react';

export function Stream () {
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
    <div className={`w-full h-auto tab:w-[800px] mx-auto transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      <div className="w-auto h-auto border mx-3 rounded-lg flex flex-col gap-4 shadow-lg bg-slate-50">
        <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
            <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

  );
}
