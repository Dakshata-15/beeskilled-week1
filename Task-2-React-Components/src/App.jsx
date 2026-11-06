
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";

function App() {
  function showMessage() {
    alert("Awesome! Your button is working 🚀");
  }

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              ✦ REACT COMPONENTS LAB
            </span>

            <h1>
              Build Better.
              <br />
              <span>Think Reusable.</span>
            </h1>

            <p>
              Exploring the power of React through reusable
              components, dynamic props and interactive state.
              One component at a time.
            </p>

            <Button
              text="Explore Components ↓"
              onClick={() =>
                document.getElementById("components").scrollIntoView({
                  behavior: "smooth"
                })
              }
            />

            <div className="hero-note">
              <span className="status-dot"></span>
              Five components. Endless possibilities.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <i></i><i></i><i></i>
                </div>
                <span>App.jsx</span>
              </div>

              <div className="code-content">
                <p><span className="purple">function</span> <span className="yellow">App</span>() {"{"}</p>
                <p className="indent"><span className="purple">return</span> (</p>
                <p className="indent2"><span className="pink">{"<"}</span> <span className="blue">CreativeIdeas</span> <span className="pink">{"/>"}</span></p>
                <p className="indent">);</p>
                <p>{"}"}</p>
                <div className="code-divider"></div>
                <div className="code-label">BUILD SOMETHING AMAZING ✦</div>
              </div>
            </div>
            <div className="floating-tag tag-one">⚛ React</div>
            <div className="floating-tag tag-two">{"{ }"} Components</div>
          </div>
        </section>

        <section className="components-section" id="components">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE'RE BUILDING</span>
            <h2>Small components.<br /><span>Big possibilities.</span></h2>
            <p>Five essential building blocks of a modern React application.</p>
          </div>

          <div className="cards">
            <Card
              category="01 / NAVIGATION"
              title="Header"
              description="A clean navigation experience that keeps every section within reach."
            />
            <Card
              category="02 / CONTENT"
              title="Card"
              description="Reusable content containers powered by dynamic React props."
            />
            <Card
              category="03 / INTERACTION"
              title="Button"
              description="Interactive actions that respond to user clicks and events."
            />
            <Card
              category="04 / INPUT"
              title="Form"
              description="Capture user input with controlled fields and React state."
            />
            <Card
              category="05 / LAYOUT"
              title="Footer"
              description="A consistent finishing section for a complete application."
            />
          </div>
        </section>

        <section className="demo-section" id="demo">
          <div className="demo-text">
            <span className="eyebrow">INTERACTIVE PLAYGROUND</span>
            <h2>See React <span>in action.</span></h2>
            <p>Click the button to trigger an event, or submit your name to experience state updates in real time.</p>
            <Button text="Test Interaction ↗" onClick={showMessage} />
          </div>

          <div className="form-card" id="contact">
            <div className="form-icon">✳</div>
            <h3>Let's connect.</h3>
            <p>Enter your name to try our interactive form.</p>
            <Form />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
