import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const OrderPage = () => (
    <Layout>
        <SEO title="Order" />
        <h1>How did you find this page?</h1>
        <p>
            If you're looking to <strong>make an order</strong>. Head to our{" "}
            <Link to="/contact/">contact</Link> page.
        </p>
        <p>
            If you've already ordered and want to{" "}
            <strong>check its status</strong>, check your recent messages with
            us. If you lost it or we forgot to send you an order tracking link,{" "}
            <Link to="/contact/">let us know</Link> and we'll get another one
            out to you!
        </p>
    </Layout>
);

export default OrderPage;
