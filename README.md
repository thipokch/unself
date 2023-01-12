<p align="center">
<img width="300" src="https://raw.githubusercontent.com/thipokch/unself/master/packages/site/assets/images/unself-logo-wordmark--light.svg#gh-light-mode-only">
<img width="300" src="https://raw.githubusercontent.com/thipokch/unself/master/packages/site/assets/images/unself-logo-wordmark--dark.svg#gh-dark-mode-only">
</p>

---

[unself](https://unself.app) is an open source personal data archiving tool.

- [ ] Local SQLite database. [Docs]()
- [ ] File storage. [Docs]()
- [ ] Dashboard. [Docs]()

---

### Package Structure

```
├── app
│   └── unpack
│   
├── common
│   └── core        domain model
│   
├── feature
│   └── ...         business logic + screen
│      
├── patch
│   └── ...         moded dependencies 
│
├── preview
│   ├── preview     utils for preview
│   └── style       design tokens + components
│   
├── service         data + repository + services
│   ├── license
│   └── monitoring
│   
├── site            project page
│   
├── style
│   ├── style       themes + colors + fonts
│   └── component   ui
│   
└── tool
    ├── analysis    shared analysis options
    └── template    generates packages
```