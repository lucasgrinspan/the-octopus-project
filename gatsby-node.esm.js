import path from "path";
import { DONATIONS } from "./src/data/donations";

exports.createPages = ({ actions: { createPage } }) => {
    DONATIONS.filter(donation => {
        const timeSinceOrdered = Math.abs(new Date(donation.date) - new Date());
        const daysSinceOrdered = Math.ceil(
            timeSinceOrdered / (1000 * 60 * 60 * 24)
        );

        // gives 10 days for order to arrive
        const expired = donation.sent && daysSinceOrdered >= 10;
        const onlyRaffle =
            donation.order.includes("raffle") && donation.order.length === 1;
        const noOrder = donation.order.length === 0;

        return !expired && !onlyRaffle && !noOrder;
    }).map((donation, index) => {
        return createPage({
            path: `order/${index * 5}`,
            component: path.resolve("./src/templates/order/order-template.js"),
            context: { donation },
        });
    });
};
