# AeroPhix Server Development Log

```
Version: 0.1.0
Description: AeroPhix proxy server for requests to external APIs requiring a service account.
Project start: 27 November 2020
GitHub: https://github.com/Phixyn/aerophix-server
Issue tracker: https://github.com/Phixyn/aerophix-server/issues

Devlog template: 1.1.0
```

- - -

## Navigation

- [Navigation](#navigation)
- [Todo List](#todo-list)
- [Links](#links)
- [Notepad](#notepad)
    - [Tools](#tools)
    - [The Need For a Proxy Server](#the-need-for-a-proxy-server)
- [Scrap Paper](#scrap-paper)

- - -

## Todo List

> ✅ List of what needs to be done. Try to keep this short and actionable. Most tasks should be in Trello, Jira or whatever the most hip and trendy tool is.


## Links

> 📚 Help reduce open tabs! Keep all links related to the project here. If a link is relavant to more than one project, do add it to other devlogs too and/or bookmark it. Try to give a brief description of what the webpage has and why it's relevant to the project, and/or why we may find it useful.


## Notepad

> 📓 A section to keep general notes about the project, scribbles and things that don't really fit in any other section.

### Tools

- Insomnia - REST API client

### The Need For a Proxy Server

The need for an Express server to handle external API requests comes from the use of service accounts.

Secrets (which include things like **private API keys**, sometimes called **service accounts**) should never be used directly in any sort of front-end application. Whether it's Vue, Angular or just jQuery with AJAX/fetch API.

The `.env` file in Vue is appropriate for storing configurations and *public* API keys (an example of this is the Google Maps API key) that can be consumed by Vue, client-side. Anyone can find out those keys if they wanted to.

If you need any access to a private API endpoint or otherwise access a service using a key/secret that your end-users shouldn't have access to, you need to perform that server-side, not in Vue. Alternatively, you could use Nuxt, where the rendering is done server-side, in which case you could leverage private API keys, but in that case, you should be setting your secrets via environmental variables at runtime - they should never be in your source code.

Only references to the location of secrets should be in source.

> Source: https://forum.vuejs.org/t/how-to-hide-api-keys-from-source-code/102974/5

Most of our API usage will most likely require service accounts (for example, [AVWX](https://avwx.rest/)).

## Scrap Paper

> 📝 For code snippets, experimental code, things that need to be moved to a gist, or just temporary code.

