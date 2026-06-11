import type { SubjectSeed } from "./types";

export const physics: SubjectSeed = {
  slug: "physics",
  name: "Physics",
  description: "Motion, forces, energy & waves for VCE",
  icon: "⚡",
  color: "#3b82f6",
  order: 2,
  topics: [
    // ─────────────────────────────────────────────
    // TOPIC 1 — Motion & Kinematics  (Year 9/10)
    // ─────────────────────────────────────────────
    {
      slug: "motion",
      yearBand: "Year 9/10",
      title: "Motion & Kinematics",
      description: "Scalars and vectors, SUVAT equations, and projectile motion",
      surgeonRelevance: "Biomechanics and trauma surgery — understanding displacement, velocity and deceleration forces underpins how surgeons assess joint movement and predict injury patterns in trauma patients.",
      order: 1,
      lessons: [
        {
          slug: "distance-displacement-speed",
          title: "Distance, Displacement & Speed",
          order: 1,
          content: `## Distance and Displacement

- **Distance** is a *scalar* quantity — it has magnitude only (e.g. 100 m)
- **Displacement** is a *vector* quantity — it has both magnitude **and** direction (e.g. 60 m north)
- A runner who completes one full lap of a 400 m track has travelled **distance = 400 m** but **displacement = 0 m**

## Speed and Velocity

- **Speed** = distance ÷ time (scalar, unit: m/s)
- **Velocity** = displacement ÷ time (vector, unit: m/s in a stated direction)

## Worked Example

> A cyclist rides 300 m east then 400 m north.
> - Total distance = 700 m
> - Resultant displacement = √(300² + 400²) = **500 m** at 53° north of east (Pythagoras)

## Key Formulae

| Quantity | Symbol | SI Unit |
|---|---|---|
| Distance / Displacement | d / s | metre (m) |
| Time | t | second (s) |
| Speed / Velocity | v | m/s |

\\[v = \\frac{\\Delta s}{\\Delta t}\\]`,
          medicalCallout: `**Surgical relevance — Biomechanics:** Displacement vectors describe joint range of motion. Orthopaedic surgeons use vector analysis when measuring the arc of movement restored after hip or knee replacement, comparing the resultant displacement of the limb endpoint across the full range.`,
        },
        {
          slug: "velocity-acceleration",
          title: "Velocity & Acceleration",
          order: 2,
          content: `## Acceleration

- **Acceleration** is the rate of change of velocity (vector, unit: m/s²)

\\[a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - u}{t}\\]

- Positive acceleration → speeding up in the chosen direction
- Negative acceleration (deceleration) → slowing down

## The SUVAT Equations

| Symbol | Meaning | Unit |
|---|---|---|
| s | displacement | m |
| u | initial velocity | m/s |
| v | final velocity | m/s |
| a | acceleration | m/s² |
| t | time | s |

The four SUVAT equations (constant acceleration only):

1. \\( v = u + at \\)
2. \\( s = ut + \\tfrac{1}{2}at^2 \\)
3. \\( v^2 = u^2 + 2as \\)
4. \\( s = \\tfrac{1}{2}(u + v)t \\)

## Worked Example

> A car brakes from 20 m/s to rest over 4 s. Find the deceleration.
> - \\( a = (0 - 20) / 4 = \\mathbf{-5 \\text{ m/s}^2} \\)`,
          medicalCallout: `**Surgical relevance — Trauma Surgery:** The deceleration experienced by a vehicle occupant in a crash directly predicts the forces transmitted to the spine, thorax and skull. Trauma surgeons use knowledge of impact velocity and stopping distance (SUVAT) to anticipate internal injuries before imaging confirms them.`,
        },
        {
          slug: "motion-graphs",
          title: "Motion Graphs",
          order: 3,
          content: `## Displacement–Time (s–t) Graphs

- **Gradient** of an s–t graph = velocity
- Horizontal line → object at rest
- Straight diagonal line → constant velocity
- Curve → changing velocity (acceleration)

## Velocity–Time (v–t) Graphs

- **Gradient** of a v–t graph = acceleration
- **Area under** a v–t graph = displacement
- Horizontal line → constant velocity (zero acceleration)
- Straight diagonal → constant acceleration

## Reading a v–t Graph: Key Steps

1. Identify each phase (acceleration / constant speed / deceleration)
2. Calculate gradient for each phase → acceleration values
3. Calculate area of each section (triangles + rectangles) → total displacement

## Example Interpretation

> A train accelerates from rest to 30 m/s over 60 s, travels at 30 m/s for 120 s, then decelerates to rest in 40 s.
> - Total displacement = area = ½(60)(30) + (120)(30) + ½(40)(30) = 900 + 3600 + 600 = **5100 m**`,
          medicalCallout: `**Surgical relevance — Biomechanics & Gait Analysis:** Force plates and motion-capture systems in clinical biomechanics labs produce velocity–time graphs of limb segments during walking. Orthopaedic surgeons interpret gradient changes (accelerations) to assess whether a reconstructed tendon or replaced joint returns normal movement patterns.`,
        },
        {
          slug: "projectile-motion",
          title: "Projectile Motion",
          order: 4,
          interactiveRef: "projectile",
          content: `## What Is Projectile Motion?

A projectile is any object launched into the air and subject only to gravity (ignoring air resistance).

- Horizontal motion: **constant velocity** (no horizontal force)
- Vertical motion: **constant acceleration** downward, \\( g = 9.8 \\text{ m/s}^2 \\)

## Key Principle — Independence of Motion

The horizontal and vertical components are **independent**. Solve each separately using SUVAT.

## Horizontal Component

\\[ x = u_x \\cdot t \\quad (a_x = 0) \\]

## Vertical Component

\\[ y = u_y t - \\tfrac{1}{2} g t^2 \\]
\\[ v_y = u_y - gt \\]

## Worked Example

> A ball is kicked horizontally at 15 m/s from a cliff 20 m high. Find range.
> 1. Vertical: \\( 20 = \\tfrac{1}{2}(9.8)t^2 \\Rightarrow t = 2.02 \\text{ s} \\)
> 2. Horizontal: \\( x = 15 \\times 2.02 = \\mathbf{30.3 \\text{ m}} \\)

## Angle of Launch

- 45° gives maximum range on level ground
- Range: \\( R = \\dfrac{u^2 \\sin 2\\theta}{g} \\)`,
          medicalCallout: `**Surgical relevance — Ballistic Trauma:** Surgeons treating gunshot wounds apply projectile physics to understand wound trajectories. The horizontal range, terminal velocity, and angle of entry inform the expected path of tissue damage, guiding surgical exploration to locate bullet fragments and assess organ injury.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "A student walks 6 m east then 8 m north. What is the magnitude of their resultant displacement?",
          options: JSON.stringify(["10 m", "14 m", "2 m", "7 m"]),
          answer: "A",
          explanation: "Using Pythagoras: √(6² + 8²) = √(36 + 64) = √100 = 10 m.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which of the following is a VECTOR quantity?",
          options: JSON.stringify(["Speed", "Distance", "Velocity", "Temperature"]),
          answer: "C",
          explanation: "Velocity has both magnitude and direction, making it a vector. Speed and distance are scalars.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A car accelerates from rest to 24 m/s in 8 s. What is its acceleration in m/s²?",
          options: null,
          answer: "3|0.1|m/s^2",
          explanation: "a = Δv / Δt = (24 − 0) / 8 = 3 m/s².",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "On a velocity–time graph, the AREA under the curve represents:",
          options: JSON.stringify(["Acceleration", "Displacement", "Speed", "Force"]),
          answer: "B",
          explanation: "The area under a v–t graph equals displacement (∫v dt = s).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A ball is dropped from rest and falls for 3 s (g = 9.8 m/s²). How far does it fall (m)?",
          options: null,
          answer: "44.1|0.5|m",
          explanation: "s = ½gt² = ½ × 9.8 × 3² = 4.9 × 9 = 44.1 m.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A vehicle brakes from 30 m/s to rest, experiencing a deceleration of 6 m/s². How long does it take to stop?",
          options: JSON.stringify(["3 s", "5 s", "6 s", "10 s"]),
          answer: "B",
          explanation: "t = Δv / a = 30 / 6 = 5 s.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following statements about projectile motion are correct? (Select ALL that apply)",
          options: JSON.stringify([
            "Horizontal velocity is constant throughout the flight",
            "Vertical acceleration equals 9.8 m/s² downward",
            "The horizontal and vertical motions are independent",
            "Air resistance is included in basic projectile models",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "In ideal projectile motion, horizontal velocity is constant, vertical acceleration is g downward, and the two components are treated independently. Air resistance is ignored in the basic model.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A projectile is launched horizontally at 20 m/s from a height of 45 m. Using g = 10 m/s², what is the horizontal range (m)?",
          options: null,
          answer: "60|1|m",
          explanation: "Time of flight: 45 = ½ × 10 × t² → t = 3 s. Range = 20 × 3 = 60 m.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A sprinter runs 100 m in 10 s in a straight line. Which statement is TRUE?",
          options: JSON.stringify([
            "Average speed = average velocity = 10 m/s",
            "Average speed = 10 m/s; average velocity = 10 m/s in the direction of travel",
            "Average speed is undefined because direction is not given",
            "Average velocity = 0 because the sprinter returns to start",
          ]),
          answer: "B",
          explanation: "Speed is 100/10 = 10 m/s (scalar). Average velocity also has magnitude 10 m/s but must include direction since it is a vector.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Using v² = u² + 2as, find the final velocity (m/s) of an object starting at rest, accelerating at 4 m/s² over 18 m.",
          options: null,
          answer: "12|0.2|m/s",
          explanation: "v² = 0 + 2 × 4 × 18 = 144, so v = 12 m/s.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "What is the SI unit of velocity?",
          options: JSON.stringify(["m/s²", "m/s", "km/h", "N"]),
          answer: "B",
          explanation: "Velocity is displacement per unit time; its SI unit is metres per second (m/s).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A car travels 150 km in 2 hours. What is its average speed in m/s?",
          options: JSON.stringify(["75 m/s", "20.8 m/s", "41.7 m/s", "300 m/s"]),
          answer: "B",
          explanation: "150 km = 150 000 m; 2 h = 7200 s. Speed = 150 000 / 7200 ≈ 20.8 m/s.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A cyclist travels at a constant 15 m/s for 40 s. How far do they travel (m)?",
          options: null,
          answer: "600|5|m",
          explanation: "d = v × t = 15 × 40 = 600 m.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "On a displacement–time graph, a horizontal straight line indicates the object is:",
          options: JSON.stringify(["Accelerating", "Decelerating", "Stationary", "Moving at constant velocity"]),
          answer: "C",
          explanation: "A horizontal line on a displacement–time graph means displacement is not changing — the object is stationary.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "An object accelerates uniformly from 5 m/s to 15 m/s in 4 s. What is its displacement (m) during this time?",
          options: null,
          answer: "40|1|m",
          explanation: "s = ½(u + v)t = ½(5 + 15) × 4 = 10 × 4 = 40 m.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A train decelerates uniformly from 36 m/s to rest with deceleration 3 m/s². What is the stopping distance (m)?",
          options: JSON.stringify(["72 m", "108 m", "216 m", "432 m"]),
          answer: "C",
          explanation: "v² = u² + 2as → 0 = 36² − 2 × 3 × s → s = 1296 / 6 = 216 m.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A ball is thrown vertically upward at 20 m/s (g = 10 m/s²). How long does it take to reach maximum height?",
          options: JSON.stringify(["1 s", "2 s", "4 s", "10 s"]),
          answer: "B",
          explanation: "At maximum height, v = 0. t = (v − u)/a = (0 − 20)/(−10) = 2 s.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which SUVAT equation does NOT involve displacement (s)?",
          options: JSON.stringify(["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = ½(u + v)t"]),
          answer: "A",
          explanation: "v = u + at relates v, u, a and t only — no displacement term.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "An object starts at rest and accelerates at 6 m/s². How far (m) does it travel in 5 s?",
          options: null,
          answer: "75|1|m",
          explanation: "s = ut + ½at² = 0 + ½ × 6 × 25 = 75 m.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An athlete runs around a 400 m circular track and returns to the starting point. Their distance and displacement are respectively:",
          options: JSON.stringify(["400 m and 400 m", "400 m and 0 m", "0 m and 0 m", "0 m and 400 m"]),
          answer: "B",
          explanation: "Distance = total path length = 400 m. Displacement = change in position = 0 m (returns to start).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A rocket starts from rest and accelerates upward at 15 m/s² for 10 s. What is its speed (m/s) after 10 s?",
          options: null,
          answer: "150|2|m/s",
          explanation: "v = u + at = 0 + 15 × 10 = 150 m/s.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A stone is dropped from a bridge and takes 4 s to hit the water below (g = 9.8 m/s²). How high (m) is the bridge above the water?",
          options: JSON.stringify(["19.6 m", "39.2 m", "78.4 m", "156.8 m"]),
          answer: "C",
          explanation: "h = ½gt² = ½ × 9.8 × 16 = 78.4 m.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are scalar quantities? (Select ALL that apply)",
          options: JSON.stringify(["Speed", "Distance", "Acceleration", "Time"]),
          answer: JSON.stringify(["A", "B", "D"]),
          explanation: "Speed, distance and time have magnitude only (scalar). Acceleration is a vector — it has both magnitude and direction.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A car brakes from 20 m/s to rest with deceleration 5 m/s². What is the stopping distance (m)?",
          options: null,
          answer: "40|1|m",
          explanation: "v² = u² + 2as → 0 = 400 − 10s → s = 40 m.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A velocity–time graph shows a straight line with a negative gradient. This represents:",
          options: JSON.stringify(["Constant velocity", "Increasing speed", "Uniform deceleration", "Zero displacement"]),
          answer: "C",
          explanation: "Negative gradient on a v–t graph means velocity is decreasing uniformly — uniform deceleration.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "An object moving at 10 m/s accelerates at 2 m/s² for 5 s. What is its final velocity (m/s)?",
          options: null,
          answer: "20|0.5|m/s",
          explanation: "v = u + at = 10 + 2 × 5 = 20 m/s.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A car brakes from 30 m/s to rest in 4 s with uniform deceleration. What is the deceleration (m/s²)?",
          options: JSON.stringify(["6 m/s²", "7.5 m/s²", "10 m/s²", "120 m/s²"]),
          answer: "B",
          explanation: "a = Δv/t = 30/4 = 7.5 m/s².",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "In ideal projectile motion (no air resistance), which quantities remain CONSTANT throughout the flight? (Select ALL that apply)",
          options: JSON.stringify([
            "Horizontal velocity",
            "Vertical velocity",
            "Vertical acceleration due to gravity",
            "Total speed of the projectile",
          ]),
          answer: JSON.stringify(["A", "C"]),
          explanation: "Horizontal velocity is constant (no horizontal force) and vertical acceleration is a constant g downward. Both vertical velocity and total speed change throughout the flight.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A ball is thrown vertically upward at 25 m/s (g = 10 m/s²). How long (s) before it returns to the thrower's hand?",
          options: null,
          answer: "5|0.1|s",
          explanation: "Time to reach top = 25/10 = 2.5 s. By symmetry, total flight time = 2 × 2.5 = 5 s.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The gradient of a displacement–time graph gives:",
          options: JSON.stringify(["Acceleration", "Distance", "Velocity", "Speed only (magnitude)"]),
          answer: "C",
          explanation: "Velocity = rate of change of displacement = Δs/Δt = gradient of the s–t graph.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "At the maximum height of a ball thrown vertically upward, the ball's instantaneous velocity and acceleration are:",
          options: JSON.stringify([
            "Both zero",
            "Velocity = 0; acceleration = g downward",
            "Both equal to g downward",
            "Velocity = g upward; acceleration = 0",
          ]),
          answer: "B",
          explanation: "At maximum height the ball momentarily stops (v = 0), but gravity still acts giving a = g = 9.8 m/s² downward.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A car accelerates from 15 m/s to 35 m/s at 4 m/s². How far (m) does it travel during this acceleration?",
          options: null,
          answer: "125|2|m",
          explanation: "v² = u² + 2as → 35² − 15² = 2 × 4 × s → 1000 = 8s → s = 125 m.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "In uniform circular motion, the object is accelerating even though its speed is constant. This is because:",
          options: JSON.stringify([
            "The magnitude of velocity is increasing",
            "The direction of velocity is continuously changing",
            "The mass of the object changes",
            "Friction continuously increases speed",
          ]),
          answer: "B",
          explanation: "Acceleration is the rate of change of velocity (a vector). In circular motion, the direction changes constantly, so velocity changes even though speed is constant.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A truck accelerates uniformly from rest to 30 m/s in 15 s. What is its acceleration (m/s²)?",
          options: null,
          answer: "2|0.1|m/s^2",
          explanation: "a = Δv/t = 30/15 = 2 m/s².",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A surgeon drops a scalpel from an operating table 0.8 m high (g = 10 m/s²). At what speed (m/s) does it hit the floor?",
          options: JSON.stringify(["2 m/s", "4 m/s", "8 m/s", "16 m/s"]),
          answer: "B",
          explanation: "v² = 2gh = 2 × 10 × 0.8 = 16 → v = 4 m/s.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "A ball is rolled off a horizontal table. Which statements about its motion AFTER leaving the table are correct? (Select ALL that apply)",
          options: JSON.stringify([
            "Its horizontal velocity remains constant",
            "Its vertical velocity increases downward due to gravity",
            "Its horizontal acceleration is zero",
            "Its speed is at a maximum immediately after leaving the table",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "After leaving the table no horizontal force acts (A and C correct) and gravity accelerates it downward (B correct). D is wrong — as the ball falls its vertical speed grows so its total speed increases.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "When area beneath a v–t graph lies below the time axis (negative velocity phase), it represents:",
          options: JSON.stringify([
            "Positive displacement",
            "Negative displacement (motion in the reverse direction)",
            "Zero acceleration",
            "The object has stopped",
          ]),
          answer: "B",
          explanation: "Negative velocity means the object moves in the negative direction. Area below the axis = negative displacement.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which of the following is an example of NON-UNIFORM (changing) acceleration?",
          options: JSON.stringify([
            "Free fall near Earth's surface (ignoring air resistance)",
            "A ball rolling down a frictionless straight ramp",
            "A car simultaneously braking and steering around a bend",
            "A ball thrown vertically upward",
          ]),
          answer: "C",
          explanation: "Non-uniform acceleration means the acceleration vector itself changes. Simultaneously braking and steering changes both speed and direction, so the acceleration vector changes continuously in both magnitude and direction.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A bullet is fired horizontally at 900 m/s from a height of 1.25 m (g = 10 m/s²). How far (m) does it travel horizontally before hitting the ground?",
          options: null,
          answer: "450|5|m",
          explanation: "Time: 1.25 = ½ × 10 × t² → t = 0.5 s. Horizontal range = 900 × 0.5 = 450 m.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which quantity is defined as the rate of change of velocity?",
          options: JSON.stringify(["Speed", "Distance", "Displacement", "Acceleration"]),
          answer: "D",
          explanation: "Acceleration = Δv/Δt — the rate of change of velocity (vector).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A sprinter accelerates from rest to 9 m/s over 3 s, then runs at 9 m/s for 7 s. What is the total displacement (m)?",
          options: null,
          answer: "76.5|0.5|m",
          explanation: "During acceleration: s₁ = ½(0 + 9) × 3 = 13.5 m. Constant speed: s₂ = 9 × 7 = 63 m. Total = 76.5 m.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A crash test dummy decelerates from 13.9 m/s to rest in 0.15 s (a 50 km/h crash). What is the deceleration magnitude (m/s²)?",
          options: JSON.stringify(["9.8 m/s²", "46.3 m/s²", "92.7 m/s²", "139 m/s²"]),
          answer: "C",
          explanation: "a = Δv/t = 13.9/0.15 ≈ 92.7 m/s² ≈ 9.5 g. Trauma surgeons use deceleration magnitude to predict injury patterns before imaging.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "How long (s) does it take for an object to reach 40 m/s from rest if acceleration is 8 m/s²?",
          options: null,
          answer: "5|0.1|s",
          explanation: "t = v/a = 40/8 = 5 s.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which of the following best describes deceleration?",
          options: JSON.stringify([
            "An increase in speed",
            "A change in direction only",
            "Negative acceleration — velocity decreasing in the positive direction",
            "Zero acceleration",
          ]),
          answer: "C",
          explanation: "Deceleration is negative acceleration — the component of velocity in the chosen positive direction is decreasing.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following statements about free fall (ignoring air resistance) are correct? (Select ALL that apply)",
          options: JSON.stringify([
            "All objects fall with the same acceleration regardless of mass",
            "A heavier object reaches the ground before a lighter one dropped from the same height",
            "The downward velocity increases by 9.8 m/s every second",
            "The falling object is in equilibrium",
          ]),
          answer: JSON.stringify(["A", "C"]),
          explanation: "All objects fall with g = 9.8 m/s² regardless of mass (A). Velocity increases by 9.8 m/s each second (C). B is false (equal acceleration for all masses). D is false (net force = mg ≠ 0).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A ball is thrown horizontally from a cliff of height 45 m at 15 m/s (g = 10 m/s²). What is the horizontal range (m)?",
          options: null,
          answer: "45|1|m",
          explanation: "Time: 45 = ½ × 10 × t² → t = 3 s. Range = 15 × 3 = 45 m.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A displacement of zero can occur while the distance travelled is non-zero. This is possible when:",
          options: JSON.stringify([
            "The object was always stationary",
            "The object returned to its starting position",
            "The object moved only horizontally",
            "The object accelerated throughout",
          ]),
          answer: "B",
          explanation: "If an object returns to its starting point, net displacement = 0 but the total path length (distance) is non-zero.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A javelin is launched at 45° to the horizontal at 20 m/s (g = 10 m/s²). What is the maximum height (m) reached?",
          options: null,
          answer: "10|0.5|m",
          explanation: "u_y = 20 sin45° = 14.14 m/s. At max height v_y = 0. h = u_y²/(2g) = 200/20 = 10 m.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "In clinical gait analysis after hip replacement surgery, which motion graph would a physiotherapist examine to evaluate the smoothness of limb acceleration during the stride?",
          options: JSON.stringify([
            "A position–time graph showing total distance walked",
            "A velocity–time graph of the limb segment showing gradient changes",
            "A force–extension graph of the hip capsule",
            "A pressure–time graph of foot contact only",
          ]),
          answer: "B",
          explanation: "The gradient of a v–t graph equals acceleration. Physiotherapists examine gradient changes on the v–t graph to identify abnormal acceleration patterns indicating compromised joint function post-surgery.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "An object decelerates uniformly from 8 m/s to rest in 2 s. What is the magnitude of deceleration (m/s²)?",
          options: null,
          answer: "4|0.1|m/s^2",
          explanation: "a = Δv/t = (0 − 8)/2 = −4 m/s². Magnitude = 4 m/s².",
          difficulty: 1,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // TOPIC 2 — Forces & Newton's Laws  (VCE Unit 1)
    // ─────────────────────────────────────────────
    {
      slug: "forces",
      yearBand: "VCE Unit 1",
      title: "Forces & Newton's Laws",
      description: "Free-body diagrams, Newton's three laws, friction and equilibrium",
      surgeonRelevance: "Orthopaedic implants — every prosthetic joint and bone plate must withstand physiological forces. Newton's Second Law (F = ma) determines the loads on implants during walking, running and falls.",
      order: 2,
      lessons: [
        {
          slug: "newtons-first-law",
          title: "Newton's First Law & Inertia",
          order: 1,
          interactiveRef: "forces",
          content: `## Newton's First Law (Law of Inertia)

> *An object at rest remains at rest, and an object in motion continues at constant velocity, unless acted upon by a net external force.*

- **Inertia** is the tendency of an object to resist changes to its state of motion
- Inertia is proportional to mass — heavier objects are harder to accelerate or stop

## Free-Body Diagrams (FBDs)

A free-body diagram shows **all forces** acting on a single object as arrows:

- Length of arrow → relative magnitude
- Direction → direction of force
- Label each arrow (Weight W, Normal force N, Friction f, Tension T, etc.)

## Net Force

- When all forces balance → **net force = 0** → object is in **equilibrium** (static or moving at constant velocity)
- When forces are unbalanced → net force ≠ 0 → acceleration occurs

## Common Forces

| Force | Symbol | Direction |
|---|---|---|
| Weight (gravity) | W = mg | Downward |
| Normal force | N | Perpendicular to surface |
| Friction | f | Opposing relative motion |
| Tension | T | Along string/rope |`,
          medicalCallout: `**Surgical relevance — Surgical Positioning:** Inertia and Newton's First Law are implicit in patient positioning. When a patient is tilted on the operating table (e.g. Trendelenburg position), the surgical team must account for the tendency of the unsecured body to slide. Restraining straps provide the net force needed to keep the patient stationary.`,
        },
        {
          slug: "newtons-second-law",
          title: "Newton's Second Law",
          order: 2,
          interactiveRef: "forces",
          content: `## Newton's Second Law

\\[ \\vec{F}_{\\text{net}} = m\\vec{a} \\]

- Net force (N) = mass (kg) × acceleration (m/s²)
- Force is a **vector** — direction matters
- **1 Newton** = the force required to accelerate 1 kg at 1 m/s²

## Applying the Law: Step-by-Step

1. Draw a free-body diagram
2. Choose a positive direction
3. Write \\( F_{\\text{net}} = ma \\) for each axis
4. Solve for the unknown

## Worked Example

> A 70 kg patient on a trolley is pushed with 210 N, experiencing 70 N friction. Find acceleration.
> - \\( F_{\\text{net}} = 210 - 70 = 140 \\text{ N} \\)
> - \\( a = F_{\\text{net}} / m = 140 / 70 = \\mathbf{2 \\text{ m/s}^2} \\)

## Weight vs Mass

- **Mass** = amount of matter (kg) — does not change with location
- **Weight** = gravitational force on mass: \\( W = mg \\)
- On Earth: g = 9.8 m/s² (often approximated as 10 m/s²)`,
          medicalCallout: `**Surgical relevance — Orthopaedic Implants:** When a patient walks, the hip joint experiences forces up to 3–4 times body weight due to muscle forces and accelerations (F = ma). Orthopaedic engineers apply Newton's Second Law to compute peak implant loads, guiding material choice and fixation design for hip and knee prostheses.`,
        },
        {
          slug: "newtons-third-law",
          title: "Newton's Third Law",
          order: 3,
          content: `## Newton's Third Law (Action–Reaction)

> *For every action force, there is an equal and opposite reaction force acting on a different object.*

## Key Points

- The action and reaction forces are **equal in magnitude** and **opposite in direction**
- They act on **different objects** — so they do NOT cancel each other
- Every force comes in an action–reaction pair

## Identifying Action–Reaction Pairs

| Action | Reaction |
|---|---|
| Earth pulls you down (W) | You pull Earth up |
| Foot pushes back on ground | Ground pushes foot forward (propulsion) |
| Rocket ejects gas backward | Gas pushes rocket forward |

## Worked Example

> A 60 kg person stands on a scale on Earth.
> - Earth exerts W = 60 × 9.8 = 588 N downward on person
> - Person exerts 588 N upward on Earth
> - Scale exerts N = 588 N upward on person (different pair — Newton's 2nd)`,
          medicalCallout: `**Surgical relevance — Bone & Implant Mechanics:** When a surgeon drives a screw into bone, Newton's Third Law means the bone pushes back on the screwdriver with equal force. Understanding reaction forces is essential when designing orthopaedic plates — the bone reacts to every load the implant applies, and failure occurs when bone reaction forces exceed tissue tolerance.`,
        },
        {
          slug: "friction-equilibrium",
          title: "Friction & Equilibrium",
          order: 4,
          content: `## Friction

Friction is a force that **opposes relative motion** between surfaces in contact.

\\[ f = \\mu N \\]

- \\(\\mu\\) = coefficient of friction (dimensionless, 0–1 typically)
- N = normal force
- **Static friction** (\\(\\mu_s\\)) acts before motion begins and can vary up to its maximum
- **Kinetic friction** (\\(\\mu_k\\)) acts during sliding; \\(\\mu_k < \\mu_s\\)

## Static Equilibrium

An object is in **static equilibrium** when:
- \\( \\sum F_x = 0 \\)
- \\( \\sum F_y = 0 \\)
- \\( \\sum \\tau = 0 \\) (sum of torques = 0 — covered in VCE Unit 2)

## Inclined Plane Problems

On a slope of angle θ:
- Component of weight along slope: \\( W_{\\parallel} = mg\\sin\\theta \\)
- Component of weight perpendicular: \\( W_{\\perp} = mg\\cos\\theta \\)
- Normal force: \\( N = mg\\cos\\theta \\)

## Worked Example

> A 10 kg box rests on a slope of 30°, μ_s = 0.65. Does it slide?
> - \\( W_{\\parallel} = 10 \\times 9.8 \\times \\sin 30° = 49 \\text{ N} \\)
> - \\( f_{\\max} = 0.65 \\times 10 \\times 9.8 \\times \\cos 30° = 55.2 \\text{ N} \\)
> - Since \\( f_{\\max} > W_{\\parallel} \\), the box does NOT slide.`,
          medicalCallout: `**Surgical relevance — Implant Fixation:** Friction is the primary mechanism by which cementless hip stems and tibial components achieve initial stability ("press-fit"). The coefficient of friction between a porous titanium implant and cortical bone (~0.5–0.9) must exceed the ratio of shear load to normal compressive load at the implant interface, otherwise micromotion prevents bone ingrowth.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "A 5 kg object is pushed with 40 N and experiences 15 N of friction. What is its acceleration?",
          options: JSON.stringify(["3 m/s²", "5 m/s²", "8 m/s²", "11 m/s²"]),
          answer: "B",
          explanation: "F_net = 40 − 15 = 25 N. a = F/m = 25/5 = 5 m/s².",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the weight (in N) of an 85 kg person on Earth? (use g = 9.8 m/s²)",
          options: null,
          answer: "833|1|N",
          explanation: "W = mg = 85 × 9.8 = 833 N.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "According to Newton's Third Law, when a horse pulls a cart forward:",
          options: JSON.stringify([
            "The cart pulls the horse backward with an equal force",
            "The cart pulls the horse backward with a smaller force",
            "No reaction force exists because the horse is stronger",
            "The ground pulls both horse and cart upward",
          ]),
          answer: "A",
          explanation: "Newton's Third Law: the cart exerts an equal and opposite (backward) force on the horse.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "An object travels at constant velocity in a straight line. Which statement MUST be true?",
          options: JSON.stringify([
            "No forces act on the object",
            "The net force on the object is zero",
            "Only one force acts on the object",
            "The object is in free fall",
          ]),
          answer: "B",
          explanation: "Newton's First Law: constant velocity means zero net force, but individual forces may still act and balance each other.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 1200 kg car decelerates at 4 m/s². What net braking force acts on the car (N)?",
          options: null,
          answer: "4800|50|N",
          explanation: "F = ma = 1200 × 4 = 4800 N.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are action–reaction pairs described by Newton's Third Law? (Select ALL that apply)",
          options: JSON.stringify([
            "Earth pulls a book down; the table pushes the book up",
            "A swimmer pushes water backward; water pushes the swimmer forward",
            "Earth pulls a ball down; the ball pulls Earth upward",
            "Tension in a rope pulls a crate forward; friction pushes the crate backward",
          ]),
          answer: JSON.stringify(["B", "C"]),
          explanation: "Action–reaction pairs involve the SAME interaction between TWO objects. B: swimmer/water interaction. C: gravitational interaction between ball and Earth. A and D describe different forces on the same object (equilibrium pairs, not action–reaction).",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A 20 kg crate is on a surface with μ_k = 0.3 (g = 10 m/s²). What is the kinetic friction force?",
          options: JSON.stringify(["6 N", "30 N", "60 N", "66 N"]),
          answer: "C",
          explanation: "N = mg = 200 N. f_k = μ_k × N = 0.3 × 200 = 60 N.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 10 kg block on a frictionless 30° incline. What acceleration (m/s²) does it experience? (g = 9.8 m/s²)",
          options: null,
          answer: "4.9|0.1|m/s^2",
          explanation: "a = g sin30° = 9.8 × 0.5 = 4.9 m/s².",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Two forces act on an object: 60 N east and 80 N north. What is the magnitude of the net force?",
          options: JSON.stringify(["70 N", "100 N", "140 N", "20 N"]),
          answer: "B",
          explanation: "F_net = √(60² + 80²) = √(3600 + 6400) = √10000 = 100 N.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "An athlete of mass 70 kg accelerates from rest to 8 m/s in 2 s. What average net force (N) acts on them?",
          options: null,
          answer: "280|5|N",
          explanation: "a = (8 − 0)/2 = 4 m/s². F = ma = 70 × 4 = 280 N.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What is the SI unit of force?",
          options: JSON.stringify(["Joule", "Newton", "Pascal", "Watt"]),
          answer: "B",
          explanation: "Force is measured in newtons (N). 1 N = 1 kg·m/s².",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What net force (N) is needed to accelerate a 3000 kg truck at 2 m/s²?",
          options: null,
          answer: "6000|100|N",
          explanation: "F = ma = 3000 × 2 = 6000 N.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Newton's First Law is also known as the Law of:",
          options: JSON.stringify(["Action–Reaction", "Inertia", "Conservation of Energy", "Universal Gravitation"]),
          answer: "B",
          explanation: "Newton's First Law describes inertia — the tendency of objects to resist changes in their state of motion.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A 70 kg person stands in a lift accelerating upward at 2 m/s² (g = 10 m/s²). What is the normal force (N) from the floor?",
          options: JSON.stringify(["560 N", "700 N", "840 N", "980 N"]),
          answer: "C",
          explanation: "N − mg = ma → N = m(g + a) = 70 × (10 + 2) = 840 N.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 150 N horizontal force is applied to a 30 kg object on a frictionless surface. What is its acceleration (m/s²)?",
          options: null,
          answer: "5|0.1|m/s^2",
          explanation: "a = F/m = 150/30 = 5 m/s².",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Two forces of 7 N and 24 N act at right angles on an object. What is the magnitude of the resultant force (N)?",
          options: JSON.stringify(["17 N", "25 N", "31 N", "336 N"]),
          answer: "B",
          explanation: "F = √(7² + 24²) = √(49 + 576) = √625 = 25 N.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Kinetic friction always acts in which direction relative to motion?",
          options: JSON.stringify([
            "In the direction of motion",
            "Perpendicular to the surface only",
            "Opposing relative motion between surfaces",
            "Proportional to velocity",
          ]),
          answer: "C",
          explanation: "Kinetic friction always opposes the relative motion between the two surfaces in contact.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "The gravitational field strength on the Moon is 1.6 m/s². What is the weight (N) of a 75 kg astronaut on the Moon?",
          options: null,
          answer: "120|2|N",
          explanation: "W = mg = 75 × 1.6 = 120 N.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are genuine Newton's Third Law action–reaction pairs? (Select ALL that apply)",
          options: JSON.stringify([
            "A magnet attracts a paperclip; the paperclip attracts the magnet with equal force",
            "The normal force on a book from a table; the weight of the book due to gravity",
            "Earth pulls you downward; you pull Earth upward with equal gravitational force",
            "A swimmer pushes water backward; water propels the swimmer forward",
          ]),
          answer: JSON.stringify(["A", "C", "D"]),
          explanation: "N3L pairs involve the SAME type of force between TWO objects. A (magnetic), C (gravitational), D (contact) are correct pairs. B is NOT a N3L pair — the book's weight and the normal force are different force types acting on the same object.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A 50 kg box rests on a horizontal surface with μ_s = 0.4 (g = 10 m/s²). What is the maximum static friction force (N)?",
          options: null,
          answer: "200|5|N",
          explanation: "f_s(max) = μ_s × N = μ_s × mg = 0.4 × 50 × 10 = 200 N.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A 20 kg crate is pushed with 80 N and accelerates at 2 m/s². What is the friction force (N) acting on the crate?",
          options: JSON.stringify(["10 N", "20 N", "40 N", "80 N"]),
          answer: "C",
          explanation: "F_net = ma = 20 × 2 = 40 N. F_net = F_push − f → f = 80 − 40 = 40 N.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A 60 kg patient is on a tilted operating table at 15° (Trendelenburg). What is the component of their weight along the table surface (N)? (g = 10 m/s², sin 15° ≈ 0.26)",
          options: JSON.stringify(["60 N", "156 N", "579 N", "600 N"]),
          answer: "B",
          explanation: "F_parallel = mg sin15° = 60 × 10 × 0.26 ≈ 156 N. Restraints must provide this force to prevent the patient sliding.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 2 kg ball hangs from a string. A horizontal force of 12 N is also applied to the ball (g = 10 m/s²). What is the tension (N) in the string?",
          options: null,
          answer: "23.3|0.3|N",
          explanation: "Vertical: T cosθ = mg = 20 N; Horizontal: T sinθ = 12 N. T = √(20² + 12²) = √544 ≈ 23.3 N.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Mass is measured in which SI unit?",
          options: JSON.stringify(["Newtons", "Kilograms", "Joules", "Pascals"]),
          answer: "B",
          explanation: "Mass (amount of matter) is measured in kilograms (kg). Weight (gravitational force) is measured in newtons (N).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "As the angle of an inclined plane increases from 0° to 90°, the normal force on an object resting on it:",
          options: JSON.stringify([
            "Increases",
            "Stays constant",
            "Decreases toward zero",
            "Equals the component of weight along the slope",
          ]),
          answer: "C",
          explanation: "N = mg cosθ. As θ increases toward 90°, cosθ → 0, so N → 0.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A car of mass 900 kg experiences a net force of 1800 N. What is its acceleration (m/s²)?",
          options: null,
          answer: "2|0.1|m/s^2",
          explanation: "a = F/m = 1800/900 = 2 m/s².",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A book of mass 2 kg rests on a horizontal table. The normal force from the table on the book is approximately:",
          options: JSON.stringify(["0 N", "9.8 N", "19.6 N", "39.2 N"]),
          answer: "C",
          explanation: "N = mg = 2 × 9.8 = 19.6 N. The normal force balances the book's weight.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "A hockey puck slides on ice and gradually slows down. Which forces act on the puck while it slides? (Select ALL that apply)",
          options: JSON.stringify([
            "Weight (gravity downward)",
            "Normal force from ice (upward)",
            "Kinetic friction from ice (opposing motion)",
            "An applied force in the direction of motion",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "Once released, no applied force acts (D false). Weight (A) and normal force (B) balance vertically. Kinetic friction (C) opposes sliding, causing deceleration.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 4 kg block on a rough horizontal surface (μ_k = 0.25) is pushed with 20 N horizontally (g = 10 m/s²). What is the acceleration (m/s²)?",
          options: null,
          answer: "2.5|0.1|m/s^2",
          explanation: "N = mg = 40 N. f_k = 0.25 × 40 = 10 N. F_net = 20 − 10 = 10 N. a = 10/4 = 2.5 m/s².",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "If the net force on an object doubles while its mass stays constant, the acceleration:",
          options: JSON.stringify(["Halves", "Stays the same", "Doubles", "Quadruples"]),
          answer: "C",
          explanation: "Newton's Second Law: a = F_net/m. If F doubles and m is constant, a doubles.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which of the following best describes the difference between mass and weight?",
          options: JSON.stringify([
            "They are the same thing measured in different units",
            "Mass is force × acceleration; weight is a scalar",
            "Mass is the amount of matter (kg); weight is the gravitational force (N)",
            "Mass varies with location; weight does not",
          ]),
          answer: "C",
          explanation: "Mass (kg) is the amount of matter — constant everywhere. Weight (N) = mg and varies with local gravitational field strength.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 65 kg person stands in a lift decelerating downward at 3 m/s² (g = 10 m/s²). What is their apparent weight (N) on the scales?",
          options: null,
          answer: "845|5|N",
          explanation: "Decelerating downward means the acceleration is upward. N − mg = ma → N = m(g + a) = 65 × 13 = 845 N.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "According to Newton's Third Law, the reaction force to the Earth pulling a ball downward is:",
          options: JSON.stringify([
            "The table's normal force pushing the ball upward",
            "The ball pulling the Earth upward with an equal gravitational force",
            "Friction between the ball and the ground",
            "Air resistance on the ball",
          ]),
          answer: "B",
          explanation: "N3L: Earth pulls ball down → ball pulls Earth up (same gravitational interaction, different objects). The normal force is a separate force.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following would reduce the kinetic friction force between two surfaces? (Select ALL that apply)",
          options: JSON.stringify([
            "Polishing/smoothing both surfaces",
            "Adding lubrication between the surfaces",
            "Increasing the normal force between surfaces",
            "Replacing the material with one of lower coefficient of friction",
          ]),
          answer: JSON.stringify(["A", "B", "D"]),
          explanation: "f_k = μ_k N. Reducing μ_k (by polishing, lubricating, or changing material) reduces friction. Increasing N actually increases friction — C is wrong.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 15 kg sled is pulled at 25° above horizontal with 120 N. Friction = 40 N (g = 10 m/s², cos 25° ≈ 0.906). What is the sled's acceleration (m/s²)?",
          options: null,
          answer: "4.6|0.2|m/s^2",
          explanation: "F_horizontal = 120 × 0.906 = 108.7 N. F_net = 108.7 − 40 = 68.7 N. a = 68.7/15 ≈ 4.6 m/s².",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A 12 kg object rests on a 25° slope (g = 9.8 m/s², sin 25° ≈ 0.423). What is the component of weight along the slope (N)?",
          options: null,
          answer: "49.7|0.5|N",
          explanation: "F_parallel = mg sin25° = 12 × 9.8 × 0.423 ≈ 49.7 N.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Two blocks of 3 kg and 5 kg are connected by a rope and pulled across a frictionless surface by a 24 N force. What is the acceleration of the system (m/s²)?",
          options: JSON.stringify(["0.5 m/s²", "3 m/s²", "8 m/s²", "24 m/s²"]),
          answer: "B",
          explanation: "a = F/m_total = 24/(3 + 5) = 24/8 = 3 m/s².",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "For the system above (3 kg and 5 kg blocks, 24 N force, frictionless), what is the tension (N) in the rope between the blocks?",
          options: null,
          answer: "9|0.5|N",
          explanation: "The rope accelerates the 3 kg block: T = m₃ × a = 3 × 3 = 9 N.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A stationary patient on a surgical table has zero net force. Newton's First Law tells us:",
          options: JSON.stringify([
            "No forces act on the patient",
            "The patient will remain stationary",
            "Only gravity acts on the patient",
            "The patient has zero mass",
          ]),
          answer: "B",
          explanation: "Zero net force → no change in motion (N1L). Multiple forces (gravity, normal) act but balance each other, keeping the patient stationary.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which conditions are necessary for a rigid body to be in STATIC EQUILIBRIUM? (Select ALL that apply)",
          options: JSON.stringify([
            "Net force in the x-direction = 0",
            "Net force in the y-direction = 0",
            "Net torque about any point = 0",
            "All individual forces must be equal in magnitude",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "Static equilibrium requires ΣFx = 0, ΣFy = 0 AND Στ = 0 (no net torque). Individual forces can have different magnitudes (D is false).",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A hip replacement implant experiences ≈3× body weight during normal walking. For a 70 kg patient (g = 10 m/s²), the approximate hip joint force is:",
          options: JSON.stringify(["500 N", "700 N", "2100 N", "4200 N"]),
          answer: "C",
          explanation: "Hip force ≈ 3 × mg = 3 × 70 × 10 = 2100 N. This guides orthopaedic material and fixation design (F = ma).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "What is the weight (N) of a 60 kg person on Earth (g = 9.8 m/s²)?",
          options: null,
          answer: "588|5|N",
          explanation: "W = mg = 60 × 9.8 = 588 N.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 0.5 kg tennis ball is struck with a net force of 150 N. What is its acceleration (m/s²)?",
          options: null,
          answer: "300|5|m/s^2",
          explanation: "a = F/m = 150/0.5 = 300 m/s².",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A bone plate is attached to a fractured femur. Each screw has a shear load of 80 N and a tensile preload of 400 N. What minimum coefficient of friction between plate and bone is required for stability?",
          options: JSON.stringify(["0.1", "0.2", "0.4", "0.8"]),
          answer: "B",
          explanation: "For stability, friction force ≥ shear load. μ × 400 ≥ 80 → μ_min = 80/400 = 0.2.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "An object moves at constant velocity across a rough horizontal surface. Which of the following MUST be true? (Select ALL that apply)",
          options: JSON.stringify([
            "The net force on the object is zero",
            "The applied force equals the friction force in magnitude",
            "The object has zero mass",
            "No forces act on the object",
          ]),
          answer: JSON.stringify(["A", "B"]),
          explanation: "Constant velocity → net force = 0 (N1L). The applied force must equal friction in magnitude for the net force to be zero. Forces clearly still act (gravity, normal, friction, applied).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 4 kg block rests on a frictionless 30° inclined plane (g = 9.8 m/s², cos 30° ≈ 0.866). What is the normal force (N)?",
          options: null,
          answer: "33.9|0.5|N",
          explanation: "N = mg cos30° = 4 × 9.8 × 0.866 ≈ 33.9 N.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What does Newton's Second Law state?",
          options: JSON.stringify([
            "Every action has an equal and opposite reaction",
            "F_net = ma",
            "Objects at rest stay at rest unless acted upon",
            "Mass = Force / Acceleration",
          ]),
          answer: "B",
          explanation: "Newton's Second Law: the net force on an object equals its mass times its acceleration (F_net = ma).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "During orthopaedic surgery, a surgeon drives a bone screw into cortical bone. Newton's Third Law predicts the bone will:",
          options: JSON.stringify([
            "Exert no force on the screw",
            "Exert a force equal in magnitude and opposite in direction to the force the screw exerts on the bone",
            "Exert a smaller force than the screw applies",
            "Exert a larger force than the screw applies",
          ]),
          answer: "B",
          explanation: "N3L: for every force the screw applies to bone, the bone applies an equal and opposite reaction on the screw. Surgeons feel this as resistance when inserting screws.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The coefficient of kinetic friction (μ_k) compared to the coefficient of static friction (μ_s) for the same surfaces is typically:",
          options: JSON.stringify([
            "Greater than μ_s",
            "Equal to μ_s",
            "Less than or equal to μ_s",
            "Independent of the surfaces",
          ]),
          answer: "C",
          explanation: "It is harder to START sliding than to maintain it — μ_k ≤ μ_s for the same pair of surfaces.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 10 kg block on a frictionless 20° incline accelerates from rest (g = 9.8 m/s², sin 20° ≈ 0.342). What is its acceleration down the slope (m/s²)?",
          options: null,
          answer: "3.35|0.1|m/s^2",
          explanation: "a = g sin20° = 9.8 × 0.342 ≈ 3.35 m/s².",
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // TOPIC 3 — Energy & Work  (VCE Unit 2)
    // ─────────────────────────────────────────────
    {
      slug: "energy",
      yearBand: "VCE Unit 2",
      title: "Energy & Work",
      description: "Work-energy theorem, kinetic and potential energy, power and conservation",
      surgeonRelevance: "Laser surgery and ultrasound — energy delivery, intensity and efficiency are central to understanding how lasers ablate tissue and how ultrasound waves carry energy into the body.",
      order: 3,
      lessons: [
        {
          slug: "work-energy-theorem",
          title: "Work & the Work-Energy Theorem",
          order: 1,
          content: `## Definition of Work

Work is done when a force causes displacement in the direction of the force.

\\[ W = Fs\\cos\\theta \\]

- W = work (joules, J)
- F = force (N)
- s = displacement (m)
- θ = angle between force and displacement

## Key Points

- If θ = 0° (force and displacement parallel): W = Fs (maximum work)
- If θ = 90° (force perpendicular to displacement): W = 0 (no work done — e.g. normal force on level ground)
- Negative work occurs when force opposes displacement (θ = 180°)

## The Work-Energy Theorem

> *The net work done on an object equals its change in kinetic energy.*

\\[ W_{\\text{net}} = \\Delta E_k = \\tfrac{1}{2}mv^2 - \\tfrac{1}{2}mu^2 \\]

## Worked Example

> A 2 kg block starts at rest. A 10 N net force acts over 5 m. Find final velocity.
> - \\( W = 10 \\times 5 = 50 \\text{ J} \\)
> - \\( 50 = \\tfrac{1}{2}(2)v^2 \\Rightarrow v = \\sqrt{50} \\approx 7.07 \\text{ m/s} \\)`,
          medicalCallout: `**Surgical relevance — Ultrasound Surgery:** In High-Intensity Focused Ultrasound (HIFU), the work done by acoustic pressure waves on tissue is converted to thermal energy, causing localised ablation. The work–energy theorem (W = ΔEₖ) governs how much energy the oscillating tissue molecules absorb, determining the zone of tissue destruction with submillimetre precision.`,
        },
        {
          slug: "kinetic-potential-energy",
          title: "Kinetic & Potential Energy",
          order: 2,
          content: `## Kinetic Energy

\\[ E_k = \\tfrac{1}{2}mv^2 \\]

- Depends on both mass and the **square** of velocity
- Always ≥ 0
- Doubling speed → quadruples kinetic energy

## Gravitational Potential Energy

\\[ E_p = mgh \\]

- h = height above chosen reference level (m)
- Increases as height increases
- Reference level is arbitrary (usually ground level or lowest point)

## Elastic Potential Energy

\\[ E_{\\text{elastic}} = \\tfrac{1}{2}kx^2 \\]

- k = spring constant (N/m)
- x = extension or compression from equilibrium (m)

## Summary Table

| Type | Formula | Unit |
|---|---|---|
| Kinetic | ½mv² | J |
| Gravitational potential | mgh | J |
| Elastic potential | ½kx² | J |`,
          medicalCallout: `**Surgical relevance — Trauma Biomechanics:** The kinetic energy of a patient during a fall (Eₖ = ½mv²) determines fracture severity. A 70 kg patient falling from standing height (~1 m) strikes the floor at ~4.4 m/s, carrying ~680 J of kinetic energy — enough to fracture a hip in an osteoporotic patient. This calculation guides falls-prevention orthopaedic policy.`,
        },
        {
          slug: "conservation-of-energy",
          title: "Conservation of Energy",
          order: 3,
          content: `## The Law of Conservation of Energy

> *Energy cannot be created or destroyed, only transformed from one form to another.*

In a closed system with no non-conservative forces (e.g. no friction):

\\[ E_k + E_p = \\text{constant} \\]

\\[ \\tfrac{1}{2}mv_1^2 + mgh_1 = \\tfrac{1}{2}mv_2^2 + mgh_2 \\]

## When Friction Acts

Energy is not "lost" — it is transformed into thermal energy (heat):

\\[ E_{k,\\text{initial}} + E_{p,\\text{initial}} = E_{k,\\text{final}} + E_{p,\\text{final}} + W_{\\text{friction}} \\]

## Worked Example

> A 3 kg ball rolls from rest from a height of 5 m (frictionless). Find speed at the bottom.
> - \\( mgh = \\tfrac{1}{2}mv^2 \\)
> - \\( v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 5} = \\sqrt{98} \\approx 9.9 \\text{ m/s} \\)

## Energy Transformations in Practice

- Pendulum: Eₚ ↔ Eₖ (continuously interconverted)
- Roller-coaster: chemical energy → Eₖ → Eₚ → Eₖ (+ heat from friction)`,
          medicalCallout: `**Surgical relevance — Laser Surgery:** A laser ablates tissue by converting light energy (photon energy) into thermal energy. Conservation of energy dictates that all absorbed laser energy must appear as heat — no energy is lost, it is only transformed. Surgeons control this by adjusting pulse duration and fluence to ensure enough energy for ablation without excessive thermal spread.`,
        },
        {
          slug: "power-efficiency",
          title: "Power & Efficiency",
          order: 4,
          content: `## Power

Power is the **rate of doing work** (or rate of energy transfer):

\\[ P = \\frac{W}{t} = Fv \\]

- Unit: watt (W) = 1 J/s
- 1 kilowatt (kW) = 1000 W

## Efficiency

Efficiency compares useful output energy to total input energy:

\\[ \\eta = \\frac{E_{\\text{useful output}}}{E_{\\text{total input}}} \\times 100\\% \\]

- Perfect efficiency: η = 100% (not achievable in practice)
- Energy "lost" is usually converted to heat by friction, resistance, etc.

## Worked Example

> An electric motor with 500 W input lifts a 20 kg load 3 m in 2 s. Find efficiency.
> - Useful work = mgh = 20 × 9.8 × 3 = 588 J
> - Energy input = P × t = 500 × 2 = 1000 J
> - η = 588 / 1000 × 100% = **58.8%**

## Power in Context

| Device | Typical Power |
|---|---|
| LED light bulb | ~10 W |
| Microwave oven | ~1000 W |
| Car engine | 50–200 kW |
| Human athlete (sprint) | ~800 W |`,
          medicalCallout: `**Surgical relevance — Electrosurgery & Lasers:** Surgical lasers are rated in watts (power) and must deliver a precise energy dose (power × time = energy in joules). A CO₂ laser at 20 W cutting for 0.05 s delivers 1 J — sufficient to vaporise a small skin lesion. Efficiency losses (reflection, scattering) mean the delivered dose is less than the stated laser output, so surgeons must account for tissue optical properties.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "A 10 N force moves a box 4 m in the direction of the force. How much work is done?",
          options: JSON.stringify(["2.5 J", "14 J", "40 J", "400 J"]),
          answer: "C",
          explanation: "W = Fs = 10 × 4 = 40 J (angle = 0°, cos 0° = 1).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the kinetic energy (J) of a 1200 kg car travelling at 20 m/s?",
          options: null,
          answer: "240000|500|J",
          explanation: "Eₖ = ½mv² = ½ × 1200 × 400 = 240 000 J.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A ball is held at height h and released. As it falls (ignoring air resistance), which energy transformation occurs?",
          options: JSON.stringify([
            "Kinetic → Gravitational potential",
            "Gravitational potential → Kinetic",
            "Thermal → Kinetic",
            "Chemical → Gravitational potential",
          ]),
          answer: "B",
          explanation: "As the ball falls, gravitational potential energy (mgh) converts to kinetic energy (½mv²).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 60 kg person climbs 10 m vertically in 20 s (g = 9.8 m/s²). What is their power output in watts?",
          options: null,
          answer: "294|5|W",
          explanation: "W = mgh = 60 × 9.8 × 10 = 5880 J. P = W/t = 5880/20 = 294 W.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A force of 50 N acts at 60° to the direction of motion, moving an object 8 m. How much work is done?",
          options: JSON.stringify(["200 J", "346 J", "400 J", "692 J"]),
          answer: "A",
          explanation: "W = Fs cosθ = 50 × 8 × cos60° = 400 × 0.5 = 200 J.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following energy transformations occur when a petrol car brakes to a stop? (Select ALL that apply)",
          options: JSON.stringify([
            "Kinetic energy → Thermal energy (brake heat)",
            "Gravitational potential energy → Kinetic energy",
            "Kinetic energy → Sound energy",
            "Chemical energy → Kinetic energy",
          ]),
          answer: JSON.stringify(["A", "C"]),
          explanation: "Braking converts kinetic energy primarily to thermal energy (hot brakes) and also some sound energy (squealing). B and D describe acceleration, not braking.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A spring with k = 400 N/m is compressed by 0.15 m. What is its elastic potential energy (J)?",
          options: null,
          answer: "4.5|0.1|J",
          explanation: "E = ½kx² = ½ × 400 × 0.15² = 200 × 0.0225 = 4.5 J.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A machine with 75% efficiency is given 800 J of input energy. How much useful work does it produce?",
          options: JSON.stringify(["200 J", "400 J", "600 J", "1067 J"]),
          answer: "C",
          explanation: "Useful output = 0.75 × 800 = 600 J.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 5 kg object is dropped from rest at 20 m height. Using conservation of energy (g = 9.8 m/s²), what is its speed (m/s) just before hitting the ground?",
          options: null,
          answer: "19.8|0.2|m/s",
          explanation: "mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 20) = √392 ≈ 19.8 m/s.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which statement correctly describes the work-energy theorem?",
          options: JSON.stringify([
            "Work done equals force divided by displacement",
            "Net work done on an object equals its change in kinetic energy",
            "Work done equals mass times acceleration",
            "Net work done on an object equals its total mechanical energy",
          ]),
          answer: "B",
          explanation: "The work-energy theorem states W_net = ΔEₖ = ½mv² − ½mu².",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The SI unit of energy is:",
          options: JSON.stringify(["Watt", "Newton", "Joule", "Pascal"]),
          answer: "C",
          explanation: "Energy is measured in joules (J). 1 J = 1 N·m = 1 kg·m²/s².",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 2 kg ball is held 5 m above the ground (g = 10 m/s²). What is its gravitational potential energy (J)?",
          options: null,
          answer: "100|2|J",
          explanation: "E_p = mgh = 2 × 10 × 5 = 100 J.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which form of energy depends on an object's position in a gravitational field?",
          options: JSON.stringify([
            "Kinetic energy",
            "Elastic potential energy",
            "Gravitational potential energy",
            "Thermal energy",
          ]),
          answer: "C",
          explanation: "E_p = mgh — gravitational potential energy depends on height (position in the field).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 500 g ball is thrown upward at 12 m/s. What is its kinetic energy at launch (J)?",
          options: null,
          answer: "36|0.5|J",
          explanation: "E_k = ½mv² = ½ × 0.5 × 144 = 36 J.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A car travelling at 30 m/s has kinetic energy E. If its speed doubles to 60 m/s, its new kinetic energy is:",
          options: JSON.stringify(["E", "2E", "4E", "8E"]),
          answer: "C",
          explanation: "E_k ∝ v². Doubling speed quadruples kinetic energy (2² = 4).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A person carries a heavy box horizontally at constant height. How much work does the gravitational force do on the box?",
          options: JSON.stringify([
            "Positive work equal to F × d",
            "Negative work equal to F × d",
            "Zero — gravity is perpendicular to horizontal displacement",
            "Work equal to mass × height",
          ]),
          answer: "C",
          explanation: "W = Fs cosθ. Gravity acts downward (θ = 90° to horizontal displacement), so cos90° = 0 and W = 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A spring has spring constant k = 200 N/m. What force (N) is required to compress it by 0.1 m?",
          options: null,
          answer: "20|0.5|N",
          explanation: "F = kx = 200 × 0.1 = 20 N (Hooke's Law).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A 70 kg sprinter develops 700 W of power. How long (s) will it take to do 3500 J of work?",
          options: JSON.stringify(["0.2 s", "2 s", "5 s", "50 s"]),
          answer: "C",
          explanation: "t = W/P = 3500/700 = 5 s.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which energy transformations occur inside a torch (flashlight)? (Select ALL that apply)",
          options: JSON.stringify([
            "Chemical energy → Electrical energy",
            "Electrical energy → Light energy",
            "Electrical energy → Thermal energy (heat from resistances)",
            "Kinetic energy → Chemical energy",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "The battery converts chemical → electrical (A). The LED or bulb converts electrical → light (B) and also wastes some as heat (C). D does not occur.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 900 kg roller coaster car starts from rest at the top of a frictionless 40 m hill (g = 10 m/s²). What is its kinetic energy (J) at the bottom?",
          options: null,
          answer: "360000|1000|J",
          explanation: "By conservation of energy: E_k = mgh = 900 × 10 × 40 = 360 000 J.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Work done on an object is zero when:",
          options: JSON.stringify([
            "The force is very small",
            "The force is zero, or the displacement is zero, or the force is perpendicular to displacement",
            "The object is moving at constant velocity",
            "The object has large mass",
          ]),
          answer: "B",
          explanation: "W = Fs cosθ = 0 when F = 0, s = 0, or θ = 90° (force perpendicular to displacement).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A machine does 1200 J of work in 60 s. What is its power output (W)?",
          options: null,
          answer: "20|0.5|W",
          explanation: "P = W/t = 1200/60 = 20 W.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A 50 kg gymnast falls from rest 2 m onto a crash mat. The mat stops her over 0.5 m. Using the work-energy theorem, what is the average stopping force (N)? (g = 10 m/s²)",
          options: JSON.stringify(["500 N", "1000 N", "2000 N", "4000 N"]),
          answer: "C",
          explanation: "KE at impact = mgh = 50 × 10 × 2 = 1000 J. W_stop = F × 0.5 = 1000 J → F = 2000 N.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which quantity is NOT conserved in an inelastic collision?",
          options: JSON.stringify([
            "Total momentum",
            "Total energy",
            "Total kinetic energy",
            "Electric charge",
          ]),
          answer: "C",
          explanation: "Total energy and momentum are always conserved. In an inelastic collision, kinetic energy is NOT conserved — some converts to heat, sound, or deformation.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 3 kg book falls from a shelf 1.5 m above the floor (g = 9.8 m/s²). What is its speed (m/s) just before it hits the floor?",
          options: null,
          answer: "5.42|0.1|m/s",
          explanation: "v² = 2gh = 2 × 9.8 × 1.5 = 29.4 → v = √29.4 ≈ 5.42 m/s.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Power is defined as:",
          options: JSON.stringify(["Force × time", "Work × time", "Work / time", "Force / time"]),
          answer: "C",
          explanation: "Power = rate of doing work = W/t (watts, W).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "An ophthalmic laser delivers pulses of 6 mJ each at a power of 3 W. How long (ms) is each pulse?",
          options: JSON.stringify(["0.5 ms", "1 ms", "2 ms", "18 ms"]),
          answer: "C",
          explanation: "t = E/P = 0.006 J / 3 W = 0.002 s = 2 ms.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A ball (mass 0.5 kg) is kicked from the ground at 20 m/s. What is its initial kinetic energy (J)?",
          options: null,
          answer: "100|2|J",
          explanation: "E_k = ½mv² = ½ × 0.5 × 400 = 100 J.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A 40% efficient electric motor is given 5000 J of electrical energy. How much useful mechanical work is produced?",
          options: JSON.stringify(["2000 J", "3000 J", "5000 J", "12500 J"]),
          answer: "A",
          explanation: "Useful output = efficiency × input = 0.40 × 5000 = 2000 J.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are TRUE regarding elastic potential energy stored in a spring? (Select ALL that apply)",
          options: JSON.stringify([
            "It is proportional to the square of the extension or compression",
            "Doubling the spring constant doubles the stored energy (same extension)",
            "It is released as kinetic energy when the spring is freed",
            "It equals ½kx (not squared)",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "E_elastic = ½kx². It is proportional to x² (A) and to k (B). When released it converts to kinetic energy (C). D is wrong — the formula has x², not x.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A 2 kg object slides 5 m down a rough 30° slope (μ_k = 0.3, g = 10 m/s², cos 30° ≈ 0.866). How much energy (J) is lost to friction?",
          options: null,
          answer: "26|1|J",
          explanation: "N = mg cos30° = 17.3 N. f_k = 0.3 × 17.3 = 5.2 N. W_friction = 5.2 × 5 = 26 J.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A car brakes from 20 m/s to 10 m/s. By what factor does its kinetic energy change?",
          options: JSON.stringify([
            "It halves",
            "It decreases to one quarter",
            "It stays the same",
            "It decreases to three quarters",
          ]),
          answer: "B",
          explanation: "E_k1 = ½m(20²) = ½m(400). E_k2 = ½m(10²) = ½m(100). Ratio = 100/400 = ¼ — the kinetic energy decreases to one quarter.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A defibrillator stores 360 J and delivers 75% of this to the patient. How much energy (J) reaches the patient?",
          options: null,
          answer: "270|5|J",
          explanation: "E_delivered = 0.75 × 360 = 270 J.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "1 kilowatt-hour (kWh) is equal to:",
          options: JSON.stringify(["1000 J", "3600 J", "3 600 000 J", "1 000 000 J"]),
          answer: "C",
          explanation: "1 kWh = 1000 W × 3600 s = 3 600 000 J = 3.6 MJ.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "An electric kettle rated at 2400 W boils water in 3 minutes (180 s). How much electrical energy (J) does it use?",
          options: null,
          answer: "432000|1000|J",
          explanation: "E = Pt = 2400 × 180 = 432 000 J.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In High-Intensity Focused Ultrasound (HIFU) surgery, a tumour is ablated by delivering 50 J over 5 s. What power (W) is delivered to the tumour?",
          options: JSON.stringify(["5 W", "10 W", "50 W", "250 W"]),
          answer: "B",
          explanation: "P = E/t = 50/5 = 10 W. HIFU focuses acoustic energy to ablate deep tumours without incision.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "In which of the following situations is the net work done on the object equal to zero? (Select ALL that apply)",
          options: JSON.stringify([
            "A book resting on a shelf (not moving)",
            "A satellite in uniform circular orbit",
            "An object moving at constant velocity on a frictionless surface",
            "A car accelerating up a hill",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "A: zero displacement, W = 0. B: gravitational force perpendicular to velocity in circular orbit, W = 0. C: constant velocity means net force = 0, so net W = 0. D: the car is accelerating so net W ≠ 0.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A force of 30 N is applied to a trolley, moving it 6 m in the direction of the force. How much work (J) is done?",
          options: null,
          answer: "180|2|J",
          explanation: "W = Fs = 30 × 6 = 180 J (θ = 0°).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A 600 W electric motor (100% efficient) lifts a 15 kg mass at constant speed for 5 s (g = 10 m/s²). To what height (m) is the mass lifted?",
          options: JSON.stringify(["5 m", "10 m", "20 m", "30 m"]),
          answer: "C",
          explanation: "W_input = Pt = 600 × 5 = 3000 J. h = W/(mg) = 3000/(15 × 10) = 20 m.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 0.4 kg ball is launched with 200 J of kinetic energy. It reaches a height of 20 m (g = 10 m/s²). What is its kinetic energy (J) at that height?",
          options: null,
          answer: "120|2|J",
          explanation: "E_p gained = mgh = 0.4 × 10 × 20 = 80 J. E_k at height = 200 − 80 = 120 J.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "An object at rest at the top of a ramp has maximum:",
          options: JSON.stringify([
            "Kinetic energy",
            "Thermal energy",
            "Gravitational potential energy",
            "Elastic potential energy",
          ]),
          answer: "C",
          explanation: "At the top of the ramp (maximum height) the object is at rest (E_k = 0) so all mechanical energy is gravitational potential energy.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 3 kg object moving at 6 m/s is brought to rest by friction over 9 m. What was the average friction force (N)?",
          options: null,
          answer: "6|0.1|N",
          explanation: "E_k = ½ × 3 × 36 = 54 J. Work done by friction = F × 9 = 54 → F = 6 N.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Conservation of mechanical energy holds when:",
          options: JSON.stringify([
            "Kinetic energy is zero",
            "Only conservative forces do work (e.g. no friction)",
            "Friction is present but small",
            "Potential energy equals kinetic energy",
          ]),
          answer: "B",
          explanation: "Mechanical energy (E_k + E_p) is conserved only when no non-conservative forces (like friction or air resistance) do work on the system.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Elastic potential energy is stored in which of the following? (Select ALL that apply)",
          options: JSON.stringify([
            "A compressed spring",
            "A stretched tendon in the human body",
            "A compressed gas in a cylinder",
            "A stationary pendulum hanging at its lowest point",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "Compressed springs (A) and stretched tendons (B) store elastic PE via E = ½kx². Compressed gas (C) stores pressure-volume (elastic) PE. A pendulum at its lowest point at rest has zero elastic and zero gravitational PE (taking lowest point as reference).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A physiotherapy pulley system rated at 980 W lowers a 70 kg patient 1.2 m at constant speed (g = 9.8 m/s²). How long (s) does the lowering take?",
          options: null,
          answer: "0.84|0.05|s",
          explanation: "W = mgh = 70 × 9.8 × 1.2 = 823.2 J. t = W/P = 823.2/980 ≈ 0.84 s.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A CO₂ surgical laser operates at 30 W and ablates 1 mm³ of tissue per joule absorbed. During a 0.5 s burst, how many mm³ of tissue are ablated?",
          options: JSON.stringify(["5 mm³", "15 mm³", "30 mm³", "60 mm³"]),
          answer: "B",
          explanation: "E = Pt = 30 × 0.5 = 15 J. At 1 mm³/J, tissue ablated = 15 mm³.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "What is the gravitational potential energy (J) of a 10 kg object raised 4 m above the ground (g = 9.8 m/s²)?",
          options: null,
          answer: "392|5|J",
          explanation: "E_p = mgh = 10 × 9.8 × 4 = 392 J.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A 4 kg object has kinetic energy of 50 J. What is its speed (m/s)?",
          options: JSON.stringify(["2.5 m/s", "5 m/s", "12.5 m/s", "25 m/s"]),
          answer: "B",
          explanation: "v = √(2E_k/m) = √(100/4) = √25 = 5 m/s.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following statements about power are correct? (Select ALL that apply)",
          options: JSON.stringify([
            "Power = Work / Time",
            "Power = Force × Velocity",
            "A more efficient machine always has higher power output",
            "1 W = 1 J/s",
          ]),
          answer: JSON.stringify(["A", "B", "D"]),
          explanation: "P = W/t (A), P = Fv (B), and 1 W = 1 J/s (D) are all correct. Efficiency relates useful output to input energy — a machine can be highly efficient but low-powered (C is wrong).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A cyclist (person + bike total mass 90 kg) rides up a hill gaining 50 m of height in 30 s (g = 10 m/s²). What power output (W) is required?",
          options: null,
          answer: "1500|20|W",
          explanation: "W = mgh = 90 × 10 × 50 = 45 000 J. P = W/t = 45 000/30 = 1500 W.",
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // TOPIC 4 — Electricity & Circuits  (VCE Unit 3)
    // ─────────────────────────────────────────────
    {
      slug: "electricity",
      yearBand: "VCE Unit 3",
      title: "Electricity & Circuits",
      description: "Charge, current, voltage, resistance, Ohm's Law and circuit analysis",
      surgeonRelevance: "Defibrillators, electrocautery and ECG — surgical theatres rely on controlled electrical energy. Defibrillators deliver precise charge (Q = It) to restore cardiac rhythm; electrocautery uses high-frequency AC to cut and coagulate tissue.",
      order: 4,
      lessons: [
        {
          slug: "charge-current",
          title: "Electric Charge & Current",
          order: 1,
          interactiveRef: "circuit",
          content: `## Electric Charge

- The fundamental unit of charge is the **coulomb (C)**
- Electrons carry charge −1.6 × 10⁻¹⁹ C (elementary charge *e*)
- Protons carry charge +1.6 × 10⁻¹⁹ C

## Electric Current

Current is the **rate of flow of charge**:

\\[ I = \\frac{Q}{t} \\]

- I = current (amperes, A)
- Q = charge (coulombs, C)
- t = time (seconds, s)

## Conventional vs Electron Flow

- **Conventional current** flows from positive to negative terminal (historical convention)
- **Electron flow** is actually from negative to positive terminal
- In circuit analysis we use conventional current direction

## Direct vs Alternating Current

| Type | Description | Example |
|---|---|---|
| DC | Constant direction | Battery, solar cell |
| AC | Periodically reverses direction | Mains supply (50 Hz in Australia) |`,
          medicalCallout: `**Surgical relevance — Defibrillation:** A defibrillator charges a capacitor to typically 200–360 J, then discharges it through the patient's chest in ~10 ms. The charge delivered Q = It = I × 0.01 s must be sufficient to depolarise a critical mass of cardiac myocytes simultaneously. Nurses and surgeons calculate delivered charge and energy when programming defibrillator settings for different patient body habitus.`,
        },
        {
          slug: "voltage-resistance-ohms-law",
          title: "Voltage, Resistance & Ohm's Law",
          order: 2,
          interactiveRef: "circuit",
          content: `## Voltage (Potential Difference)

- **Voltage** (V) is the energy transferred per unit charge between two points
- \\( V = \\frac{W}{Q} \\) (energy / charge, unit: volt = J/C)
- EMF (electromotive force) is the voltage provided by a source (battery, generator)

## Resistance

- **Resistance** (Ω, ohm) is the opposition to current flow
- Caused by collisions between charge carriers and lattice atoms in a conductor

## Ohm's Law

\\[ V = IR \\]

- V = voltage (V), I = current (A), R = resistance (Ω)
- Valid for **ohmic conductors** (resistance is constant with temperature)
- Non-ohmic devices (diodes, thermistors) do not obey Ohm's Law

## Resistivity

\\[ R = \\frac{\\rho L}{A} \\]

- ρ = resistivity (Ω·m, material property)
- L = length of conductor (m)
- A = cross-sectional area (m²)`,
          medicalCallout: `**Surgical relevance — Electrocautery (Diathermy):** Surgical diathermy uses high-frequency AC (300 kHz–3 MHz) to pass current through tissue. Tissue resistance (typically 50–500 Ω) determines the power dissipated as heat (P = V²/R or P = I²R). The surgeon adjusts voltage to achieve either cutting (intense, small arc) or coagulation (lower power, broader spread) based on Ohm's Law principles.`,
        },
        {
          slug: "series-parallel-circuits",
          title: "Series & Parallel Circuits",
          order: 3,
          interactiveRef: "circuit",
          content: `## Series Circuits

Components connected end-to-end in a single loop:

- Same current flows through all components: \\( I_1 = I_2 = I_3 \\)
- Voltage divides across components: \\( V_{\\text{total}} = V_1 + V_2 + V_3 \\)
- Total resistance: \\( R_{\\text{total}} = R_1 + R_2 + R_3 \\)

## Parallel Circuits

Components connected across the same two nodes:

- Same voltage across all branches: \\( V_1 = V_2 = V_3 \\)
- Current divides across branches: \\( I_{\\text{total}} = I_1 + I_2 + I_3 \\)
- Total resistance: \\( \\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} \\)

## Kirchhoff's Laws

- **KCL** (Current Law): Sum of currents entering a node = sum leaving
- **KVL** (Voltage Law): Sum of voltages around any closed loop = 0

## Worked Example

> Two resistors: R₁ = 4 Ω, R₂ = 6 Ω connected in parallel across 12 V.
> - \\( R_{\\text{total}} = \\frac{4 \\times 6}{4 + 6} = 2.4 \\text{ Ω} \\)
> - \\( I_{\\text{total}} = 12 / 2.4 = 5 \\text{ A} \\)`,
          medicalCallout: `**Surgical relevance — ECG Leads:** An electrocardiograph (ECG) measures voltage differences across the body using multiple electrode combinations — effectively parallel voltage-sensing paths across a distributed resistance network (body tissues). Each lead pair measures a different projection of the heart's electrical dipole. Kirchhoff's Voltage Law explains why the sum of voltages in Einthoven's triangle (Leads I, II, III) always equals zero.`,
        },
        {
          slug: "electrical-power",
          title: "Electrical Power & Energy",
          order: 4,
          interactiveRef: "circuit",
          content: `## Electrical Power

Power is the rate at which electrical energy is converted:

\\[ P = VI = I^2 R = \\frac{V^2}{R} \\]

- Unit: watt (W)
- Choose the formula based on which quantities are known

## Electrical Energy

\\[ E = Pt = VIt \\]

- Unit: joule (J) or kilowatt-hour (kWh) for domestic use
- 1 kWh = 3.6 × 10⁶ J = 3.6 MJ

## Safety: Fuses and Circuit Breakers

- Fuses and breakers protect circuits from excess current (overheating → fire)
- A fuse "blows" when current exceeds its rated value, breaking the circuit
- Rating chosen so \\( P = I^2 R \\) in the fuse wire causes melting before other components are damaged

## The Human Body and Electricity

- Current through the body ≥ 50 mA → ventricular fibrillation risk
- Skin resistance ~10 kΩ (dry) to ~1 kΩ (wet) — wet skin dramatically increases shock risk
- Voltage ≥ 50 V AC considered hazardous`,
          medicalCallout: `**Surgical relevance — Defibrillators & Implantable Devices:** An implantable cardioverter-defibrillator (ICD) stores energy (E = ½CV²) and delivers it as a high-power pulse (kW range for milliseconds). The ICD's microprocessor continuously monitors rhythm, selecting energy level (typically 10–40 J) using P = E/t. Surgeons implanting ICDs must confirm lead impedance (Ohm's Law) to ensure adequate charge delivery to the myocardium.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "A charge of 30 C flows through a circuit in 5 s. What is the current?",
          options: JSON.stringify(["0.17 A", "6 A", "25 A", "150 A"]),
          answer: "B",
          explanation: "I = Q/t = 30/5 = 6 A.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A resistor has 12 V across it and carries 3 A. What is its resistance in ohms?",
          options: null,
          answer: "4|0.1|Ω",
          explanation: "R = V/I = 12/3 = 4 Ω (Ohm's Law).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in series. What is the total resistance?",
          options: JSON.stringify(["1 Ω", "4 Ω", "9 Ω", "11 Ω"]),
          answer: "D",
          explanation: "R_total = 2 + 3 + 6 = 11 Ω for series connection.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the total resistance (Ω) of two 6 Ω resistors connected in parallel?",
          options: null,
          answer: "3|0.1|Ω",
          explanation: "1/R = 1/6 + 1/6 = 2/6, so R = 3 Ω.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A 60 W light bulb is connected to a 240 V supply. What current does it draw?",
          options: JSON.stringify(["0.1 A", "0.25 A", "4 A", "14400 A"]),
          answer: "B",
          explanation: "I = P/V = 60/240 = 0.25 A.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "In a parallel circuit, which quantities are the SAME for all branches? (Select ALL that apply)",
          options: JSON.stringify([
            "Voltage across each branch",
            "Current through each branch",
            "Resistance of each branch",
            "Potential difference across each branch",
          ]),
          answer: JSON.stringify(["A", "D"]),
          explanation: "In parallel, all branches share the same voltage (potential difference). Current and resistance differ between branches (unless they happen to be identical).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 100 Ω resistor carries 0.5 A. What power (W) does it dissipate?",
          options: null,
          answer: "25|0.5|W",
          explanation: "P = I²R = 0.5² × 100 = 0.25 × 100 = 25 W.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Kirchhoff's Current Law (KCL) states that:",
          options: JSON.stringify([
            "The sum of voltages around a closed loop equals zero",
            "Current is the same in all branches of a parallel circuit",
            "The sum of currents entering a node equals the sum leaving",
            "Resistance increases with temperature in all conductors",
          ]),
          answer: "C",
          explanation: "KCL is based on conservation of charge: currents in = currents out at any node.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 240 V heater has resistance 40 Ω. How much energy (kJ) does it use in 10 minutes?",
          options: null,
          answer: "8640|50|kJ",
          explanation: "P = V²/R = 240²/40 = 1440 W. E = Pt = 1440 × 600 = 864 000 J = 864 kJ.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A defibrillator delivers 200 J in 10 ms. What is its approximate power output during discharge?",
          options: JSON.stringify(["2 W", "200 W", "20 000 W", "200 000 W"]),
          answer: "C",
          explanation: "P = E/t = 200 J / 0.01 s = 20 000 W = 20 kW. Defibrillators are extremely high-power devices for a very short duration.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "The SI unit of electric charge is:",
          options: JSON.stringify(["Ampere", "Volt", "Coulomb", "Ohm"]),
          answer: "C",
          explanation: "Electric charge is measured in coulombs (C). Current (A) = charge flow per second.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A current of 4 A flows through a circuit for 30 s. How much charge (C) passes a point?",
          options: null,
          answer: "120|2|C",
          explanation: "Q = It = 4 × 30 = 120 C.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Conventional current flows from:",
          options: JSON.stringify([
            "Negative to positive terminal inside the battery only",
            "Positive to negative terminal in the external circuit",
            "Negative to positive terminal in the external circuit",
            "Both directions simultaneously",
          ]),
          answer: "B",
          explanation: "Conventional current (by historical convention) flows from + to − in the external circuit. Electrons actually flow in the opposite direction.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What is the voltage across a 15 Ω resistor carrying 2 A?",
          options: JSON.stringify(["7.5 V", "13 V", "17 V", "30 V"]),
          answer: "D",
          explanation: "V = IR = 15 × 2 = 30 V (Ohm's Law).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What current (A) flows through a 60 Ω resistor connected to 12 V?",
          options: null,
          answer: "0.2|0.01|A",
          explanation: "I = V/R = 12/60 = 0.2 A.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Three resistors of 4 Ω, 4 Ω and 8 Ω are connected in parallel. What is the total resistance (Ω)?",
          options: JSON.stringify(["1 Ω", "1.6 Ω", "2.7 Ω", "16 Ω"]),
          answer: "B",
          explanation: "1/R = 1/4 + 1/4 + 1/8 = 2/8 + 2/8 + 1/8 = 5/8 → R = 8/5 = 1.6 Ω.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "What is the power (W) dissipated in a 20 Ω resistor connected across 40 V?",
          options: null,
          answer: "80|1|W",
          explanation: "P = V²/R = 1600/20 = 80 W.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Australian mains electricity has a frequency of:",
          options: JSON.stringify(["50 Hz", "60 Hz", "100 Hz", "240 Hz"]),
          answer: "A",
          explanation: "Australian (and most of Europe) mains AC is 50 Hz. North America uses 60 Hz.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are properties of a SERIES circuit? (Select ALL that apply)",
          options: JSON.stringify([
            "The same current flows through all components",
            "Total voltage equals the sum of individual voltage drops",
            "Total resistance is the sum of individual resistances",
            "All components share the same voltage",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "In series: I is the same everywhere (A), V_total = ΣV (B), R_total = ΣR (C). D describes parallel circuits.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A battery has EMF 9 V and internal resistance 0.5 Ω connected to an external 4 Ω resistor. What current (A) flows?",
          options: null,
          answer: "2|0.05|A",
          explanation: "I = EMF/(R_ext + r) = 9/(4 + 0.5) = 9/4.5 = 2 A.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "For a metal conductor, as temperature increases, electrical resistance:",
          options: JSON.stringify([
            "Decreases significantly",
            "Stays the same",
            "Increases slightly",
            "Decreases to zero",
          ]),
          answer: "C",
          explanation: "In metal conductors, increased temperature means more lattice vibrations, more collisions with electrons, and slightly higher resistance.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 240 V kettle has resistance 48 Ω. How long (s) to heat 500 g of water from 20°C to 100°C? (specific heat of water = 4200 J/kg·°C)",
          options: null,
          answer: "140|2|s",
          explanation: "P = V²/R = 57600/48 = 1200 W. Q = mcΔT = 0.5 × 4200 × 80 = 168 000 J. t = 168 000/1200 = 140 s.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A defibrillator capacitor (C = 100 μF) is charged to 2000 V. What energy (J) is stored?",
          options: JSON.stringify(["0.2 J", "20 J", "200 J", "2000 J"]),
          answer: "C",
          explanation: "E = ½CV² = ½ × 100 × 10⁻⁶ × (2000)² = ½ × 10⁻⁴ × 4 × 10⁶ = 200 J.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which of the following is a non-ohmic device?",
          options: JSON.stringify([
            "Copper wire at room temperature",
            "Nichrome wire",
            "LED (light-emitting diode)",
            "Carbon film resistor",
          ]),
          answer: "C",
          explanation: "An LED is non-ohmic — it has a non-linear V–I relationship. Ohmic conductors maintain constant resistance regardless of voltage.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "An electric iron uses 1.2 kW and is used for 45 minutes. How much energy (kJ) does it consume?",
          options: null,
          answer: "3240|10|kJ",
          explanation: "E = Pt = 1200 W × (45 × 60) s = 1200 × 2700 = 3 240 000 J = 3240 kJ.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following correctly describe Kirchhoff's laws? (Select ALL that apply)",
          options: JSON.stringify([
            "KVL: the sum of voltages around any closed loop equals zero",
            "KCL: the sum of currents at a node equals zero (in + out = 0)",
            "Kirchhoff's laws only apply to DC circuits",
            "KCL is based on conservation of electric charge",
          ]),
          answer: JSON.stringify(["A", "B", "D"]),
          explanation: "KVL (conservation of energy) and KCL (conservation of charge) are both correct as stated. C is wrong — Kirchhoff's laws apply to both DC and AC circuits.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Voltage (potential difference) is measured using a:",
          options: JSON.stringify([
            "Ammeter connected in series",
            "Voltmeter connected in parallel",
            "Ohmmeter connected in series",
            "Wattmeter connected in series",
          ]),
          answer: "B",
          explanation: "A voltmeter has very high resistance and is connected in parallel across the component to measure potential difference without significantly affecting the circuit.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 9 V battery drives current through two series resistors: 3 Ω and 6 Ω. What is the current (A)?",
          options: null,
          answer: "1|0.05|A",
          explanation: "R_total = 3 + 6 = 9 Ω. I = V/R = 9/9 = 1 A.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In the circuit above (9 V, 3 Ω + 6 Ω in series, current = 1 A), what is the voltage across the 6 Ω resistor?",
          options: JSON.stringify(["3 V", "4.5 V", "6 V", "9 V"]),
          answer: "C",
          explanation: "V = IR = 1 × 6 = 6 V. The remaining 3 V appears across the 3 Ω resistor.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A 240 V source drives 3 A through a circuit. What is the resistance of the circuit (Ω)?",
          options: null,
          answer: "80|1|Ω",
          explanation: "R = V/I = 240/3 = 80 Ω.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A third identical bulb is connected in parallel to two existing parallel bulbs (same supply voltage). What happens to total circuit resistance?",
          options: JSON.stringify([
            "Total current decreases",
            "Total resistance increases",
            "Total resistance decreases",
            "Brightness of existing bulbs decreases",
          ]),
          answer: "C",
          explanation: "Adding more parallel paths reduces total resistance (1/R_total = 1/R₁ + 1/R₂ + 1/R₃). Total current increases; each existing bulb's brightness is unchanged.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A patient's skin resistance when wet is 800 Ω. They accidentally contact 240 V mains. What current (mA) flows through them?",
          options: null,
          answer: "300|5|mA",
          explanation: "I = V/R = 240/800 = 0.3 A = 300 mA. This far exceeds the 50 mA threshold for ventricular fibrillation.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which formula gives power dissipated in a resistor when only resistance and current are known?",
          options: JSON.stringify(["P = V/I", "P = I²R", "P = V²/R", "P = V/R"]),
          answer: "B",
          explanation: "P = I²R uses only current and resistance. P = V²/R uses only voltage and resistance. P = VI uses both.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An ECG electrode measures 1 mV across the chest. If chest resistance between two electrodes is 500 Ω, what current (μA) flows along the measurement path?",
          options: JSON.stringify(["0.5 μA", "2 μA", "500 μA", "2 mA"]),
          answer: "B",
          explanation: "I = V/R = 0.001/500 = 2 × 10⁻⁶ A = 2 μA. ECG amplifiers must detect these tiny currents reliably.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "A fuse in a circuit is designed to protect against which hazards? (Select ALL that apply)",
          options: JSON.stringify([
            "Overcurrent that causes dangerous overheating and fire risk",
            "Short circuit (near-zero resistance path causing huge current)",
            "Overvoltage spikes across the entire circuit",
            "Component damage from sustained excess current",
          ]),
          answer: JSON.stringify(["A", "B", "D"]),
          explanation: "Fuses protect against excess current (A and D) including short-circuit currents (B). They do not primarily protect against overvoltage — that requires surge protectors or MOVs (C is not a fuse function).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Resistors R₁ = 3 Ω and R₂ = 6 Ω are in parallel; this combination is in series with R₃ = 3 Ω across 18 V. What is the total current (A) from the source?",
          options: null,
          answer: "3.6|0.1|A",
          explanation: "R_parallel = (3 × 6)/(3 + 6) = 2 Ω. R_total = 2 + 3 = 5 Ω. I = 18/5 = 3.6 A.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "What does an ammeter measure, and how is it connected?",
          options: JSON.stringify([
            "Voltage — connected in parallel",
            "Resistance — connected in series",
            "Current — connected in series",
            "Power — connected in parallel",
          ]),
          answer: "C",
          explanation: "An ammeter measures current (A). It has very low resistance and must be connected in series so the full circuit current flows through it.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 4.5 kW electrosurgical unit operates at 2000 V. What current (A) does it draw at peak power?",
          options: null,
          answer: "2.25|0.05|A",
          explanation: "I = P/V = 4500/2000 = 2.25 A.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A 12 V battery (internal resistance 1 Ω) powers a 5 Ω external resistor. What is the terminal voltage (V) of the battery?",
          options: JSON.stringify(["10 V", "11 V", "12 V", "14 V"]),
          answer: "A",
          explanation: "I = 12/(1 + 5) = 2 A. V_terminal = EMF − Ir = 12 − 2 × 1 = 10 V.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which of the following correctly describe how electrical energy is transformed in circuit components? (Select ALL that apply)",
          options: JSON.stringify([
            "Resistors convert electrical energy to thermal energy",
            "Capacitors store electrical energy as electric field energy",
            "Batteries convert chemical energy to electrical energy",
            "Transformers increase both voltage and current simultaneously",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "A, B, and C are correct. D is wrong — transformers obey energy conservation (P_in ≈ P_out), so increasing voltage necessarily decreases current.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A light bulb has a filament resistance of 240 Ω at operating temperature. Connected to 240 V, what power (W) does it dissipate?",
          options: null,
          answer: "240|5|W",
          explanation: "P = V²/R = 240²/240 = 57 600/240 = 240 W.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The resistance of a wire can be increased by:",
          options: JSON.stringify([
            "Shortening the wire",
            "Increasing its cross-sectional diameter",
            "Replacing it with a lower resistivity material",
            "Increasing its length",
          ]),
          answer: "D",
          explanation: "R = ρL/A. Resistance increases with longer wire (D). Shorter wire, wider cross-section, or lower resistivity all decrease resistance.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A circuit has four identical 8 Ω resistors all connected in parallel. What is the total resistance (Ω)?",
          options: null,
          answer: "2|0.05|Ω",
          explanation: "1/R = 4 × (1/8) = 4/8; R = 8/4 = 2 Ω.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An implantable cardioverter-defibrillator (ICD) delivers 35 J over 7 ms to restore cardiac rhythm. What average power (kW) does it deliver?",
          options: JSON.stringify(["0.245 kW", "5 kW", "35 kW", "245 kW"]),
          answer: "B",
          explanation: "P = E/t = 35/(7 × 10⁻³) = 5000 W = 5 kW. ICDs deliver very high instantaneous power for a very short duration.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Conventional current flows in which direction relative to electron flow?",
          options: JSON.stringify([
            "In the same direction",
            "In the opposite direction",
            "Perpendicular to electron flow",
            "Only in AC circuits",
          ]),
          answer: "B",
          explanation: "By convention, conventional current flows from + to −, while electrons (negative charge) actually flow from − to +.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "An electrosurgical return electrode has contact resistance 0.5 Ω, patient skin resistance ≈ 1500 Ω total. Active electrode delivers 60 V. What current (A) flows through the patient?",
          options: null,
          answer: "0.04|0.002|A",
          explanation: "I = V/R_total = 60/1500 ≈ 0.04 A = 40 mA. Proper electrode placement keeps current density safe.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Why is wet skin more dangerous when handling electrical appliances than dry skin?",
          options: JSON.stringify([
            "Water increases the voltage supplied",
            "Water decreases skin resistance, allowing much more current to flow",
            "Water increases skin resistance, reducing current",
            "Water is a perfect insulator",
          ]),
          answer: "B",
          explanation: "Dry skin resistance ~10 kΩ; wet skin ~1 kΩ. Lower resistance → higher current (I = V/R) → greater risk of electrocution.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following correctly describe properties of DC (direct current)? (Select ALL that apply)",
          options: JSON.stringify([
            "Current flows in one direction only",
            "Voltage does not alternate in direction",
            "Batteries are common DC sources",
            "Australian household mains supply is DC",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "DC flows in one direction (A) at constant polarity (B). Batteries provide DC (C). Australian mains is AC at 50 Hz (D is false).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A 120 W television operates on 240 V. What is the resistance (Ω) of the TV at operating power?",
          options: null,
          answer: "480|5|Ω",
          explanation: "R = V²/P = 240²/120 = 57 600/120 = 480 Ω.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "During bipolar electrocautery surgery, the forceps have 50 V across their tips and tissue resistance between the tips is 100 Ω. What power (W) is dissipated in the tissue?",
          options: JSON.stringify(["5 W", "25 W", "50 W", "2500 W"]),
          answer: "B",
          explanation: "P = V²/R = 2500/100 = 25 W. The surgeon controls coagulation depth by adjusting voltage and contact time.",
          difficulty: 2,
        },

      ],
    },

    // ─────────────────────────────────────────────
    // TOPIC 5 — Waves & Light  (VCE Unit 4)
    // ─────────────────────────────────────────────
    {
      slug: "waves",
      yearBand: "VCE Unit 4",
      title: "Waves & Light",
      description: "Wave properties, the electromagnetic spectrum, reflection, refraction and diffraction",
      surgeonRelevance: "Ultrasound, X-rays and MRI — diagnostic imaging and therapeutic ultrasound rely on wave behaviour. Surgeons interpret imaging artefacts, select imaging modalities and use ultrasound guidance for procedures.",
      order: 5,
      lessons: [
        {
          slug: "wave-properties",
          title: "Wave Properties",
          order: 1,
          interactiveRef: "waves",
          content: `## What Is a Wave?

A wave is a **disturbance that transfers energy** without the net transfer of matter.

## Types of Waves

| Type | Vibration direction | Examples |
|---|---|---|
| **Transverse** | Perpendicular to wave travel | Light, water waves, S-waves |
| **Longitudinal** | Parallel to wave travel | Sound, P-waves, ultrasound |

## Key Wave Properties

- **Amplitude (A)**: maximum displacement from equilibrium (m); relates to energy
- **Wavelength (λ)**: distance between successive equivalent points (m)
- **Frequency (f)**: number of complete cycles per second (Hz)
- **Period (T)**: time for one complete cycle (s): \\( T = \\frac{1}{f} \\)

## Wave Equation

\\[ v = f\\lambda \\]

- v = wave speed (m/s)
- f = frequency (Hz)
- λ = wavelength (m)

## Wave Intensity

\\[ I = \\frac{P}{A} \\quad \\text{(W/m}^2\\text{)} \\]

Intensity falls off as the **inverse square** of distance from a point source:
\\[ I \\propto \\frac{1}{r^2} \\]`,
          medicalCallout: `**Surgical relevance — Diagnostic Ultrasound:** Medical ultrasound uses longitudinal waves at 2–20 MHz. The wave equation v = fλ explains why higher frequencies (shorter λ) provide better spatial resolution but reduced tissue penetration. Surgeons performing ultrasound-guided nerve blocks or biopsies choose probe frequency to balance resolution and depth based on this trade-off.`,
        },
        {
          slug: "reflection-refraction",
          title: "Reflection & Refraction",
          order: 2,
          interactiveRef: "waves",
          content: `## Reflection

When a wave strikes a boundary, part of it **reflects** back:

- Angle of incidence = angle of reflection (law of reflection)
- Both angles measured from the **normal** to the surface
- Applies to all waves: light, sound, water, ultrasound

## Refraction

Refraction is the **bending of a wave** as it passes from one medium to another due to a change in speed.

\\[ n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\quad \\text{(Snell's Law)} \\]

- n = refractive index (dimensionless): \\( n = \\frac{c}{v} \\)
- c = speed of light in vacuum (3 × 10⁸ m/s)
- v = speed of light in medium

## Key Rules for Refraction

- Entering a denser medium (higher n) → slows down → bends **toward** the normal
- Entering a less dense medium (lower n) → speeds up → bends **away** from the normal

## Total Internal Reflection

Occurs when light travels from dense → less dense medium and the angle of incidence exceeds the **critical angle** (θ_c):

\\[ \\sin\\theta_c = \\frac{n_2}{n_1} \\]`,
          medicalCallout: `**Surgical relevance — Fibre-Optic Endoscopy:** Surgical endoscopes transmit light and images through fibre-optic cables using **total internal reflection**. Each glass fibre has a core (high n ≈ 1.5) surrounded by cladding (lower n ≈ 1.46). Light entering within the acceptance angle undergoes total internal reflection at each fibre wall, travelling with minimal loss around bends to illuminate and image internal structures.`,
        },
        {
          slug: "sound-waves",
          title: "Sound & Ultrasound",
          order: 3,
          interactiveRef: "waves",
          content: `## Sound as a Longitudinal Wave

- Sound is a mechanical (longitudinal) wave — requires a medium
- Travels as alternating **compressions** (high pressure) and **rarefactions** (low pressure)
- Speed in air at 20°C: ≈ 343 m/s
- Speed increases in denser/stiffer media: air < water < soft tissue < bone

## The Decibel Scale

Sound intensity is measured in decibels (dB):

\\[ L = 10\\log_{10}\\left(\\frac{I}{I_0}\\right) \\]

- I₀ = 10⁻¹² W/m² (threshold of hearing)
- Every 10 dB increase → 10× intensity increase

## Ultrasound (>20 000 Hz)

- Used in medicine at 2–20 MHz (well above human hearing of 20 Hz – 20 kHz)
- **Pulse-echo technique**: transmit a pulse, measure time for echo to return
- Distance to interface: \\( d = \\frac{v \\cdot t}{2} \\) (divide by 2 because pulse travels there and back)

## Acoustic Impedance

\\[ Z = \\rho v \\]

At boundaries between tissues with different Z, ultrasound is **partially reflected** — this is what creates the image.`,
          medicalCallout: `**Surgical relevance — Intraoperative Ultrasound:** Surgeons use intraoperative ultrasound probes to localise tumours, guide resection margins, and confirm complete excision in real time. The pulse-echo formula (d = vt/2) calculates depth of structures using v ≈ 1540 m/s in soft tissue. Differences in acoustic impedance (Z = ρv) at tissue interfaces produce the echoes that create the image.`,
        },
        {
          slug: "electromagnetic-spectrum",
          title: "The Electromagnetic Spectrum",
          order: 4,
          content: `## Electromagnetic (EM) Waves

- EM waves are **transverse waves** consisting of oscillating electric and magnetic fields
- They travel at c = 3 × 10⁸ m/s in a vacuum (and close to c in air)
- They can travel through a vacuum (unlike sound)

## The EM Spectrum (low → high frequency)

| Region | Frequency Range | Wavelength Range |
|---|---|---|
| Radio waves | 10⁴–10⁹ Hz | >0.3 m |
| Microwaves | 10⁹–10¹² Hz | 1 mm–0.3 m |
| Infrared | 10¹²–4×10¹⁴ Hz | 750 nm–1 mm |
| Visible light | 4–7.5 × 10¹⁴ Hz | 400–750 nm |
| Ultraviolet | 7.5×10¹⁴–10¹⁷ Hz | 10–400 nm |
| X-rays | 10¹⁷–10²⁰ Hz | 0.01–10 nm |
| Gamma rays | >10²⁰ Hz | <0.01 nm |

## Photon Energy

\\[ E = hf = \\frac{hc}{\\lambda} \\]

- h = Planck's constant = 6.63 × 10⁻³⁴ J·s
- Higher frequency → higher photon energy → greater ionising potential

## Wave–Particle Duality

Light exhibits both wave behaviour (interference, diffraction) and particle behaviour (photoelectric effect, photons). VCE Physics explores both models.`,
          medicalCallout: `**Surgical relevance — X-ray & MRI Imaging:** X-rays (high energy, short λ) are ionising and are differentially absorbed by tissue density — bone absorbs more than soft tissue, producing radiographic contrast. MRI uses radiofrequency EM waves (~63 MHz at 1.5 T) to excite hydrogen nuclei; no ionising radiation is involved. Surgeons choose imaging modality based on radiation dose (X-ray > CT >> MRI/ultrasound), tissue contrast, and available resolution.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "A sound wave has frequency 440 Hz and travels at 340 m/s. What is its wavelength?",
          options: JSON.stringify(["0.77 m", "0.77 cm", "149 600 m", "1.3 m"]),
          answer: "A",
          explanation: "λ = v/f = 340/440 ≈ 0.77 m.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which wave type requires a medium to travel?",
          options: JSON.stringify(["Light", "X-rays", "Sound", "Radio waves"]),
          answer: "C",
          explanation: "Sound is a mechanical wave and requires a medium (solid, liquid or gas). EM waves (light, X-rays, radio) travel through a vacuum.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Light travels at 3 × 10⁸ m/s in a vacuum. What is the frequency (Hz) of light with wavelength 500 nm? Give your answer in scientific notation as a plain number (× 10¹⁴ Hz).",
          options: null,
          answer: "6|0.05|×10^14 Hz",
          explanation: "f = v/λ = (3 × 10⁸) / (500 × 10⁻⁹) = 6 × 10¹⁴ Hz. This is visible green light.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A wave passes from medium 1 (n = 1.0) into medium 2 (n = 1.5). The angle of incidence is 30°. Using Snell's Law, what is the angle of refraction?",
          options: JSON.stringify(["19.5°", "30°", "45°", "48.6°"]),
          answer: "A",
          explanation: "n₁ sinθ₁ = n₂ sinθ₂ → sinθ₂ = (1.0 × sin30°)/1.5 = 0.5/1.5 = 0.333 → θ₂ ≈ 19.5°.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which of the following correctly describe differences between transverse and longitudinal waves? (Select ALL that apply)",
          options: JSON.stringify([
            "Transverse waves have oscillations perpendicular to wave travel; longitudinal waves have oscillations parallel",
            "Sound is a transverse wave; light is longitudinal",
            "Longitudinal waves can travel through solids, liquids and gases; transverse mechanical waves generally cannot travel through gases",
            "Both transverse and longitudinal waves transfer energy without the net transfer of matter",
          ]),
          answer: JSON.stringify(["A", "C", "D"]),
          explanation: "A: correct definition. C: correct — transverse mechanical waves (e.g. in a rope) need a restoring shear force, which gases lack. D: true for all waves. B is wrong — sound is longitudinal, light is transverse.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "An ultrasound pulse echoes back from a structure in 0.000 26 s. If v = 1540 m/s in tissue, how deep (m) is the structure?",
          options: null,
          answer: "0.2|0.005|m",
          explanation: "d = vt/2 = 1540 × 0.00026 / 2 = 0.4004 / 2 ≈ 0.20 m (20 cm).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which region of the electromagnetic spectrum has the HIGHEST photon energy?",
          options: JSON.stringify(["Radio waves", "Visible light", "Ultraviolet", "Gamma rays"]),
          answer: "D",
          explanation: "E = hf. Gamma rays have the highest frequency and therefore the highest photon energy.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Total internal reflection occurs when light travels from:",
          options: JSON.stringify([
            "A less dense medium to a denser medium at any angle",
            "A denser medium to a less dense medium below the critical angle",
            "A denser medium to a less dense medium above the critical angle",
            "A vacuum into any transparent medium",
          ]),
          answer: "C",
          explanation: "Total internal reflection requires travel from high-n to low-n medium AND incidence angle ≥ critical angle (θ_c = arcsin(n₂/n₁)).",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A light wave has wavelength 600 nm in a vacuum. What is its wavelength (nm) in glass with refractive index n = 1.5?",
          options: null,
          answer: "400|5|nm",
          explanation: "λ_medium = λ_vacuum / n = 600 / 1.5 = 400 nm. Frequency is unchanged; wavelength and speed decrease.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which of the following medical imaging techniques use ionising radiation? (Select ALL that apply)",
          options: JSON.stringify([
            "Plain X-ray (radiograph)",
            "CT scan (computed tomography)",
            "MRI (magnetic resonance imaging)",
            "Diagnostic ultrasound",
          ]),
          answer: JSON.stringify(["A", "B"]),
          explanation: "X-rays and CT scans use ionising X-ray radiation. MRI uses non-ionising radiofrequency EM waves and a magnetic field. Diagnostic ultrasound uses non-ionising mechanical waves.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What is the mathematical relationship between frequency (f) and period (T)?",
          options: JSON.stringify(["f = T", "f = 1/T", "T = f²", "f = T²"]),
          answer: "B",
          explanation: "Period T is the time for one complete cycle; frequency f is cycles per second. They are reciprocals: f = 1/T.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A wave has period 0.04 s. What is its frequency (Hz)?",
          options: null,
          answer: "25|0.5|Hz",
          explanation: "f = 1/T = 1/0.04 = 25 Hz.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Ultrasound is defined as sound with frequency:",
          options: JSON.stringify([
            "Below 20 Hz (infrasound range)",
            "Between 20 Hz and 20 kHz (audible range)",
            "Above 20 000 Hz (20 kHz)",
            "Exactly 20 kHz",
          ]),
          answer: "C",
          explanation: "Ultrasound is sound above the human hearing limit of ~20 kHz. Medical ultrasound uses 2–20 MHz.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "An ultrasound probe emits waves at 5 MHz in soft tissue where v = 1540 m/s. What is the wavelength (mm)?",
          options: null,
          answer: "0.308|0.01|mm",
          explanation: "λ = v/f = 1540/(5 × 10⁶) = 3.08 × 10⁻⁴ m = 0.308 mm.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A sound wave travels from air into water. What happens to its frequency?",
          options: JSON.stringify(["Increases", "Decreases", "Stays the same", "Doubles"]),
          answer: "C",
          explanation: "When a wave crosses a boundary, frequency is determined by the source and does NOT change. Speed and wavelength change; frequency remains constant.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Light is an example of a:",
          options: JSON.stringify([
            "Longitudinal mechanical wave",
            "Transverse mechanical wave",
            "Transverse electromagnetic wave",
            "Longitudinal electromagnetic wave",
          ]),
          answer: "C",
          explanation: "Light is a transverse electromagnetic wave — oscillating electric and magnetic fields perpendicular to the direction of travel. It requires no medium.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A radio wave has frequency 100 MHz (10⁸ Hz). What is its wavelength (m) in a vacuum? (c = 3 × 10⁸ m/s)",
          options: null,
          answer: "3|0.05|m",
          explanation: "λ = c/f = 3 × 10⁸ / 10⁸ = 3 m.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In the ultrasound pulse-echo technique, the formula d = vt/2 includes a factor of 2 because:",
          options: JSON.stringify([
            "The wave travels at twice the speed in tissue",
            "The pulse travels TO the target and BACK — the total path is twice the depth",
            "Frequency doubles at the tissue interface",
            "Two separate pulses are always sent",
          ]),
          answer: "B",
          explanation: "The measured time t is for the round trip (to target and back). So depth = half the total path: d = vt/2.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following statements about wave amplitude are correct? (Select ALL that apply)",
          options: JSON.stringify([
            "Amplitude determines the energy carried by the wave",
            "Amplitude equals half the wavelength",
            "Amplitude is the maximum displacement from equilibrium",
            "Larger amplitude corresponds to louder sound",
          ]),
          answer: JSON.stringify(["A", "C", "D"]),
          explanation: "Amplitude determines energy (A), is the maximum displacement from equilibrium (C), and larger amplitude → louder sound (D). Amplitude and wavelength are unrelated quantities (B is false).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "An X-ray photon has frequency 3.0 × 10¹⁸ Hz. What is its wavelength in nm? (c = 3 × 10⁸ m/s)",
          options: null,
          answer: "0.1|0.005|nm",
          explanation: "λ = c/f = 3 × 10⁸ / (3 × 10¹⁸) = 10⁻¹⁰ m = 0.1 nm. This is in the X-ray region of the EM spectrum.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "When a light ray passes from air (n = 1.0) into glass (n = 1.5), it:",
          options: JSON.stringify([
            "Speeds up and bends away from the normal",
            "Slows down and bends toward the normal",
            "Speeds up and bends toward the normal",
            "Maintains the same speed",
          ]),
          answer: "B",
          explanation: "Entering a denser medium (higher n) the wave slows (v = c/n) and bends toward the normal (Snell's Law).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The number of complete wave oscillations per second is called:",
          options: JSON.stringify(["Wavelength", "Amplitude", "Frequency", "Period"]),
          answer: "C",
          explanation: "Frequency (f) is measured in hertz (Hz) = cycles per second.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Light enters an optical fibre core (n_core = 1.50, n_cladding = 1.40). What is the critical angle (°) for total internal reflection? (sin⁻¹(1.40/1.50))",
          options: null,
          answer: "69|1|degrees",
          explanation: "θ_c = arcsin(n₂/n₁) = arcsin(1.40/1.50) = arcsin(0.933) ≈ 69°.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which region of the EM spectrum is used in MRI scanning?",
          options: JSON.stringify(["Gamma rays", "X-rays", "Radiofrequency (RF) waves", "Visible light"]),
          answer: "C",
          explanation: "MRI uses radiofrequency EM pulses (~63 MHz at 1.5 T) to excite hydrogen nuclei. No ionising radiation is involved.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following correctly describe total internal reflection? (Select ALL that apply)",
          options: JSON.stringify([
            "It requires the wave to travel from a medium of higher refractive index to lower",
            "The angle of incidence must exceed the critical angle",
            "It is used in fibre-optic endoscopes to transmit light",
            "It occurs when travelling from a less dense to a more dense medium",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "TIR requires: (1) travelling from high-n to low-n medium (A), AND (2) angle of incidence ≥ critical angle (B). It is the basis of fibre-optic cables (C). D is wrong — TIR never occurs when entering a denser medium.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A medical ultrasound probe uses 7.5 MHz waves (v = 1540 m/s in soft tissue). What is the wavelength (mm)?",
          options: null,
          answer: "0.205|0.01|mm",
          explanation: "λ = v/f = 1540/(7.5 × 10⁶) ≈ 2.05 × 10⁻⁴ m = 0.205 mm. Shorter wavelength → better resolution.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "When a wave passes from one medium to another, what determines its new speed?",
          options: JSON.stringify([
            "The frequency of the wave",
            "The amplitude of the wave",
            "The physical properties of the new medium",
            "The wavelength in the original medium",
          ]),
          answer: "C",
          explanation: "Wave speed depends on the medium's properties (e.g. density, elasticity). Frequency is set by the source and does not change.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Intensity follows an inverse-square law from a point source. If you double your distance from the source, intensity:",
          options: JSON.stringify(["Halves", "Decreases to one quarter", "Doubles", "Stays the same"]),
          answer: "B",
          explanation: "I ∝ 1/r². Doubling r → I decreases by factor 4 (one quarter).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A point source emits 200 W of sound in all directions. What is the intensity (W/m²) at 5 m from the source?",
          options: null,
          answer: "0.637|0.02|W/m^2",
          explanation: "I = P/(4πr²) = 200/(4π × 25) = 200/314.2 ≈ 0.637 W/m².",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A light ray in water (n = 1.33) strikes the surface at 45°. Using Snell's Law, the refracted angle in air is approximately:",
          options: JSON.stringify(["30°", "45°", "70°", "90°"]),
          answer: "C",
          explanation: "n₁ sinθ₁ = n₂ sinθ₂ → sinθ₂ = 1.33 × sin45° = 1.33 × 0.707 = 0.940 → θ₂ ≈ 70°.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A microwave oven operates at 2.45 GHz (2.45 × 10⁹ Hz). What is the wavelength (cm) of the microwaves? (c = 3 × 10⁸ m/s)",
          options: null,
          answer: "12.2|0.2|cm",
          explanation: "λ = c/f = 3 × 10⁸ / (2.45 × 10⁹) = 0.1224 m = 12.2 cm.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which property of a sound wave determines the perceived pitch?",
          options: JSON.stringify(["Amplitude", "Wavelength", "Frequency", "Speed"]),
          answer: "C",
          explanation: "Pitch is the perceptual correlate of frequency — higher frequency → higher pitch.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following correctly describe differences between X-rays and visible light? (Select ALL that apply)",
          options: JSON.stringify([
            "X-rays have higher frequency than visible light",
            "X-rays have shorter wavelength than visible light",
            "X-rays are ionising; visible light is not (under normal conditions)",
            "X-rays travel faster in a vacuum than visible light",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "X-rays have higher f and shorter λ (A, B). X-rays are ionising — they carry enough photon energy to remove electrons (C). D is false — both travel at c in vacuum.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "In fibre-optic bronchoscopy, fibres have n_core = 1.48 and n_cladding = 1.44. What is the critical angle (°) for TIR? (arcsin(1.44/1.48))",
          options: null,
          answer: "76.7|0.5|degrees",
          explanation: "θ_c = arcsin(n_cladding/n_core) = arcsin(1.44/1.48) = arcsin(0.9730) ≈ 76.7°.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "An increase in wave amplitude results in:",
          options: JSON.stringify([
            "Increased wave speed",
            "Increased frequency",
            "Increased energy carried by the wave",
            "Increased wavelength",
          ]),
          answer: "C",
          explanation: "Wave energy is proportional to amplitude squared (E ∝ A²). Speed, frequency and wavelength are independent of amplitude.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A wave has frequency 5 Hz and speed 20 m/s. What is its wavelength (m)?",
          options: JSON.stringify(["25 m", "4 m", "100 m", "0.25 m"]),
          answer: "B",
          explanation: "λ = v/f = 20/5 = 4 m.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A seismic P-wave (longitudinal) travels at 6000 m/s and has wavelength 300 m. What is its frequency (Hz)?",
          options: null,
          answer: "20|0.5|Hz",
          explanation: "f = v/λ = 6000/300 = 20 Hz.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A surgical laser of power 0.3 W is focused to a spot of area 1 mm² (= 1 × 10⁻⁶ m²). What is the intensity (W/m²) at the spot?",
          options: JSON.stringify(["0.3 W/m²", "300 W/m²", "300 000 W/m²", "3 × 10⁸ W/m²"]),
          answer: "C",
          explanation: "I = P/A = 0.3/(1 × 10⁻⁶) = 3 × 10⁵ = 300 000 W/m². Focusing concentrates energy enormously.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A wave has wavelength 0.5 m and frequency 600 Hz. What is its speed (m/s)?",
          options: null,
          answer: "300|5|m/s",
          explanation: "v = fλ = 600 × 0.5 = 300 m/s.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Compared to a 3 MHz ultrasound probe, a 15 MHz probe provides:",
          options: JSON.stringify([
            "Better penetration, worse spatial resolution",
            "Better spatial resolution, less tissue penetration",
            "Equal penetration and resolution",
            "Slower wave speed in tissue",
          ]),
          answer: "B",
          explanation: "Higher frequency → shorter wavelength → better resolution. But higher frequency waves are more quickly attenuated in tissue → less penetration.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which wave behaviours are exhibited by BOTH sound and light? (Select ALL that apply)",
          options: JSON.stringify([
            "Reflection",
            "Refraction",
            "Diffraction",
            "Polarisation",
          ]),
          answer: JSON.stringify(["A", "B", "C"]),
          explanation: "Reflection, refraction and diffraction occur for all wave types. Polarisation is only possible for transverse waves (like light) — sound is longitudinal and cannot be polarised.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "The refractive index of the vitreous humor in the eye is 1.336. What is the speed of light in the vitreous (in units of 10⁸ m/s)? (c = 3.00 × 10⁸ m/s)",
          options: null,
          answer: "2.25|0.02|×10^8 m/s",
          explanation: "v = c/n = 3.00/1.336 ≈ 2.25 × 10⁸ m/s.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "When a wave undergoes diffraction through a narrow opening, what changes?",
          options: JSON.stringify(["Speed", "Frequency", "Direction of propagation (wave spreads out)", "Wavelength"]),
          answer: "C",
          explanation: "Diffraction causes the wave to spread out after passing through a gap or around an obstacle. Speed, frequency and wavelength remain unchanged.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which type of wave requires NO medium for propagation?",
          options: JSON.stringify(["Sound waves", "Water surface waves", "Electromagnetic waves", "Seismic waves"]),
          answer: "C",
          explanation: "EM waves are self-propagating oscillating fields and travel through a vacuum at c = 3 × 10⁸ m/s. All other options are mechanical waves requiring a medium.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A green light photon has wavelength 550 nm. Using E = hc/λ (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J), what is its energy in eV?",
          options: null,
          answer: "2.26|0.05|eV",
          explanation: "E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(550 × 10⁻⁹) = 3.62 × 10⁻¹⁹ J. In eV: 3.62 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ ≈ 2.26 eV.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "An ultrasound pulse echoes from a liver tumour and returns after 0.000 18 s. Using v = 1540 m/s in tissue, how deep (cm) is the tumour?",
          options: JSON.stringify(["6.9 cm", "13.9 cm", "27.7 cm", "139 cm"]),
          answer: "B",
          explanation: "d = vt/2 = 1540 × 0.000 18 / 2 = 0.1386 m ≈ 13.9 cm.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "When white light passes through a glass prism and disperses into a spectrum, which colour refracts the MOST?",
          options: JSON.stringify(["Red", "Orange", "Yellow", "Violet"]),
          answer: "D",
          explanation: "Violet light has the highest frequency, and glass has a slightly higher refractive index for higher frequencies — so violet bends the most (greatest angle of refraction).",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are medical applications that rely on total internal reflection? (Select ALL that apply)",
          options: JSON.stringify([
            "Fibre-optic endoscopy (e.g. colonoscopy, bronchoscopy)",
            "Laser beam delivery through optical fibres in surgical systems",
            "CT scanning (computed tomography)",
            "Surgical loupes (magnifying glasses for operating)",
          ]),
          answer: JSON.stringify(["A", "B"]),
          explanation: "Fibre-optic endoscopes (A) and surgical laser delivery fibres (B) rely on TIR to transmit light with minimal loss. CT uses X-rays (C). Loupes use lens refraction and magnification, not TIR (D).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Sound in air has speed 340 m/s. Middle C has frequency 256 Hz. What is its wavelength (m)?",
          options: null,
          answer: "1.33|0.02|m",
          explanation: "λ = v/f = 340/256 ≈ 1.33 m.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "An ophthalmologist uses a 532 nm laser at 200 mW for retinal photocoagulation. Each burst lasts 0.1 s. What energy (mJ) is delivered per burst?",
          options: JSON.stringify(["0.02 mJ", "2 mJ", "20 mJ", "200 mJ"]),
          answer: "C",
          explanation: "E = Pt = 0.200 W × 0.1 s = 0.020 J = 20 mJ. Precise energy control prevents collateral retinal damage.",
          difficulty: 2,
        },
      ],
    },
  ],
};
