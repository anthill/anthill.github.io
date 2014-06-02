# Best pratices

### Git

- git repos should not contain anything else than text files (images at most)
- to have a schema use svg:
	- svg is a text file so it is perfect for git
	- svg is beautiful
	- tools like [design-with-git](http://w.xuv.be/projects/design_with_git#design_with_git) enable you to see the diff of images
	- you can easily create nice schemas with [svg-edit](http://svg-edit.googlecode.com/)
	- once you're done click on "svg" button and you'll have your raw svg
	- svg cannot be directly included in github static pages (security reasons) so here is the trick:
		- once you pushed your svg get the link to it for example `https://github.com/anthill/HumanConnectors/blob/master/img/general_schema.svg` and paste it to [RawGit.com](https://rawgit.com/) which will generate a url that can then be used as a remote image and inserted in markdown like this ```![Alt text](https://rawgit.com/anthill/HumanConnectors/master/img/general_schema.svg "General schema of 6element")```

### Presentations

- to have remote and beautifull presentation let's use [reaveal.js](http://lab.hakim.se/reveal-js/)
- we shoudl find a way to have most of the files in this repo and juste have a `index.html` per repo.