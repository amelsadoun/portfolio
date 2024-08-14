import ContactUsButton from "./contactUsButton";
import LanguageSelect from "./languageSelect";

export default function Header() {
  return (
    <header className="flex pl-[13vw] p-5 pr-[5vw] justify-end">
      <div className="flex self-center justify-between gap-9">
        {/* <LanguageSelect /> */}
      <ContactUsButton/>
      </div>
    </header>
  );
}
