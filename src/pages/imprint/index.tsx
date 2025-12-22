import React from "react";
import "./index.css";
import Link from '@docusaurus/Link';


export default function ImprintPage() {
    return (
        <section id="imprint" className="imprint">
            <div className="imprint-content">
                <div className="imprint-card">
                    <h2 className="titleMedium">Imprint</h2>
                    <p className="imprint-text">
                        Christopher Schuf <br />
                        Christoph-von-Beer Str.1 <br />
                        86637 Wertingen <br />
                    </p>


                    <p className="imprint-subtitle">Contact:</p>
                    <div className="contactContactData">

                        <p className="imprint-text">
                            Email:{" "}
                            <a className="aContact" href="mailto:christopherschuf2000@gmail.com">
                                christopherschuf2000@gmail.com
                            </a>
                        </p>

                        <p className="imprint-text">
                            Tel.:{" "}
                            <a className="aContact" href="tel:+4917661432847">
                                +4917661432847
                            </a>
                        </p>
                    </div>
                </div>


                <div className="contact">
                    <span className="span">© Christopher Schuf</span>
                    <Link className="aContact" to="/imprint">
                        Legal Notice
                    </Link>
                    <Link className="aContact" to="/">
                        Home
                    </Link>

                </div>
            </div>
        </section>
    );
}