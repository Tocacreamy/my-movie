'use client'
import * as React from 'react';
import { Item } from './item';

export function List_item() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when the element is in the viewport
        } else {
          setIsVisible(false); // Optionally set back to false when out of view
        }
      });
    });

    const element = document.getElementById('list-item'); // Use a unique ID for the list
    if (element) {
      observer.observe(element); // Start observing the element
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div
      id="list-item" // Unique ID for the Intersection Observer
      className={`w-full h-auto my-10 tab:w-[800px] m-auto transition-opacity duration-500  ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='w-auto h-auto border mx-3 rounded-lg flex flex-col shadow-lg bg-slate-50'>
        <div className='my-3'>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}
