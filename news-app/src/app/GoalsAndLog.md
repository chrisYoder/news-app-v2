# News App v2

---

## Goals

1. I want to better document the app.
2. I want to create an action log to track what I do and how I am doing it.
3. I want to refactor the codebase to make it more DRY.
	- articles component instead of the multiple components found in v1 that shared the same templating code.
	- a single function in ApiService that takes a news type parameter and performs the relevant request based on that.
4. I want to have a better READme document.
5. Hide Api key

---

## 02/05/2020

- README
	- I found and used the readme-md-generator
	- `npx readme-md-generator`
	
- DRY
	- article, header, footer component

- eod review
	- I figured out a way to access the LINKS array upon clicking on a "link" in the navbar. From here I need to set up the service that will call the api and share the info to the articles component for display. 
	