import {Link } from "react-router-dom";
function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">

                <span className="hero-badge">
                    🎓 AI-Powered Learning Assistant
                </span>

                <h1>
                    Learn Smarter.
                    <br />
                    <span>Find the Right Lecture.</span>
                </h1>

                <p>
                    Discover the right B.Tech lectures based on your
                    branch, year, subject, learning goal and difficulty.
                </p>

                <div className="hero-highlights">
                   <Link to="/lectures/search" className="hero-feature">
        🔍 Smart Lecture Search
    </Link>

    <Link to="/lectures/search" className="hero-feature">
        ✨ AI Summaries
    </Link>

    <Link to="/lectures/search" className="hero-feature">
        🧠 AI Quizzes
    </Link>

    <Link to="/lectures/search" className="hero-feature">
        💬 Doubt Solving
    </Link>
                </div>
                <div className="hero-actions"> <Link to="/lectures/search" className="hero-cta"> Start Finding Lectures → </Link> </div>

            </div>
        </section>
    );
}

export default Hero;