import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

const header = document.querySelector('nav');

const navbarTemplate = (user, logoutHandler) => html`
    <a href="/all-memes">All Memes</a>
    ${user
        ? html`
    <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${user.email}</span>
            <a href="/my-profile">My Profile</a>
            <a href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
        </div>
    </div>
    `
        : html`
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/">Home Page</a>
    </div>
    `
    }
`;


export const renderNavbar = (ctx, next) => {
    const logoutHandler = async () => {
        await userService.logout();
        ctx.page.redirect('/');
    }

    render(navbarTemplate(ctx.user, logoutHandler), header);
    next();
}