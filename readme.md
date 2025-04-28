## Basic Questions

Plase follow this link [Answered](basic/)

## Database Questions

Plase follow this link [Answered](database/)

## JavaScript/TypeScript Questions

Plase follow this link [Answered](typescript/)

## Vue.js

#### Question 1
Explain Vue.js reactivity and common issues when tracking changes.

Answer: Vue reactivity is update ui component automatically if the data is updated.

#### Question 2
Describe data flow between components in a Vue.js app

Answer:
1. Parent to child, passing data parent using props property in child component
2. Child to parent, passing data chlid using emit event then in parent handling in method

#### Question 3
List the most common cause of memory leaks in Vue.js apps and how they can be solved.

Answer: No event listener clean up, solution implement event listener remove in before mount

#### Question 4
What have you used for state management

Answer: Yes, using vuex

#### Question 5
What’s the difference between pre-rendering and server side rendering?

Answer:
Pre-rendering : render as static html page, easy, seo friendly, static content.
SSR: render page in server every user request, expensive, more server spec, dynamic or realtime content, better to heavey process.


## Website Security Best Practises

1. Always need to validation each of form input
2. For the sensitive input form like login or transaction page using password, must be implement limitation for submit if return response doesnt match
3. Using authentication and authorization
4. Encrypt sensitive data
5. Secure the web protocol like using https or ddos protection
6. Secure the configuration file
7. Makesure the code is clean, remove logs from browser

## Website Performance Best Practises

1. Optimize code, simplify heavy logic like nested loop.
2. Enable cache.
3. If using image, optimize the image, don't render actual size image.
4. Choose best server to handle traffic.
5. Minify asset css and javascript to reduce file size.
6. If website have backend, do heavy process in the backend (server) like generate report or math calculation

## Golang

Plase follow this link [Answered](golang/)

## Tools

1. Git (4)
2. Redis (3)
3. VSCode (4)
4. Linux? (4)
5. AWS
    - EC2 (1)
    - Lambda (1)
    - RDS (1)
    - Cloudwatch (1)
    - S3 (1)
6. Unit testing (3)
7. Kanban boards (4)

