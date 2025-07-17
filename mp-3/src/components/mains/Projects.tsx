import SimpleCalculator from '../Calculator'; 

export default function Projects() {
  return (
    <>
      <main>

        <p>
          I was introduced to coding in my freshman year of college, and have fell in love with it since.
          These are the various projects I have worked on throughout the years.
        </p>

        <article>
          <h3>WanderWord Android App</h3>
          <p>
            Built in my Android App Development class, WanderWord is a Kotlin-based mobile app that lets users pin new vocabulary words to real-world map locations.
            I integrated Google Maps for geolocation, used Room for offline data storage, and leveraged Retrofit with coroutines to fetch dictionary definitions on demand.
            Through this project I honed my understanding of MVVM architecture, asynchronous network calls, and designing an intuitive, location-aware UI.
          </p>
        </article>

        <article>
          <h3>Reliable Transport Protocol</h3>
          <p>
            For my Computer Networks course, I coded both Go-Back-N and Selective Repeat schemes in a simulated sender/receiver setup.
            Writing packet retransmission, cumulative ACKs, and timeout logic gave me a deep appreciation for flow control, error detection,
            and the trade-offs between reliability and throughput in real networks.
          </p>
        </article>

        <article>
          <h3>LAMBDA-to-Python Compiler</h3>
          <p>
            In Modern Compiler Design and Implementation, I built a compiler that parses extended λ-calculus syntax into an abstract syntax tree
            and then generates equivalent Python code. This project taught me the full compilation pipeline—lexing, recursive parsing, AST traversal,
            and code emission—along with how to map functional constructs into an imperative language.
          </p>
        </article>

        <article>
          <h3>NBA 2K25 MyPlayer Builder</h3>
          <p>
            Developed in Full Stack Application Development, this Django site lets users choose badge levels and input player height to calculate
            attribute requirements and estimate overall ratings. I modeled complex relationships with Django ORM, loaded CSV game data, and built
            dynamic forms and views—learning how to tie front-end interactivity to back-end logic in a production-style web app.
          </p>
        </article>

        <SimpleCalculator />
      </main>
    </>
  );
}