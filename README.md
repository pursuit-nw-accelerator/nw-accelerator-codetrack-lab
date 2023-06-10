# Codetrack data analysis lab

## Overview
In this activity, you're going to figure out:

- how to access the Codetrack API directly with a script
- your minimum, maximum, and average points earned in the last 16 weeks.

To do this you will need to:

- Use browser dev tools to figure out how to "hack" an API
- Read and understand code that already exists
- Make use of existing code (plus your own code) to solve a problem

## Tech requirements
You will need:

- Your GitHub account and your [Codetrack](https://pursuit.codetrack.dev/) account
- A web browser that is logged into GitHub and Codetrack
- A machine that runs Nodejs (I suggest [installing Node Version Manager](https://github.com/nvm-sh/nvm?tab=readme-ov-file#readme) if you need to add Node for the first time)
- A spirit of curiosity and determination

## Step 1: Set up the repo
1. Fork this repo.
1. Clone your fork to your computer
1. Move to the repo directory: `cd nw-accelerator-codetrack-lab`
1. Install dependencies: `npm install`

## Step 2: Environment variables
1. Copy the `.env.sample` file to a new file just called `.env` (or you can just rename `.env.sample` to `.env`)
1. Figure out what your Codetrack id is. Use this for the value in `.env`, ex: `MY_CODETRACK_ID=12345`
<div style="margin-left: 2rem;">
    <details>
    <summary> Hint 1</summary>
        How can you find this information on the Codetrack site?
    </details>
    <details>
    <summary> Hint 2</summary>
        Find your name card on the Codetrack home page. (Don't click "Profile" in the nav bar.) If you click on the card, what is the URL?
    </details>
    <details>
    <summary> Hint 3</summary>
        Search for your name on the home page. Find your card and click on it. You'll be taken to a page with the URL /fellow/{id}. The number at the end is your id.
    </details>
</div>

3. Find the right value for the `API_URL` variable and add it to `.env`. This is the base URL of the back end API that the Codetrack front end talks to. Add this to `.env`, ex: `API_URL=https://www.example.com`
<div style="margin-left: 2rem;">
    <details>
    <summary> Hint 1</summary>
        How can you use the browser's dev tools to find this information?
    </details>
    <details>
    <summary> Hint 2</summary>
        You can use the Network tab in the dev tools to see which API servers the front end talks to.
    </details>
    <details>
    <summary> Hint 3</summary>
        Go to your profile page. Open the dev tools and find the Network tab. Refresh the page. You will see a list of requests made by the front end. Click on one of them and copy the start of the Request URL (everything up to and including .com)
    </details>
</div>

## Step 3: Understand the code
Read the code in these files:
1. `./index.js`: this is the main file we'll run to get the data.
2. `./helpers/index.js`: you will need to complete these functions.
3. `./api/index.js`: functions that make API calls to specific endpoints in the Codetrack back end server.

Be ready to explain:
1. How do these files fit together?
1. What is supposed to happen when we run `node .` from the project root?
1. What did you find surprising or interesting in the code?

## Step 4. Complete the functions
Complete the functions in `./helpers/index.js`. When you are finished, you should be able to run `node .` and get output similar to this:
```
$ node .
analyzing my Codetrack points...
==== Weekly DSA Points =====
min: 37
max: 134
avg: 86.345

==== Weekly Commits =====
min: 0
max: 24
avg: 2.75
```

## Step 5. Discuss
Share your Codetrack stats with your group.

1. Are you averaging > 30 points per week?
2. What can you start, stop, or continue doing to lift your average to > 30 points every week?
3. Are you averaging > 2 commits per week?
4. What can you start, stop, or continue doing to lift your average to > 2 commits every week?
5. What are some ways that having consistently solid weekly averages on Codetrack will benefit you and your career goals?
6. What are other things you're doing to grow as a developer that are not reflected in your Codetrack scores?


## Step 6. Submit
1. Clean up your code, commit it with a clear and informative commit message, and push it to your repo.
2. Open a pull request against the upstream (the repo you forked) so I can see your code and comment on it.
3. Whether you are finished or not, and whether you are proud or not, **you must submit a PR before you leave class today**.