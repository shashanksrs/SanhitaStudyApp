const MODULE6_PAGES = [
{
  id:'page-60',pageNum:60,module:6,moduleTitle:'Git & GitHub',
  title:'Introduction to Git',
  subtitle:'Version control fundamentals — why Git was invented, how it works, and why every technical writer needs it.',
  duration:'20 min read',level:'Beginner',
  searchKeywords:'Git introduction version control basics history commit repository distributed',
  objectives:['Understand what version control is and why it matters','Explain Git\'s distributed model','Understand the Git workflow (working directory, index, repository)','Know Git\'s history and origin'],
  content:`
<h2>What is Version Control?</h2>
<p>Version control is a system that records changes to files over time, so you can recall specific versions later. For documentation teams, version control answers these critical questions:</p>
<ul>
<li>What changed in this file, and when?</li>
<li>Who made this change, and why?</li>
<li>Can we go back to last week's version?</li>
<li>How do we combine changes from two writers working simultaneously?</li>
</ul>
<p>Without version control, the answer is "compare the files manually" or "hope you saved a backup." With Git, the answer is "run a command."</p>

<h2>Git's Origin</h2>
<p>Git was created by Linus Torvalds in 2005 to manage the Linux kernel source code. It was designed to be fast, distributed (every clone is a full repository), and reliable. Today Git is the overwhelmingly dominant version control system used in software development — and increasingly, in technical documentation.</p>

<h2>The Three States of Git</h2>
<div class="diagram-container"><div class="mermaid">
graph LR
  WD["Working Directory\n(your files on disk)"]
  IDX["Staging Area / Index\n(staged changes)"]
  REPO["Local Repository\n(.git directory)"]
  REMOTE["Remote Repository\n(GitHub/GitLab)"]
  WD -->|"git add"| IDX
  IDX -->|"git commit"| REPO
  REPO -->|"git push"| REMOTE
  REMOTE -->|"git pull/fetch"| REPO
  REPO -->|"git checkout"| WD
</div></div>

<div class="table-wrapper"><table>
<thead><tr><th>State</th><th>What it is</th><th>Git command</th></tr></thead>
<tbody>
<tr><td>Working Directory</td><td>Files on your disk — edited but not yet staged</td><td>Modify files normally</td></tr>
<tr><td>Staging Area (Index)</td><td>Files you've marked to include in the next commit</td><td>git add filename</td></tr>
<tr><td>Local Repository</td><td>The .git directory — your committed history</td><td>git commit -m "message"</td></tr>
<tr><td>Remote Repository</td><td>GitHub/GitLab — the shared team copy</td><td>git push / git pull</td></tr>
</tbody></table></div>

<h2>Key Git Concepts</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Concept</th><th>Definition</th></tr></thead>
<tbody>
<tr><td>Repository (repo)</td><td>A directory tracked by Git; contains all files and the full history</td></tr>
<tr><td>Commit</td><td>A snapshot of staged changes at a specific point in time; has author, message, timestamp, and unique hash</td></tr>
<tr><td>Branch</td><td>A lightweight pointer to a commit; enables parallel development</td></tr>
<tr><td>HEAD</td><td>Pointer to your current position in the repository (usually the tip of the current branch)</td></tr>
<tr><td>Clone</td><td>A full copy of a remote repository on your local machine</td></tr>
<tr><td>Fork</td><td>A GitHub/GitLab copy of a repository under your account (for contributing to others' projects)</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'In Git\'s three-state model, "staging" a file means:',options:['Saving the file to disk','Marking the file to be included in the next commit','Pushing the file to GitHub','Creating a new branch'],correct:1,explanation:'Staging (git add) marks files to be included in the next commit. It puts them in the staging area / index — the preparation area between your working directory changes and the permanent commit record.'},
    {question:'Git was originally created to:',options:['Replace Subversion for all software projects','Manage the Linux kernel source code (by Linus Torvalds in 2005)','Create GitHub','Enable cloud-based collaboration'],correct:1,explanation:'Linus Torvalds created Git in 2005 to manage the Linux kernel after BitKeeper (the previous VCS) revoked its free license. Git was designed for speed, distributed operation, and the scale of the Linux project.'},
  ],
  prev:'page-59',next:'page-61'
},

{id:'page-61',pageNum:61,module:6,moduleTitle:'Git & GitHub',title:'Git Setup and Configuration',subtitle:'Installing Git, configuring your identity, and initializing your first repository.',duration:'15 min read',level:'Beginner',searchKeywords:'Git install configure user.name user.email init clone setup',objectives:['Install Git on Windows/Mac/Linux','Configure Git identity','Initialize a new repository','Clone an existing repository'],
content:`<h2>Installing Git</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Platform</th><th>Installation Method</th></tr></thead>
<tbody>
<tr><td>Windows</td><td>Download from git-scm.com; Git for Windows (includes Git Bash)</td></tr>
<tr><td>macOS</td><td>brew install git (Homebrew) or Xcode Command Line Tools (xcode-select --install)</td></tr>
<tr><td>Ubuntu/Debian</td><td>sudo apt install git</td></tr>
<tr><td>Fedora/RHEL</td><td>sudo dnf install git</td></tr>
</tbody></table></div>

<h2>Required Configuration</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span><span class="code-block-title">Configure Git identity — REQUIRED before first commit</span></div>
<pre># Set your name (appears in commit history)
git config --global user.name "Sanhita Yadav"

# Set your email (use the same as your GitHub account)
git config --global user.email "sanhita.yadav@example.com"

# Set default branch name (recommended: main instead of master)
git config --global init.defaultBranch main

# Set preferred editor for commit messages
git config --global core.editor "code --wait"   # VS Code
# or: "nano", "vim", "notepad"

# Verify your configuration
git config --list</pre></div>

<h2>Initialize a New Repository</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span></div>
<pre># Create a new directory and initialize a Git repository
mkdir my-dita-project
cd my-dita-project
git init
# Creates a .git directory (the repository database)

# Check status — Git is now tracking this directory
git status</pre></div>

<h2>Clone an Existing Repository</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span></div>
<pre># Clone a GitHub repository to your local machine
git clone https://github.com/username/repository-name.git

# Clone to a specific directory name
git clone https://github.com/username/repo.git my-local-folder

# Verify: list the contents
cd repository-name
ls -la    # Shows all files including hidden .git directory</pre></div>

<h2>.gitignore for DITA Projects</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">gitignore</span><span class="code-block-title">.gitignore for a DITA project</span></div>
<pre># DITA-OT output directories — never commit generated output
/out/
/output/
/publish/

# Oxygen temporary files
*.lock
.cache/

# Operating system files
.DS_Store        # macOS
Thumbs.db        # Windows
desktop.ini

# Editor directories
.vscode/
*.swp            # Vim swap files</pre></div>`,
quiz:[{question:'After running "git config --global user.name" and "user.email", this information is used for:',options:['GitHub login authentication','Each commit\'s author record — identifying who made each change in the repository history','File encryption','SSH key generation'],correct:1,explanation:'Git commit author information (name and email) is embedded in every commit you make. This is how "git log" shows who made each change. It is separate from GitHub authentication — you still need a password/token or SSH key to push to GitHub.'}],
prev:'page-60',next:'page-62'},

{id:'page-62',pageNum:62,module:6,moduleTitle:'Git & GitHub',title:'Core Git Commands',subtitle:'The essential Git commands every technical writer needs for daily documentation version control.',duration:'25 min read',level:'Beginner',searchKeywords:'Git commands add commit push pull status log diff checkout branch',objectives:['Use all core Git commands confidently','Understand git status and git log output','Write meaningful commit messages','Stage and commit changes correctly'],
content:`<h2>The Daily Git Workflow</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span><span class="code-block-title">The core daily workflow</span></div>
<pre># 1. Check current state
git status

# 2. Pull latest changes from team
git pull origin main

# 3. Make your edits to files...

# 4. See what changed
git diff                          # Changes not yet staged
git diff --staged                 # Changes staged for commit

# 5. Stage changes
git add filename.dita             # Stage specific file
git add topics/                   # Stage all changes in directory
git add .                         # Stage ALL changes (use carefully)

# 6. Commit with a meaningful message
git commit -m "Add conref warning to hydraulic pump replacement task"

# 7. Push to GitHub
git push origin main

# 8. Check commit history
git log --oneline                 # Compact one-line per commit
git log --oneline --graph         # With branch visualization</pre></div>

<h2>Understanding git status</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span><span class="code-block-title">Interpreting git status output</span></div>
<pre>$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:          &lt;-- Staged (will be in next commit)
  (use "git restore --staged &lt;file&gt;..." to unstage)
        modified: topics/replace-pump.dita

Changes not staged for commit:    &lt;-- Modified but not staged
  (use "git add &lt;file&gt;..." to update what will be committed)
        modified: topics/overview.dita

Untracked files:                  &lt;-- New files Git doesn't know about
  (use "git add &lt;file&gt;..." to include in what will be committed)
        topics/new-topic.dita</pre></div>

<h2>Writing Good Commit Messages</h2>
<div class="comparison">
<div class="comparison-panel bad"><div class="comparison-panel-header">Poor Commit Messages</div><ul><li>fix</li><li>update</li><li>changes</li><li>WIP</li><li>misc updates to docs</li></ul></div>
<div class="comparison-panel good"><div class="comparison-panel-header">Good Commit Messages</div><ul><li>Add conref warning to hydraulic pump replacement task</li><li>Fix broken xref to torque-values.dita in inspection task</li><li>Update fluid specs table with revised viscosity values</li><li>Apply profiling attributes to 737-NG specific steps in ATA-29 tasks</li></ul></div>
</div>
<p>A good commit message answers: "If applied, this commit will [your message]". Present tense, imperative mood, under 72 characters on the first line.</p>

<h2>Essential Additional Commands</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Command</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>git restore filename</td><td>Discard uncommitted changes to a file</td></tr>
<tr><td>git restore --staged filename</td><td>Unstage a file (keep changes in working dir)</td></tr>
<tr><td>git log --oneline -10</td><td>Show last 10 commits, compact format</td></tr>
<tr><td>git show HEAD</td><td>Show changes in the last commit</td></tr>
<tr><td>git blame filename</td><td>Show who last modified each line</td></tr>
<tr><td>git stash</td><td>Temporarily save uncommitted changes</td></tr>
<tr><td>git stash pop</td><td>Restore stashed changes</td></tr>
</tbody></table></div>`,
quiz:[
  {question:'You modified two files but only want to commit one of them now. You should:',options:['Use "git add ." to stage all files and commit','Use "git add specific-file.dita" to stage only that file, then commit','Commit all files at once — Git doesn\'t allow partial commits','Delete the file you don\'t want to commit yet'],correct:1,explanation:'git add lets you stage specific files (or even specific lines with git add -p). Stage only the file(s) you want in this commit, then commit. The other modified file remains in your working directory for a future commit.'},
  {question:'What does "git pull origin main" do?',options:['Pushes your local commits to GitHub','Fetches changes from the remote "origin" main branch and merges them into your current branch','Creates a new branch called "origin"','Deletes your local main branch and replaces it'],correct:1,explanation:'git pull origin main fetches new commits from the remote named "origin" (GitHub) on the "main" branch and merges them into your current local branch. It is equivalent to git fetch followed by git merge.'},
],
prev:'page-61',next:'page-63'},

{id:'page-63',pageNum:63,module:6,moduleTitle:'Git & GitHub',title:'Branching',subtitle:'Git branching — the feature that makes parallel documentation work safe, organized, and conflict-free.',duration:'25 min read',level:'Intermediate',searchKeywords:'Git branching branch create checkout merge strategy feature branch workflow',objectives:['Create and switch between branches','Understand branch-based documentation workflows','Merge branches safely','Resolve basic merge conflicts'],
content:`<h2>Why Branch?</h2>
<p>Branches let multiple writers work on different topics simultaneously without interfering with each other. Each branch is an independent line of development — changes in one branch don't affect others until explicitly merged.</p>

<h2>Branch Commands</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span><span class="code-block-title">Complete branch management</span></div>
<pre># See all branches (local)
git branch

# See all branches including remote
git branch -a

# Create a new branch
git branch feature/ata29-hydraulic-update

# Switch to a branch
git checkout feature/ata29-hydraulic-update
# OR in modern Git:
git switch feature/ata29-hydraulic-update

# Create AND switch in one command
git checkout -b feature/ata29-conref-library
# OR:
git switch -c feature/ata29-conref-library

# Rename current branch
git branch -m new-branch-name

# Delete a branch (after merging)
git branch -d feature/completed-branch

# Delete a remote branch
git push origin --delete feature/completed-branch</pre></div>

<h2>A Documentation Branching Strategy</h2>
<div class="diagram-container"><div class="mermaid">
gitGraph
  commit id: "main: initial"
  branch feature/hydraulic-overview
  checkout feature/hydraulic-overview
  commit id: "add overview topic"
  commit id: "add system-a concept"
  checkout main
  branch feature/maintenance-tasks
  checkout feature/maintenance-tasks
  commit id: "add replace-pump task"
  commit id: "add inspect task"
  checkout main
  merge feature/hydraulic-overview id: "merge overview"
  merge feature/maintenance-tasks id: "merge tasks"
  commit id: "v1.0 release"
</div></div>

<h2>Merging Branches</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span></div>
<pre># Switch to main (the branch receiving changes)
git checkout main

# Merge your feature branch
git merge feature/hydraulic-overview

# If fast-forward is possible, it just moves the pointer.
# If not, Git creates a merge commit.
# Fast-forward merge: no divergence
# Three-way merge: diverged history, merge commit created</pre></div>

<h2>Resolving Merge Conflicts</h2>
<p>A merge conflict happens when two branches changed the same lines of the same file differently. Git marks the conflict in the file:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">A merge conflict in a DITA file</span></div>
<pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
&lt;p&gt;The system operates at 3,000 PSI nominal pressure.&lt;/p&gt;
=======
&lt;p&gt;The system operates at 3,000 PSI (20.7 MPa) nominal pressure.&lt;/p&gt;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/add-metric-units
<span class="tok-com">
Resolution: Keep one version (or merge both):
&lt;p&gt;The system operates at 3,000 PSI (20.7 MPa) nominal pressure.&lt;/p&gt;
Then remove all <<<< ==== >>>> markers and commit.</span></pre></div>`,
quiz:[
  {question:'You want to create a new branch called "feature/add-keyref-library" and immediately start working on it. The single-command solution is:',options:['git branch feature/add-keyref-library','git checkout feature/add-keyref-library','git checkout -b feature/add-keyref-library','git merge feature/add-keyref-library'],correct:2,explanation:'git checkout -b branchname creates a new branch AND immediately switches to it. Equivalently: git switch -c branchname. Using just git branch creates the branch but stays on the current branch.'},
],
prev:'page-62',next:'page-64'},

{id:'page-64',pageNum:64,module:6,moduleTitle:'Git & GitHub',title:'GitHub',subtitle:'Working with GitHub — repositories, pull requests, issues, and collaboration for documentation teams.',duration:'25 min read',level:'Intermediate',searchKeywords:'GitHub repository pull request fork clone remote origin collaboration review',objectives:['Use GitHub to host documentation repositories','Create and manage pull requests','Use GitHub Issues for documentation tracking','Set up GitHub Pages for documentation hosting'],
content:`<h2>GitHub vs. Git</h2>
<p>Git is the version control system. GitHub is a web platform that hosts Git repositories and adds collaboration features: pull requests, issues, GitHub Actions (CI/CD), GitHub Pages (hosting), code review tools, and team management. They are separate things — you can use Git without GitHub, but GitHub requires Git.</p>

<h2>Repository Setup</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span><span class="code-block-title">Connect a local repo to GitHub</span></div>
<pre># After creating a repository on GitHub:
git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main
# -u sets the upstream tracking; after this, just "git push" works</pre></div>

<h2>Pull Requests (PRs)</h2>
<p>A pull request is a GitHub mechanism for proposing changes from one branch to another. In documentation teams, the typical flow is:</p>
<ol>
<li>Writer creates a feature branch and makes commits</li>
<li>Writer pushes branch to GitHub: git push origin feature/my-changes</li>
<li>Writer opens a PR on GitHub: "merge feature/my-changes into main"</li>
<li>Team lead/peer reviews the PR — comments on specific lines</li>
<li>Writer makes requested changes and pushes more commits</li>
<li>Reviewer approves; PR is merged into main</li>
</ol>

<h2>GitHub Issues for Documentation</h2>
<p>GitHub Issues are a simple project tracker. Use them for documentation work:</p>
<ul>
<li>Report documentation bugs: "Procedure in task AMM-29-001 has wrong torque value"</li>
<li>Track feature requests: "Add profiling for A320 variant"</li>
<li>Assign issues to writers for accountability</li>
<li>Use labels: bug, enhancement, content-review, needs-SME-review</li>
<li>Reference issues in commits: "Fix broken conref in ATA-29 tasks, closes #42"</li>
</ul>

<h2>GitHub Pages for Documentation</h2>
<p>GitHub Pages hosts static websites directly from a repository — for free. For Markdown-based documentation sites (Jekyll, Docusaurus), GitHub Pages provides free hosting with automatic builds triggered by git push. For DITA: push your DITA-OT HTML5 output to a gh-pages branch; GitHub Pages serves it as a website.</p>

<h2>Useful GitHub Features for Writers</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Feature</th><th>Documentation Use</th></tr></thead>
<tbody>
<tr><td>Blame view</td><td>See who last changed each line of a file — click "Blame" on any file</td></tr>
<tr><td>History view</td><td>See all commits that changed a specific file</td></tr>
<tr><td>Compare view</td><td>Compare two branches, tags, or commits side-by-side</td></tr>
<tr><td>Code review</td><td>Line-level comments on documentation changes in PRs</td></tr>
<tr><td>GitHub Actions</td><td>Automated workflows: DITA-OT build on push, markdownlint check on PR</td></tr>
<tr><td>Branch protection</td><td>Require PR review before merging to main</td></tr>
</tbody></table></div>`,
quiz:[{question:'A pull request on GitHub is primarily used to:',options:['Download (pull) files from the repository','Propose changes from one branch to be reviewed and merged into another','Delete a branch after work is done','Automatically deploy documentation to a server'],correct:1,explanation:'A pull request proposes merging changes from one branch (feature branch) to another (main). It provides a review interface where team members can comment on specific changes line-by-line before the merge is approved.'}],
prev:'page-63',next:'page-65'},

{id:'page-65',pageNum:65,module:6,moduleTitle:'Git & GitHub',title:'Git for Documentation Teams',subtitle:'Documentation-specific Git workflows, conventions, and best practices for DITA and Markdown teams.',duration:'20 min read',level:'Intermediate',searchKeywords:'Git documentation workflow DITA team conventions naming branch strategy merge',objectives:['Apply Git workflow conventions for documentation','Name branches consistently','Use Git for DITA file management','Set up a team Git documentation workflow'],
content:`<h2>Branch Naming Conventions</h2>
<p>Consistent branch naming makes it easy to understand what work is happening at a glance:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span><span class="code-block-title">Documentation branch naming examples</span></div>
<pre># Feature branches (new content)
feature/ata29-hydraulic-system-overview
feature/add-conref-warnings-library
feature/add-profiling-737-variants

# Fix branches (corrections to existing content)
fix/broken-xref-in-pump-replacement
fix/incorrect-torque-value-ata-29
fix/spelling-errors-chapter-3

# Review branches (content under SME review)
review/hydraulic-chapter-sme-2024-01
review/maintenance-tasks-qa

# Release branches
release/v2.1-ata29-revised</pre></div>

<h2>DITA-Specific Git Practices</h2>
<ul>
<li><strong>Never commit output files:</strong> Generated PDFs and HTML are in .gitignore. Only source files (DITA, maps, DITAVAL) belong in Git.</li>
<li><strong>Commit at logical boundaries:</strong> Complete a meaningful unit — one topic, one chapter, one fix. Don't commit mid-sentence or mid-paragraph.</li>
<li><strong>Commit frequently:</strong> Small commits are easier to review and easier to revert if needed.</li>
<li><strong>One topic per file = easy merges:</strong> DITA's one-topic-per-file principle makes merge conflicts rare — two writers working on different topics = different files = no conflict.</li>
</ul>

<h2>Git Tags for Documentation Releases</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span></div>
<pre># Create a tag for a documentation release
git tag -a v2.1 -m "ATA-29 Chapter Revision 2.1, released 2024-06-01"

# Push tags to GitHub
git push origin --tags

# List all tags
git tag

# Check out a specific tagged version
git checkout v2.0</pre></div>

<h2>Using Git to Track Content Review Status</h2>
<p>Teams can use Git branches to track review stages:</p>
<div class="diagram-container"><div class="mermaid">
graph LR
  D["draft branch\n(writer working)"]
  R["review branch\n(SME review)"]
  A["approved branch\n(QA approved)"]
  M["main branch\n(published)"]
  D -->|"PR: request review"| R
  R -->|"PR: SME approved"| A
  A -->|"PR: QA approved"| M
</div></div>`,
quiz:[{question:'Your team uses Git for DITA documentation. A writer asks if they should commit the PDF output files generated by the DITA-OT transformation. Your answer is:',options:['Yes, commit the PDFs for easy access','No — generated output files should be in .gitignore and never committed to the repository','Only commit PDFs that are final releases','Commit them to a separate branch'],correct:1,explanation:'Generated output files (PDFs, HTML sites) should never be committed to a Git repository. They can always be regenerated from source, they\'re often binary files that bloat the repository, and committing them creates noise in the history. Always add output directories to .gitignore.'}],
prev:'page-64',next:'page-66'},

{id:'page-66',pageNum:66,module:6,moduleTitle:'Git & GitHub',title:'Resolving Merge Conflicts',subtitle:'Practical techniques for resolving merge conflicts in DITA and Markdown documentation files.',duration:'20 min read',level:'Intermediate',searchKeywords:'Git merge conflict resolution DITA XML rebase strategy three-way merge',objectives:['Understand why merge conflicts occur','Manually resolve conflicts in DITA files','Use VS Code to resolve conflicts visually','Prevent conflicts with good team practices'],
content:`<h2>Understanding Merge Conflicts</h2>
<p>A merge conflict happens when two branches make different changes to the same lines of the same file, and Git cannot automatically determine which version to keep. In DITA teams, conflicts are relatively rare because each topic is in its own file — two writers working on different topics never conflict. Conflicts happen when two writers edit the same topic.</p>

<h2>Conflict Resolution in a DITA File</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Shell</span><span class="code-block-title">Step-by-step conflict resolution</span></div>
<pre># 1. Git tells you there's a conflict:
$ git merge feature/update-specs
Auto-merging topics/hydraulic-specs.dita
CONFLICT (content): Merge conflict in topics/hydraulic-specs.dita
Automatic merge failed; fix conflicts and then commit the result.

# 2. Open the file — find conflict markers:
#    &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD                    (your current version)
#    =======                         (separator)
#    &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/update-specs    (incoming version)

# 3. Edit the file: remove conflict markers, keep correct content

# 4. Stage the resolved file
git add topics/hydraulic-specs.dita

# 5. Complete the merge
git commit -m "Merge feature/update-specs — keep metric units format"

# 6. Verify no remaining conflicts
git status</pre></div>

<h2>Visual Conflict Resolution in VS Code</h2>
<p>VS Code has built-in merge conflict visualization. It shows conflict regions with buttons:</p>
<ul>
<li>"Accept Current Change" — keep your version (HEAD)</li>
<li>"Accept Incoming Change" — keep the branch being merged</li>
<li>"Accept Both Changes" — keep both (one after the other)</li>
<li>"Compare Changes" — view a side-by-side diff</li>
</ul>

<h2>Preventing Conflicts</h2>
<ul>
<li><strong>Pull frequently:</strong> Before starting work, pull latest changes. Short-lived branches have fewer conflicts.</li>
<li><strong>Communicate:</strong> Tell teammates when you're working on a specific topic</li>
<li><strong>One topic per branch:</strong> Keep branches focused — don't accumulate many file changes</li>
<li><strong>Merge main into your branch regularly:</strong> git merge main while on your feature branch keeps you up to date</li>
</ul>`,
quiz:[{question:'After resolving a merge conflict in topics/guide.dita (removing the conflict markers and choosing the correct content), what must you do next?',options:['Run "git merge --abort" to cancel the merge','Run "git add topics/guide.dita" then "git commit" to complete the merge','The merge is automatically completed when you save the file','Push the branch and open a pull request'],correct:1,explanation:'After manually resolving a conflict: (1) git add the resolved file to stage it, (2) git commit to complete the merge (Git uses a pre-filled merge commit message). The merge is not complete until committed.'}],
prev:'page-65',next:'page-67'},

{id:'page-67',pageNum:67,module:6,moduleTitle:'Git & GitHub',title:'Git Exercises',subtitle:'Hands-on Git practice — creating repositories, branching, committing, and using GitHub.',duration:'45 min',level:'Hands-on',searchKeywords:'Git exercises practice repository commit branch push GitHub workflow',objectives:['Initialize and use a real Git repository','Practice the complete branch-commit-merge workflow','Push a DITA project to GitHub','Create and merge a pull request'],
content:`<h2>Exercise 6.1 — Initialize Your DITA Project in Git</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📦</div><div><div class="exercise-title">Git Init for DITA</div></div></div>
<ol class="exercise-steps">
<li>Navigate to your hydraulic system DITA project directory in the terminal</li>
<li>Run git init to initialize the repository</li>
<li>Create a .gitignore file with entries for: /out/, /output/, *.lock, .DS_Store</li>
<li>Run git status — you should see your DITA files as untracked</li>
<li>Stage all files: git add .</li>
<li>Make your first commit: git commit -m "Initial commit: hydraulic system DITA project"</li>
<li>Run git log --oneline to confirm the commit appears</li>
</ol></div>

<h2>Exercise 6.2 — Branch Workflow</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">🌿</div><div><div class="exercise-title">Feature Branch Practice</div></div></div>
<ol class="exercise-steps">
<li>Create and switch to a branch: git checkout -b feature/add-conref-library</li>
<li>Create a new file: shared/warnings-library.dita with one warning note</li>
<li>Stage and commit: git commit -m "Add hydraulic pressure warning to conref library"</li>
<li>Modify your existing task topic to include a conref to the new warning</li>
<li>Commit that change: git commit -m "Apply conref warning to pump replacement task"</li>
<li>Switch back to main: git checkout main</li>
<li>Merge your branch: git merge feature/add-conref-library</li>
<li>Confirm merge with git log --oneline --graph</li>
</ol></div>

<h2>Exercise 6.3 — GitHub Push and Pull Request</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">🐙</div><div><div class="exercise-title">GitHub Integration</div></div></div>
<ol class="exercise-steps">
<li>Create a new public repository on GitHub named "dita-hydraulic-system"</li>
<li>Connect your local repo: git remote add origin https://github.com/YOURUSERNAME/dita-hydraulic-system.git</li>
<li>Push: git push -u origin main</li>
<li>On GitHub, confirm your files are visible</li>
<li>Create a new branch locally: git checkout -b feature/add-specifications</li>
<li>Add a reference topic with specifications to your project</li>
<li>Commit and push: git push origin feature/add-specifications</li>
<li>On GitHub, open a Pull Request to merge feature/add-specifications into main</li>
<li>Review your own PR — leave a comment on a specific line</li>
<li>Merge the PR on GitHub; then pull the changes locally: git pull origin main</li>
</ol></div>`,
quiz:[{question:'You are on your feature branch and run "git merge main". What does this do?',options:['Merges your feature branch into main','Merges main into your feature branch — bringing your branch up to date with the latest main changes','Deletes the main branch','Creates a pull request'],correct:1,explanation:'git merge main while on a feature branch brings main\'s latest commits INTO your feature branch. This is a common practice to keep feature branches current and reduce merge conflicts when eventually merging the feature back into main.'}],
prev:'page-66',next:'page-68'},

{id:'page-68',pageNum:68,module:6,moduleTitle:'Git & GitHub',title:'Git Interview Prep',subtitle:'Git interview questions for technical writing and DITA/XML authoring roles.',duration:'20 min read',level:'Interview Prep',searchKeywords:'Git interview questions answers technical writing documentation version control',objectives:['Answer Git interview questions confidently','Explain Git workflow to non-technical interviewers','Describe documentation Git workflows clearly'],
content:`<h2>Git Interview Questions for Technical Writers</h2>
<div class="qa-item"><div class="qa-question">Q: Why would a technical writing team use Git for documentation?</div><div class="qa-answer"><p>Git provides: a complete history of every change to every file (who changed what, when, and why); the ability to revert to any previous version; parallel development through branching (multiple writers working simultaneously without interfering); peer review through pull requests before content is published; and integration with CI/CD pipelines for automated publishing. For DITA documentation specifically, each topic is a separate file, making merge conflicts rare and diffs meaningful.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: Explain the difference between git pull and git fetch.</div><div class="qa-answer"><p>git fetch downloads new commits from the remote but does NOT merge them into your current branch — you can review them first with git log origin/main. git pull is git fetch + git merge in one step — it downloads and immediately merges, updating your current branch. For safety, experienced Git users often prefer git fetch followed by git merge (or git rebase) so they can review changes before integrating them.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: How do you handle a situation where two writers have modified the same DITA topic and there is a merge conflict?</div><div class="qa-answer"><p>I would: (1) Run git status to identify conflicted files. (2) Open the conflicted DITA file in VS Code or Oxygen — look for the &lt;&lt;&lt;&lt;&lt; HEAD / ======= / &gt;&gt;&gt;&gt;&gt; markers. (3) Understand both versions — the HEAD (current branch) and the incoming version. (4) Decide on the correct content (consult the other writer if needed). (5) Edit the file to remove conflict markers and retain the correct content. (6) Validate the DITA file in Oxygen — XML must be well-formed. (7) git add the file, then git commit to complete the merge.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: What is a .gitignore file and what would you put in it for a DITA project?</div><div class="qa-answer"><p>A .gitignore file lists patterns for files and directories that Git should not track. For a DITA project: I'd include /out/ and /output/ (DITA-OT generated output — never commit generated files), *.lock (Oxygen lock files), .DS_Store and Thumbs.db (OS-specific files), and editor temp files. Generated output can always be regenerated from source; committing it bloats the repository and creates meaningless history noise.</p></div></div>`,
quiz:[{question:'An interviewer asks: "What is git rebase and how does it differ from git merge?" A good answer is:',options:['They are identical commands','Both combine branch histories but differently: merge creates a merge commit (preserves full history); rebase replays your commits on top of the target branch (creates linear history, rewrites commit hashes). Merge is safer for shared branches; rebase produces cleaner history for feature branches.','Rebase is only for resolving conflicts','Rebase deletes the source branch after combining'],correct:1,explanation:'git merge preserves the full branching history with a merge commit. git rebase replays your commits on top of the target branch, producing a linear history as if you\'d started from the latest commit. Both combine branches; the choice affects history readability and commit integrity. Most teams use merge for main branch integration and rebase for cleaning up feature branch history before merging.'}],
prev:'page-67',next:'page-69'},

{id:'page-69',pageNum:69,module:6,moduleTitle:'Git & GitHub',title:'GitHub Actions for Documentation',subtitle:'Automating documentation builds, validation, and deployment with GitHub Actions CI/CD pipelines.',duration:'20 min read',level:'Advanced',searchKeywords:'GitHub Actions CI/CD automation DITA-OT build deploy workflow yaml',objectives:['Understand GitHub Actions workflows','Write a basic GitHub Actions YAML workflow','Automate DITA-OT builds on push','Run markdownlint checks on pull requests'],
content:`<h2>GitHub Actions Overview</h2>
<p>GitHub Actions is GitHub's built-in CI/CD (Continuous Integration/Continuous Deployment) platform. For documentation teams, it enables:</p>
<ul>
<li>Automatically validate DITA files on every push</li>
<li>Run DITA-OT transformation on merge to main — producing published output automatically</li>
<li>Run markdownlint on every pull request to catch style violations</li>
<li>Deploy HTML documentation to GitHub Pages or a server on successful merge</li>
<li>Post Slack/Teams notifications when documentation is published</li>
</ul>

<h2>GitHub Actions Concepts</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Concept</th><th>Definition</th></tr></thead>
<tbody>
<tr><td>Workflow</td><td>A YAML file in .github/workflows/ — defines the automated process</td></tr>
<tr><td>Event</td><td>What triggers the workflow (push, pull_request, schedule, manual)</td></tr>
<tr><td>Job</td><td>A set of steps that run on the same runner</td></tr>
<tr><td>Step</td><td>An individual command or action within a job</td></tr>
<tr><td>Runner</td><td>The virtual machine that executes the workflow (ubuntu-latest, windows-latest)</td></tr>
<tr><td>Action</td><td>A reusable pre-built step (e.g., actions/checkout, actions/setup-java)</td></tr>
</tbody></table></div>

<h2>Example: Markdown Lint Workflow</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">YAML</span><span class="code-block-title">.github/workflows/lint-docs.yml</span></div>
<pre>name: Lint Documentation

on:
  pull_request:
    paths: ['**.md']    # Only run when .md files change

jobs:
  markdownlint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Run markdownlint
        uses: DavidAnson/markdownlint-cli2-action@v16
        with:
          globs: '**/*.md'</pre></div>

<h2>Example: DITA-OT Build Workflow</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">YAML</span><span class="code-block-title">.github/workflows/build-dita.yml</span></div>
<pre>name: Build DITA Documentation

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Java (required for DITA-OT)
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Build HTML5 output
        run: |
          dita --input=maps/main.ditamap \
               --format=html5 \
               --output=out/html5

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out/html5</pre></div>`,
quiz:[{question:'A GitHub Actions workflow with "on: pull_request" will:',options:['Run only when a PR is merged to main','Run every time a pull request is opened, synchronized, or reopened — enabling checks before merging','Run every time a commit is pushed to any branch','Only run on scheduled intervals'],correct:1,explanation:'"on: pull_request" triggers the workflow whenever a PR is opened, updated with new commits, or reopened. This enables pre-merge checks — like markdownlint validation — that must pass before the PR can be merged.'}],
prev:'page-68',next:'page-70'},
];
