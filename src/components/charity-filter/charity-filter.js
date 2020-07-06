import React from "react"
import "./charity-filter.css"

const CharityFilter = ({ showOnly }) => {
    const toggleFilter = (selected, movement) => {
        // create fiter object
        let filter = []
        if (document.getElementById("blm-input-filter").checked) {
            filter.push("blm")
        }
        if (document.getElementById("lgbt-input-filter").checked) {
            filter.push("lgbt")
        }
        showOnly(filter)

        if (movement === "blm") {
            document
                .getElementById("blm-filter")
                .classList.toggle("selected", selected)
        } else if (movement === "lgbt") {
            document
                .getElementById("lgbt-filter")
                .classList.toggle("selected", selected)
        } else if (movement === "eco") {
            document
                .getElementById("eco-filter")
                .classList.toggle("selected", selected)
        }
    }

    return (
        <div style={{ marginBottom: 30 }}>
            <h3 style={{ marginBottom: 5 }}>Show only:</h3>
            <div className="filter-wrapper">
                <label id="blm-filter" className="filter-label">
                    <input
                        id="blm-input-filter"
                        type="checkbox"
                        className="filter-tag"
                        onChange={evt =>
                            toggleFilter(evt.target.checked, "blm")
                        }
                    />
                    <span>
                        <span role="img" aria-label="blm">
                            ✊🏿
                        </span>{" "}
                        BLM
                    </span>
                </label>
            </div>
            <div className="filter-wrapper">
                <label id="lgbt-filter" className="filter-label">
                    <input
                        id="lgbt-input-filter"
                        type="checkbox"
                        className="filter-tag"
                        onChange={evt =>
                            toggleFilter(evt.target.checked, "lgbt")
                        }
                    />
                    <span>
                        <span role="img" aria-label="lgbtq+">
                            🏳️‍🌈
                        </span>{" "}
                        LGBTQ+
                    </span>
                </label>
            </div>
            {/* <div className="filter-wrapper">
                <label id="eco-filter" className="filter-label">
                    <input
                        type="checkbox"
                        className="filter-tag"
                        onChange={evt =>
                            toggleFilter(evt.target.checked, "eco")
                        }
                    />
                    <span>
                        <span role="img" aria-label="eco">
                            🌱
                        </span>{" "}
                        Eco
                    </span>
                </label>
            </div> */}
        </div>
    )
}

export default CharityFilter
