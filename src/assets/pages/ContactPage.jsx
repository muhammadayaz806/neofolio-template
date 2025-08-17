import Contact from "../../components/Contact";
import { useEffect } from "react";
function ContactPage() {
    useEffect(() => {
    document.title = "Contact - Neofolio";
  }, []);
  return (
    <>
      <Contact />
    </>
  );
}

export default ContactPage;
