import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../services/dataService.js';

const editTemplate = (book, editHandler) => html`
    <section id="edit-page" class="edit">
        <form id="edit-form" method="POST" @submit=${editHandler}>
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" value=${book.title}>
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description">${book.description}</textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" value=${book.type}>
                            <option value="Fiction" selected>Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>
`;


export const editView = async (ctx) => {
    const bookId = ctx.params.id;
    const book = await dataService.getById(bookId);

    const editHandler = async (e) => {
        e.preventDefault();
        const { ...data } = Object.fromEntries(new FormData(e.currentTarget));

        if (!Object.values(data).some(x => x == '')) {
            await dataService.edit(bookId, data);
            ctx.page.redirect(`/details/${bookId}`);
        } else {
            alert('Please fill all fields');
        }
    }

    ctx.render(editTemplate(book, editHandler));
}