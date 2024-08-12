export default function ContactUsButton() {
  //I copied this code from the world wide web
    return (
    <a
      href="#_"
      class="relative items-center justify-start inline-block px-7 py-3 overflow-hidden text-xl rounded-full group"
    >
      <span class="w-48 h-48 translate-x-0 absolute bg-white opacity-[3%]"></span>
      <span class="absolute top-0 rounded-r-full left-0 w-[250px] h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-60 bg-white opacity-100 group-hover:translate-x-0"></span>
      <span class="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-dark">
        Contact me
      </span>
      <span class="absolute inset-0 border-[1px] border-white rounded-full"></span>
    </a>
  );
}
