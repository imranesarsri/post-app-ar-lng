# ALARABI

##  Delete button sign up
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