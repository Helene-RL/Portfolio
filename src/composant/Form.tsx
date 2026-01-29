import React from "react";

export const Form = () => {
    return (
        <form action="mailto:helene.raluleroy@gmail.com" method="post"
              className="bg-primary mx-auto my-2 px-5 py-2 rounded background-blue text-start text-light">
            <label htmlFor="name" className="form-label">Nom</label>
            <input required placeholder="Entrer votre nom" className="form-control" type="text" name="name"
                   id="name"/>
            <label htmlFor="email" className="form-label">Email</label>
            <input required placeholder="Entrer votre Email" className="form-control" type="email"
                   name="email"
                   id="email"/>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea required cols={30} rows={6} placeholder="Entrer votre Message"
                      className="form-control"
                      id="message"></textarea>
            <button type="submit" className="btn btn-light my-2">Envoyer</button>
        </form>
    )
}