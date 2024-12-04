# ALARABI

## Dashboard
- **All the changes I made are in this path:** 'current\core\built\admin\assets'
- Add folder css style **admin-custom-styles**
- Add folder translate arabic **translate-arabic**
- Change files in **admin-x-settings** folder, Any file located in folder 'admin-x-settings' and using './index-f6338b55.mjs':
  - admin-x-settings.js
  - CodeEditorView-26137e6e.mjs
  - index-cdf09c6d.mjs
  - modals-15249255.mjs
  - Change it to this

  ```js
  const lang = document.documentElement.getAttribute('lang');
  const module = await import(lang === 'ar' ? '../translate-arabic/settings-ar.mjs' : './index-f6338b55.mjs');

  export const AdminXApp = module.cg;
  ```
  > [!NOTE]
  > All files inside folder **admin-x-settings** have different names from one project to another.



### Delete button sign up
- delete this code 
```hbs
<ul class="gh-sub-nav">
    {{#foreach navigation}}
        <li class="nav-{{slug}}{{#if current}} nav-current{{/if}}"><a href="{{url absolute="true"}}" class="gh-sub-nav-menu-item" aria-label="{{t "{label} navigation link" label=label}}">{{label}}</a></li>
    {{/foreach}}
</ul>

```
- FIle name : **navigation.hbs** 
- FIle path : content\themes\alarabiGoo\partials\navigation.hbs

___

## Theme
- Use **alarabiGoo** Theme
- Add **css style** (for fix error and add rtl style)
  - PATH '\themes\alarabiGoo\assets\built\style-ar.css'
- Fix error show images after push posts with workflow m8n
  - Change **feature_image** to **twitter_image**
  - Change All this pages
    - archive.hbs
    - author.hbs
    - custom-authors.hbs
    - custom-categories.hbs
    - custom-post-with-lightbox.hbs
    - custom-post-with-sidebar-and-lightbox.hbs
    - custom-post-with-sidebar.hbs
    - page.hbs
    - post.hbs
    - tag.hbs
- If you want to add page, example 'featured1.hbs' :
  - Create a **featured1.hbs** file directly inside theme **alarabiGoo**
  - Open in this file: **routes.yaml**, in this path 'content\settings\routes.yaml'
  - Add link :
      ```yaml
        collections:
        
        /featured1/:
          permalink: /{slug}/
          template: featured1
      ```
  - '/featured1/:' this is route name
  - 'template: featured1' this is file name


___

## Tasks
- Translates
  - Translate word 'Posts', 'Post'
  - Translate placeholder="Page title" => '/editor/page'
- Delete
  - Delete download theme => 'settings/design/change-theme'
  - Delete
- Create 
  - Create group links for show all layouts (8 layouts)
  - Create
- Documentation
  - Create Documentation