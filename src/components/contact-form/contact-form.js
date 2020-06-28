import React, { useState } from "react"

import { IoIosImage } from "react-icons/io"

import "./contact-form.css"

const openFilePicker = () => {
    let imagePicker = document.getElementById("image-picker-input")
    if (imagePicker) {
        imagePicker.click()
    }
}

const ContactForm = ({}) => {
    const [file, setFile] = useState(null)

    const changeImage = evt => {
        imageIcon = <img src={URL.createObjectURL(evt.target.files[0])} />
        setFile(URL.createObjectURL(evt.target.files[0]))
    }

    let imageIcon = file ? (
        <img src={file} id="img-thumbnail" />
    ) : (
        <IoIosImage style={{ marginLeft: 15 }} />
    )

    return (
        <form
            action="https://getform.io/f/f0218d9a-515e-4ae5-8765-faf3de588498"
            encType="multipart/form-data"
            id="contact-form"
            method="POST"
        >
            <label>
                Name (or a fake name!)
                <input type="text" name="name" placeholder="Octo Boy" />
            </label>
            <label>
                Contact Email (if you want us to respond)
                <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                />
            </label>
            <label>
                Message
                <textarea
                    required
                    name="message"
                    placeholder="Order, comments, concerns, etc."
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
            />
            <button id="submit" type="submit">
                Send
            </button>
        </form>
    )
}

export default ContactForm
