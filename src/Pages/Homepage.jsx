import React , {useEffect} from 'react'
import {Wrapper , Poster , About , Prodedure , Contact} from "../Components" ;
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Draggable } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const Homepage = () => {

    useEffect(() => {
      gsap.fromTo(".searchtext" , {y: "random(-300 , 300)" ,opacity:0 } , {duration: 1.5, y:0 , opacity : 100 ,stagger : 0.25 , ease:"power3.out"});
      gsap.fromTo(".card", {y:100 , opacity : 0},{
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",// Optional: Adds visual markers for testing/debugging
        },
        opacity: 100,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger : 0.25
      });
      gsap.fromTo(".nav" , {x:100 , opacity : 0} , {
        opacity :100,
        x:0,
        duration :1,
        ease : "power3.out",
        stagger : 0.25
      })
      gsap.fromTo(".line" , {x:0, opacity : 0 , width : 0 } , {
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",// Optional: Adds visual markers for testing/debugging
        },
        opacity :100,
        x:0,
        duration :1,
        ease : "power3.out",
        width : 1100,
        delay : 2
      })

      Draggable.create(".spin", { inertia: true, type: "rotation", bounds: "body" });
    }, [])

  return (
    <Wrapper>
      <Poster/>
      <About/>
      <Prodedure/>
      <Contact/>
    </Wrapper>
  )
}

export default Homepage