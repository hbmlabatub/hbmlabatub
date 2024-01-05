This is the code for the site for the Human Behavior Modeling Lab at SUNY Buffalo.

In order to add to the website, you need a few things.
You'll need [Hugo](https://gohugo.io/), a static site generator. Inside the directory,
run the following command to start up a debug server. This will allow
you to edit things and see your changes in realtime before commiting them to the website.

```
hugo server -D
```

1. [Adding People](#add_people)
   1. [Create People](#create_people)
   2. [Add Profile Picture](#profile_pic)
   3. [Update Info](#update_info)

# Adding People <a name="add_people"></a>

The following instructions describe creating new members of the lab,
for all different levels

## Create People <a name="create_people"></a>

To create a new person, run one of the commands below,
depending on the level of the person being added.
Just replace first-last with the first and last name of the user

```
hugo new people/undergrad/first-last --kind people/undergrad
hugo new people/masters/first-last --kind people/masters
hugo new people/phd/first-last --kind people/phd
hugo new people/post-doc/first-last --kind people/post-doc
hugo new people/professor/first-last --kind people/professor
```

## Add Profile Picture <a name="profile_pic"></a>

You should now have a folder under "content" that holds your file.
To add your profile picture, just add profile.jpg to this folder.

**This picture should be square, such as 400x400. Without this, layouts will be off.**

## Update Info <a name="update_info"></a>

To update your information, just update the index.md file that was created.
Update the variables and the text at the bottom, which should update your personal page
without any effort.
