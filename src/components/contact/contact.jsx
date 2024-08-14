import ContactElement from "./contactElement";
import contactLinks from "./contactLinks";

export default function Contact() {
  return (
    <div className="flex flex-col text-center justify-evenly gap-20 py-32 mx-40 align-middle">
      <h1 className="font-bold text-5xl text-light-pink">CONTACT ME</h1>
      <div className="flex flex-row justify-around items-center align-middle flex-wrap gap-32">
        {contactLinks.map((contact) => (
          <ContactElement info={contact} />
        ))}
      </div>
    </div>
  );
}
