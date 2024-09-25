---
layout: lesson
title: Music and Variables
description: >
    Students learn how to use variables, a more flexible form of repetition, to
    create a musical composition. This lesson is split across two days.
duration: 2 hours
materials: Laptops, projector with speakers
standards: 6-8.CT.b.3, 9-12.CT.a.1
---

### The big idea

-   Variables allow you to give a name to a piece of code so it can be reused.

-   Variables are created using `:`. The name of the variable goes on the left,
    and the code goes on the right.

-   Variables are more flexible than `repeat` because they may be used in any
    order.

---

### Students will be able to...

-   Identify patterns in a piece of music.

-   Explore the music editor in the Wipple Playground and compose a simple
    melody for the piano.

-   Determine a name for their melody and practice referring to it with the
    `play` command.

-   Compose a song using at least three variables, two instruments, and one
    `repeat`.

-   Compare and contrast variables and repetition.

---

### Progression

-   **Prior knowledge:** Students have completed the _Drawing with Turtle_
    lesson and are comfortable using the Wipple code editor.

-   **Current knowledge:** Students will practice composing simple melodies and
    determining appropriate variable names for them (eg. "lead", "bass", or the
    name of a song). Then, students will modify the code they drag and drop to
    use their variables. Finally, students will combine variables and `repeat`
    to create a complex composition.

-   **Future knowledge:** Students will recognize the conceptual difference
    between variables and `repeat`, and the advantages and disadvantages of
    each.

---

### Key vocabulary

-   **Variable:** A name for a piece of code. Variables **store** values.

-   **Value:** What you get when you refer to a variable. For example, if
    `sum : 1 + 2`, `sum`'s value is `3`. In general, the value of a piece of
    code is what it produces after it runs. "Value" can also mean "usefulness"
    (eg. "the value of abstraction is that you can focus on what, not how"), but
    here, "value" refers to the item stored in a variable.

-   **Abstraction:** A way to make a program easier to understand by focusing on
    _what_ the program should do, not _how_. For example, variables are an
    abstraction because they describe _what_ they store; once they are created,
    they may be used without needing to know _how_ their value was constructed.
    Like `repeat`, variables prevent duplication.

---

### Lesson plan

1.  **Warm up: Music video (5 mins)** — As a class, watch
    [Twinkle Twinkle Little Star](https://www.youtube.com/watch?v=hCKBl-TpRzc)
    (0:00–1:00). Pay attention to the repetition in the song. Then, listen to
    the song a second time and write down the pattern using letters of the
    alphabet (A, B, C, ...). Review with a partner and then as a class.

    Explain that today, students will be creating their own music in Wipple.
    Discuss whether they think they could use `repeat` to play Twinkle Twinkle
    Little Star. Why or why not? Explain answers.

2.  **Guided practice: Setting up music and variables (10 mins)** — Direct
    students to open their computers to wipple.org and create a new playground.
    Instead of clicking on Turtle, click Music. Demonstrate how to create a
    melody and change the variable name, and how to use the `play` command to
    change the instrument. Students follow along to create their own simple
    melody.

3.  **Activity: Composition (75-90 mins)** — Students create a composition of
    their own with a partner. The composition must contain at least three
    variables, two instruments, and one use of `repeat`. Switch who is using the
    computer every 15 minutes so that both partners have a chance to write code.
    This part of the lesson takes place over two days. (When students arrive the
    next day, invite a few groups to share what they have for inspiration.)

4.  **Presentations (15 mins)** — Partner groups present their composition to
    the class and explain their process.

5.  **Exit ticket (3 mins)** — Have students click Print to save a PDF of their
    code, and save their song as an audio file. Students upload both files and
    answer the questions in the slideshow on their own. You may use a Google
    Form or other online survey.

---

### Extensions

-   Before this lesson, invite a student (or the teacher) to bring an instrument
    they play, and allow them to perform after watching Twinkle Twinkle Little
    Star. Have students complete the same pattern-recognition exercise.

-   Explore using the `together` command to play across multiple instruments at
    the same time.

-   If students finish early, they can add additional instruments and make their
    composition longer.

---

### Universal design

-   Students with hearing accommodations can review the lyrics to a popular song
    instead of the music video. As an alternate assignment, they can continue
    with the Turtle module, using variables to represent the aspects of a
    regular shape. See the worked example below.

---

### Worked example: Simple melody

1.  Drag in the `melody : [♪]` command from the sidebar. Click on the music note
    and experiment with the piano.

2.  Change the name of the variable from `melody` to a name that describes your
    melody more specifically. For example, if the melody is from a song, the
    variable may be the song's name. (Note: If the variable contains multiple
    words, they must be separated with a dash `-`.)

3.  Drag in the `play` command and change it to refer to your variable. Change
    the instrument to `tuba`.

4.  Press **Run** to hear your melody played by a tuba.

Result:

```wipple
my-song : [♪]
play [tuba ▾] my-song
```

---

### Worked example: Drawing with variables alternate assignment

1.  Create a variable named `size` containing `(50 pixels)`.

2.  Create a second variable named `sides` containing the number of sides of the
    shape.

3.  Recall the formula for the angle between two sides of a shape:
    `(360 degrees) / sides`. Create a third variable named `angle` to represent
    this.

4.  Use `repeat` to draw the shape corresponding to your variables. Adjust
    `size` and `sides`, and observe how the shape changes.

5.  Ask the student to explain how the use of variables makes the code easier to
    understand. Variables are a form of abstraction over the specific quantity
    your code works with; they let you give names to numbers and other items.

Result:

```wipple
size : (50 pixels)
sides : 4
angle : (360 degrees) / sides
repeat (sides times) {
  forward size
  left angle
}
```

---

### Sample student responses

-   **How many variables did you use and what were their names? Why did you
    choose these names?**

    I used 3 variables and named them `vocals`, `melody` and `rhythm`. I chose
    these names because they correspond to the 3 parts of the band playing the
    song.

-   **Are variables and `repeat` the same? If so, how? If not, what makes them
    different?**

    Variables and `repeat` are similar in some ways and different in others.
    They both make it easier to change and understand the code because they
    reduce repetition, but `repeat` always runs the code in the same order.
    Variables let you mix up the order in any way you want.

-   **What about your song are you most proud of, and why?**

    Answers will vary!
