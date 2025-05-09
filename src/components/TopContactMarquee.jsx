import { useEffect, useRef } from "react";

const TopContactMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationId;
    let scrollPos = 0;

    const animate = () => {
      scrollPos -= 1;
      if (marquee) {
        marquee.style.transform = `translateX(${scrollPos}px)`;
        if (Math.abs(scrollPos) > marquee.scrollWidth / 2) {
          scrollPos = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-blue-100 overflow-hidden z-50 border-b border-blue-300">
      <div className="w-full h-full flex items-center">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-sm text-blue-900 font-medium px-4"
          style={{ willChange: "transform" }}
        >
          🌐Delivering excellence from 3 locations : Woodbridge, Brampton &
          Kitchener. &nbsp;&nbsp;&nbsp;&nbsp; ✉️ info@johricpa.ca 
          &nbsp;&nbsp;&nbsp;&nbsp; 📞 905-605-5272 (Woodbridge)
          &nbsp;&nbsp;&nbsp;&nbsp; 📞 905-230-0115 (Brampton)
          &nbsp;&nbsp;&nbsp;&nbsp; 📞 519-513-2423 (Kitchener)
          &nbsp;&nbsp;&nbsp;&nbsp; 🌐Delivering excellence from 3 locations :
          Woodbridge, Brampton & Kitchener. &nbsp;&nbsp;&nbsp;&nbsp; 
         📞 905-605-5272 (Woodbridge)
          &nbsp;&nbsp;&nbsp;&nbsp; 📞 905-230-0115 (Brampton)
          &nbsp;&nbsp;&nbsp;&nbsp; 📞 519-513-2423 (Kitchener)
        </div>
      </div>
    </div>
  );
};

export default TopContactMarquee;
