import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../services/dataService.js';


const detailsTemplate = (meme, deleteHandler, isOwner) => html`
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}
    
        </h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${meme.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${meme.description}
                </p>
    
                ${isOwner
                    ? html`
                        <a class="button warning" href="/edit/${meme._id}">Edit</a>
                        <button class="button danger" @click=${deleteHandler}>Delete</button>
                        `
                    : nothing
                }
    
            </div>
        </div>
    </section>
`;


export const detailsView = async (ctx) => {
    const memeId = ctx.params.id;
    const meme = await dataService.getById(memeId);

    const user = ctx.user;


    const isOwner = user && user._id == meme._ownerId;

    ctx.render(detailsTemplate(meme, deleteHandler, isOwner));

    async function deleteHandler() {
        const choice = confirm('Are you sure you want to delete?');

        if (choice) {
            await dataService.del(memeId);
            ctx.page.redirect('/all-memes');
        }
    }
}
