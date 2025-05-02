import ContactElement from "./contactElement";
import contactLinks from "./contactLinks";

export default function Contact() {
  return (
    <section id="contact" className="flex lg:h-72 bg-[#21176E]/70 lg:w-[120vw] py-7 gap-5 flex-col text-center justify-around mt-20 items-center align-middle">
      <h1 className="font-bold text-2xl text-light-pink">CONTACT</h1>
      <div className="flex flex-row max-w-[80%] justify-center items-start align-middle flex-wrap gap-x-16 gap-y-8">
        {contactLinks.map((contact) => (
          <ContactElement info={contact} />
        ))}
      </div>
    </section>
  );
}
