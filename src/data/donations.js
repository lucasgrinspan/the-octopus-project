const validateDonations = donations => {
    const raiseError = (message, donation) => {
        console.error(message)
        console.error(donation)
    }
    donations.forEach(donation => {
        // amount is greater than zero
        if (!(donation.amount > 0)) {
            raiseError(
                "Invalid donation: donation amount is less than zero",
                donation
            )
        }

        // organization is a string and exists
        if (typeof donation.org !== "string" || !(donation.org.length > 0)) {
            raiseError("Invalid charity organization", donation)
        }

        // date exists and can be parsed
        if (isNaN(Date.parse(donation.date))) {
            raiseError("Invalid date", donation)
        }

        // a valid id is given to the post
        if (!(donation.id >= 0)) {
            raiseError("invalid id", donation)
        }

        // check that order exists even if empty
        if (donation.order.length < 0) {
            raiseError("order is not an array", donation)
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
        ]
        donation.order.forEach(x => {
            if (!objects.includes(x)) {
                raiseError("Invalid order", donation)
            }
        })

        if (donation.order.includes("octopus")) {
            if (donation.octopusColor.length < 0) {
                raiseError("octopus color array is expected", donation)
            }
        }

        if (donation.order.includes("raffle")) {
            if (!(donation.raffleEntry > 0)) {
                raiseError("raffle entry expected", donation)
            }
        }

        if (!donation.hasOwnProperty("sent")) {
            raiseError("sent field is expected", donation)
        }

        if (donation.sent) {
            if (!donation.hasOwnProperty("state")) {
                raiseError("state field is expected", donation)
            }
        }
    })

    return donations
}

const donationData = [
    {
        amount: 5,
        org: "Dream Defenders Miami",
        date: "2020-06-26",
        id: 0,
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "Black Trans Advocacy Coalition",
        date: "2020-06-26",
        id: 1,
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "National Queer and Trans Therapists of Color Network",
        date: "2020-06-26",
        id: 2,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Central Florida LGBTQ+ Relief Fund",
        date: "2020-06-26",
        id: 3,
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 50,
        org: "The LoveLand Foundation",
        date: "2020-06-26",
        id: 4,
        order: ["octopus"],
        octopusColor: [],
        sent: false,
    },
    {
        amount: 50,
        org: "Dream Defenders Miami",
        date: "2020-06-26",
        id: 4,
        order: ["octopus"],
        octopusColor: [],
        sent: false,
    },
    {
        amount: 10,
        org: "National Bail Out",
        date: "2020-06-26",
        id: 5,
        order: ["octopus"],
        octopusColor: ["coral", "white"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Dream Defenders Miami",
        date: "2020-06-26",
        id: 6,
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 25,
        org: "The LoveLand Foundation",
        date: "2020-06-26",
        id: 6,
        order: [],
        octopusColor: [],
        sent: false,
    },
    {
        amount: 10,
        org: "LGBTQ Freedom Fund",
        date: "2020-06-26",
        id: 7,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: false,
    },
    {
        amount: 5,
        org: "Come Out With Pride Orlando",
        date: "2020-06-27",
        id: 8,
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        date: "2020-06-27",
        id: 9,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "2020-06-27",
        id: 10,
        order: ["octopus"],
        octopusColor: ["light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "National Queer and Trans Therapists of Color Network",
        date: "2020-06-27",
        id: 11,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "North Carolina",
    },
    {
        amount: 5,
        org: "Victory Fund",
        date: "2020-06-27",
        id: 12,
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "2020-06-27",
        id: 12,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "LGBTQ Freedom Fund",
        date: "2020-06-27",
        id: 13,
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        date: "2020-06-27",
        id: 14,
        order: ["octopus"],
        octopusColor: ["light blue", "light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Tampa General Hospital COVID-19 Relief Fund",
        date: "2020-06-27",
        id: 15,
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        date: "2020-06-27",
        id: 15,
        order: [],
        octopusColor: [],
        sent: false,
    },
    {
        amount: 10,
        org: "The Trevor Project",
        date: "2020-06-27",
        id: 16,
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Humanitarian Crisis in Yemen",
        date: "2020-06-27",
        id: 17,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The Trevor Project",
        date: "2020-06-27",
        id: 18,
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Victory Fund",
        date: "2020-06-27",
        id: 19,
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        date: "2020-06-27",
        id: 20,
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "2020-06-27",
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
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 23,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 7,
        org: "The Trevor Project",
        id: 24,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        id: 12,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 12,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "National Queer and Trans Therapists of Color Network",
        id: 12,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Dream Defenders Miami",
        id: 12,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 12,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["dark green"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 25,
        date: "2020-06-27",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 26,
        date: "2020-06-28",
        order: ["octopus"],
        octopusColor: ["light pink", "lavender", "yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 7,
        org: "Dream Defenders Miami",
        id: 27,
        date: "2020-06-28",
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 28,
        date: "2020-06-28",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "National Queer and Trans Therapists of Color Network",
        id: 29,
        date: "2020-06-28",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "National Queer and Trans Therapists of Color Network",
        id: 30,
        date: "2020-06-28",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "New Jersey",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 31,
        date: "2020-06-28",
        order: ["octopus"],
        octopusColor: ["light pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 32,
        date: "2020-06-28",
        order: ["octopus"],
        octopusColor: ["maroon"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 33,
        date: "2020-06-29",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "(F)EMPOWER Miami",
        id: 34,
        date: "2020-06-29",
        order: ["keychain"],
        keychainColor: [],
        sent: false,
    },
    {
        amount: 5,
        org: "Dream Defenders Miami",
        id: 35,
        date: "2020-06-29",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Victory Fund",
        id: 35,
        date: "2020-06-29",
        order: ["octopus"],
        octopusColor: ["white"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "Project No Labels",
        id: 36,
        date: "2020-06-29",
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
        date: "2020-06-29",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: true,
        state: "Maine",
    },
    {
        amount: 10,
        org: "Victory Fund",
        id: 37,
        date: "2020-06-29",
        order: ["bracelet"],
        braceletColor: ["pan"],
        sent: false,
    },
    {
        amount: 5,
        org: "Dream Defenders Miami",
        id: 38,
        date: "2020-06-29",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: false,
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 39,
        date: "2020-06-30",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 40,
        date: "2020-06-30",
        order: ["bracelet"],
        braceletColor: ["bi"],
        sent: false,
    },
    {
        amount: 10,
        org: "Black Girls CODE",
        id: 40,
        date: "2020-06-30",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 41,
        date: "2020-06-30",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 25,
        org: "Black Girls CODE",
        id: 42,
        date: "2020-06-30",
        order: ["octopus"],
        octopusColor: ["coral"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 20,
        org: "The LoveLand Foundation",
        id: 43,
        date: "2020-06-30",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 12,
        org: "Dream Defenders Miami",
        id: 44,
        date: "2020-06-30",
        order: ["octopus"],
        octopusColor: ["dark green"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "National Bail Out",
        id: 45,
        date: "2020-06-30",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 46,
        date: "2020-06-30",
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
        date: "2020-07-01",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "Campaign Zero",
        id: 48,
        date: "2020-07-01",
        order: ["octopus"],
        octopusColor: ["light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        id: 49,
        date: "2020-07-02",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Black Trans Advocacy Coalition",
        id: 50,
        date: "2020-07-02",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        id: 51,
        date: "2020-07-02",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 170,
        org: "Black Girls CODE",
        id: 52,
        date: "2020-07-02",
        order: [],
        sent: false,
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 51,
        date: "2020-07-02",
        order: ["octopus"],
        octopusColor: ["white"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 53,
        date: "2020-07-02",
        order: ["octopus", "scrunchie"],
        octopusColor: ["multicolored"],
        sent: false,
    },
    {
        amount: 5,
        org: "Campaign Zero",
        id: 54,
        date: "2020-07-03",
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "Black Girls CODE",
        id: 52,
        date: "2020-07-03",
        order: ["raffle"],
        raffleEntry: 3,
        sent: false,
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 55,
        date: "2020-07-03",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: false,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 56,
        date: "2020-07-03",
        order: ["bracelet"],
        braceletColor: ["pride"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 57,
        date: "2020-07-03",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: false,
    },
    {
        amount: 12,
        org: "The University Club Family Fund",
        id: 58,
        date: "2020-07-03",
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
        date: "2020-07-03",
        order: ["raffle"],
        raffleEntry: 5,
        sent: false,
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 60,
        date: "2020-07-04",
        order: ["octopus"],
        octopusColor: ["maroon", "hot pink"],
        sent: true,
        state: "North Carolina",
    },
    {
        amount: 10,
        org: "Dream Defenders Miami",
        id: 60,
        date: "2020-07-04",
        order: ["raffle"],
        raffleEntry: 3,
        sent: false,
    },
    {
        amount: 7,
        org: "The University Club Family Fund",
        id: 61,
        date: "2020-07-04",
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 5,
        org: "The Trevor Project",
        id: 62,
        date: "2020-07-04",
        order: ["raffle"],
        raffleEntry: 5,
        sent: false,
    },
    {
        amount: 5,
        org: "National Queer and Trans Therapists of Color Network",
        id: 62,
        date: "2020-07-04",
        order: [],
        sent: false,
    },
    {
        amount: 5,
        org: "Campaign Zero",
        id: 62,
        date: "2020-07-04",
        order: [],
        sent: false,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 62,
        date: "2020-07-04",
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: false,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 63,
        date: "2020-07-04",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        date: "2020-07-04",
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
        date: "2020-07-04",
        id: 65,
        order: ["octopus"],
        octopusColor: ["light pink", "light blue"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 9,
        org: "The Trevor Project",
        date: "2020-07-04",
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
        date: "2020-07-04",
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
        date: "2020-07-05",
        id: 69,
        order: ["octopus"],
        octopusColor: ["teal"],
        sent: true,
        state: "Florida",
    },
    {
        amount: 15,
        org: "The University Club Family Fund",
        date: "2020-07-06",
        id: 67,
        order: ["octopus", "coaster"],
        octopusColor: ["orange"],
        coasterColor: ["blm", "pi"],
        sent: false,
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        date: "2020-07-06",
        id: 68,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: false,
    },
    {
        amount: 3,
        org: "Campaign Zero",
        date: "2020-07-06",
        id: 24,
        order: ["raffle"],
        raffleEntry: 1,
        sent: false,
    },
    {
        amount: 5,
        org:
            "The Griffin-Gracy Educational Retreat & Historical Center’s LGBTQ Freedom Fund",
        date: "2020-07-06",
        id: 70,
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: false,
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        date: "2020-07-07",
        id: 71,
        order: ["octopus"],
        octopusColor: ["yellow"],
        sent: false,
    },
    {
        amount: 36,
        org: "The Trevor Project",
        date: "2020-07-07",
        id: 72,
        order: ["octopus", "raffle"],
        octopusColor: ["lavender"],
        raffleEntry: 10,
        sent: false,
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        date: "2020-07-07",
        id: 73,
        order: ["scrunchie"],
        sent: false,
    },
    {
        amount: 15,
        org: "The Trevor Project",
        date: "2020-07-07",
        id: 74,
        order: ["octopus", "raffle"],
        octopusColor: ["hot pink"],
        raffleEntry: 3,
        sent: false,
    },
    {
        amount: 5,
        org: "The LoveLand Foundation",
        id: 21,
        date: "2020-07-07",
        order: ["octopus"],
        octopusColor: ["orange"],
        sent: false,
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 76,
        date: "2020-07-07",
        order: ["octopus", "raffle"],
        octopusColor: ["hot pink"],
        raffleEntry: 3,
        sent: false,
    },
    {
        amount: 20,
        org: "Campaign Zero",
        id: 77,
        date: "2020-07-08",
        order: ["octopus", "raffle"],
        octopusColor: ["teal"],
        raffleEntry: 5,
        sent: false,
    },
    {
        amount: 11,
        org: "Victory Fund",
        id: 78,
        date: "2020-07-08",
        order: ["octopus"],
        octopusColor: ["yellow", "yellow"],
        sent: false,
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 78,
        date: "2020-07-08",
        order: ["raffle"],
        raffleEntry: 3,
        sent: false,
    },
    {
        amount: 5,
        org: "The University Club Family Fund",
        id: 79,
        date: "2020-07-08",
        order: ["bracelet"],
        braceletColor: ["lesbian"],
        sent: false,
    },
    {
        amount: 10,
        org: "The LoveLand Foundation",
        id: 80,
        date: "2020-07-09",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: false,
    },
    {
        amount: 15,
        org: "The LoveLand Foundation",
        id: 81,
        date: "2020-07-09",
        order: ["octopus"],
        octopusColor: ["lavender", "light pink"],
        raffleEntry: 1,
        sent: false,
    },
    {
        amount: 7,
        org: "Central Florida LGBTQ+ Relief Fund",
        id: 81,
        date: "2020-07-09",
        order: ["raffle"],
        raffleEntry: 4,
        sent: false,
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 82,
        date: "2020-07-09",
        order: ["octopus"],
        octopusColor: ["hot pink"],
        sent: false,
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 21,
        date: "2020-07-09",
        order: ["scrunchie"],
        sent: false,
    },
    {
        amount: 5,
        org: "Black Girls CODE",
        id: 83,
        date: "2020-07-09",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: false,
    },
    {
        amount: 25,
        org: "Dream Defenders Miami",
        id: 84,
        date: "2020-07-09",
        order: ["octopus", "raffle"],
        octopusColor: ["dark green"],
        raffleEntry: 6,
        sent: false,
    },
    {
        amount: 20,
        org: "NAACP Legal Defense and Education Fund",
        id: 85,
        date: "2020-07-09",
        order: ["octopus"],
        octopusColor: ["grey", "grey", "lavender"],
        sent: false,
    },
    {
        amount: 20,
        org: "The Trevor Project",
        id: 85,
        date: "2020-07-09",
        order: ["raffle"],
        raffleEntry: 10,
        sent: false,
    },
    {
        amount: 10,
        org: "Central Florida LGBTQ+ Relief Fund",
        id: 86,
        date: "2020-07-09",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: false,
    },
    {
        amount: 7.5,
        org: "Black Girls CODE",
        id: 85,
        date: "2020-07-09",
        order: [],
        sent: false,
    },
    {
        amount: 10.5,
        org: "It Gets Better Project",
        id: 87,
        date: "2020-07-09",
        order: ["octopus", "raffle"],
        octopusColor: ["multicolored"],
        raffleEntry: 1,
        sent: false,
    },
    {
        amount: 10,
        org: "The University Club Family Fund",
        id: 30,
        date: "2020-07-09",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: false,
    },
    {
        amount: 30,
        org: "LGBTQ Freedom Fund",
        id: 88,
        date: "2020-07-10",
        order: ["raffle"],
        raffleEntry: 10,
        sent: false,
    },
    {
        amount: 30,
        org: "Black Girls CODE",
        id: 59,
        date: "2020-07-10",
        order: ["raffle"],
        raffleEntry: 10,
        sent: false,
    },
    {
        amount: 5,
        org: "Black Trans Advocacy Coalition",
        id: 90,
        date: "2020-07-10",
        order: ["octopus"],
        octopusColor: ["lavender"],
        sent: false,
    },
    {
        amount: 10,
        org: "Dream Defenders Miami",
        id: 89,
        date: "2020-07-11", // 10th in erins
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: false,
    },
    {
        amount: 21,
        org: "Black Trans Advocacy Coalition",
        id: 91,
        date: "2020-07-11",
        order: ["octopus"],
        octopusColor: ["grey"],
        sent: false,
    },
    {
        amount: 8,
        org: "The University Club Family Fund",
        id: 92,
        date: "2020-07-11",
        order: ["octopus"],
        octopusColor: ["multicolored"],
        sent: false,
    },
    {
        amount: 10,
        org: "Central Florida LGBTQ+ Relief Fund",
        id: 93,
        date: "2020-07-12",
        order: [],
        sent: false,
    },
]

export const DONATIONS = validateDonations(donationData)
