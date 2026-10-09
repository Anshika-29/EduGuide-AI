
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        🎓 EduGuide <span>AI</span>
                    </Link>

                    <p>
                        Learn smarter, find the right lectures, and make
                        your B.Tech learning journey easier with AI.
                    </p>

                    <div className="footer-badge">
                        ✨ Built for smarter learning
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Explore</h3>
                    <Link to="/">Home</Link>
                    <Link to="/lectures/search">Find Lectures</Link>
                    <Link to="/lectures">Lecture Results</Link>
                </div>

                <div className="footer-column">
                    <h3>Learning Tools</h3>
                    <Link to="/lectures/search">AI Notes</Link>
                    <Link to="/lectures/search">AI Summaries</Link>
                    <Link to="/lectures/search">AI Quizzes</Link>
                </div>

                <div className="footer-column">
                    <h3>Our Mission</h3>
                    <p>
                        Helping students spend less time searching
                        and more time learning.
                    </p>
                    <a href="#about">Why EduGuide-AI?</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} EduGuide-AI.
                    Made for learners, with 💙.
                </p>
                <a href="#top">Back to top ↑</a>
            </div>
        </footer>
    );
}

export default Footer;