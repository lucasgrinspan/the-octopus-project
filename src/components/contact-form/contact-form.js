import React, { useState } from "react";

import { IoIosImage } from "react-icons/io";

import "./contact-form.css";

const openFilePicker = () => {
    let imagePicker = document.getElementById("image-picker-input");
    if (imagePicker) {
        imagePicker.click();
    }
};

const ContactForm = () => {
    const [file, setFile] = useState(null);

    const changeImage = evt => {
        setFile(URL.createObjectURL(evt.target.files[0]));
    };

    let imageIcon = file ? (
        <img src={file} id="img-thumbnail" alt="Your upload" />
    ) : (
        <IoIosImage style={{ marginLeft: 15 }} />
    );

    const onSubmit = evt => {
        evt.preventDefault();
    };
    return (
        <form id="contact-form" onSubmit={onSubmit}>
            <label>
                Name (or a fake name!)
                <input type="text" name="name" placeholder="Octo Friend" />
            </label>
            <label>
                Contact Email (if you want us to respond)
                <input
                    type="email"
                    name="email"
                    placeholder="octofriend@example.com"
                />
            </label>
            <label>
                Message
                <textarea
                    required
                    name="message"
                    placeholder="Order, comments, concerns, questions, etc."
                    rows={4}
                    style={{ resize: "none" }}
                />
            </label>
            <button id="image-picker" type="button" onClick={openFilePicker}>
                Choose Image {imageIcon}
            </button>
            <input
                type="file"
                name="file"
                id="image-picker-input"
                style={{ display: "none" }}
                accept="image/png, image/jpeg"
                onChange={changeImage}
                multiple
            />
            <button id="submit" type="submit">
                Send
            </button>
        </form>
    );
};

export default ContactForm;
