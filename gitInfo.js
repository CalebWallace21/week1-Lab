/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = `Git is a version control system that allows individuals and teams to track changes to code projects, prevent bugs and loss of prograss, and allows you to view the long history of a project in snapshots.`

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = `GitHub is an Internet hosting service for software development and version control using Git.`

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = `initializes a local repsitory in the folder`

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = `primarily used to point to an existing repo and make a clone or copy of that repository at in a new directory, at another location.`

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = `displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = `adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit.`
let gitAddCode = `git add .`

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = `A commit, or "revision", is an individual change to a file (or set of files). It's like when you save a file, except with Git, every time you save it creates a unique ID that allows you to keep record of what changes were made when and by who.`
let gitCommitCode = "git commit -m `commit message ` "


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = `used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repository (like Github)`