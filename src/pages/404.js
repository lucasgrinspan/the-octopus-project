import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>This page doesn't exist!</h1>
        <p>The sadness...</p>
        <p>
            <Link to="/">Take me home</Link>
        </p>
    </Layout>
);

export default NotFoundPage;
