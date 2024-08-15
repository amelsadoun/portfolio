import { useEffect, useState } from "react";

export default function Lineshero() {
    const [gradientLevel, setGradientLevel] = useState(0); //self explanatory
    const [direction, setDirection] = useState(1); //either animates up or down 
  
    //for the animation of the lines gradient
    useEffect(() => {
      const interval = setInterval(() => {
        setGradientLevel(prevLevel => {
          if (prevLevel >= 100) {
            setDirection(-1);
            return prevLevel - 1;
          } else if (prevLevel <= 0) {
            setDirection(1);
            return prevLevel + 1;
          }
          return prevLevel + direction;
        });
      }, 30); //is this perfrormance friendly? 
  
      return () => clearInterval(interval);
    }, [direction]);

  //ps: It was originally one svg then I decided to double it because it looked better that way
  return (
    <div className="hidden lg:block absolute left-0"> 
      <svg
      className="absolute left-0"
        width="30vw"
        viewBox="100 50 373 1263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${-gradientLevel + 60}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${gradientLevel - 20}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${-gradientLevel + 100}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${gradientLevel - 20}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M-0.10434 528.508C49.1116 553.819 99.473 581.981 139.33 622.913C189.711 674.653 210.495 742.844 206.271 816.987C201.885 893.98 163.337 955.472 125.615 1018.08C99.7911 1060.94 77.6615 1095.13 55.7347 1140.91C27.2538 1200.38 18.7855 1191.26 30.5 1261"
          stroke="url(#gradient1)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M94 -0.5C85 13 71.6192 34.4224 54.0837 87.1689C16.5347 200.116 32.8444 301.77 83.1461 407.584C131.394 509.078 203.633 597.948 273.848 682.201C316.713 733.637 370.429 785.538 370.995 860.307C372.179 1016.87 176.538 1068.31 176.538 1220.38"
          stroke="url(#gradient2)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M52.5 -1.5C42.5 6 28.4576 43.018 21.1032 107.532C6.9342 231.825 76.7687 342.101 139.965 438.476C218.965 558.953 313.821 686.801 308.135 843.295C303.112 981.564 228.597 1086.63 138.659 1175.99"
          stroke="url(#gradient3)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M220.969 1197.5C178 1171.38 134.032 1142.33 99.2349 1100.1C55.2492 1046.72 37.1038 976.366 40.7914 899.872C44.6207 820.439 78.2757 756.998 111.209 692.405C133.754 648.185 153.075 612.914 172.218 565.68C197.083 504.328 228.06 427.995 217.833 356.04C210.262 302.777 185.544 265.214 158.106 225.694C118.28 168.331 84.4216 132.295 36.8001 85.3914C34.4993 83.1252 6.80138 56.0329 -3 45.5"
          stroke="url(#gradient4)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
      <svg
      className="absolute left-0"
        width="30vw"
        viewBox="0 0 373 1263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${-gradientLevel + 60}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${gradientLevel - 20}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${-gradientLevel + 100}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset={`${gradientLevel - 20}%`}
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M-0.10434 528.508C49.1116 553.819 99.473 581.981 139.33 622.913C189.711 674.653 210.495 742.844 206.271 816.987C201.885 893.98 163.337 955.472 125.615 1018.08C99.7911 1060.94 77.6615 1095.13 55.7347 1140.91C27.2538 1200.38 18.7855 1191.26 30.5 1261"
          stroke="url(#gradient1)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M94 -0.5C85 13 71.6192 34.4224 54.0837 87.1689C16.5347 200.116 32.8444 301.77 83.1461 407.584C131.394 509.078 203.633 597.948 273.848 682.201C316.713 733.637 370.429 785.538 370.995 860.307C372.179 1016.87 176.538 1068.31 176.538 1220.38"
          stroke="url(#gradient2)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M52.5 -1.5C42.5 6 28.4576 43.018 21.1032 107.532C6.9342 231.825 76.7687 342.101 139.965 438.476C218.965 558.953 313.821 686.801 308.135 843.295C303.112 981.564 228.597 1086.63 138.659 1175.99"
          stroke="url(#gradient3)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M220.969 1197.5C178 1171.38 134.032 1142.33 99.2349 1100.1C55.2492 1046.72 37.1038 976.366 40.7914 899.872C44.6207 820.439 78.2757 756.998 111.209 692.405C133.754 648.185 153.075 612.914 172.218 565.68C197.083 504.328 228.06 427.995 217.833 356.04C210.262 302.777 185.544 265.214 158.106 225.694C118.28 168.331 84.4216 132.295 36.8001 85.3914C34.4993 83.1252 6.80138 56.0329 -3 45.5"
          stroke="url(#gradient4)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
