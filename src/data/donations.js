const validateDonations = donations => {
    const raiseError = (message, donation) => {
        console.error(message);
        console.error(donation);
    };
    donations.forEach(donation => {
        // amount is greater than zero
        if (!(donation.amount > 0)) {
            raiseError(
                "Invalid donation: donation amount is less than zero",
                donation
            );
        }

        // organization is a string and exists
        if (typeof donation.org !== "string" || !(donation.org.length > 0)) {
            raiseError("Invalid charity organization", donation);
        }

        // date exists and can be parsed
        if (isNaN(Date.parse(donation.date))) {
            raiseError("Invalid date", donation);
        }

        // a valid id is given to the post
        if (!(donation.id >= 0)) {
            raiseError("invalid id", donation);
        }

        // check that order exists even if empty
        if (donation.order.length < 0) {
            raiseError("order is not an array", donation);
        }

        const objects = [
            "raffle",
            "octopus",
            "scrunchie",
            "bracelet",
            "coaster",
            "keychain",
            "drawing",
            "bear",
        ];
        donation.order.forEach(x => {
            if (!objects.includes(x)) {
                raiseError("Invalid order", donation);
            }
        });

        if (donation.order.includes("octopus")) {
            if (donation.octopusColor.length < 0) {
                raiseError("octopus color array is expected", donation);
            }
        }

        if (donation.order.includes("bracelet")) {
            if (donation.braceletColor.length < 0) {
                raiseError("bracelet color array is expected", donation);
            }
        }

        if (donation.order.includes("coaster")) {
            if (donation.coasterColor.length < 0) {
                raiseError("coaster color array is expected", donation);
            }
        }

        if (donation.order.includes("raffle")) {
            if (!(donation.raffleEntry > 0)) {
                raiseError("raffle entry expected", donation);
            }
        }

        if (!donation.hasOwnProperty("sent")) {
            raiseError("sent field is expected", donation);
        }
    });

    return donations;
};

const donationData = [
    {
        amount: 5,
        org: "Dream Defenders Miami",
        date: "June 26, 2020",
        id: 0,
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "Black Trans Advocacy Coalition",
        date: "June 26, 2020",
        id: 1,
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "National Queer and Trans Therapists of Color Network",
        date: "June 26, 2020",
        id: 2,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Central Florida LGBTQ+ Relief Fund",
        date: "June 26, 2020",
        id: 3,
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 50,
        org: "The LoveLand Foundation",
        date: "June 26, 2020",
        id: 4,
        order: [],
        octopusColor: [],
        sent: true,
    },
    {
        amount: 50,
        org: "Dream Defenders Miami",
        date: "June 26, 2020",
        id: 4,
        order: [],
        octopusColor: [],
        sent: true,
    },
    {
        amount: 10,
        org: "National Bail Out",
        date: "June 26, 2020",
        id: 5,
        order: ["octopus"],
        octopusColor: ["coral", "white"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Dream Defenders Miami",
        date: "June 26, 2020",
        id: 6,
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 25,
        org: "The LoveLand Foundation",
        date: "June 26, 2020",
        id: 6,
        order: [],
        sent: true,
    },
    {
        amount: 10,
        org: "LGBTQ Freedom Fund",
        date: "June 26, 2020",
        id: 7,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
    },
    {
        amount: 5,
        org: "Come Out With Pride Orlando",
        date: "June 27, 2020",
        id: 8,
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        date: "June 27, 2020",
        id: 9,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "June 27, 2020",
        id: 10,
        order: ["octopus"],
        octopusColor: ["light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "National Queer and Trans Therapists of Color Network",
        date: "June 27, 2020",
        id: 11,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "North Carolina",
    },
    {
        amount: 5,
        org: "Victory Fund",
        date: "June 27, 2020",
        id: 12,
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "June 27, 2020",
        id: 12,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "LGBTQ Freedom Fund",
        date: "June 27, 2020",
        id: 13,
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        date: "June 27, 2020",
        id: 14,
        order: ["octopus"],
        octopusColor: ["light blue", "light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Tampa General Hospital COVID-19 Relief Fund",
        date: "June 27, 2020",
        id: 15,
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        date: "June 27, 2020",
        id: 15,
        order: [],
        octopusColor: [],
        sent: true,
    },
    {
        amount: 10,
        org: "The Trevor Project",
        date: "June 27, 2020",
        id: 16,
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Humanitarian Crisis in Yemen",
        date: "June 27, 2020",
        id: 17,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The Trevor Project",
        date: "June 27, 2020",
        id: 18,
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Victory Fund",
        date: "June 27, 2020",
        id: 19,
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        date: "June 27, 2020",
        id: 20,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "June 27, 2020",
        id: 21,
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 22,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 23,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 7,
        org: "The Trevor Project",
        id: 24,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        id: 12,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 12,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "National Queer and Trans Therapists of Color Network",
        id: 12,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Dream Defenders Miami",
        id: 12,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 12,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["dark green"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 25,
        date: "June 27, 2020",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 26,
        date: "June 28, 2020",
        order: ["octopus"],
        octopusColor: ["light pink", "lavender", "yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 7,
        org: "Dream Defenders Miami",
        id: 27,
        date: "June 28, 2020",
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 28,
        date: "June 28, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "National Queer and Trans Therapists of Color Network",
        id: 29,
        date: "June 28, 2020",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "National Queer and Trans Therapists of Color Network",
        id: 30,
        date: "June 28, 2020",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "New Jersey",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 31,
        date: "June 28, 2020",
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 32,
        date: "June 28, 2020",
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 33,
        date: "June 29, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "(F)EMPOWER Miami",
        id: 34,
        date: "June 29, 2020",
        order: ["keychain"],
        keychainColor: [],
        sent: true,
    },
    {
        amount: 5,
        org: "Dream Defenders Miami",
        id: 35,
        date: "June 29, 2020",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Victory Fund",
        id: 35,
        date: "June 29, 2020",
        order: ["octopus"],
        octopusColor: ["white"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "Project No Labels",
        id: 36,
        date: "June 29, 2020",
        order: ["octopus", "bracelet"],
        octopusColor: ["coral"],
        braceletColor: ["bi"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Black Girls CODE",
        id: 37,
        date: "June 29, 2020",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Maine",
    },
    {
        amount: 10,
        org: "Victory Fund",
        id: 37,
        date: "June 29, 2020",
        order: ["bracelet"],
        braceletColor: ["pan"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Dream Defenders Miami",
        id: 38,
        date: "June 29, 2020",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 39,
        date: "June 30, 2020",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 40,
        date: "June 30, 2020",
        order: ["bracelet"],
        braceletColor: ["bi"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Black Girls CODE",
        id: 40,
        date: "June 30, 2020",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 41,
        date: "June 30, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 25,
        org: "Black Girls CODE",
        id: 42,
        date: "June 30, 2020",
        order: ["octopus"],
        octopusColor: ["coral"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "The LoveLand Foundation",
        id: 43,
        date: "June 30, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 12,
        org: "Dream Defenders Miami",
        id: 44,
        date: "June 30, 2020",
        order: ["octopus"],
        octopusColor: ["dark green"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "National Bail Out",
        id: 45,
        date: "June 30, 2020",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 46,
        date: "June 30, 2020",
        order: ["octopus", "bracelet"],
        octopusColor: ["orange"],
        braceletColor: ["pan"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The University Club Family Fund",
        id: 47,
        date: "July 01, 2020",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Campaign Zero",
        id: 48,
        date: "July 01, 2020",
        order: ["octopus"],
        octopusColor: ["light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        id: 49,
        date: "July 02, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Black Trans Advocacy Coalition",
        id: 50,
        date: "July 02, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        id: 51,
        date: "July 02, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 170,
        org: "Black Girls CODE",
        id: 52,
        date: "July 02, 2020",
        order: [],
        sent: true,
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 51,
        date: "July 02, 2020",
        order: ["octopus"],
        octopusColor: ["white"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 53,
        date: "July 02, 2020",
        order: ["octopus", "scrunchie"],
        octopusColor: ["multicolored"],
        sent: true,
    },
    {
        amount: 5,
        org: "Campaign Zero",
        id: 54,
        date: "July 03, 2020",
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Black Girls CODE",
        id: 52,
        date: "July 03, 2020",
        order: ["raffle"],
        raffleEntry: 3,
        sent: true,
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 55,
        date: "July 03, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 56,
        date: "July 03, 2020",
        order: ["bracelet"],
        braceletColor: ["pride"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 57,
        date: "July 03, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 12,
        org: "The University Club Family Fund",
        id: 58,
        date: "July 03, 2020",
        order: ["octopus", "raffle"],
        octopusColor: ["white"],
        raffleEntry: 2,
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "Black Girls CODE",
        id: 59,
        date: "July 03, 2020",
        order: ["raffle"],
        raffleEntry: 5,
        sent: true,
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 60,
        date: "July 04, 2020",
        order: ["octopus"],
        octopusColor: ["maroon", "hot pink"],
        sent: true,
        state: "North Carolina",
    },
    {
        amount: 10,
        org: "Dream Defenders Miami",
        id: 60,
        date: "July 04, 2020",
        order: ["raffle"],
        raffleEntry: 3,
        sent: true,
    },
    {
        amount: 7,
        org: "The University Club Family Fund",
        id: 61,
        date: "July 04, 2020",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 62,
        date: "July 04, 2020",
        order: ["raffle"],
        raffleEntry: 5,
        sent: true,
    },
    {
        amount: 5,
        org: "National Queer and Trans Therapists of Color Network",
        id: 62,
        date: "July 04, 2020",
        order: [],
        sent: true,
    },
    {
        amount: 5,
        org: "Campaign Zero",
        id: 62,
        date: "July 04, 2020",
        order: [],
        sent: true,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 62,
        date: "July 04, 2020",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 63,
        date: "July 04, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        date: "July 04, 2020",
        id: 64,
        order: ["octopus", "raffle"],
        octopusColor: ["multicolored"],
        raffleEntry: 1,
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Black Girls CODE",
        date: "July 04, 2020",
        id: 65,
        order: ["octopus"],
        octopusColor: ["light pink", "light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 9,
        org: "The Trevor Project",
        date: "July 04, 2020",
        order: ["octopus", "raffle"],
        id: 65,
        octopusColor: ["multicolored"],
        raffleEntry: 2,
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        date: "July 04, 2020",
        id: 66,
        order: ["octopus", "raffle"],
        octopusColor: ["multicolored"],
        raffleEntry: 3,
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        date: "July 05, 2020",
        id: 69,
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The University Club Family Fund",
        date: "July 06, 2020",
        id: 67,
        order: ["octopus", "coaster"],
        octopusColor: ["orange"],
        coasterColor: ["blm", "bi"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        date: "July 06, 2020",
        id: 68,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
    },
    {
        amount: 3,
        org: "Campaign Zero",
        date: "July 06, 2020",
        id: 24,
        order: ["raffle"],
        raffleEntry: 1,
        sent: true,
    },
    {
        amount: 5,
        org:
            "The Griffin-Gracy Educational Retreat & Historical Center’s LGBTQ Freedom Fund",
        date: "July 06, 2020",
        id: 70,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        date: "July 07, 2020",
        id: 71,
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
    },
    {
        amount: 36,
        org: "The Trevor Project",
        date: "July 07, 2020",
        id: 72,
        order: ["octopus", "raffle"],
        octopusColor: ["lavender"],
        raffleEntry: 10,
        sent: true,
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "July 07, 2020",
        id: 73,
        order: ["scrunchie"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The Trevor Project",
        date: "July 07, 2020",
        id: 74,
        order: ["octopus", "raffle"],
        octopusColor: ["hot pink"],
        raffleEntry: 3,
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 21,
        date: "July 07, 2020",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 76,
        date: "July 07, 2020",
        order: ["octopus", "raffle"],
        octopusColor: ["hot pink"],
        raffleEntry: 3,
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "Campaign Zero",
        id: 77,
        date: "July 08, 2020",
        order: ["octopus", "raffle"],
        octopusColor: ["teal"],
        raffleEntry: 5,
        sent: true,
        state: "New York",
    },
    {
        amount: 11,
        org: "Victory Fund",
        id: 78,
        date: "July 08, 2020",
        order: ["octopus"],
        octopusColor: ["yellow", "yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 78,
        date: "July 08, 2020",
        order: ["raffle"],
        raffleEntry: 3,
        sent: true,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 79,
        date: "July 08, 2020",
        order: ["bracelet"],
        braceletColor: ["lesbian"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 80,
        date: "July 09, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 81,
        date: "July 09, 2020",
        order: ["octopus"],
        octopusColor: ["lavender", "light pink"],
        raffleEntry: 1,
        sent: true,
        state: "Florida",
    },
    {
        amount: 7,
        org: "Central Florida LGBTQ+ Relief Fund",
        id: 81,
        date: "July 09, 2020",
        order: ["raffle"],
        raffleEntry: 4,
        sent: true,
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 82,
        date: "July 09, 2020",
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 21,
        date: "July 09, 2020",
        order: ["scrunchie"],
        sent: true,
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        id: 83,
        date: "July 09, 2020",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: true,
    },
    {
        amount: 25,
        org: "Dream Defenders Miami",
        id: 84,
        date: "July 09, 2020",
        order: ["octopus", "raffle"],
        octopusColor: ["dark green"],
        raffleEntry: 6,
        sent: true,
    },
    {
        amount: 20,
        org: "NAACP Legal Defense and Education Fund",
        id: 85,
        date: "July 09, 2020",
        order: ["octopus"],
        octopusColor: ["grey", "grey", "lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "The Trevor Project",
        id: 85,
        date: "July 09, 2020",
        order: ["raffle"],
        raffleEntry: 10,
        sent: true,
    },
    {
        amount: 10,
        org: "Central Florida LGBTQ+ Relief Fund",
        id: 86,
        date: "July 09, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 7.5,
        org: "Black Girls CODE",
        id: 85,
        date: "July 09, 2020",
        order: [],
        sent: true,
    },
    {
        amount: 10.5,
        org: "It Gets Better Project",
        id: 87,
        date: "July 09, 2020",
        order: ["octopus", "raffle"],
        octopusColor: ["multicolored"],
        raffleEntry: 1,
        sent: true,
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        id: 30,
        date: "July 09, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 30,
        org: "LGBTQ Freedom Fund",
        id: 88,
        date: "July 10, 2020",
        order: ["raffle"],
        raffleEntry: 10,
        sent: true,
    },
    {
        amount: 30,
        org: "Black Girls CODE",
        id: 59,
        date: "July 10, 2020",
        order: ["raffle"],
        raffleEntry: 10,
        sent: true,
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 90,
        date: "July 10, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Dream Defenders Miami",
        id: 89,
        date: "July 11, 2020", // 10th in erins
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: true,
        state: "California",
    },
    {
        amount: 21,
        org: "Black Trans Advocacy Coalition",
        id: 91,
        date: "July 11, 2020",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: true,
        state: "Michigan",
    },
    {
        amount: 8,
        org: "The University Club Family Fund",
        id: 92,
        date: "July 11, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Central Florida LGBTQ+ Relief Fund",
        id: 93,
        date: "July 12, 2020",
        order: ["octopus"],
        octopusColor: ["hot pink", "multicolored"],
        sent: true,
        state: "Alabama",
    },
    {
        amount: 30,
        org: "The Trevor Project",
        id: 94,
        order: ["bear"],
        date: "July 13, 2020",
        sent: true,
    },
    {
        amount: 28,
        org: "Dream Defenders Miami",
        id: 95,
        date: "July 13, 2020",
        order: ["octopus"],
        octopusColor: ["teal", "lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The Trevor Project",
        id: 95,
        date: "July 13, 2020",
        order: [],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 96,
        date: "July 13, 2020",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Illinois",
    },
    {
        amount: 5,
        org: "Campaign Zero",
        id: 97,
        date: "July 13, 2020",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "The University Club Family Fund",
        id: 61,
        date: "July 13, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 98,
        date: "July 13, 2020",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Central Florida LGBTQ+ Relief Fund",
        id: 99,
        date: "July 17, 2020 10:41",
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
    },
    {
        amount: 5,
        org: "Come Out With Pride Orlando",
        id: 100,
        date: "July 17, 2020 11:45",
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
    },
    {
        amount: 10,
        org: "Dream Defenders Miami",
        id: 101,
        date: "July 18, 2020 00:07",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
    },
    {
        amount: 10,
        org: "Black Trans Advocacy Coalition",
        id: 102,
        date: "July 18, 2020 23:41",
        order: ["octopus"],
        octopusColor: ["white", "maroon"],
        sent: true,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 102,
        date: "July 17, 2020 23:41",
        order: [],
        sent: true,
    },
    {
        amount: 20,
        org: "The LoveLand Foundation",
        id: 103,
        date: "July 23, 2020 11:44",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
    },
    {
        amount: 10,
        org: "The Trevor Project",
        id: 104,
        date: "July 23, 2020 15:05",
        order: ["bear"],
        bearColor: ["rainbow"],
        sent: true,
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        id: 105,
        date: "July 23, 2020 19:00",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        id: 106,
        date: "July 24, 2020 19:24",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
    },
    {
        amount: 5,
        org: "Dream Defenders Miami",
        id: 0,
        date: "July 24, 2020 21:10",
        order: ["octopus"],
        octopusColor: ["white"],
        sent: true,
    },
    {
        amount: 50,
        org: "Dream Defenders Miami",
        id: 107,
        date: "August 9, 2020 15:12",
        order: [],
        sent: true,
    },
];

export const DONATIONS = validateDonations(donationData);
