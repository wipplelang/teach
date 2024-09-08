---
layout: lesson
title: Drawing with Turtle
description: >
    In this introduction to the Wipple Playground, students learn about
    repetition by drawing a spirograph.
duration: 1 hour
materials: Laptops, spirograph kits
standards: 6-8.CT.b.1, 9-12.CT.a.1, 9-12.CT.d.5
---

### The big idea

-   Computers work by reading commands in a program one at a time, and these
    commands must be precise.

-   `repeat` is a special command that tells the computer to run the program
    multiple `times`.

---

### Students will be able to...

-   Explore and familiarize themselves with the Wipple Playground.

-   Move the turtle using the `forward`, `backward`, `left`, and `right`
    commands to draw a square.

-   Express repetition using the `repeat` command and draw a spirograph.

-   Recognize `repeat` as a form of abstraction; without `repeat`, code must be
    duplicated and changed in multiple places.

---

### Progression

-   **Prior knowledge:** Students are familiar with computers and typing, and
    are proficient in English.

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

-   **Command/instruction:** A statement that a person or computer follows to
    complete a task.

-   **Program:** A sequence of commands/instructions that a computer "runs" in
    order.

-   **Repetition:** When a program or part of a program is followed multiple
    times.

-   **Abstraction:** A way to achieve a program's desired result using fewer
    written commands. For example, the `repeat` command is an abstraction
    because it tells the computer to run a sequence of commands again without
    having to write those commands again.

---

### Lesson plan

1. **Warm up: Spirograph (10 mins)** — Ask students if they have used a
   spirograph before and ask them to explain what a spirograph is. Distribute
   spirograph kits to each table. Tables work to draw a spiral and discuss how
   often the shape repeats (encourage students to count out loud as they move
   the pen one time around). Each table brainstorms instructions to draw their
   shape and exchanges with another table. Students discuss whether their
   instructions were effective and how they could make them more effective.

2. **Guided practice: Setting up Wipple (10 mins)** — In partners, direct
   students to open their computers and go to wipple.org. Follow the
   instructions in the slideshow so that all students can make the turtle draw a
   line. Then, students use the other commands (`backward`, `left`, and `right`)
   to draw a square.

3. **Turn and talk: The `repeat` command (5 mins)** — Partners turn to another
   partner group and count how many instructions they have in their program.
   Then, students discuss how they could potentially use fewer instructions
   (listen for words like "repeat" and "again").

4. **The `repeat` command (5-10 mins)** — Direct attention to the board and
   introduce the `repeat` command. `repeat` takes a number of `times` and runs
   the code between the braces (`{ }`) that number of times. Demonstrate how to
   draw a square using `repeat`, and then ask the students to follow.

5. **Partner activity: Spirograph (20-25 mins)** — With a partner, students use
   the movement and `repeat` commands to draw a spirograph of their own. When
   they are finished, ask them to take a screenshot of their work.

6. **Exit ticket (5 mins)** — Ask students to upload their screenshot and answer
   the questions in the slideshow on their own. You may use a Google Form or
   other online survey. Make sure to record their name and their partner's name.

---

### Universal support

-   Explain that commands (code) will always be written in a colored box, and
    that the color of the command is the same in the slides and in the code
    editor. This can help students identify which command is appropriate to use
    (eg. movement commands are always green, and turning commands are always
    blue). Every command also has an icon indicating its function.

-   If the text in the code editor is too small to read, show students how to
    zoom in using Ctrl&nbsp;+ or ⌘&nbsp;+. Alternatively, the zoom options are
    available in the browser's page settings menu (in Google Chrome, this is the
    menu with the three vertical dots in the top right).

-   Students may draw a square using pen and paper before writing the code to do
    so. As they draw, they should say each step (moving, turning) out loud. When
    working in partners, one student may draw while the other student drags the
    commands into the code editor.

---

### Extensions

-   Encourage students who finish early to program another spirograph. Make sure
    they take a screenshot before erasing their code. Alternatively, they can
    work in a new browser tab.

-   Have students explore the other commands in the menu, especially `color` and
    `animal`. Does the order of these commands relative to the other commands
    matter? (What happens if you place them at the end versus the beginning of
    the program?)

---

### Worked example: Square without `repeat`

```wipple
forward (50 pixels)
left (90 degrees)
forward (50 pixels)
left (90 degrees)
forward (50 pixels)
left (90 degrees)
forward (50 pixels)
left (90 degrees)
```

1. Begin by dragging `forward` into the code editor. The turtle will move
   forward.

2. Then, drag `left` into the code editor below `forward`. The turtle will move
   forward, and then turn left. Explain how each line is its own command; the
   computer runs commands one by one from top to bottom.

3. Repeat this process to draw all four sides of the square, and count the total
   number of commands.

---

### Worked example: Square with `repeat`

```wipple
repeat (4 times) {
  forward (50 pixels)
  left (90 degrees)
}
```

1. Remove the duplicated commands, leaving only the first `forward` and `left`.

2. Then, drag `repeat` into the code editor and change the dropdown from `1` to
   `4`. The turtle will still draw a square.

3. Explain how `repeat` runs the commands between the braces (`{ }`) multiple
   times. When it reaches the end brace (`}`), it goes back to the beginning
   brace (`{`) until all the commands have run the specified number of `times`.

4. Imagine you wanted to draw a bigger square. Without `repeat`, you would have
   to change the length of each side individually. But with `repeat`, you only
   have to change it once. `repeat` is a form of abstraction over how many times
   the program runs, allowing you to do the same thing with fewer commands.

---

### Sample student responses

-   **How many `times` did you `repeat` to draw your spirograph? How do you
    know?**

    I repeated 20 times to draw my spirograph. I know this because I used the
    `repeat` command with the number `20`.

-   **Could you draw your spirograph _without_ `repeat`? Why or why not? Which
    way do you think is better?**

    Yes, I could draw my spirograph without `repeat`, because `repeat` is the
    same as dragging in the commands over and over again. I think using `repeat`
    is better because I only have to change my code once when I want to
    experiment with new shapes.
