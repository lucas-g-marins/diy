import "./App.css";
import logo from "/diy-logo.png";
import { useState } from "react";

function App() {
  const responses = [
    "you know what. i think you got this one",
    "give it shot",
    "shoot for the moon and you'll hit the stars",
    "why not uhh try it yourself",
    "give it a go",
    "never ever start to stop trying",
    "you can do it. well maybe you can't but that's okay",
    "yeah that sounds like something you can figure out",
    "sit in the discomfort of not knowing for a little while",
    "it will take some time but you'll get there",
    "meow meow yes",
  ];

  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    setResponse(
      `thinking... well not actually this is just a timer to make you think like i'm thinking but really i'm just programmed to wait for 3 seconds before giving you a response`,
    );
    setTimeout(async () => {
      await setResponse(randomResponse);
    }, 3000);
  };

  return (
    <>
      <section id="center">
        <img className="logo" src={logo} alt="diy logo" />
        <h1>do it yourself</h1>
        <form className="form" onSubmit={handleSubmit}>
          <textarea
            className="the-input-box"
            placeholder="what do you want to do?"
          ></textarea>
          <button className="all-powerful-button" type="submit">
            hit that button
          </button>
        </form>
        {response && (
          <div>
            <p className="epic-response-text">{response}</p>
          </div>
        )}
      </section>
      <footer>
        <p>made by a human 👨‍🚀</p>
      </footer>
    </>
  );
}

export default App;
