---
layout: lesson
title: Drawing with Turtle
description: Create your own spirograph in Wipple.
duration: 1 hour
materials: Laptops, spirographs
standards: 6-8.CT.b.1, 9-12.CT.a.1, 9-12.CT.d.5
---

### Students will be able to...

-   Familiarize themselves with the Wipple Playground.

-   Move the turtle using the `forward`, `backward`, `left`, and `right`
    commands to draw a square.

-   Express repetition using the `repeat` command and draw a spirograph.

-   Recognize `repeat` as a form of abstraction; without `repeat`, code must be
    duplicated and changed in multiple places.

### Lesson plan

1. **Warm up: Spirograph (10 mins)** — Distribute spirographs to each table.
   Tables work to draw a spirograph and discuss how often the shape repeats.
   Each table brainstorms instructions to draw their shape and exchanges with
   another table. Students discuss whether their instructions were effective and
   how they could make them more effective.

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

6. **Exit ticket (5 mins)** — Ask students to answer the questions in the
   slideshow on their own. You may use a Google Form or other online survey.
   Make sure to record their name and their partner's name.

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

### Worked example: Square with `repeat`

```wipple
repeat (4 times) {
  forward (50 pixels)
  left (90 degrees)
}
```

1. Remove the duplicated commands, leaving only the first `forward` and `left`.

2. Then, drag `repeat` into the code editor. The turtle will still draw a
   square.

3. Explain how `repeat` runs the commands between the braces (`{ }`) multiple
   times. When it reaches the end brace (`}`), it goes back to the beginning
   brace (`{`) until all the commands have run the specified number of `times`.

4. Imagine you wanted to draw a bigger square. Without `repeat`, you would have
   to change the length of each side individually. But with `repeat`, you only
   have to change it once. `repeat` is a form of abstraction over how many times
   the program runs, allowing you to do the same thing with fewer commands.

### Sample student responses

-   **How many `times` did you `repeat` to draw your spirograph? How do you
    know?**

    I repeated 20 times to draw my spirograph. I know this because I used the
    `repeat` command with the number 20.

-   **Could you draw your spirograph _without_ `repeat`? Why or why not? Which
    way do you think is better?**

    Yes, I could draw my spirograph without `repeat`, because `repeat` is the
    dragging in the same commands over and over again. I think using `repeat` is
    better because I only have to change my code once when I want to experiment
    with new shapes.
