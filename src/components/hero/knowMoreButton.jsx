export default function KnowMoreButton() {
    //I copied this code from the world wide web
      return (
      <a
        href="#skills"
        class="relative w-56 items-center justify-start inline-block px-7 py-3 overflow-hidden text-xl rounded-full group"
      >
        <span class="w-32 h-32 translate-x-0 absolute bg-white opacity-[3%]"></span>
        <span class="absolute top-0 rounded-r-full left-0 w-72 h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-72 bg-white opacity-100 group-hover:translate-x-0"></span>
        <span class="relative flex justify-around w-full text-white transition-colors duration-200 ease-in-out group-hover:text-dark">
          Find out more <p>↓</p>
        </span>
        <span class="absolute inset-0 border-[1px] border-white rounded-full"></span>
      </a>
    );
  }
  