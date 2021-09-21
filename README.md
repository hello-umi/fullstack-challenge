# Landbot Full Stack Challenge

## Description
From UmiLabs we want to use our legacy integration with LandbotCore to embed the support Livechat on our web.
This Livechat connects with Landbot to follow the flow (you can use this template https://templates.landbot.io/full-stack-challenge-215/) and send the user data to a new API.

The challenge consists of two parts (You can do it in JS or TS):

**React**
As a web app can grow insanely with new features, we need to make sure our code is clean and scalable, and sometimes we need to refactor big components.

Tasks:
- Separate the `./src/components/Chat` component into several smaller components (create the folder structure you feel comfortable with).
- Check everything is working like before the refactor.

> (Optional) Use storybook with `npm run storybook` to organise your components.

**Node**
Create an API endpoint to store the data on a Database (Select the DB that you like the most) and notify our teams through different channels for them to contact the user.

Tasks:
- Create an endpoint to store the user data (Name, Topic, Message).
- Send a notification to a different channel according the Topic.

```
Topic    | Channel
----------------------
Sales    | Slack
Pricing  | Email
```

> Note: Slack and Email are suggestions. Select the channels that you like the most.
> Hint: Ngrok will provide you an URL to your localhost.

The product department has in mind to expand the topics and communication channels.

## Bonus Points For:
- Tests
- Useful comments
- Documentation
- CI
- Commit messages
- Clear scalability

### Documentation
> Document your code assuming that the next engineer looking at your code is a serial killer who knows where you live.

Use JSDoc 3 docummentation style. http://usejsdoc.org/
