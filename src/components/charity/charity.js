import React from "react"
import "../../css/global.css"
import { FiExternalLink } from "react-icons/fi"

const Charity = ({ title, link, desc, movements }) => (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: 40 }}>
        <h3 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 5 }}>
            {title}{" "}
            {movements.map(movement => {
                switch (movement) {
                    case "blm":
                        return (
                            <span key="blm" role="img" aria-label="BLM">
                                ✊🏿{" "}
                            </span>
                        )
                    case "lgbt":
                        return (
                            <span key="lgbt" role="img" aria-label="LGBTQ+">
                                🏳️‍🌈{" "}
                            </span>
                        )
                }
            })}
        </h3>
        <p style={{ marginBottom: 5 }}>{desc}</p>
        <a
            href={link}
            className="rainbow"
            target="_blank"
            rel="noopener noreferrer"
        >
            Visit
            <FiExternalLink style={{ marginLeft: 10 }} />
        </a>
    </div>
)

export default Charity
