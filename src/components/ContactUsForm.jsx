import ContactHero from "./sections/ContactHero";
import React, { useState } from "react";
import "./Home.styles.css";
const ContactUsForm = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div className="contact-us-form">
            <ContactHero />
            <div
                style={{
                    background: "#fff",
                    borderRadius: "24px",
                    padding: "32px",
                    margin: "32px auto",
                    maxWidth: 900,
                    boxShadow: "0 2px 16px #00000010",
                }}
            >
                <form>
                    <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
                        <input
                            type="text"
                            placeholder="Company Name"
                            style={{
                                flex: 1,
                                padding: "18px",
                                borderRadius: "16px",
                                border: "1.5px solid #ffd37a",
                                background: "#fafafa",
                                fontSize: 16,
                                outline: "none",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Contact No. (e.g. 9988xxxxxx)"
                            style={{
                                flex: 1,
                                padding: "18px",
                                borderRadius: "16px",
                                border: "1.5px solid #ffd37a",
                                background: "#fafafa",
                                fontSize: 16,
                                outline: "none",
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            style={{
                                flex: 1,
                                padding: "18px",
                                borderRadius: "16px",
                                border: "1.5px solid #ffd37a",
                                background: "#fafafa",
                                fontSize: 16,
                                outline: "none",
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            style={{
                                flex: 1,
                                padding: "18px",
                                borderRadius: "16px",
                                border: "1.5px solid #ffd37a",
                                background: "#fafafa",
                                fontSize: 16,
                                outline: "none",
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: 24, marginTop: 24, }}>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            style={{
                                accentColor: "#f8b217",
                                width: 20,
                                height: 20,
                                marginRight: 8,
                            }}
                        />
                        <span style={{ fontSize: 15, color: "#222" }}>
                            By signing up, you are agreeing to ShipMaxx's{" "}
                            <a href="/" style={{ color: "#f8b217", textDecoration: "none" }}>terms of services</a> and{" "}
                            <a href="/" style={{ color: "#f8b217", textDecoration: "none" }}>privacy policy</a>.
                        </span>
                    </div>

                </form>

            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                    type="submit"
                    style={{
                        background: "#f8b217",
                        color: "#fff",
                        border: "none",
                        borderRadius: "16px",
                        padding: "16px 56px",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        marginTop: 8,
                        transition: "background 0.2s",
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ContactUsForm;