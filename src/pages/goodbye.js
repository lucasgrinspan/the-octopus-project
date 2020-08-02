import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import "../css/goodbye.css";

const GoodbyePage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "landing.jpg" }) {
                childImageSharp {
                    fixed(width: 300, height: 300) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <SEO title="Goodbye" />
            <h1>Goodbye</h1>
            <p>It's true. We're ready to say goodbye.</p>
            <p>
                It has been an incredible few months. The amount of support
                we've received has been inspiring to us all. While The Octopus
                Project may be coming to an end, we hope the spirit of our cause
                will live on through you all.
            </p>
            <p>
                Thank you so much for your support during this time. Just for
                old time's sake, the website and all of its pages will be left
                online as a reminder to what we've accomplished. If you have any
                outstanding orders, those will get to you as soon as possible.
            </p>
            <p>
                Sincerely, <br></br>All of us here at The Octopus Project
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 60,
                }}
            >
                <div id="goodbye-image">
                    <Img
                        alt="A cute crochet octopus"
                        fixed={data.file.childImageSharp.fixed}
                        style={{
                            borderRadius: 10,
                            boxShadow:
                                "0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),0 16px 16px rgba(0, 0, 0, 0.12)",
                        }}
                    />
                    <p id="image-caption">Goodbye!</p>
                </div>
            </div>
        </Layout>
    );
};

export default GoodbyePage;
