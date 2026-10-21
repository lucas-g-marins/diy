import "./App.css";
import logo from "/diy-logo.png";

function App() {
  const responses = [
    "you know what. i think you got this one",
    "give it shot",
    "shoot for the moon and you'll hit the stars",
    "why not uhh try it yourself",
    "give it a go",
    "never ever start to stop giving up",
    "you can do it. well maybe you can't but that's okay",
    "yeah that sounds like something you can figure out",
    "sit in the discomfort of not knowing for a little while",
    "it will take some time but you'll get there",
  ];

  return (
    <>
      <section id="center">
        <img className="logo" src={logo} alt="diy logo" />
        <h1>do it yourself</h1>
        <form>
          <textarea placeholder="what do you want to do?"></textarea>
        </form>
      </section>
      <footer>
        <p>made by a human 👨‍🚀</p>
      </footer>
    </>
  );
}

export default App;
