# ALARABI

## Dashboard
### Settings

```js
const lang = document.documentElement.getAttribute('lang');
const module = await import(lang === 'ar' ? '../translate-arabic/settings-ar.mjs' : './index-f6338b55.mjs');

export const AdminXApp = module.cg;

```
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


## Theme



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