import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
    IoIosRadioButtonOff,
    IoIosCheckmarkCircle,
    IoIosHeart,
} from "react-icons/io";
// import OctopusImage from "../../components/product-images/octopus-image";
// import BraceletImage from "../../components/product-images/bracelet-image";
// import CoasterImage from "../../components/product-images/coaster-image";
// import BearImage from "../../components/product-images/bear-image";
// import DrawingImage from "../../components/product-images/drawing-image";
// import ScrunchieImage from "../../components/product-images/scrunchie-image";
import "./order.css";
import { Link } from "gatsby";

const Stepper = ({ amount, org, sent, order, date }) => {
    let orderDisplay = "order";
    if (order.length === 1 && order[0] !== "raffle") {
        orderDisplay = order[0];
    }

    const timeSinceOrdered = Math.abs(date - new Date());
    const daysSinceOrdered = Math.ceil(
        timeSinceOrdered / (1000 * 60 * 60 * 24)
    );

    let stepNumber = 0;
    if (daysSinceOrdered >= 5) {
        stepNumber = 1;
    }
    if (sent) {
        stepNumber = 2;
    }

    // In order, the descriptions for each step
    const stepDescriptions = [
        <>
            We've received your order! We'll get started on it as soon as
            possible.
        </>,
        <>
            Millions of tiny forest elves are hand crafting your {orderDisplay}.
        </>,
        <>
            Your package has been dropped off in the mailbox! If you love your{" "}
            {orderDisplay}, tag us with a picture of it on your Instagram!
            <br />
            <strong>Don't want our relationship to end? </strong>
            Consider <Link to="/get-involved/">getting involved</Link>! We miss
            you already. <IoIosHeart style={{ marginBottom: -3 }} />
        </>,
    ];

    // These are the step titles if the step is reached
    const stepTitlesDone = [
        `You donated $${amount.toFixed(2)} to ${org}!`,
        `We started your ${orderDisplay}!`,
        `Shipped your ${orderDisplay}!`,
    ];

    // These are the step titles if the step is not reached
    const stepTitles = [
        `You donated $${amount} to ${org}!`,
        `Creating your ${orderDisplay}!`,
        `Shipping your ${orderDisplay}!`,
    ];

    const DoneIcon = <IoIosCheckmarkCircle className="order-stepper-icon" />;
    const NotDoneIcon = (
        <IoIosRadioButtonOff className="order-stepper-icon disabled" />
    );

    const DoneStepLine = <div className="order-stepper-line"></div>;
    const NotDoneStepLine = <div className="not-done-order-stepper-line"></div>;

    return (
        <div id="order-stepper">
            {stepNumber >= 0 ? DoneIcon : NotDoneIcon}
            <p
                className={`order-stepper-text ${
                    stepNumber < 0 ? "disabled" : ""
                }`}
            >
                {stepNumber >= 0 ? stepTitlesDone[0] : stepTitles[0]}
            </p>
            {stepNumber >= 1 ? DoneStepLine : NotDoneStepLine}
            <div>
                {stepNumber === 0 && (
                    <p className="order-stepper-description">
                        {stepDescriptions[0]}
                    </p>
                )}
            </div>
            {stepNumber >= 1 ? DoneIcon : NotDoneIcon}
            <p
                className={`order-stepper-text ${
                    stepNumber < 1 ? "disabled" : ""
                }`}
            >
                {" "}
                {stepNumber >= 1 ? stepTitlesDone[1] : stepTitles[1]}
            </p>
            {stepNumber >= 2 ? DoneStepLine : NotDoneStepLine}
            <div>
                {stepNumber === 1 && (
                    <p className="order-stepper-description">
                        {stepDescriptions[1]}
                    </p>
                )}
            </div>
            {stepNumber >= 2 ? DoneIcon : NotDoneIcon}
            <p
                className={`order-stepper-text ${
                    stepNumber < 2 ? "disabled" : ""
                }`}
            >
                {" "}
                {stepNumber >= 2 ? stepTitlesDone[2] : stepTitles[2]}
            </p>
            <div></div>
            <div>
                {stepNumber === 2 && (
                    <p className="order-stepper-description">
                        {stepDescriptions[2]}
                    </p>
                )}
            </div>
        </div>
    );
};

const OrderPage = ({ pageContext: { donation } }) => {
    const { amount, org, order, sent, date } = donation;

    const orderArray = [];
    // create the order array with order and color as keys
    order.forEach(item => {
        if (item === "octopus") {
            const { octopusColor } = donation;
            octopusColor.forEach(color => {
                orderArray.push({ item: "octopus", color });
            });
        } else if (item === "bracelet") {
            const { braceletColor } = donation;
            braceletColor.forEach(color => {
                orderArray.push({ item: "bracelet", color });
            });
        } else if (item === "coaster") {
            const { coasterColor } = donation;
            coasterColor.forEach(color => {
                orderArray.push({ item: "coaster", color });
            });
        } else {
            orderArray.push({ item, color: "" });
        }
    });
    return (
        <Layout>
            <SEO title="Your Order" />
            <h1 id="order-title">Thank you for your donation!</h1>
            <Stepper
                amount={amount}
                org={org}
                sent={sent}
                order={order}
                date={new Date(date)}
            />
            <h3 id="order-list-title">Your order:</h3>
            <ul id="order-list">
                {orderArray.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.color}
                            {item.color && " "}
                            {item.item}
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default OrderPage;
