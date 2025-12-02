
import { useState, useEffect, useRef } from 'react';
import 'App.css';

function DropDownLine() {
  const containerRef = useRef(null);
  const data = [
    { title: "title1", info: "text1" },
    { title: "title2", info: "text2" },
    { title: "title3", info: "text3" },
    { title: "title4", info: "text4" }
  ];
  const [open, setOpen] = useState([false, false, false, false]);
  function changeState(index) {
    setOpen(prev =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen([false, false, false, false]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]); 
  return (
    <div 
      className=" min-w-fit mr-[10%] ml-[55%] mt-25" 
      ref={containerRef}
    >
      {data.map((prop, index) => (
        <div 
          key={index} 
          className="border-2 mb-8 rounded-[30px] bg-gray-300/20 border-gray-600/50 hover:bg-gray-200/30 transition-all duration-500"
        > 
          <div 
            className="flex justify-between items-center p-2 "
          >
              <p 
              className="text-white h-23 pt-2 text-7xl"
              >
                {prop.title}
              </p>
              <button onClick={() => changeState(index)}>
                <div 
                  className="bg-blue-500 flex justify-center items-center  rounded-full h-18 w-18 text-4xl
                  mr-10 hover:h-20 hover:w-20 hover:mr-8 
                  transition-all duration-400 border-4
                  border-gray-600/10
                ">
                  <p 
                    className="text-gray-300/80 hover:text-gray-200 "
                  >. . .
                  </p>
                </div>
              </button>
              </div>
            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out
                ${open[index] 
                  ? "max-h-40 opacity-100 mt-2"  
                  : "max-h-0 opacity-0 mt-0"     
                }`}
            >
              <p className="p-2 text-white">
                {prop.info}
              </p>
            
          </div>
        </div>
      ))}
    </div>
  );
}
export default DropDownLine;
