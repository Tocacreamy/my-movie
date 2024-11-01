'use client'

import * as React from "react"
// import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"

const films = [
  { id: 1, title: "Film 1" },
  { id: 2, title: "Film 2" },
  { id: 3, title: "Film 3" },
  { id: 4, title: "Film 4" },
  { id: 5, title: "Film 5" },
  { id: 6, title: "Film 6" },
  { id: 7, title: "Film 7" },
  { id: 8, title: "Film 8" },
  { id: 9, title: "Film 9" },
  { id: 10, title: "Film 10" },
]

export default function FilmPosterCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  }) 

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {  // Check if emblaApi is defined
        emblaApi.scrollNext()  // Use emblaApi instead of emblaRef.current
      }
    }, 200) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [emblaApi])

  const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        // Timeout to trigger the transition after 500ms
        const timer = setTimeout(() => {
            setVisible(true);
        }, 300); // Delay for the effect

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []); // Run only once on mount


  return (
    <div className={`my-10 mx-3 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} `}>
    <Carousel className="w-full max-w-3xl m-auto " ref={emblaRef}>
      <CarouselContent className="-ml-2 md:-ml-4 py-3 ">
        {films.map((film) => (
          <CarouselItem key={film.id} className="pl-2 md:pl-4 basis-1/2 tab:basis-1/4 ">
            <Card className="hover:shadow-lg transition-all ease-in-out  hover:-translate-y-1 hover:z-40">
              <CardContent className="flex aspect-[2/3] items-center justify-center p-0 ">
                {/* <Image
                  src={`/placeholder.svg?height=300&width=200&text=${film.title}`}
                  alt={film.title}
                  width={200}
                  height={300}
                  className="object-cover rounded-md"
                /> */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
