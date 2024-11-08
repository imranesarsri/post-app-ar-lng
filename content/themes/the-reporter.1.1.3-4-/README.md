# The Reporter

The Reporter delivers news with clarity, showcased in a sleek magazine format.

&nbsp;

## Useful links
**Demos: https://reporter.highfivethemes.com/**
**Documentation: https://highfivethemes.gitbook.io/the-reporter-user-documentation/**

&nbsp;

## Features

1. Dark mode with option for dark mode publication logo
2. Custom Authors, Categories (tags), Post/Post with sidebar, Account, Sign In/Up, Subscribe, Error 404 and Membership pages
3. 24 Custom featured posts section options
4. 19 Custom posts sections options
5. Customizable main page categories (tags)
6. 3 Header options
7. 2 Footer options
8. Customizable footer menu categories (tags)
9. Post page sidebar
10. Customizable widget inside sidebar
11. 3 variants of border-radius for buttons, images and containers
12. 7 font-pairings options
13. Customizable call-to-action text for subscribtion sections
14. Translation-ready

## Installation instructions

1. Go to **Settings > Design** from the admin menu
2. Click **Change theme** in the bottom left corner
3. Then click the **Upload theme** button in the upper right corner
4. Click inside the upload box to select a **the-reporter.zip**, or drag-and-drop the **the-reporter.zip** into the upload box
5. Once uploaded, click **Activate** to activate the theme

&nbsp;

## Theme structure

The main templates files are:

- [`default.hbs`](default.hbs) - The main template file
- [`index.hbs`](index.hbs) - Used for the home page
- [`post.hbs`](post.hbs) - Used for individual posts
- [`custom-post-with-sidebar.hbs`](custom-post-with-sidebar.hbs) - Used for individual posts with wide post head
- [`page.hbs`](page.hbs) - Used for individual pages
- [`tag.hbs`](tag.hbs) - Used for tag archives
- [`author.hbs`](author.hbs) - Used for author archives
- [`custom-authors.hbs`](custom-authors.hbs) - Used for publication's Authors page
- [`custom-categories.hbs`](custom-categories.hbs) - Used for publication's Categories (Tags) page
- [`error-404.hbs`](error-404.hbs) - Used for 404 Error page
- [`custom-sign-in.hbs`](custom-sign-in.hbs) - Used for custom Sign In page
- [`custom-sign-up.hbs`](custom-sign-up.hbs) - Used for custom Sign Up page
- [`custom-subscribe.hbs`](custom-subscribe.hbs) - Used for custom Subscribe page
- [`custom-memberships.hbs`](custom-memberships.hbs) - Used for custom Memberships page
- [`custom-account.hbs`](custom-account.hbs) - Used for custom Account page

&nbsp;

## Development guide

**The Reporter** theme provides a first-class development experience out of the box.

### Setup

To see realtime changes during development, symlink the The Reporter theme folder to the `content/themes` folder in your local Ghost install. 

```bash
ln -s /path/to/the-reporter /ghost/content/themes/the-reporter
```

Restart Ghost and select the **The Reporter** theme from **Settings**.

From the theme's root directory, install the dependencies:

```bash
npm install
```

If Node isn't installed, follow the [official Node installation guide](https://nodejs.org/).

### Start development mode

From the The Reporter theme folder, start development mode:

```bash
npm run dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and Javascript will be compiled and output to the `built` folder.

Press `ctrl + c` in the terminal to exit development mode.

### Build, zip, and test your theme

Compile your CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Create a zip archive:

```bash
npm run zip
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```

&nbsp;



## Copyright & License

Copyright (c) 2023 HighFiveThemes - Released under the MIT license.
