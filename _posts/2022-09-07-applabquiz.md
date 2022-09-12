---
toc: true
layout: post
categories: [markdown]
title: App Lab Quiz Outline
---

# App Lab Quiz Outline

Person A: Ishi
Person B: Ekam

# Introduction Page 

1. 2 people must be playing this quiz together, Person A and Person B
2. Person B must have their screen hidden form Person A and vice versa
3. Each Person must take turns to DESCRIBE their image, they can't directly tell what it is
4. Both players need to answer before moving on to the next question

# Questions:

(Person A: me, Person B: Ishi)

1. Person A has a giraffe on their screen 
   Person B has a Toucan on theirs 
  
  "What animal is on your partner's screen?"
  
  
2. Person A has the cover of the song "Royals" by Lorde
   Person B has the cover of the song "I Love It" by Icona Pop 
   
   "What song is shown on on your partner's screen?"
   
3. Person A has an image of various colored circles
   Person B has an image of differently colored circles
   
   "What is the color of the largest circle on your partner's screen?"
   
   
 # General Quiz Plan: 
 
 1. Introduction screen (screen 2): 
 
   Has a button to start the quiz:
   uses onEvent to set the screen to the next page 
   
 2. Instructions: lists special instructions (since this is a partner quiz) 
 
   Has another button with onEvent to set screen to first question 
   
 3. Question 1: 
 
   Three buttons with possible answers. Incorrect Answers lead you to page 6 ("incorrect" screen). Correct answers lead you to page 8 ("correct" screen)
   
 4. Question 2: Same mechanic as question 1 
   
 5. Question 3: Same mechanic as question 1, except correct question takes you to completion page

 6. Incorrect Page: has a statement that tells the player they answered wrong and a button that takes you back to the introduction screen to start over (later changed)

 7. Completion Page: tells the player they finished the quiz

 8. Correct Page: lets the player know they answered correct, and are moving on to the next question. It has a button that takes you you to the next question


# Changes Made: 

- Orininally the incorrect page took you to the starting page and the player had to start the quiz over. Then I changed the code by adding adding an on event within the on event of an incorrect question so that the player was taken back to the question they got incorrect
- The original code had a seperate correct page for each question. However eventually I managed to make it so that the same correct page takes the player to the next question. 


# The Final Quiz: 

My Quiz: 
https://studio.code.org/projects/applab/eGfXM6EyaxOBkUNorqCV1fBnQ0RoFWBOIEejLpPTXS0

Ishi's Quiz: 
https://studio.code.org/projects/applab/qQPEbjk6FhWvgxYMfkktJ0Jn5oBlid4l_6eo912qYC0


 
 
 
   
