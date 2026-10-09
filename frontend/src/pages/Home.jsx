import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <section className="why-eduguide">
                <div className="section-heading">
                    <span className="section-badge">
                        Why EduGuide-AI?
                    </span>

                    <h2>
                        Stop searching. Start learning.
                    </h2>

                    <p>
                        Finding the right lecture on YouTube can take
                        a lot of time. EduGuide-AI helps B.Tech students
                        discover lectures according to their academic
                        needs and learning goals.
                    </p>
                </div>

                <div className="why-grid">

                    <div className="why-card">
                        <div className="why-icon">🎯</div>

                        <h3>Learn with Purpose</h3>

                        <p>
                            Find lectures according to your learning
                            goal, whether you want detailed learning,
                            quick revision or GATE preparation.
                        </p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">⏱️</div>

                        <h3>Save Your Time</h3>

                        <p>
                            Avoid spending hours searching through
                            hundreds of videos to find the right lecture.
                        </p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">🤖</div>

                        <h3>Learn With AI</h3>

                        <p>
                            Go beyond watching lectures with AI-powered
                            notes, summaries, quizzes and doubt solving.
                        </p>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;