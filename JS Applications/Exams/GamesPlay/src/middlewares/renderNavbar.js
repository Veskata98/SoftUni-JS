import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

const header = document.querySelector('header');

const navbarTemplate = (user, logoutHandler) => html`

    <h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
        <a href="/all-games">All games</a>
        ${user
            ? html`
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
                </div>
        `
            : html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
        `}
    </nav>
`;


export const renderNavbar = (ctx, next) => {
    const logoutHandler = async () => {
        await userService.logout();
        ctx.page.redirect('/');
    }

    render(navbarTemplate(ctx.user, logoutHandler), header);
    next();
}