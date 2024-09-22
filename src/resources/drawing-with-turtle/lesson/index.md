---
layout: lesson
title: Drawing with Turtle
description: >
    In this introduction to Wipple, students learn about sequencing and
    repetition by drawing a spirograph.
duration: 1 hour
materials: Laptops, projector, spirograph kits
standards: 6-8.CT.b.1, 9-12.CT.a.1, 9-12.CT.d.5
---

### The big idea

-   Computers work by reading commands in a program exactly as written, so these
    commands must be precise.

-   `repeat` is a special command that tells the computer to run the program
    multiple `times`. `repeat` is a form of abstraction because with it, you
    only need to change your code in one place instead of many places.

---

### Students will be able to...

-   Explore the Wipple Playground's interface and familiarize themselves with
    its functionality.

-   Practice using the `forward`, `backward`, `left`, and `right` commands to
    draw a simple shape.

-   Construct a complex shape using the `repeat` command.

-   Discuss `repeat`'s value as a form of abstraction.

---

### Progression

-   **Prior knowledge:** Students are familiar with typing and their web
    browser.

-   **Current knowledge:** Students will practice communicating instructions to
    draw a shape, and will develop an understanding that these instructions must
    be precise so that others can follow them. Students will learn that they can
    avoid repetition using words like "repeat" and "times", and then express
    these ideas in code.

-   **Future knowledge:** Students will develop an intuition for when code is
    duplicated and how to use `repeat` to remove this duplication. In a future
    lesson, students will learn about variables, a more flexible way to express
    repetition.

---

### Key vocabulary

-   **Spirograph:** A device for drawing spiral shapes with a pen on paper.

-   **Command:** An instruction that a computer follows to complete a specific
    task.

-   **Program:** A sequence of commands that a computer follows in order.

-   **Repetition:** When a program or part of a program is followed multiple
    times.

-   **Abstraction:** A way to make a program easier to understand by focusing on
    _what_ the program should do, not _how_. For example, `repeat` is an
    abstraction because it hides the process of going back to the beginning and
    running the program again. Learning to recognize patterns in code and use an
    abstraction to describe these patterns more easily is an important part of
    growing as a coder.

---

### Lesson plan

1.  **Warm up: Spirograph (10 mins)** — Split class into groups of three (the
    artist, the translator, and the writer).

    -   The artist is responsible for retrieving, using, and putting away the
        spirograph kit.

    -   The translator is responsible for watching the artist and translating
        their movements into instructions for the writer.

    -   The writer is responsible for writing down the instructions and handing
        them to the next group.

    Groups work to draw a spirograph. Encourage students to count out loud with
    each rotation of the pen. Then, exchange instructions with another group,
    and ask each group to flip over their paper and follow the instructions
    _exactly as written_ to draw the new shape.

    Have groups turn to each other and share their drawings. Were their
    instructions followed as intended? What would they change about their
    instructions?

    Finally, discuss as a class how this activity could relate to coding.

2.  **Guided practice: Setting up Wipple (10 mins)** — Put away the spirograph
    kits, and direct students to open their computers and go to wipple.org.
    Follow the instructions in the slideshow so that all students can make the
    turtle draw a simple shape using the Movement commands (`forward`,
    `backward`, `left`, and `right`). Then, direct students to experiment with
    the dropdowns and the order of the commands — how does changing the order
    change the shape drawn by the turtle?

3.  **Turn and talk: The `repeat` command (5 mins)** — In the same groups of
    three, count the number of commands in each student's program. Referencing
    their spirograph instructions, students brainstorm ways they could reduce
    the number of commands (listen for words like "repeat", "times", and
    "again"). Encourage groups to explore the menu and find a command that could
    help.

    Once students have identified `repeat` in the menu, they can apply it to
    their shape to tile it across the screen.

4.  **Challenge activity: Spirograph (30 mins)** — Challenge students to use
    `repeat` to draw their own spirograph. Encourage them to collaborate at
    their tables. When time is up, ask them to save a PDF of what they have
    using the Print button.

5.  **Discuss: Abstraction (2 mins)** — Students discuss in their groups why
    `repeat` was useful for drawing the spirograph.

6.  **Exit ticket (3 mins)** — Have students upload the PDF of their code and
    answer the questions in the slideshow on their own. You may use a Google
    Form or other online survey. If a printer is available in the classroom,
    have students line up once they have submitted their exit ticket and print
    their drawings for them so they can take them home. As students wait to be
    picked up, present their drawings on the board.

---

### Extensions

-   Have students explore the other commands in the menu, especially `color` and
    `animal`. They may click Print multiple times to save different versions of
    their spirograph.

---

### Universal design

-   Explain that commands (code) will always be written in a colored box, and
    that the color of the command is the same in the slides and in the code
    editor. This can help students identify which command is appropriate to use
    (eg. movement commands are always green). Every command also has an icon
    indicating its function.

-   If the text in the code editor is too small to read, show students how to
    zoom in using Ctrl&nbsp;+ or ⌘&nbsp;+. Alternatively, the zoom options are
    available in the browser's page settings menu (in Google Chrome, this is the
    menu with the three vertical dots in the top right).

-   When working in partners, one student may suggest instructions while the
    other student drags the commands into the code editor.

---

### Worked example: Square without `repeat`

1.  Begin by dragging `forward` into the code editor. The turtle will move
    forward.

2.  Then, drag `left` into the code editor below `forward`. The turtle will move
    forward, and then turn left. Explain how each line is its own command; the
    computer runs commands one by one from top to bottom.

3.  Repeat this process to draw all four sides of the square, and count the
    total number of commands.

Result:

```wipple
forward (50 pixels)
left (90 degrees)
forward (50 pixels)
left (90 degrees)
forward (50 pixels)
left (90 degrees)
forward (50 pixels)
```

---

### Worked example: Square with `repeat`

1.  Remove the duplicated commands, leaving only the first `forward` and `left`.

2.  Then, drag `repeat` into the code editor and change the dropdown to `4`. The
    turtle will still draw a square.

3.  Explain how `repeat` runs the commands between the braces (`{ }`) multiple
    times. When it reaches the end brace (`}`), it goes back to the beginning
    brace (`{`) until all the commands have run the specified number of `times`.

4.  Imagine you wanted to draw a bigger square. Without `repeat`, you would have
    to change the length of each side individually. But with `repeat`, you only
    have to change it once. `repeat` is a form of abstraction over how many
    times the program runs, allowing you to do the same thing with fewer
    commands.

Result:

```wipple
repeat (4 times) {
  forward (50 pixels)
  left (90 degrees)
}
```

---

### Sample student responses

-   **How many `times` did you `repeat` to draw your spirograph? How do you
    know?**

    I repeated 20 times to draw my spirograph. I know this _because I used the
    `repeat` command_ with the number `20`.

-   **Could you draw your spirograph _without_ `repeat`? Why or why not? Which
    way do you think is better?**

    Yes, I could draw my spirograph without `repeat`, because _`repeat` is the
    same as dragging in the commands over and over again_. I think using
    `repeat` is better because _I only had to change my code once_ when I wanted
    to experiment with new designs.
