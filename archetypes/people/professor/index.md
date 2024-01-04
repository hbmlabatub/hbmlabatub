---
title: "{{ replace .File.ContentBaseName `-` ` ` | title }}"
date: 2018-02-10T18:56:13-05:00
year: <Year of your program>
sitemap:
  priority: 1.0

handles:
  linkedin:
    link: https://linkedin.com/<Your link>
    name: LinkedIn
  github:
    link: https://github.com/<Your Username here>
    name: GitHub
  email:
    link: mailto:<Your email>
    name: Email
  google-scholar:
    link: https://scholar.google.com/<Your link here>
    name: Google Scholar

resources:
  - src: profile.jpg
    name: profile
outputs:
  - html
  - rss
---

<Enter your biography here>
