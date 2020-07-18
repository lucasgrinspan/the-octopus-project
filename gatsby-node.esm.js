import path from "path";
import { DONATIONS } from "./src/data/donations";

exports.createPages = ({ actions: { createPage } }) => {
    DONATIONS.map((donation, index) => {
        return createPage({
            path: `order/${index * 5}`,
            component: path.resolve("./src/templates/order/order.js"),
            context: { donation },
        });
    });
};
