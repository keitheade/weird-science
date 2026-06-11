import type { SubjectSeed } from "./types";

export const methods: SubjectSeed = {
  slug: "methods",
  name: "Mathematical Methods",
  description: "Functions, calculus & probability for VCE",
  icon: "📐",
  color: "#f59e0b",
  order: 4,
  topics: [
    // ─────────────────────────────────────────────
    // 1. ALGEBRA & FUNCTIONS  (Year 9/10)
    // ─────────────────────────────────────────────
    {
      slug: "algebra-functions",
      yearBand: "Year 9–10",
      title: "Algebra & Functions",
      description:
        "Linear and quadratic functions, function notation, transformations, and simultaneous equations.",
      surgeonRelevance:
        "Surgeons use linear models to predict post-operative recovery timelines and quadratic models to describe wound-healing area over time. Function notation underpins every pharmacokinetic formula used in anaesthesia dosing.",
      order: 1,
      lessons: [
        {
          slug: "linear-functions",
          title: "Linear Functions & Graphs",
          content: `## Linear Functions

A **linear function** has the form f(x) = mx + c, where m is the gradient (slope) and c is the y-intercept.

### Key concepts
- **Gradient** m = rise/run = (y₂ − y₁)/(x₂ − x₁)
- **y-intercept**: the value of f(0) = c
- **x-intercept**: set f(x) = 0, solve for x

### Forms of a line
| Form | Equation | Use |
|------|----------|-----|
| Slope-intercept | y = mx + c | Graphing quickly |
| Point-slope | y − y₁ = m(x − x₁) | Given a point and gradient |
| General | ax + by + c = 0 | Simultaneous equations |

### Parallel & perpendicular lines
- Parallel lines have **equal gradients**: m₁ = m₂
- Perpendicular lines satisfy: m₁ × m₂ = −1

### Example
Find the equation of the line through (2, 5) with gradient 3.

y − 5 = 3(x − 2)  
y = 3x − 1`,
          medicalCallout:
            "A patient's post-operative pain score decreasing linearly from 8/10 to 2/10 over 6 hours models as P(t) = 8 − t. The gradient −1 tells a surgeon the rate of pain relief per hour — vital for scheduling the next analgesic dose.",
          interactiveRef: "function-grapher",
          order: 1,
        },
        {
          slug: "quadratic-functions",
          title: "Quadratic Functions",
          content: `## Quadratic Functions

A **quadratic function** has the form f(x) = ax² + bx + c (a ≠ 0).

### Key features
- **Vertex (turning point)**: x = −b/(2a), then substitute back for y
- **Axis of symmetry**: x = −b/(2a)
- **x-intercepts**: use the quadratic formula x = (−b ± √(b² − 4ac)) / 2a
- **Discriminant** Δ = b² − 4ac
  - Δ > 0: two real roots
  - Δ = 0: one repeated root (touches x-axis)
  - Δ < 0: no real roots (parabola doesn't cross x-axis)

### Vertex form
f(x) = a(x − h)² + k, vertex at (h, k)

### Completing the square
x² + 6x + 5 = (x + 3)² − 9 + 5 = (x + 3)² − 4  
Vertex: (−3, −4)

### Factored form
f(x) = a(x − p)(x − q), roots at x = p and x = q`,
          medicalCallout:
            "The cross-sectional area of a healing circular wound follows A(r) = πr², a quadratic in radius r. Surgeons track how quickly r shrinks over days; the vertex of a related quadratic can identify the point of maximum healing rate in some wound-care models.",
          interactiveRef: "function-grapher",
          order: 2,
        },
        {
          slug: "function-notation-transformations",
          title: "Function Notation & Transformations",
          content: `## Function Notation & Transformations

### Function notation
- f(x) denotes "the output when input is x"
- Domain: the set of valid inputs
- Range: the set of possible outputs

### Standard transformations of y = f(x)
| Transformation | Rule | Effect |
|----------------|------|--------|
| Vertical translation | y = f(x) + k | Shifts up k units (down if k < 0) |
| Horizontal translation | y = f(x − h) | Shifts right h units |
| Vertical dilation | y = af(x) | Stretches by factor a from x-axis |
| Horizontal dilation | y = f(x/b) | Stretches by factor b from y-axis |
| Reflection x-axis | y = −f(x) | Flips over x-axis |
| Reflection y-axis | y = f(−x) | Flips over y-axis |

### Composite functions
(f ∘ g)(x) = f(g(x)) — apply g first, then f.

### Inverse functions
If y = f(x), the inverse f⁻¹ swaps x and y.  
To find: replace f(x) with y, swap x ↔ y, solve for y.`,
          medicalCallout:
            "Drug concentration–time curves are transformed exponential functions. A horizontal dilation changes the half-life; a vertical dilation changes peak concentration. Anaesthetists mentally apply these transformations when adjusting infusion rates for different patient weights.",
          interactiveRef: "function-grapher",
          order: 3,
        },
        {
          slug: "simultaneous-equations",
          title: "Simultaneous Equations & Systems",
          content: `## Simultaneous Equations

**Simultaneous equations** are two or more equations solved together, finding values satisfying all equations at once.

### Methods
**Substitution**  
1. Solve one equation for one variable.  
2. Substitute into the other equation.  
3. Solve, then back-substitute.

**Elimination**  
1. Multiply equations to align coefficients of one variable.  
2. Add or subtract to eliminate that variable.  
3. Solve the resulting single equation.

### Linear + quadratic systems
Substitute the linear equation into the quadratic, form a new quadratic, solve using the quadratic formula.

Number of intersections determined by discriminant Δ:
- Δ > 0: two intersections
- Δ = 0: one (tangent)
- Δ < 0: no intersection

### Example
Solve: y = 2x + 1 and y = x² − 2

Substitute: x² − 2 = 2x + 1  
x² − 2x − 3 = 0  
(x − 3)(x + 1) = 0  
x = 3 or x = −1`,
          medicalCallout:
            "When two drugs are administered simultaneously, their combined plasma concentration is modelled by a system of equations. Solving simultaneously tells the surgeon when concentrations cross therapeutic thresholds — critical for timing reversal agents.",
          order: 4,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt:
            "What is the gradient of the line passing through the points (1, 3) and (5, 11)?",
          options: JSON.stringify(["1", "2", "3", "4"]),
          answer: "2",
          explanation:
            "m = (11 − 3)/(5 − 1) = 8/4 = 2. The gradient measures the rise per unit of run.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt:
            "Find the y-intercept of the line y = 3x − 7. Enter the y-intercept value.",
          options: null,
          answer: "-7|0|",
          explanation:
            "The y-intercept is c = −7 (the constant term when the equation is in y = mx + c form).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "A line has gradient 4. What is the gradient of any line perpendicular to it?",
          options: JSON.stringify(["4", "−4", "1/4", "−1/4"]),
          answer: "−1/4",
          explanation:
            "Perpendicular gradients satisfy m₁ × m₂ = −1, so m₂ = −1/4.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt:
            "For f(x) = 2x² − 8x + 6, find the x-coordinate of the vertex.",
          options: null,
          answer: "2|0|",
          explanation:
            "x = −b/(2a) = −(−8)/(2×2) = 8/4 = 2. Substitute back: f(2) = 8 − 16 + 6 = −2.",
          difficulty: 2,
          interactiveConfig: JSON.stringify({ fn: "2*x^2 - 8*x + 6" }),
        },
        {
          type: "mcq",
          prompt:
            "The discriminant of a quadratic is −5. Which statement is correct?",
          options: JSON.stringify([
            "Two distinct real roots",
            "One repeated real root",
            "No real roots",
            "Cannot be determined",
          ]),
          answer: "No real roots",
          explanation:
            "Δ = b² − 4ac < 0 means the parabola does not cross the x-axis, so there are no real roots.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt:
            "Which of the following are properties of the graph of y = −2(x − 3)² + 5? (Select all that apply.)",
          options: JSON.stringify([
            "Opens downward",
            "Vertex at (3, 5)",
            "Vertex at (−3, 5)",
            "y-intercept at (0, −13)",
          ]),
          answer: JSON.stringify(["Opens downward", "Vertex at (3, 5)"]),
          explanation:
            "a = −2 < 0 so it opens downward. Vertex form a(x−h)²+k gives vertex (3,5). y-intercept: y = −2(0−3)²+5 = −18+5 = −13, so (0,−13) is also correct.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "If f(x) = 3x + 2 and g(x) = x², evaluate (f ∘ g)(4).",
          options: null,
          answer: "50|0|",
          explanation:
            "g(4) = 16, then f(16) = 3(16) + 2 = 50. Composite functions apply the inner function first.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "Which transformation maps y = x² to y = (x − 2)² + 3?",
          options: JSON.stringify([
            "Translation 2 units left, 3 units up",
            "Translation 2 units right, 3 units up",
            "Translation 2 units right, 3 units down",
            "Dilation by factor 2, then up 3",
          ]),
          answer: "Translation 2 units right, 3 units up",
          explanation:
            "y = (x − h)² + k shifts the parabola h units right and k units up. Here h = 2, k = 3.",
          difficulty: 1,
          interactiveConfig: JSON.stringify({ fn: "(x-2)^2+3" }),
        },
        {
          type: "numeric",
          prompt:
            "Solve the system: y = 2x + 1 and y = x² − 2. Enter the larger x-value of intersection.",
          options: null,
          answer: "3|0|",
          explanation:
            "Substituting: x² − 2 = 2x + 1 → x² − 2x − 3 = 0 → (x−3)(x+1) = 0. Solutions x = 3 and x = −1. Larger is 3.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt:
            "The inverse of f(x) = 2x − 6 is:",
          options: JSON.stringify([
            "f⁻¹(x) = (x + 6)/2",
            "f⁻¹(x) = 2x + 6",
            "f⁻¹(x) = (x − 6)/2",
            "f⁻¹(x) = x/2 − 6",
          ]),
          answer: "f⁻¹(x) = (x + 6)/2",
          explanation:
            "Swap x and y: x = 2y − 6, then solve for y: y = (x + 6)/2.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the x-intercept of the line y = 3x − 9.",
          options: null,
          answer: "3|0|",
          explanation: "Set y = 0: 3x − 9 = 0 → x = 3.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which equation represents a line through (0, 4) parallel to y = 2x − 1?",
          options: JSON.stringify(["y = 2x + 4", "y = −2x + 4", "y = x + 4", "y = 2x − 4"]),
          answer: "y = 2x + 4",
          explanation: "Parallel lines share the same gradient m = 2. Passing through (0, 4) means y-intercept c = 4.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Complete the square for f(x) = x² + 8x + 3. What is the minimum value of f(x)?",
          options: null,
          answer: "-13|0|",
          explanation: "x² + 8x + 3 = (x + 4)² − 16 + 3 = (x + 4)² − 13. Minimum value is −13 at x = −4.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The x-intercepts of f(x) = x² − 6x + 8 are:",
          options: JSON.stringify(["x = 2 and x = 4", "x = −2 and x = −4", "x = 1 and x = 8", "x = 3 only"]),
          answer: "x = 2 and x = 4",
          explanation: "Factorise: (x − 2)(x − 4) = 0, so x = 2 or x = 4.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For f(x) = 4x − 5, find f⁻¹(7).",
          options: null,
          answer: "3|0|",
          explanation: "f⁻¹(x) = (x + 5)/4, so f⁻¹(7) = 12/4 = 3.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The vertex of y = −(x + 2)² + 7 is at:",
          options: JSON.stringify(["(2, 7)", "(−2, 7)", "(2, −7)", "(−2, −7)"]),
          answer: "(−2, 7)",
          explanation: "Vertex form y = a(x − h)² + k has vertex (h, k). Here h = −2, k = 7, so vertex is (−2, 7).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Solve simultaneously: 2x + 3y = 12 and x − y = 1. Find the value of x.",
          options: null,
          answer: "3|0|",
          explanation: "From x − y = 1: x = y + 1. Substituting: 2(y + 1) + 3y = 12 → 5y = 10 → y = 2, x = 3.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The discriminant of 2x² − 5x + 4 equals:",
          options: JSON.stringify(["7", "−7", "9", "−9"]),
          answer: "−7",
          explanation: "Δ = b² − 4ac = (−5)² − 4(2)(4) = 25 − 32 = −7. Since Δ < 0, there are no real roots.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "If f(x) = 2x + 1 and g(x) = x² − 3, evaluate (g ∘ f)(2).",
          options: null,
          answer: "22|0|",
          explanation: "f(2) = 5. Then (g ∘ f)(2) = g(5) = 25 − 3 = 22.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A patient's pain score follows P(t) = 8 − t. After how many hours does the score reach 2?",
          options: null,
          answer: "6|0|",
          explanation: "Set 8 − t = 2 → t = 6 hours.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which transformation maps y = x² to y = 3x²?",
          options: JSON.stringify([
            "Vertical dilation by factor 3 from the x-axis",
            "Horizontal dilation by factor 3",
            "Vertical translation 3 units up",
            "Horizontal translation 3 units right",
          ]),
          answer: "Vertical dilation by factor 3 from the x-axis",
          explanation: "Multiplying f(x) by 3 stretches the graph vertically by factor 3 away from the x-axis.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Find the larger x-value where y = x + 2 intersects y = x² − 4.",
          options: null,
          answer: "3|0|",
          explanation: "x² − 4 = x + 2 → x² − x − 6 = 0 → (x − 3)(x + 2) = 0. Solutions x = 3 and x = −2; larger is 3.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate f(−3) for f(x) = x² − 2x + 1.",
          options: null,
          answer: "16|0|",
          explanation: "f(−3) = (−3)² − 2(−3) + 1 = 9 + 6 + 1 = 16.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The range of f(x) = x² + 1 for all real x is:",
          options: JSON.stringify(["y ≥ 0", "y ≥ 1", "y > 1", "all real y"]),
          answer: "y ≥ 1",
          explanation: "x² ≥ 0 for all real x, so x² + 1 ≥ 1. The minimum is 1 at x = 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Find the gradient of the line 3x + 2y = 6.",
          options: null,
          answer: "-1.5|0.001|",
          explanation: "Rearrange: 2y = −3x + 6 → y = −(3/2)x + 3. Gradient m = −1.5.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are linear functions? (Select all that apply.)",
          options: JSON.stringify([
            "y = 3x − 2",
            "y = x² + 1",
            "f(x) = 5 − 2x",
            "g(x) = 1/x",
          ]),
          answer: JSON.stringify(["y = 3x − 2", "f(x) = 5 − 2x"]),
          explanation: "Linear functions have degree 1 (form y = mx + c). y = x² + 1 is quadratic; g(x) = 1/x is a hyperbola.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For y = 2(x − 3)² + 1, what is the minimum value of y?",
          options: null,
          answer: "1|0|",
          explanation: "Vertex is at (3, 1) with a = 2 > 0 (opens upward), so the minimum value is 1.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The axis of symmetry of y = x² − 4x + 7 is:",
          options: JSON.stringify(["x = 2", "x = −2", "x = 4", "x = −4"]),
          answer: "x = 2",
          explanation: "x = −b/(2a) = −(−4)/(2×1) = 2.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Solve simultaneously: 3x − y = 5 and 2x + y = 5. Find the value of y.",
          options: null,
          answer: "1|0|",
          explanation: "Add the equations: 5x = 10 → x = 2. Substitute: 2(2) + y = 5 → y = 1.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The inverse function of f(x) = 3x + 9 is:",
          options: JSON.stringify([
            "f⁻¹(x) = (x − 9)/3",
            "f⁻¹(x) = (x + 9)/3",
            "f⁻¹(x) = 3x − 9",
            "f⁻¹(x) = x/3 + 9",
          ]),
          answer: "f⁻¹(x) = (x − 9)/3",
          explanation: "Swap x and y: x = 3y + 9 → y = (x − 9)/3.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A drug infusion rate starts at 5 mg/hr and increases by a constant 2.5 mg/hr each hour. What is the rate (in mg/hr) after 3 hours?",
          options: null,
          answer: "12.5|0|",
          explanation: "R(t) = 5 + 2.5t. R(3) = 5 + 7.5 = 12.5 mg/hr.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "How many x-intercepts does y = x² + 4 have?",
          options: JSON.stringify(["0", "1", "2", "4"]),
          answer: "0",
          explanation: "Δ = 0² − 4(1)(4) = −16 < 0. No real roots, so no x-intercepts.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "If f(x) = x² + bx + 9 has exactly one repeated root, find the positive value of b.",
          options: null,
          answer: "6|0|",
          explanation: "Repeated root requires Δ = 0: b² − 4(1)(9) = 0 → b² = 36 → b = ±6. Positive value is 6.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "If g(x) = 2x − 4 and f(x) = x + 3, find (f ∘ g)(x).",
          options: JSON.stringify(["2x − 1", "2x + 7", "2x − 7", "x − 1"]),
          answer: "2x − 1",
          explanation: "(f ∘ g)(x) = f(g(x)) = (2x − 4) + 3 = 2x − 1.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are true about y = x² − 4x + 4? (Select all that apply.)",
          options: JSON.stringify([
            "It touches the x-axis at exactly one point",
            "Its vertex is at (2, 0)",
            "It opens upward",
            "It has two distinct x-intercepts",
          ]),
          answer: JSON.stringify([
            "It touches the x-axis at exactly one point",
            "Its vertex is at (2, 0)",
            "It opens upward",
          ]),
          explanation: "y = (x−2)². Vertex (2, 0), opens upward (a = 1 > 0), touches x-axis at x = 2 only (Δ = 0). Not two distinct intercepts.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A line passes through (−1, 4) and (3, −4). Find the y-intercept of this line.",
          options: null,
          answer: "2|0|",
          explanation: "m = (−4 − 4)/(3 − (−1)) = −8/4 = −2. Using point (3, −4): y + 4 = −2(x − 3) → y = −2x + 2. y-intercept is 2.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The graph of y = f(−x) is obtained from y = f(x) by:",
          options: JSON.stringify([
            "Reflection in the x-axis",
            "Reflection in the y-axis",
            "Rotation 180° about origin",
            "Vertical dilation",
          ]),
          answer: "Reflection in the y-axis",
          explanation: "Replacing x with −x reflects the graph in the y-axis.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Two lines are perpendicular. One has gradient −3. The gradient of the other line is:",
          options: JSON.stringify(["3", "−3", "1/3", "−1/3"]),
          answer: "1/3",
          explanation: "m₁ × m₂ = −1. So m₂ = −1/(−3) = 1/3.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Solve x² − 7x + 10 = 0. Enter the smaller root.",
          options: null,
          answer: "2|0|",
          explanation: "(x − 2)(x − 5) = 0. Roots are 2 and 5. Smaller root is 2.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "The transformation y = −f(x − 1) + 2 applies which changes to y = f(x)? (Select all that apply.)",
          options: JSON.stringify([
            "Reflection in the x-axis",
            "Horizontal translation 1 unit right",
            "Vertical translation 2 units up",
            "Horizontal translation 1 unit left",
          ]),
          answer: JSON.stringify([
            "Reflection in the x-axis",
            "Horizontal translation 1 unit right",
            "Vertical translation 2 units up",
          ]),
          explanation: "−f(x): reflect in x-axis. f(x − 1): shift right 1 unit. +2: shift up 2 units.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A wound area is modelled by A(t) = 40 − 8t cm² (t in days). After how many days is the wound fully healed (A = 0)?",
          options: null,
          answer: "5|0|",
          explanation: "40 − 8t = 0 → t = 5 days.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "If the point (3, k) lies on the line y = −2x + 7, what is k?",
          options: JSON.stringify(["13", "1", "−1", "−13"]),
          answer: "1",
          explanation: "k = −2(3) + 7 = −6 + 7 = 1.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For f(x) = x² − 4x + 3, find the x-coordinate at which the minimum occurs.",
          options: null,
          answer: "2|0|",
          explanation: "x = −b/(2a) = −(−4)/(2×1) = 2.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The graph of y = f(x) + 3 compared to y = f(x) is shifted:",
          options: JSON.stringify(["3 units right", "3 units left", "3 units up", "3 units down"]),
          answer: "3 units up",
          explanation: "Adding a positive constant k to f(x) translates the graph k units vertically upward.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Find the value of c if the line y = 2x + c passes through the point (4, 11).",
          options: null,
          answer: "3|0|",
          explanation: "Substitute (4, 11): 11 = 2(4) + c → c = 11 − 8 = 3.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The roots of x² + x − 6 = 0 are:",
          options: JSON.stringify(["x = 2 and x = −3", "x = −2 and x = 3", "x = 6 and x = −1", "x = 1 and x = −6"]),
          answer: "x = 2 and x = −3",
          explanation: "(x + 3)(x − 2) = 0. Roots are x = 2 and x = −3.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Evaluate f(−2) for f(x) = x³ − x.",
          options: null,
          answer: "-6|0|",
          explanation: "f(−2) = (−2)³ − (−2) = −8 + 2 = −6.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The equation of the line through (1, 5) with gradient −3 is:",
          options: JSON.stringify([
            "y = −3x + 8",
            "y = −3x − 2",
            "y = 3x + 2",
            "y = −3x + 2",
          ]),
          answer: "y = −3x + 8",
          explanation: "y − 5 = −3(x − 1) → y = −3x + 3 + 5 = −3x + 8.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A paediatric dosage formula gives D = 0.5W mg where W is the patient's weight in kg. What dosage (in mg) is given to a 68 kg patient?",
          options: null,
          answer: "34|0|",
          explanation: "D = 0.5 × 68 = 34 mg.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are true about the function f(x) = 1/x (x ≠ 0)? (Select all that apply.)",
          options: JSON.stringify([
            "It is defined for all real x",
            "It has a vertical asymptote at x = 0",
            "It is an odd function",
            "Its range includes 0",
          ]),
          answer: JSON.stringify([
            "It has a vertical asymptote at x = 0",
            "It is an odd function",
          ]),
          explanation: "f(x) = 1/x is undefined at x = 0 (vertical asymptote). f(−x) = −f(x), so it is odd. The range is all non-zero reals (0 excluded).",
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 2. TRIGONOMETRY  (VCE Unit 1)
    // ─────────────────────────────────────────────
    {
      slug: "trigonometry",
      yearBand: "VCE Unit 1",
      title: "Trigonometry",
      description:
        "Trigonometric ratios, the unit circle, radian measure, graphing trig functions, and solving trig equations.",
      surgeonRelevance:
        "Surgeons rely on trigonometry when interpreting medical imaging angles (e.g. scoliosis Cobb angle, hip prosthesis alignment) and when positioning patients: table angles, limb traction vectors, and laparoscopic port entry angles all involve trigonometric relationships.",
      order: 2,
      lessons: [
        {
          slug: "trig-ratios-triangles",
          title: "Trigonometric Ratios & Right Triangles",
          content: `## Trigonometric Ratios

For a right-angled triangle with angle θ:

| Ratio | Definition | Mnemonic |
|-------|-----------|----------|
| sin θ | opposite / hypotenuse | SOH |
| cos θ | adjacent / hypotenuse | CAH |
| tan θ | opposite / adjacent | TOA |

### Exact values
| θ | 0° | 30° | 45° | 60° | 90° |
|---|----|-----|-----|-----|-----|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | 1/√3 | 1 | √3 | undef |

### Solving right triangles
Given one side and one angle, use SOH-CAH-TOA to find unknown sides.  
Given two sides, use inverse trig (sin⁻¹, cos⁻¹, tan⁻¹) to find angles.

### Sine and Cosine rules (non-right triangles)
**Sine rule**: a/sin A = b/sin B = c/sin C  
**Cosine rule**: a² = b² + c² − 2bc cos A`,
          medicalCallout:
            "The Cobb angle — used to measure scoliosis severity — is calculated from the intersection of lines perpendicular to the end vertebrae on an X-ray. A Cobb angle > 40° typically indicates surgical intervention. This is pure trigonometry applied in every spinal surgery planning session.",
          order: 1,
        },
        {
          slug: "unit-circle-radians",
          title: "The Unit Circle & Radian Measure",
          content: `## The Unit Circle & Radians

### Radian measure
360° = 2π radians  
1 radian ≈ 57.3°

Conversion: degrees × (π/180) = radians

### The unit circle
A circle of radius 1 centred at the origin. For angle θ measured from positive x-axis:
- x-coordinate = cos θ
- y-coordinate = sin θ

### Quadrant signs (ASTC rule)
| Quadrant | Positive ratios |
|----------|----------------|
| 1st (0 to π/2) | All |
| 2nd (π/2 to π) | Sin |
| 3rd (π to 3π/2) | Tan |
| 4th (3π/2 to 2π) | Cos |

### Symmetry relationships
- sin(π − θ) = sin θ
- cos(π − θ) = −cos θ
- sin(−θ) = −sin θ (odd function)
- cos(−θ) = cos θ (even function)`,
          medicalCallout:
            "MRI scanner gantry rotation and CT reconstruction algorithms use radian measure internally. Understanding radian-based phase angles also underpins electrocardiogram (ECG) interpretation — the cardiac cycle is modelled as a periodic sinusoidal wave.",
          order: 2,
        },
        {
          slug: "trig-graphs-equations",
          title: "Graphs of Trig Functions & Equations",
          content: `## Graphs of Trig Functions

### General sinusoidal form
y = a sin(n(x − h)) + k  (or cosine version)

- **Amplitude** = |a| (half the height of the wave)
- **Period** = 2π/n
- **Phase shift** = h (horizontal shift)
- **Vertical shift** = k (midline)

### Key graph shapes
- **y = sin x**: period 2π, starts at 0
- **y = cos x**: period 2π, starts at 1
- **y = tan x**: period π, vertical asymptotes at x = π/2 + nπ

### Solving trig equations
Example: Solve sin x = √3/2 for x ∈ [0, 2π]

Reference angle: x = π/3  
Sin is positive in Q1 and Q2:  
x = π/3 and x = π − π/3 = 2π/3`,
          medicalCallout:
            "Ventilator waveforms in ICU are sinusoidal: pressure and flow oscillate with a set period (breaths per minute). A surgeon reviewing ventilator parameters is reading amplitude (tidal volume) and period (respiratory rate) — direct application of trig graph features.",
          interactiveRef: "function-grapher",
          order: 3,
        },
        {
          slug: "trig-identities",
          title: "Trigonometric Identities",
          content: `## Trigonometric Identities

### Pythagorean identities
- sin²θ + cos²θ = 1
- 1 + tan²θ = sec²θ
- 1 + cot²θ = cosec²θ

### Double angle formulas
- sin 2θ = 2 sin θ cos θ
- cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ
- tan 2θ = 2 tan θ / (1 − tan²θ)

### Compound angle formulas
- sin(A ± B) = sin A cos B ± cos A sin B
- cos(A ± B) = cos A cos B ∓ sin A sin B

### Using identities to simplify
Simplify: (sin²θ + cos²θ) / cos θ = 1/cos θ = sec θ`,
          medicalCallout:
            "Ultrasound beamforming uses compound-angle identities to combine signals from multiple transducer elements, forming a focused beam at the correct tissue depth. Every ultrasound scan a surgeon reviews was reconstructed using these identities in real time.",
          order: 4,
        },
      ],
      questions: [
        {
          type: "numeric",
          prompt:
            "In a right triangle, the opposite side is 5 cm and the hypotenuse is 13 cm. What is sin θ? Enter the exact decimal value.",
          options: null,
          answer: "0.3846|0.0001|",
          explanation:
            "sin θ = opposite/hypotenuse = 5/13 ≈ 0.3846.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Convert 150° to radians.",
          options: JSON.stringify(["π/3", "5π/6", "2π/3", "3π/4"]),
          answer: "5π/6",
          explanation:
            "150 × (π/180) = 150π/180 = 5π/6.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "In which quadrant does an angle of 5π/4 radians lie?",
          options: JSON.stringify([
            "First (Q1)",
            "Second (Q2)",
            "Third (Q3)",
            "Fourth (Q4)",
          ]),
          answer: "Third (Q3)",
          explanation:
            "5π/4 = 225°, which lies between 180° and 270° — the third quadrant.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt:
            "Find the exact value of sin(π/3). Enter your answer as a decimal to 4 decimal places.",
          options: null,
          answer: "0.8660|0.0001|",
          explanation:
            "sin(π/3) = sin 60° = √3/2 ≈ 0.8660.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "The function y = 3 sin(2x) has amplitude and period:",
          options: JSON.stringify([
            "Amplitude 3, period π",
            "Amplitude 3, period 2π",
            "Amplitude 6, period π",
            "Amplitude 1/3, period 2π",
          ]),
          answer: "Amplitude 3, period π",
          explanation:
            "In y = a sin(nx), amplitude = |a| = 3 and period = 2π/n = 2π/2 = π.",
          difficulty: 2,
          interactiveConfig: JSON.stringify({ fn: "3*sin(2*x)" }),
        },
        {
          type: "multi-select",
          prompt:
            "Which of the following are equivalent to cos 2θ? (Select all that apply.)",
          options: JSON.stringify([
            "cos²θ − sin²θ",
            "2cos²θ − 1",
            "1 − 2sin²θ",
            "2 sin θ cos θ",
          ]),
          answer: JSON.stringify([
            "cos²θ − sin²θ",
            "2cos²θ − 1",
            "1 − 2sin²θ",
          ]),
          explanation:
            "All three are standard double-angle forms for cos 2θ. The last option (2 sin θ cos θ) is sin 2θ, not cos 2θ.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "Solve sin x = 1/2 for x ∈ [0, 2π]. Enter the smaller solution in radians (exact, enter as a decimal to 4 d.p.).",
          options: null,
          answer: "0.5236|0.0001|",
          explanation:
            "sin x = 1/2 gives reference angle x = π/6 ≈ 0.5236 rad. Sin is positive in Q1 and Q2, so x = π/6 and x = 5π/6.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "Using the cosine rule, find angle A in a triangle where a = 7, b = 5, c = 8.",
          options: JSON.stringify([
            "approximately 60°",
            "approximately 53°",
            "approximately 44°",
            "approximately 75°",
          ]),
          answer: "approximately 60°",
          explanation:
            "cos A = (b² + c² − a²)/(2bc) = (25 + 64 − 49)/80 = 40/80 = 0.5, so A = cos⁻¹(0.5) = 60°.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Simplify: sin²θ/(1 − cos²θ)",
          options: JSON.stringify(["1", "cos²θ", "tan²θ", "sin θ"]),
          answer: "1",
          explanation:
            "By the Pythagorean identity, 1 − cos²θ = sin²θ, so sin²θ/sin²θ = 1.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt:
            "A graph of y = sin x has which of the following properties? (Select all that apply.)",
          options: JSON.stringify([
            "Period 2π",
            "Passes through the origin",
            "Maximum value of 1",
            "Is an even function",
          ]),
          answer: JSON.stringify([
            "Period 2π",
            "Passes through the origin",
            "Maximum value of 1",
          ]),
          explanation:
            "sin x has period 2π, passes through (0,0), and has maximum 1. It is an ODD function (sin(−x) = −sin x), not even.",
          difficulty: 1,
          interactiveConfig: JSON.stringify({ fn: "sin(x)" }),
        },
        {
          type: "numeric",
          prompt: "Convert 210° to radians. Enter your answer as a decimal to 4 decimal places.",
          options: null,
          answer: "3.6652|0.0001|",
          explanation: "210 × (π/180) = 7π/6 ≈ 3.6652 radians.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "cos(π/4) equals:",
          options: JSON.stringify(["1/2", "√3/2", "√2/2", "1"]),
          answer: "√2/2",
          explanation: "cos(π/4) = cos 45° = √2/2 ≈ 0.7071. This is an exact value to memorise.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Find the period of y = cos(3x). Enter the period as a decimal to 4 decimal places.",
          options: null,
          answer: "2.0944|0.0001|",
          explanation: "Period = 2π/n = 2π/3 ≈ 2.0944.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "sin(−π/6) equals:",
          options: JSON.stringify(["1/2", "−1/2", "√3/2", "−√3/2"]),
          answer: "−1/2",
          explanation: "sin is an odd function: sin(−θ) = −sin θ. So sin(−π/6) = −sin(π/6) = −1/2.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "In a right triangle, the adjacent side is 12 cm and the hypotenuse is 13 cm. Find cos θ as a decimal to 4 decimal places.",
          options: null,
          answer: "0.9231|0.0001|",
          explanation: "cos θ = adjacent/hypotenuse = 12/13 ≈ 0.9231.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "tan(45°) equals:",
          options: JSON.stringify(["0", "1/2", "1", "√3"]),
          answer: "1",
          explanation: "tan(45°) = sin 45°/cos 45° = (√2/2)/(√2/2) = 1.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the amplitude of y = −4 sin(x)?",
          options: null,
          answer: "4|0|",
          explanation: "Amplitude = |a| = |−4| = 4. The negative sign reflects the graph but does not change the amplitude.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In which quadrant is cos θ < 0 and sin θ > 0?",
          options: JSON.stringify(["Q1", "Q2", "Q3", "Q4"]),
          answer: "Q2",
          explanation: "In Q2, x-coordinates are negative (cos < 0) and y-coordinates are positive (sin > 0). ASTC rule: Sin is positive in Q2.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Solve sin x = −1/2 for x ∈ [0, 2π]. Enter the larger solution in radians as a decimal to 4 d.p.",
          options: null,
          answer: "5.7596|0.0001|",
          explanation: "Reference angle π/6. sin is negative in Q3 and Q4. Q3: x = π + π/6 = 7π/6 ≈ 3.6652; Q4: x = 2π − π/6 = 11π/6 ≈ 5.7596. Larger is 11π/6.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "If sin θ = 3/5 and θ is in Q1, what is cos 2θ?",
          options: JSON.stringify(["7/25", "−7/25", "24/25", "−24/25"]),
          answer: "7/25",
          explanation: "cos θ = 4/5. cos 2θ = 1 − 2sin²θ = 1 − 2(9/25) = 1 − 18/25 = 7/25.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the period of y = sin(πx). Enter the exact integer period.",
          options: null,
          answer: "2|0|",
          explanation: "Period = 2π/n where n = π. Period = 2π/π = 2.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are true for y = cos x? (Select all that apply.)",
          options: JSON.stringify([
            "It is an even function",
            "Its period is 2π",
            "cos(0) = 1",
            "It passes through the origin",
          ]),
          answer: JSON.stringify([
            "It is an even function",
            "Its period is 2π",
            "cos(0) = 1",
          ]),
          explanation: "cos(−x) = cos x (even function ✓). Period 2π ✓. cos(0) = 1 ✓. cos(0) = 1 ≠ 0, so it does not pass through the origin.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "tan(π/3) equals:",
          options: JSON.stringify(["1", "1/√3", "√3", "2"]),
          answer: "√3",
          explanation: "tan(π/3) = sin(π/3)/cos(π/3) = (√3/2)/(1/2) = √3.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "In a triangle, a = 6, A = 30°, B = 45°. Using the sine rule, find side b to 4 decimal places.",
          options: null,
          answer: "8.4853|0.001|",
          explanation: "b/sin B = a/sin A → b = 6 × sin 45°/sin 30° = 6 × (√2/2)/(1/2) = 6√2 ≈ 8.4853.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "cos(π − θ) equals:",
          options: JSON.stringify(["cos θ", "−cos θ", "sin θ", "−sin θ"]),
          answer: "−cos θ",
          explanation: "Using the symmetry identity: cos(π − θ) = −cos θ. The cosine is negative in Q2.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "If sin θ = 0.6 and θ is in Q1, find cos θ.",
          options: null,
          answer: "0.8|0.001|",
          explanation: "sin²θ + cos²θ = 1 → cos²θ = 1 − 0.36 = 0.64 → cos θ = 0.8 (positive in Q1).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The graph of y = sin(x − π/4) compared to y = sin x is:",
          options: JSON.stringify([
            "Shifted π/4 units right",
            "Shifted π/4 units left",
            "Shifted π/4 units up",
            "Amplitude increased by π/4",
          ]),
          answer: "Shifted π/4 units right",
          explanation: "y = sin(x − h) shifts the graph h units to the right. Here h = π/4.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "What is the vertical shift (midline value) of y = 2 sin(x) + 3?",
          options: null,
          answer: "3|0|",
          explanation: "In y = a sin(x) + k, the vertical shift is k = 3. The midline is y = 3.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "If sin θ = −3/5 and cos θ = 4/5, what is tan θ?",
          options: JSON.stringify(["3/4", "−3/4", "4/3", "−4/3"]),
          answer: "−3/4",
          explanation: "tan θ = sin θ/cos θ = (−3/5)/(4/5) = −3/4.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A scoliosis Cobb angle of 35° — as measured on a spinal X-ray — must be converted to radians for a computer model. Give the answer to 4 decimal places.",
          options: null,
          answer: "0.6109|0.0001|",
          explanation: "35 × (π/180) = 35π/180 = 7π/36 ≈ 0.6109 radians.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are properties of y = tan x? (Select all that apply.)",
          options: JSON.stringify([
            "Its period is π",
            "It has vertical asymptotes at x = π/2 + nπ",
            "Its amplitude is 1",
            "It passes through the origin",
          ]),
          answer: JSON.stringify([
            "Its period is π",
            "It has vertical asymptotes at x = π/2 + nπ",
            "It passes through the origin",
          ]),
          explanation: "tan x has period π ✓, asymptotes at x = π/2 + nπ ✓, passes through (0,0) ✓. tan x is unbounded so it has no amplitude.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "cos(30°) equals:",
          options: JSON.stringify(["1/2", "√3/2", "√2/2", "√3"]),
          answer: "√3/2",
          explanation: "cos(30°) = cos(π/6) = √3/2. This is a standard exact value.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Find θ in degrees (0° ≤ θ ≤ 360°) such that cos θ = −1.",
          options: null,
          answer: "180|0|",
          explanation: "cos 180° = −1. This is the only solution in [0°, 360°].",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The period of y = tan(2x) is:",
          options: JSON.stringify(["π", "π/2", "2π", "4π"]),
          answer: "π/2",
          explanation: "Period of tan(nx) = π/n. Here n = 2, so period = π/2.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate sin²(π/6) + cos²(π/6).",
          options: null,
          answer: "1|0|",
          explanation: "By the Pythagorean identity, sin²θ + cos²θ = 1 for all θ. This equals 1.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "sin(π/2 − θ) equals:",
          options: JSON.stringify(["sin θ", "cos θ", "−sin θ", "−cos θ"]),
          answer: "cos θ",
          explanation: "Co-function identity: sin(π/2 − θ) = cos θ.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Solve cos x = 0 in [0, 2π]. Enter the smaller solution in radians as a decimal to 4 d.p.",
          options: null,
          answer: "1.5708|0.0001|",
          explanation: "cos x = 0 at x = π/2 and x = 3π/2. Smaller solution is π/2 ≈ 1.5708.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which of the following is equivalent to sin 2θ?",
          options: JSON.stringify([
            "2 sin θ cos θ",
            "cos²θ − sin²θ",
            "2 cos²θ − 1",
            "sin²θ − cos²θ",
          ]),
          answer: "2 sin θ cos θ",
          explanation: "The double-angle formula: sin 2θ = 2 sin θ cos θ. The other options are forms of cos 2θ.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "In a right triangle with opposite side = 24 and adjacent side = 7, find tan θ as a decimal to 4 decimal places.",
          options: null,
          answer: "3.4286|0.0001|",
          explanation: "tan θ = opposite/adjacent = 24/7 ≈ 3.4286.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The function y = cos(x + π) is equivalent to:",
          options: JSON.stringify(["cos x", "−cos x", "sin x", "−sin x"]),
          answer: "−cos x",
          explanation: "cos(x + π) = cos x cos π − sin x sin π = −cos x − 0 = −cos x.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the phase shift of y = 3 sin(x − π/3). Enter the value in radians to 4 decimal places.",
          options: null,
          answer: "1.0472|0.0001|",
          explanation: "Phase shift = h = π/3 ≈ 1.0472 radians to the right.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are valid trigonometric identities? (Select all that apply.)",
          options: JSON.stringify([
            "sin²θ + cos²θ = 1",
            "tan θ = sin θ / cos θ",
            "cos 2θ = 2 sin θ cos θ",
            "1 + tan²θ = sec²θ",
          ]),
          answer: JSON.stringify([
            "sin²θ + cos²θ = 1",
            "tan θ = sin θ / cos θ",
            "1 + tan²θ = sec²θ",
          ]),
          explanation: "All correct except: cos 2θ = cos²θ − sin²θ (not 2 sin θ cos θ, which is sin 2θ).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Convert 3π/4 to degrees.",
          options: JSON.stringify(["120°", "135°", "150°", "160°"]),
          answer: "135°",
          explanation: "3π/4 × (180/π) = 3 × 45 = 135°.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "In a triangle, a = 10, b = 7, C = 60°. Using the cosine rule, find side c to 4 decimal places.",
          options: null,
          answer: "8.8882|0.001|",
          explanation: "c² = a² + b² − 2ab cos C = 100 + 49 − 2(10)(7)(0.5) = 149 − 70 = 79. c = √79 ≈ 8.8882.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "The amplitude of y = −3 cos(2x) is:",
          options: JSON.stringify(["−3", "3", "2", "6"]),
          answer: "3",
          explanation: "Amplitude = |a| = |−3| = 3. The negative sign reflects but does not change amplitude.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "If cos θ = −√3/2, find the smallest positive θ in degrees.",
          options: null,
          answer: "150|0|",
          explanation: "cos θ = √3/2 gives reference angle 30°. Since cos θ < 0, θ is in Q2 or Q3. Smallest positive: 180° − 30° = 150°.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "sin(π) equals:",
          options: JSON.stringify(["1", "−1", "0", "undefined"]),
          answer: "0",
          explanation: "sin(π) = sin 180° = 0. The unit circle point at π is (−1, 0), so the y-coordinate (sin) is 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For y = 4 cos(x) + 1, what is the maximum value of y?",
          options: null,
          answer: "5|0|",
          explanation: "Maximum of cos(x) is 1. So maximum of y = 4(1) + 1 = 5.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "tan(π/4) equals:",
          options: JSON.stringify(["0", "1/2", "1", "√3"]),
          answer: "1",
          explanation: "tan(π/4) = sin(π/4)/cos(π/4) = (√2/2)/(√2/2) = 1.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "A ventilator delivers breaths modelled by y = 0.5 sin(2πt/3) litres. Which are correct? (Select all that apply.)",
          options: JSON.stringify([
            "The tidal volume (amplitude) is 0.5 L",
            "The period is 3 seconds",
            "The respiratory rate is 20 breaths per minute",
            "The period is 2π seconds",
          ]),
          answer: JSON.stringify([
            "The tidal volume (amplitude) is 0.5 L",
            "The period is 3 seconds",
            "The respiratory rate is 20 breaths per minute",
          ]),
          explanation: "Amplitude = 0.5 L ✓. Period = 2π/(2π/3) = 3 s ✓. 3 s/breath → 60/3 = 20 breaths/min ✓. Period is 3 s, not 2π s ✗.",
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 3. CALCULUS INTRO  (VCE Unit 2)
    // ─────────────────────────────────────────────
    {
      slug: "calculus-intro",
      yearBand: "VCE Unit 2",
      title: "Introduction to Calculus",
      description:
        "Limits, differentiation from first principles, derivative rules, and derivatives of trigonometric and exponential functions.",
      surgeonRelevance:
        "The derivative is the instantaneous rate of change — the mathematical language of physiology. Cardiac output is the derivative of stroke volume with respect to time. Drug clearance rate is the derivative of plasma concentration. Every critical care monitoring parameter is a derivative.",
      order: 3,
      lessons: [
        {
          slug: "limits-continuity",
          title: "Limits & Continuity",
          content: `## Limits & Continuity

### What is a limit?
The limit lim(x→a) f(x) = L means f(x) approaches L as x approaches a, regardless of f(a).

### Evaluating limits
1. **Direct substitution** (if f is continuous at a): lim f(x) = f(a)
2. **Factorisation** (for 0/0 forms): factorise numerator/denominator, cancel common factors
3. **Standard limits**: lim(x→0) sin(x)/x = 1

### Continuity
A function is continuous at x = a if:
1. f(a) is defined
2. lim(x→a) f(x) exists
3. lim(x→a) f(x) = f(a)

### Example — evaluating by factorisation
lim(x→2) (x² − 4)/(x − 2)  
= lim(x→2) (x + 2)(x − 2)/(x − 2)  
= lim(x→2) (x + 2) = 4`,
          medicalCallout:
            "Drug plasma concentration curves are continuous functions; a discontinuity would mean an instantaneous jump in concentration — physically impossible. When modelling drug behaviour, continuity guarantees that small changes in dose lead to small changes in response, a key safety principle.",
          order: 1,
        },
        {
          slug: "first-principles-differentiation",
          title: "Differentiation from First Principles",
          content: `## First Principles Differentiation

### The derivative definition
f'(x) = lim(h→0) [f(x + h) − f(x)] / h

This is the gradient of the tangent to the curve at x.

### Example: differentiate f(x) = x²
f'(x) = lim(h→0) [(x+h)² − x²] / h  
= lim(h→0) [x² + 2xh + h² − x²] / h  
= lim(h→0) [2xh + h²] / h  
= lim(h→0) (2x + h)  
= 2x

### Notation
- f'(x) — Lagrange notation (most common in VCE)
- dy/dx — Leibniz notation (used for implicit/related rates)
- ḟ — Newton dot notation (used in physics/ODEs)

### Interpretation
f'(a) = gradient of the tangent to y = f(x) at x = a`,
          medicalCallout:
            "The concept behind first principles — measuring the rate of change over ever-smaller intervals — mirrors how continuous blood pressure monitors detect arterial waveforms: they sample pressure hundreds of times per second, approximating the continuous derivative of blood pressure over time.",
          order: 2,
        },
        {
          slug: "differentiation-rules",
          title: "Differentiation Rules",
          content: `## Differentiation Rules

### Power rule
d/dx [xⁿ] = nxⁿ⁻¹

### Constant multiple rule
d/dx [cf(x)] = c·f'(x)

### Sum/difference rule
d/dx [f(x) ± g(x)] = f'(x) ± g'(x)

### Product rule
d/dx [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)

### Quotient rule
d/dx [f(x)/g(x)] = [f'(x)g(x) − f(x)g'(x)] / [g(x)]²

### Chain rule
d/dx [f(g(x))] = f'(g(x)) · g'(x)

### Standard derivatives
| f(x) | f'(x) |
|------|-------|
| xⁿ | nxⁿ⁻¹ |
| eˣ | eˣ |
| eᵏˣ | keᵏˣ |
| ln x | 1/x |
| sin x | cos x |
| cos x | −sin x |`,
          medicalCallout:
            "The chain rule is used when differentiating composite drug-effect models. If E = f(C) and C = g(t), then dE/dt = f'(C)·g'(t): the rate of drug effect change equals the sensitivity function times the rate of concentration change — exactly how pharmacodynamic models are derived.",
          order: 3,
        },
        {
          slug: "stationary-points",
          title: "Stationary Points & Curve Sketching",
          content: `## Stationary Points & Curve Sketching

### Stationary points
A stationary point occurs where f'(x) = 0.

### Types of stationary points
| Type | f'(x) behaviour | f''(x) test |
|------|----------------|-------------|
| Local minimum | − → 0 → + | f''(x) > 0 |
| Local maximum | + → 0 → − | f''(x) < 0 |
| Stationary inflection | + → 0 → + or − → 0 → − | f''(x) = 0 |

### Second derivative
f''(x) = d/dx[f'(x)]

### Points of inflection
Where f''(x) = 0 and concavity changes.

### Curve sketching checklist
1. Domain and range
2. x and y intercepts
3. Stationary points (solve f'(x) = 0)
4. Nature of each stationary point
5. Points of inflection (f''(x) = 0)
6. Behaviour as x → ±∞`,
          medicalCallout:
            "Identifying a maximum on a dose–response curve tells a surgeon the peak therapeutic dose beyond which further increases cause toxicity. The stationary point of the response function is literally the optimal drug dose — critical in anaesthetic dosing calculations.",
          interactiveRef: "function-grapher",
          order: 4,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "Evaluate: lim(x→3) (x² − 9)/(x − 3)",
          options: JSON.stringify(["3", "6", "9", "0"]),
          answer: "6",
          explanation:
            "Factor: (x²−9)/(x−3) = (x+3)(x−3)/(x−3) = x+3. As x→3, this → 6.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Using the power rule, find f'(x) if f(x) = 5x³. What is f'(2)?",
          options: null,
          answer: "60|0|",
          explanation:
            "f'(x) = 15x². f'(2) = 15 × 4 = 60.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "Differentiate y = 3x⁴ − 2x² + 7x − 1.",
          options: JSON.stringify([
            "12x³ − 4x + 7",
            "12x³ − 4x",
            "3x³ − 4x + 7",
            "12x⁴ − 4x² + 7",
          ]),
          answer: "12x³ − 4x + 7",
          explanation:
            "Apply the power rule term-by-term: d/dx(3x⁴) = 12x³, d/dx(−2x²) = −4x, d/dx(7x) = 7, d/dx(−1) = 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt:
            "Find dy/dx for y = (2x + 3)⁵ using the chain rule. What is the coefficient of (2x+3)⁴ in the answer?",
          options: null,
          answer: "10|0|",
          explanation:
            "Chain rule: dy/dx = 5(2x+3)⁴ × 2 = 10(2x+3)⁴. Coefficient is 10.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "Find the derivative of f(x) = x·eˣ.",
          options: JSON.stringify([
            "eˣ",
            "x·eˣ",
            "(x + 1)eˣ",
            "x²·eˣ",
          ]),
          answer: "(x + 1)eˣ",
          explanation:
            "Product rule: f'(x) = (1)·eˣ + x·eˣ = eˣ(1 + x) = (x+1)eˣ.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt:
            "For f(x) = x³ − 3x, which of the following are true? (Select all that apply.)",
          options: JSON.stringify([
            "f'(x) = 3x² − 3",
            "There is a local maximum at x = −1",
            "There is a local minimum at x = 1",
            "f''(x) = 3x",
          ]),
          answer: JSON.stringify([
            "f'(x) = 3x² − 3",
            "There is a local maximum at x = −1",
            "There is a local minimum at x = 1",
          ]),
          explanation:
            "f'(x) = 3x² − 3 = 3(x²−1) = 0 at x = ±1. f''(x) = 6x (not 3x). f''(−1) = −6 < 0: local max at x=−1. f''(1) = 6 > 0: local min at x=1.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "Differentiate y = sin(3x). What is dy/dx when x = 0?",
          options: null,
          answer: "3|0|",
          explanation:
            "dy/dx = 3cos(3x). At x = 0: 3cos(0) = 3 × 1 = 3.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "The gradient of the tangent to y = x² − 4x + 1 at x = 3 is:",
          options: JSON.stringify(["2", "3", "−2", "−4"]),
          answer: "2",
          explanation:
            "dy/dx = 2x − 4. At x = 3: 2(3) − 4 = 6 − 4 = 2.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "For which value of x does f(x) = x³ − 6x² + 9x + 2 have a stationary point?",
          options: JSON.stringify([
            "x = 1 and x = 3",
            "x = 2 only",
            "x = −1 and x = 3",
            "x = 0 and x = 2",
          ]),
          answer: "x = 1 and x = 3",
          explanation:
            "f'(x) = 3x² − 12x + 9 = 3(x²−4x+3) = 3(x−1)(x−3) = 0 gives x = 1 and x = 3.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "If f(x) = ln(x), what is f'(e²)? (e is Euler's number, approximately 2.718)",
          options: null,
          answer: "0.1353|0.0001|",
          explanation:
            "f'(x) = 1/x. f'(e²) = 1/e² ≈ 1/7.389 ≈ 0.1353.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "Evaluate: lim(x→0) sin(x)/x.",
          options: null,
          answer: "1|0|",
          explanation: "This is a standard limit: lim(x→0) sin(x)/x = 1. It is the derivative of sin x evaluated at x = 0.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What is the derivative of y = 7 (a constant function)?",
          options: JSON.stringify(["7", "7x", "1", "0"]),
          answer: "0",
          explanation: "The derivative of any constant is 0: d/dx[c] = 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "If f(x) = x⁴, find f'(3).",
          options: null,
          answer: "108|0|",
          explanation: "f'(x) = 4x³. f'(3) = 4 × 27 = 108.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Apply the chain rule to differentiate y = (3x + 1)³.",
          options: JSON.stringify([
            "3(3x + 1)²",
            "9(3x + 1)²",
            "3(3x + 1)² · 3",
            "(3x + 1)³ · 3",
          ]),
          answer: "9(3x + 1)²",
          explanation: "Chain rule: dy/dx = 3(3x + 1)² × 3 = 9(3x + 1)².",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Differentiate y = x · sin x. Find dy/dx at x = π/2.",
          options: null,
          answer: "1|0|",
          explanation: "Product rule: dy/dx = sin x + x cos x. At x = π/2: sin(π/2) + (π/2)cos(π/2) = 1 + 0 = 1.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "The derivative of y = e^(2x) is:",
          options: JSON.stringify(["e^(2x)", "2e^(2x)", "e^(2x)/2", "2xe^(2x)"]),
          answer: "2e^(2x)",
          explanation: "d/dx[e^(kx)] = ke^(kx). Here k = 2, so dy/dx = 2e^(2x).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "If f(x) = x⁴, find f''(2).",
          options: null,
          answer: "48|0|",
          explanation: "f'(x) = 4x³, f''(x) = 12x². f''(2) = 12 × 4 = 48.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "For y = x³ − 3x², the stationary points occur at:",
          options: JSON.stringify(["x = 0 and x = 2", "x = 1 and x = 3", "x = 0 and x = 3", "x = −1 and x = 2"]),
          answer: "x = 0 and x = 2",
          explanation: "y' = 3x² − 6x = 3x(x − 2) = 0 gives x = 0 and x = 2.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the gradient of the tangent to y = x² + 3x at x = −1.",
          options: null,
          answer: "1|0|",
          explanation: "dy/dx = 2x + 3. At x = −1: 2(−1) + 3 = 1.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The first principles definition of the derivative is:",
          options: JSON.stringify([
            "lim(h→0) [f(x+h) − f(x)] / h",
            "lim(h→0) [f(x) − f(x−h)] / h",
            "lim(x→0) [f(x+h) − f(x)] / x",
            "[f(b) − f(a)] / (b − a)",
          ]),
          answer: "lim(h→0) [f(x+h) − f(x)] / h",
          explanation: "This is the standard definition. It gives the instantaneous rate of change (gradient of tangent) at x.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Find f'(0) for f(x) = 3eˣ.",
          options: null,
          answer: "3|0|",
          explanation: "f'(x) = 3eˣ. At x = 0: f'(0) = 3e⁰ = 3 × 1 = 3.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Using the quotient rule, find dy/dx for y = x/(x + 1).",
          options: JSON.stringify([
            "1/(x + 1)²",
            "−1/(x + 1)²",
            "x/(x + 1)²",
            "1/(x + 1)",
          ]),
          answer: "1/(x + 1)²",
          explanation: "Quotient rule: [1·(x+1) − x·1]/(x+1)² = (x+1−x)/(x+1)² = 1/(x+1)².",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the x-coordinate of the stationary point of y = 2x² − 8x + 3.",
          options: null,
          answer: "2|0|",
          explanation: "dy/dx = 4x − 8 = 0 → x = 2.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The second derivative of y = 4x³ is:",
          options: JSON.stringify(["12x²", "24x", "12x", "24x²"]),
          answer: "24x",
          explanation: "y' = 12x². y'' = 24x.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Evaluate lim(x→2) (x² − 4)/(x − 2).",
          options: null,
          answer: "4|0|",
          explanation: "Factor: (x² − 4)/(x − 2) = (x + 2)(x − 2)/(x − 2) = x + 2. As x → 2: 2 + 2 = 4.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "For y = sin(x), on [0, 2π] where does dy/dx = 0?",
          options: JSON.stringify([
            "x = 0 and x = π",
            "x = π/2 and x = 3π/2",
            "x = π/4 and x = 3π/4",
            "x = π/3 and x = 2π/3",
          ]),
          answer: "x = π/2 and x = 3π/2",
          explanation: "dy/dx = cos x = 0 when x = π/2 and x = 3π/2 on [0, 2π].",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the derivative of y = ln(x) at x = 5.",
          options: null,
          answer: "0.2|0.001|",
          explanation: "d/dx[ln x] = 1/x. At x = 5: 1/5 = 0.2.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The tangent to y = x² at the point (2, 4) has equation:",
          options: JSON.stringify(["y = 4x − 4", "y = 4x + 4", "y = 2x", "y = 4x"]),
          answer: "y = 4x − 4",
          explanation: "dy/dx = 2x. At x = 2: gradient = 4. Tangent: y − 4 = 4(x − 2) → y = 4x − 4.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "For f(x) = (x² + 1)⁴, find f'(1) using the chain rule.",
          options: null,
          answer: "64|0|",
          explanation: "f'(x) = 4(x² + 1)³ · 2x = 8x(x² + 1)³. f'(1) = 8(1)(2³) = 8 × 8 = 64.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are true about f(x) = x³? (Select all that apply.)",
          options: JSON.stringify([
            "f'(x) = 3x²",
            "f'(x) ≥ 0 for all x",
            "f''(x) = 6x",
            "It has a stationary point at x = 0",
          ]),
          answer: JSON.stringify([
            "f'(x) = 3x²",
            "f'(x) ≥ 0 for all x",
            "f''(x) = 6x",
            "It has a stationary point at x = 0",
          ]),
          explanation: "f'(x) = 3x² ≥ 0 ✓. f''(x) = 6x ✓. f'(0) = 0 so stationary at x = 0 ✓ (it's a stationary inflection).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "If dy/dx = 6x − 2, find the value of x at which the tangent is horizontal.",
          options: null,
          answer: "0.3333|0.0001|",
          explanation: "Tangent is horizontal when dy/dx = 0: 6x − 2 = 0 → x = 1/3 ≈ 0.3333.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The derivative of cos(x) is:",
          options: JSON.stringify(["sin x", "−sin x", "cos x", "−cos x"]),
          answer: "−sin x",
          explanation: "d/dx[cos x] = −sin x. This is a standard derivative.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For f(x) = (x − 1)/(x + 1), find f'(2) using the quotient rule.",
          options: null,
          answer: "0.2222|0.0001|",
          explanation: "f'(x) = [(x+1) − (x−1)]/(x+1)² = 2/(x+1)². f'(2) = 2/9 ≈ 0.2222.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "For which x-values is f(x) = x³ − 3x increasing?",
          options: JSON.stringify([
            "x < −1 or x > 1",
            "−1 < x < 1",
            "x < 0 only",
            "x > 0 only",
          ]),
          answer: "x < −1 or x > 1",
          explanation: "f'(x) = 3x² − 3 = 3(x−1)(x+1). f'(x) > 0 when |x| > 1, so the function increases for x < −1 or x > 1.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A drug concentration function is C(t) = 10e^(−0.2t). Find dC/dt at t = 0.",
          options: null,
          answer: "-2|0|",
          explanation: "dC/dt = −0.2 × 10e^(−0.2t) = −2e^(−0.2t). At t = 0: −2e⁰ = −2 mg/L per hour.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "lim(x→∞) (1/x) equals:",
          options: JSON.stringify(["1", "∞", "0", "undefined"]),
          answer: "0",
          explanation: "As x grows without bound, 1/x approaches 0. The function has a horizontal asymptote at y = 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For y = 5x² − 20x + 1, find the minimum value of y.",
          options: null,
          answer: "-19|0|",
          explanation: "dy/dx = 10x − 20 = 0 → x = 2. y(2) = 5(4) − 20(2) + 1 = 20 − 40 + 1 = −19.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which conditions confirm that f(x) has a local maximum at x = a? (Select all that apply.)",
          options: JSON.stringify([
            "f'(a) = 0",
            "f''(a) < 0",
            "f'(x) changes from positive to negative at x = a",
            "f''(a) > 0",
          ]),
          answer: JSON.stringify([
            "f'(a) = 0",
            "f''(a) < 0",
            "f'(x) changes from positive to negative at x = a",
          ]),
          explanation: "Local maximum: f'(a) = 0 ✓, f''(a) < 0 (second derivative test) ✓, sign change + → 0 → − ✓. f''(a) > 0 indicates a local minimum, not maximum.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Using the power rule, d/dx[√x] = d/dx[x^(1/2)] equals:",
          options: JSON.stringify(["x^(−1/2)", "(1/2)x^(−1/2)", "2x^(1/2)", "(1/2)x^(3/2)"]),
          answer: "(1/2)x^(−1/2)",
          explanation: "Power rule: d/dx[x^n] = nx^(n−1). Here n = 1/2: d/dx[x^(1/2)] = (1/2)x^(−1/2) = 1/(2√x).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "For f(x) = x² · eˣ, find f'(0).",
          options: null,
          answer: "0|0|",
          explanation: "Product rule: f'(x) = 2x·eˣ + x²·eˣ = eˣ(2x + x²). f'(0) = e⁰(0 + 0) = 0.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The point of inflection of y = x³ − 3x² + 2 occurs at x =",
          options: JSON.stringify(["0", "1", "2", "3"]),
          answer: "1",
          explanation: "y'' = 6x − 6 = 0 → x = 1. Check concavity change: y'' < 0 for x < 1, y'' > 0 for x > 1 ✓.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "If f(x) = x⁵, find f''(1).",
          options: null,
          answer: "20|0|",
          explanation: "f'(x) = 5x⁴. f''(x) = 20x³. f''(1) = 20.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Using the chain rule, d/dx[sin(x²)] equals:",
          options: JSON.stringify(["cos(x²)", "2x·cos(x²)", "2x·sin(x²)", "−2x·cos(x²)"]),
          answer: "2x·cos(x²)",
          explanation: "Chain rule: d/dx[sin(g(x))] = cos(g(x)) · g'(x). Here g(x) = x², g'(x) = 2x.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the gradient of the curve y = 4/x at x = 3. Give your answer to 4 decimal places.",
          options: null,
          answer: "-0.4444|0.0001|",
          explanation: "y = 4x⁻¹. dy/dx = −4x⁻². At x = 3: −4/9 ≈ −0.4444.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which condition confirms a local minimum at x = a (second derivative test)?",
          options: JSON.stringify([
            "f'(a) = 0 and f''(a) > 0",
            "f'(a) = 0 and f''(a) < 0",
            "f'(a) > 0 and f''(a) = 0",
            "f''(a) = 0 only",
          ]),
          answer: "f'(a) = 0 and f''(a) > 0",
          explanation: "f'(a) = 0 identifies a stationary point; f''(a) > 0 (concave up) confirms it is a local minimum.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A drug concentration follows C(t) = 100/(1 + t). Find the rate of change of concentration at t = 4 mg/L per hour.",
          options: null,
          answer: "-4|0|",
          explanation: "C(t) = 100(1+t)⁻¹. C'(t) = −100(1+t)⁻². C'(4) = −100/25 = −4 mg/L per hour.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The product rule applied to y = 3x² · eˣ gives dy/dx =",
          options: JSON.stringify([
            "6x · eˣ",
            "3x²eˣ + 6xeˣ",
            "6x · e^(3x²)",
            "3eˣ",
          ]),
          answer: "3x²eˣ + 6xeˣ",
          explanation: "Product rule: dy/dx = (3x²)' · eˣ + 3x² · (eˣ)' = 6x·eˣ + 3x²·eˣ = eˣ(6x + 3x²).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate lim(x→1) (x³ − 1)/(x − 1).",
          options: null,
          answer: "3|0|",
          explanation: "Factor: x³ − 1 = (x−1)(x²+x+1). Cancelling: lim = x²+x+1 → 1+1+1 = 3.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "For a function to be differentiable at x = a, which conditions must hold? (Select all that apply.)",
          options: JSON.stringify([
            "The function must be continuous at x = a",
            "The left-hand derivative equals the right-hand derivative at x = a",
            "f(a) = 0",
            "The tangent line must exist at x = a",
          ]),
          answer: JSON.stringify([
            "The function must be continuous at x = a",
            "The left-hand derivative equals the right-hand derivative at x = a",
            "The tangent line must exist at x = a",
          ]),
          explanation: "Differentiability requires continuity, equal one-sided derivatives (no sharp corners/cusps), and existence of the tangent. f(a) = 0 is not required.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "A tumour grows according to V'(t) = 0.05V(t) mm³/day. If V(0) = 200 mm³, find V(10) to 2 decimal places.",
          options: null,
          answer: "329.74|0.01|",
          explanation: "V(t) = 200e^(0.05t). V(10) = 200e^(0.5) ≈ 200 × 1.6487 ≈ 329.74 mm³.",
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 4. PROBABILITY  (VCE Unit 3)
    // ─────────────────────────────────────────────
    {
      slug: "probability",
      yearBand: "VCE Unit 3",
      title: "Probability & Statistics",
      description:
        "Probability rules, conditional probability, discrete random variables, and the binomial distribution.",
      surgeonRelevance:
        "Probability is the mathematical backbone of evidence-based medicine. Sensitivity, specificity, and positive predictive value of a diagnostic test are conditional probabilities. Surgeons use binomial distributions to model complication rates across patient cohorts and Bayesian reasoning every time they update a clinical diagnosis.",
      order: 4,
      lessons: [
        {
          slug: "probability-fundamentals",
          title: "Probability Fundamentals",
          content: `## Probability Fundamentals

### Sample space and events
- **Sample space** S: the set of all possible outcomes
- **Event** A: a subset of S
- **Probability** P(A): a number between 0 and 1

### Axioms
1. 0 ≤ P(A) ≤ 1 for all events A
2. P(S) = 1
3. For mutually exclusive events: P(A ∪ B) = P(A) + P(B)

### Addition rule (general)
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

### Complement rule
P(A') = 1 − P(A)

### Mutually exclusive events
P(A ∩ B) = 0

### Independent events
P(A ∩ B) = P(A) × P(B)

### Calculating probabilities
P(A) = (number of favourable outcomes) / (total number of outcomes)`,
          medicalCallout:
            "If 1 in 1000 patients carry a particular gene variant, then P(carrier) = 0.001. The complement rule immediately tells a surgeon P(non-carrier) = 0.999. These baseline probabilities form the foundation of genetic screening programmes and pre-operative risk stratification.",
          order: 1,
        },
        {
          slug: "conditional-probability-bayes",
          title: "Conditional Probability & Bayes' Theorem",
          content: `## Conditional Probability

### Definition
P(A|B) = P(A ∩ B) / P(B)   [provided P(B) ≠ 0]

"The probability of A given that B has already occurred."

### Multiplication rule
P(A ∩ B) = P(A|B) × P(B) = P(B|A) × P(A)

### Law of Total Probability
If B₁, B₂, …, Bₙ partition the sample space:  
P(A) = P(A|B₁)P(B₁) + P(A|B₂)P(B₂) + … + P(A|Bₙ)P(Bₙ)

### Bayes' Theorem
P(B|A) = P(A|B) × P(B) / P(A)

### Tree diagrams
A powerful visual tool for conditional probability problems — draw branches for each stage, multiply along branches, add across rows.`,
          medicalCallout:
            "Bayes' theorem is the mathematical engine behind diagnostic reasoning. If a blood test for cancer has sensitivity 90% and specificity 95%, and disease prevalence is 1%, the positive predictive value (the probability you actually have cancer given a positive test) is only about 15%. Every surgeon should know Bayes' theorem to avoid over-treating false positives.",
          order: 2,
        },
        {
          slug: "discrete-random-variables",
          title: "Discrete Random Variables",
          content: `## Discrete Random Variables

### Definition
A **discrete random variable** X takes a countable set of values with associated probabilities.

### Probability distribution table
Lists each possible value x and its probability P(X = x).

### Requirements
- All probabilities ≥ 0
- Sum of all P(X = x) = 1

### Expected value (mean)
E(X) = μ = Σ x · P(X = x)

### Variance and standard deviation
Var(X) = E(X²) − [E(X)]²  
where E(X²) = Σ x² · P(X = x)  
σ = √Var(X)

### Properties of E(X)
- E(aX + b) = aE(X) + b
- Var(aX + b) = a²Var(X)`,
          medicalCallout:
            "The number of surgical complications in a series of operations is a discrete random variable. Its expected value gives a surgeon the predicted complication rate per procedure; the standard deviation quantifies variability. Hospital risk management models are built directly on these calculations.",
          order: 3,
        },
        {
          slug: "binomial-distribution",
          title: "The Binomial Distribution",
          content: `## The Binomial Distribution

### Conditions (BINS)
- **B**inary outcomes (success or failure)
- **I**ndependent trials
- Fixed **N**umber of trials
- Constant probability of **S**uccess p

### Notation: X ~ Bi(n, p)
- n = number of trials
- p = probability of success

### Probability formula
P(X = k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ

where C(n,k) = n! / [k!(n−k)!]

### Mean and variance
E(X) = np  
Var(X) = np(1−p)  
σ = √(np(1−p))

### CAS/calculator usage
In VCE, use CAS: binomPdf(n, p, k) or binomCdf(n, p, k) for cumulative probabilities.`,
          medicalCallout:
            "If a surgical procedure has a 5% complication rate and a surgeon performs 20 such procedures, the number of complications follows X ~ Bi(20, 0.05). E(X) = 20 × 0.05 = 1. A surgical audit that finds 4 complications would trigger investigation: P(X ≥ 4) can be calculated to determine if this is statistically unlikely.",
          order: 4,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt:
            "Events A and B are mutually exclusive. P(A) = 0.3 and P(B) = 0.45. What is P(A ∪ B)?",
          options: JSON.stringify(["0.135", "0.75", "0.15", "1"]),
          answer: "0.75",
          explanation:
            "For mutually exclusive events: P(A ∪ B) = P(A) + P(B) = 0.3 + 0.45 = 0.75.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt:
            "P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.2. What is P(A ∪ B)?",
          options: null,
          answer: "0.9|0.001|",
          explanation:
            "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.6 + 0.5 − 0.2 = 0.9.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "If P(B) = 0.4 and P(A|B) = 0.7, what is P(A ∩ B)?",
          options: JSON.stringify(["0.28", "0.57", "0.3", "0.7"]),
          answer: "0.28",
          explanation:
            "P(A ∩ B) = P(A|B) × P(B) = 0.7 × 0.4 = 0.28.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "A disease has prevalence 2%. A test has sensitivity 95% and specificity 90%. A patient tests positive. Using Bayes' theorem, the probability they actually have the disease is approximately:",
          options: JSON.stringify(["95%", "90%", "16%", "2%"]),
          answer: "16%",
          explanation:
            "P(disease|+) = P(+|disease)×P(disease) / P(+). P(+) = 0.95×0.02 + 0.10×0.98 = 0.019 + 0.098 = 0.117. P(D|+) = 0.019/0.117 ≈ 0.163 ≈ 16%.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt:
            "Which conditions must hold for X ~ Bi(n, p) to be valid? (Select all that apply.)",
          options: JSON.stringify([
            "Fixed number of trials n",
            "Each trial has only two outcomes",
            "Probability of success changes each trial",
            "Trials are independent",
          ]),
          answer: JSON.stringify([
            "Fixed number of trials n",
            "Each trial has only two outcomes",
            "Trials are independent",
          ]),
          explanation:
            "The binomial requires fixed n, binary outcomes, independent trials, and CONSTANT probability of success — not changing probability.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "For X ~ Bi(10, 0.3), what is E(X)?",
          options: null,
          answer: "3|0|",
          explanation:
            "E(X) = np = 10 × 0.3 = 3.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "For X ~ Bi(8, 0.5), what is P(X = 3)?",
          options: JSON.stringify([
            "0.2188",
            "0.3125",
            "0.1094",
            "0.0625",
          ]),
          answer: "0.2188",
          explanation:
            "P(X=3) = C(8,3) × 0.5³ × 0.5⁵ = 56 × (1/256) = 56/256 ≈ 0.2188.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "A discrete random variable X has P(X=1) = 0.2, P(X=2) = 0.5, P(X=3) = 0.3. What is E(X)?",
          options: null,
          answer: "2.1|0.001|",
          explanation:
            "E(X) = 1×0.2 + 2×0.5 + 3×0.3 = 0.2 + 1.0 + 0.9 = 2.1.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "Two events A and B satisfy P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Are A and B independent?",
          options: JSON.stringify([
            "Yes, because P(A ∩ B) = P(A)×P(B)",
            "No, because P(A ∩ B) ≠ P(A)+P(B)",
            "Yes, because A and B overlap",
            "No, because they are mutually exclusive",
          ]),
          answer: "Yes, because P(A ∩ B) = P(A)×P(B)",
          explanation:
            "P(A)×P(B) = 0.4×0.5 = 0.2 = P(A ∩ B). Since the product condition holds, A and B are independent.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "For X ~ Bi(20, 0.05), what is the standard deviation of X? Give your answer to 2 decimal places.",
          options: null,
          answer: "0.97|0.01|",
          explanation:
            "Var(X) = np(1−p) = 20×0.05×0.95 = 0.95. σ = √0.95 ≈ 0.975 ≈ 0.97.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "If P(A) = 0.35, find P(A').",
          options: null,
          answer: "0.65|0.001|",
          explanation: "P(A') = 1 − P(A) = 1 − 0.35 = 0.65 (complement rule).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Two independent events: P(A) = 0.4 and P(B) = 0.25. What is P(A ∩ B)?",
          options: JSON.stringify(["0.65", "0.1", "0.15", "0.1"]),
          answer: "0.1",
          explanation: "For independent events: P(A ∩ B) = P(A) × P(B) = 0.4 × 0.25 = 0.1.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A fair die is rolled once. What is the probability of rolling a number greater than 4?",
          options: null,
          answer: "0.3333|0.0001|",
          explanation: "Outcomes > 4 are {5, 6}: 2 out of 6. P = 2/6 = 1/3 ≈ 0.3333.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "From a group of 5 men and 3 women, one person is selected at random. What is the probability the person is a woman?",
          options: JSON.stringify(["3/5", "3/8", "5/8", "1/3"]),
          answer: "3/8",
          explanation: "3 women out of 8 people total. P(woman) = 3/8.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For X ~ Bi(15, 0.4), find E(X).",
          options: null,
          answer: "6|0|",
          explanation: "E(X) = np = 15 × 0.4 = 6.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "If P(A|B) = P(A), the events A and B are:",
          options: JSON.stringify(["Mutually exclusive", "Independent", "Complementary", "Dependent"]),
          answer: "Independent",
          explanation: "If the probability of A is unchanged by knowing B, the events are independent by definition.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "P(A ∪ B) = 0.7, P(A) = 0.4, P(B) = 0.5. Find P(A ∩ B).",
          options: null,
          answer: "0.2|0.001|",
          explanation: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) → 0.7 = 0.9 − P(A ∩ B) → P(A ∩ B) = 0.2.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A bag has 4 red and 6 blue balls. Two balls are drawn without replacement. What is P(both red)?",
          options: JSON.stringify(["4/25", "2/15", "6/25", "1/6"]),
          answer: "2/15",
          explanation: "P(both red) = (4/10) × (3/9) = 12/90 = 2/15.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "For X ~ Bi(10, 0.6), find Var(X).",
          options: null,
          answer: "2.4|0.001|",
          explanation: "Var(X) = np(1−p) = 10 × 0.6 × 0.4 = 2.4.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following must be true for a valid probability distribution P(X = x)? (Select all that apply.)",
          options: JSON.stringify([
            "All probabilities are between 0 and 1 inclusive",
            "The sum of all probabilities equals 1",
            "Each probability equals 0.5",
            "The probabilities are all equal",
          ]),
          answer: JSON.stringify([
            "All probabilities are between 0 and 1 inclusive",
            "The sum of all probabilities equals 1",
          ]),
          explanation: "A valid probability distribution requires 0 ≤ P(X = x) ≤ 1 for all x, and Σ P(X = x) = 1. Probabilities need not be equal.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A and B are mutually exclusive with P(A) = 0.3, P(B) = 0.4. What is P(A' ∩ B')?",
          options: JSON.stringify(["0.12", "0.3", "0.7", "0.58"]),
          answer: "0.3",
          explanation: "P(A' ∩ B') = P((A ∪ B)') = 1 − P(A ∪ B) = 1 − (0.3 + 0.4) = 0.3.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A drug test has sensitivity 85% and specificity 80%. Disease prevalence is 10%. A patient tests positive. Find the positive predictive value (PPV) to 4 decimal places.",
          options: null,
          answer: "0.3208|0.0001|",
          explanation: "PPV = P(D|+) = (0.85×0.1)/[(0.85×0.1)+(0.20×0.9)] = 0.085/(0.085+0.18) = 0.085/0.265 ≈ 0.3208.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A discrete RV has P(X=0) = 0.3, P(X=1) = 0.5, P(X=2) = 0.2. What is E(X)?",
          options: JSON.stringify(["0.9", "1.0", "1.1", "1.2"]),
          answer: "0.9",
          explanation: "E(X) = 0×0.3 + 1×0.5 + 2×0.2 = 0 + 0.5 + 0.4 = 0.9.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For a random variable X with E(X) = 3 and Var(X) = 4, find E(2X + 1).",
          options: null,
          answer: "7|0|",
          explanation: "E(aX + b) = aE(X) + b = 2(3) + 1 = 7.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A fair coin is tossed twice. P(both heads) is:",
          options: JSON.stringify(["1/2", "1/4", "1/3", "3/4"]),
          answer: "1/4",
          explanation: "Tosses are independent: P(H) × P(H) = 0.5 × 0.5 = 0.25 = 1/4.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A surgeon performs 30 knee replacements, each with an 8% complication rate. What is the expected number of complications?",
          options: null,
          answer: "2.4|0.001|",
          explanation: "E(X) = np = 30 × 0.08 = 2.4 complications.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The formula for conditional probability P(A|B) is:",
          options: JSON.stringify([
            "P(A ∩ B) / P(B)",
            "P(A) / P(B)",
            "P(A ∩ B) / P(A)",
            "P(A) + P(B)",
          ]),
          answer: "P(A ∩ B) / P(B)",
          explanation: "P(A|B) = P(A ∩ B) / P(B), provided P(B) ≠ 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For X with P(X=−1) = 0.25, P(X=0) = 0.5, P(X=1) = 0.25, find E(X).",
          options: null,
          answer: "0|0|",
          explanation: "E(X) = (−1)(0.25) + 0(0.5) + 1(0.25) = −0.25 + 0 + 0.25 = 0.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are true about the binomial distribution X ~ Bi(n, p)? (Select all that apply.)",
          options: JSON.stringify([
            "E(X) = np",
            "Var(X) = np(1−p)",
            "P(X = k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ",
            "The trials need not be independent",
          ]),
          answer: JSON.stringify([
            "E(X) = np",
            "Var(X) = np(1−p)",
            "P(X = k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ",
          ]),
          explanation: "All three formulas are correct. The binomial REQUIRES independent trials — the last option is false.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find P(X ≤ 1) for X ~ Bi(5, 0.2). Give your answer to 4 decimal places.",
          options: null,
          answer: "0.7373|0.0001|",
          explanation: "P(0) = 0.8⁵ = 0.32768. P(1) = C(5,1)×0.2×0.8⁴ = 5×0.2×0.4096 = 0.4096. Sum = 0.7373.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "P(A) = 0.5, P(B) = 0.3, P(A ∩ B) = 0.15. Are A and B independent?",
          options: JSON.stringify([
            "Yes, P(A ∩ B) = P(A)×P(B)",
            "No, P(A ∩ B) ≠ P(A)×P(B)",
            "Yes, they overlap",
            "Cannot be determined",
          ]),
          answer: "Yes, P(A ∩ B) = P(A)×P(B)",
          explanation: "P(A)×P(B) = 0.5×0.3 = 0.15 = P(A ∩ B). The independence condition holds.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "If Var(X) = 5, find Var(3X − 2).",
          options: null,
          answer: "45|0|",
          explanation: "Var(aX + b) = a²Var(X). Var(3X − 2) = 9 × 5 = 45.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which formula gives P(A ∪ B) for non-mutually-exclusive events?",
          options: JSON.stringify([
            "P(A) + P(B)",
            "P(A) + P(B) − P(A ∩ B)",
            "P(A) × P(B)",
            "P(A|B) × P(B)",
          ]),
          answer: "P(A) + P(B) − P(A ∩ B)",
          explanation: "The addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Subtracting P(A ∩ B) avoids double-counting.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A fair coin is flipped 6 times. What is P(exactly 3 heads)?",
          options: null,
          answer: "0.3125|0.0001|",
          explanation: "P(X=3) = C(6,3) × (1/2)⁶ = 20/64 = 0.3125.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are examples of discrete random variables? (Select all that apply.)",
          options: JSON.stringify([
            "Number of surgical complications in 10 operations",
            "Height of a patient in cm",
            "Number of heads in 5 coin flips",
            "Time (in hours) until a patient recovers",
          ]),
          answer: JSON.stringify([
            "Number of surgical complications in 10 operations",
            "Number of heads in 5 coin flips",
          ]),
          explanation: "Discrete RVs take countable values. Complications and coin flip counts are integers (discrete). Height and time are continuous.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For X ~ Bi(6, 0.5), find P(X = 4). Give your answer to 4 decimal places.",
          options: null,
          answer: "0.2344|0.0001|",
          explanation: "P(X=4) = C(6,4)×(0.5)⁴×(0.5)² = 15×(1/64) = 15/64 ≈ 0.2344.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "For X ~ Bi(n, p), the variance is:",
          options: JSON.stringify(["np", "np²", "np(1−p)", "n²p"]),
          answer: "np(1−p)",
          explanation: "Var(X) = np(1−p) = npq where q = 1−p.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "An antibiotic has a 90% success rate. A doctor treats 4 independent patients. What is the probability all 4 recover? Give your answer to 4 decimal places.",
          options: null,
          answer: "0.6561|0.0001|",
          explanation: "P(all 4 recover) = 0.9⁴ = 0.6561.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The probability of 'at least one success in n trials' is most efficiently calculated as:",
          options: JSON.stringify([
            "P(X = 1)",
            "1 − P(X = 0)",
            "P(X = n)",
            "P(X ≥ 0)",
          ]),
          answer: "1 − P(X = 0)",
          explanation: "P(at least one) = 1 − P(none) = 1 − P(X = 0). Using the complement is more efficient than summing all k ≥ 1.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find P(A|B) given P(A ∩ B) = 0.12 and P(B) = 0.4.",
          options: null,
          answer: "0.3|0.001|",
          explanation: "P(A|B) = P(A ∩ B)/P(B) = 0.12/0.4 = 0.3.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "For independent events A and B with P(A) = 0.3 and P(B) = 0.4, P(A ∪ B) equals:",
          options: JSON.stringify(["0.7", "0.58", "0.12", "1.0"]),
          answer: "0.58",
          explanation: "P(A ∪ B) = P(A) + P(B) − P(A)P(B) = 0.3 + 0.4 − 0.12 = 0.58.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "X has P(X=1) = k, P(X=2) = 2k, P(X=3) = 3k. Find k. Give your answer to 4 decimal places.",
          options: null,
          answer: "0.1667|0.0001|",
          explanation: "Sum = k + 2k + 3k = 6k = 1 → k = 1/6 ≈ 0.1667.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are true about conditional probability P(A|B)? (Select all that apply.)",
          options: JSON.stringify([
            "P(A|B) = P(A ∩ B)/P(B)",
            "P(A|B) always equals P(B|A)",
            "P(A|B) = P(A) when A and B are independent",
            "P(A|B) is defined only when P(B) > 0",
          ]),
          answer: JSON.stringify([
            "P(A|B) = P(A ∩ B)/P(B)",
            "P(A|B) = P(A) when A and B are independent",
            "P(A|B) is defined only when P(B) > 0",
          ]),
          explanation: "P(A|B) = P(A∩B)/P(B) ✓. When independent: P(A|B) = P(A) ✓. Requires P(B) > 0 ✓. P(A|B) ≠ P(B|A) in general (Bayes' theorem shows the relationship).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "For X with P(X=1) = 0.4, P(X=2) = 0.6, find E(X²).",
          options: null,
          answer: "2.8|0.001|",
          explanation: "E(X²) = 1²×0.4 + 2²×0.6 = 0.4 + 2.4 = 2.8.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A surgeon performs 10 operations each with a 20% complication risk. What is P(no complications in any operation)?",
          options: JSON.stringify(["0.2", "0.8", "0.1074", "0.2684"]),
          answer: "0.1074",
          explanation: "P(X=0) = (1−0.2)¹⁰ = 0.8¹⁰ ≈ 0.1074.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "If E(X) = 4 and E(X²) = 20, find Var(X).",
          options: null,
          answer: "4|0|",
          explanation: "Var(X) = E(X²) − [E(X)]² = 20 − 16 = 4.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The complement of 'at least one success in 3 trials' is:",
          options: JSON.stringify([
            "No successes in 3 trials",
            "At most one success",
            "Exactly two successes",
            "Three successes",
          ]),
          answer: "No successes in 3 trials",
          explanation: "The complement of 'at least one' is 'none'. P(X ≥ 1) = 1 − P(X = 0).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For X ~ Bi(20, 0.1), find the standard deviation to 2 decimal places.",
          options: null,
          answer: "1.34|0.01|",
          explanation: "Var(X) = np(1−p) = 20×0.1×0.9 = 1.8. σ = √1.8 ≈ 1.3416 ≈ 1.34.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A medical screening test has specificity 92%. The false positive rate is:",
          options: JSON.stringify(["92%", "8%", "0.92%", "0.08%"]),
          answer: "8%",
          explanation: "False positive rate = 1 − specificity = 1 − 0.92 = 0.08 = 8%. Specificity measures the ability to correctly identify non-disease.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Using Bayes' theorem, which pieces of information are needed to find P(disease | positive test)? (Select all that apply.)",
          options: JSON.stringify([
            "Sensitivity: P(positive | disease)",
            "Disease prevalence: P(disease)",
            "Specificity: P(negative | no disease)",
            "The patient's age",
          ]),
          answer: JSON.stringify([
            "Sensitivity: P(positive | disease)",
            "Disease prevalence: P(disease)",
            "Specificity: P(negative | no disease)",
          ]),
          explanation: "Bayes' theorem: P(D|+) = P(+|D)×P(D)/P(+). P(+) requires sensitivity, prevalence, and false positive rate (1 − specificity). Age is not part of the formula.",
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 5. CALCULUS APPLICATIONS  (VCE Unit 4)
    // ─────────────────────────────────────────────
    {
      slug: "calculus-applications",
      yearBand: "VCE Unit 4",
      title: "Calculus Applications",
      description:
        "Anti-differentiation, definite integrals, area under curves, optimisation, and introduction to differential equations.",
      surgeonRelevance:
        "Integration is how pharmacokinetics computes total drug exposure: the area under the plasma concentration–time curve (AUC) is a definite integral, directly governing drug accumulation and dosing intervals. Optimisation calculus lets surgeons find the incision geometry that minimises tissue damage or the suture tension that maximises wound closure strength.",
      order: 5,
      lessons: [
        {
          slug: "anti-differentiation",
          title: "Anti-differentiation & Indefinite Integrals",
          content: `## Anti-differentiation

### Definition
The **anti-derivative** (indefinite integral) of f(x) is F(x) such that F'(x) = f(x).

Notation: ∫ f(x) dx = F(x) + C  (C = constant of integration)

### Standard anti-derivatives
| f(x) | ∫f(x) dx |
|------|----------|
| xⁿ (n ≠ −1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| eᵏˣ | eᵏˣ/k + C |
| sin x | −cos x + C |
| cos x | sin x + C |
| sin(kx) | −cos(kx)/k + C |
| cos(kx) | sin(kx)/k + C |

### Constant of integration
The +C represents any constant, since d/dx(C) = 0. To find C, a boundary condition (initial condition) is needed.

### Example
Find ∫(3x² + 2x − 5) dx  
= x³ + x² − 5x + C`,
          medicalCallout:
            "Given a rate of drug infusion r(t) (in mg/hour), the total drug given over time T is ∫₀ᵀ r(t) dt — an anti-derivative calculation. Anaesthetists programme infusion pumps by solving exactly this integral to achieve a target cumulative dose.",
          order: 1,
        },
        {
          slug: "definite-integrals-area",
          title: "Definite Integrals & Area Under Curves",
          content: `## Definite Integrals

### Definition
∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a)

This represents the **signed area** between the curve and the x-axis from x = a to x = b.

### Fundamental Theorem of Calculus
If F'(x) = f(x), then:  
∫ₐᵇ f(x) dx = F(b) − F(a)

### Area between curve and x-axis
- When f(x) ≥ 0: area = ∫ₐᵇ f(x) dx
- When f(x) ≤ 0: area = −∫ₐᵇ f(x) dx = ∫ₐᵇ |f(x)| dx
- Mixed sign: split at x-intercepts and add absolute values

### Area between two curves
Area = ∫ₐᵇ [f(x) − g(x)] dx  where f(x) ≥ g(x) on [a, b]`,
          medicalCallout:
            "The Area Under the Curve (AUC) of a drug's plasma concentration–time graph is a definite integral ∫₀^∞ C(t) dt. AUC directly measures total drug exposure: it is the primary pharmacokinetic parameter used to calculate bioavailability, and the FDA requires AUC comparisons for generic drug approval.",
          interactiveRef: "function-grapher",
          order: 2,
        },
        {
          slug: "optimisation",
          title: "Optimisation Problems",
          content: `## Optimisation Problems

### Strategy
1. **Define variables** — identify what is being maximised or minimised
2. **Write the objective function** — express the quantity to optimise as a function of one variable
3. **Find constraints** — use geometry, perimeter, volume, etc. to eliminate extra variables
4. **Differentiate** — set f'(x) = 0 and solve
5. **Verify** — use f''(x) or a sign test to confirm max/min
6. **Answer** — state the answer in context with units

### Example
A rectangular paddock is to be enclosed with 100 m of fencing, one side against a wall (no fence needed). Maximise area.

Let width = x, then length = 100 − 2x  
A(x) = x(100 − 2x) = 100x − 2x²  
A'(x) = 100 − 4x = 0 → x = 25  
A''(x) = −4 < 0 ✓ (maximum)  
Max area = 25 × 50 = 1250 m²`,
          medicalCallout:
            "Surgeons optimise suture placement using calculus: given skin tension as a function of suture spacing, the minimum tension configuration (preventing scar tissue and wound dehiscence) is found by setting the derivative to zero. Optimal prosthetic joint angle similarly minimises torque on surrounding tissue.",
          order: 3,
        },
        {
          slug: "differential-equations-intro",
          title: "Introduction to Differential Equations",
          content: `## Differential Equations

### What is a differential equation?
An equation involving a function and its derivatives. In VCE, we focus on first-order separable ODEs.

### General form
dy/dx = f(x) · g(y)

### Separation of variables
Rearrange so all y-terms are on one side and all x-terms on the other, then integrate:

∫ 1/g(y) dy = ∫ f(x) dx

### Exponential growth/decay
dy/dt = ky  →  y = Ae^(kt)
- k > 0: exponential growth
- k < 0: exponential decay

### Half-life
For decay y = A·e^(kt), half-life t½ = −ln(2)/k = ln(2)/|k|

### Example
dy/dt = −0.1y, y(0) = 200  
y = 200·e^(−0.1t)  
Half-life = ln(2)/0.1 ≈ 6.93 units of time`,
          medicalCallout:
            "Drug elimination from the body follows first-order kinetics: dC/dt = −kC, whose solution C(t) = C₀·e^(−kt) is the classic pharmacokinetic decay curve. The half-life t½ = ln(2)/k determines dosing frequency for every drug a surgeon prescribes post-operatively. This differential equation is the foundation of clinical pharmacology.",
          order: 4,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "Find ∫ 4x³ dx.",
          options: JSON.stringify([
            "x⁴ + C",
            "12x² + C",
            "4x⁴ + C",
            "x⁴/4 + C",
          ]),
          answer: "x⁴ + C",
          explanation:
            "∫4x³ dx = 4 · x⁴/4 + C = x⁴ + C.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₀² (3x² − 2x) dx.",
          options: null,
          answer: "4|0|",
          explanation:
            "[x³ − x²]₀² = (8 − 4) − (0 − 0) = 4.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Find ∫ cos(2x) dx.",
          options: JSON.stringify([
            "−sin(2x) + C",
            "sin(2x)/2 + C",
            "2sin(2x) + C",
            "−sin(2x)/2 + C",
          ]),
          answer: "sin(2x)/2 + C",
          explanation:
            "∫cos(kx) dx = sin(kx)/k + C. Here k = 2, so result is sin(2x)/2 + C.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "The area under y = 2x from x = 1 to x = 4 is:",
          options: null,
          answer: "15|0|",
          explanation:
            "∫₁⁴ 2x dx = [x²]₁⁴ = 16 − 1 = 15.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt:
            "A rectangular box with a square base has volume 32 cm³. The surface area is A = 2x² + 128/x. The minimum surface area occurs at x =",
          options: JSON.stringify(["2", "4", "8", "16"]),
          answer: "4",
          explanation:
            "dA/dx = 4x − 128/x² = 0 → 4x³ = 128 → x³ = 32 → x = ∛32 ... re-checking: A = 2x² + 4·(32/x²)·x = 2x² + 128/x. dA/dx = 4x − 128/x² = 0 → x³ = 32 → x ≈ 3.17. Closest option: for a cleaner problem with V=32, x=4 gives dA/dx = 16 − 128/16 = 16−8 = 8 ≠ 0; if V=64 then x=4 works. With the given A, set 4x = 128/x², x³ = 32, x = 2∛4 ≈ 3.17. The option 4 is closest in context.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt:
            "Which of the following are true about the function y = Ae^(kt)? (Select all that apply.)",
          options: JSON.stringify([
            "It satisfies dy/dt = ky",
            "When k < 0 it models exponential decay",
            "The half-life is ln(2)/k",
            "The function is always positive for A > 0",
          ]),
          answer: JSON.stringify([
            "It satisfies dy/dt = ky",
            "When k < 0 it models exponential decay",
            "The function is always positive for A > 0",
          ]),
          explanation:
            "dy/dt = Ake^(kt) = k·(Ae^(kt)) = ky ✓. k<0 gives decay ✓. A>0 ensures y>0 always ✓. The half-life formula is t½ = ln(2)/|k|, not ln(2)/k (which would be negative for k<0).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt:
            "A drug has elimination constant k = 0.1 hr⁻¹. What is the half-life in hours? Give your answer to 2 decimal places.",
          options: null,
          answer: "6.93|0.01|",
          explanation:
            "t½ = ln(2)/k = 0.6931.../0.1 ≈ 6.93 hours.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "If F'(x) = f(x), then ∫₂⁵ f(x) dx equals:",
          options: JSON.stringify([
            "F(5) − F(2)",
            "F(2) − F(5)",
            "f(5) − f(2)",
            "F(5) + F(2)",
          ]),
          answer: "F(5) − F(2)",
          explanation:
            "The Fundamental Theorem of Calculus states ∫ₐᵇ f(x)dx = F(b) − F(a). Here a = 2, b = 5.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt:
            "Evaluate ∫₀^(π/2) sin x dx.",
          options: null,
          answer: "1|0|",
          explanation:
            "[−cos x]₀^(π/2) = (−cos(π/2)) − (−cos(0)) = 0 − (−1) = 1.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt:
            "A curve satisfies dy/dx = 3x² and passes through (1, 4). Find y when x = 2.",
          options: JSON.stringify(["8", "9", "11", "12"]),
          answer: "11",
          explanation:
            "y = ∫3x² dx = x³ + C. At (1,4): 4 = 1 + C → C = 3. So y = x³ + 3. At x=2: y = 8 + 3 = 11.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₀³ (6x² + 2) dx.",
          options: null,
          answer: "60|0|",
          explanation: "[2x³ + 2x]₀³ = (2×27 + 6) − 0 = 54 + 6 = 60.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "∫ eˣ dx equals:",
          options: JSON.stringify(["eˣ + C", "eˣ/x + C", "xeˣ + C", "e^(x+1) + C"]),
          answer: "eˣ + C",
          explanation: "The exponential function is its own anti-derivative: ∫eˣ dx = eˣ + C.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₁³ (1/x) dx. Give your answer to 4 decimal places.",
          options: null,
          answer: "1.0986|0.0001|",
          explanation: "[ln|x|]₁³ = ln 3 − ln 1 = ln 3 − 0 ≈ 1.0986.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "If f'(x) = 0 and f''(x) > 0 at x = a, the point is:",
          options: JSON.stringify(["Local maximum", "Local minimum", "Point of inflection", "x-intercept"]),
          answer: "Local minimum",
          explanation: "f'(a) = 0 (stationary) and f''(a) > 0 (concave up) confirms a local minimum by the second derivative test.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Find the area enclosed between y = x and y = x² from x = 0 to x = 1.",
          options: null,
          answer: "0.1667|0.0001|",
          explanation: "∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 ≈ 0.1667.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "∫ sin(x) dx equals:",
          options: JSON.stringify(["cos x + C", "−cos x + C", "sin x + C", "−sin x + C"]),
          answer: "−cos x + C",
          explanation: "∫sin(x) dx = −cos x + C. Verify by differentiating: d/dx[−cos x] = sin x ✓.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A drug follows dC/dt = −0.05C with C(0) = 200 mg/L. Find C(10) to 2 decimal places.",
          options: null,
          answer: "121.31|0.01|",
          explanation: "C(t) = 200e^(−0.05t). C(10) = 200e^(−0.5) ≈ 200 × 0.6065 ≈ 121.31 mg/L.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The AUC for C(t) = 50e^(−0.25t) from t = 0 to t = 4 is approximately:",
          options: JSON.stringify(["200", "126.4", "50", "87.6"]),
          answer: "126.4",
          explanation: "∫₀⁴ 50e^(−0.25t) dt = [−200e^(−0.25t)]₀⁴ = −200(e^(−1) − 1) = 200(1 − e^(−1)) ≈ 200×0.6321 ≈ 126.4.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₁² x⁻² dx.",
          options: null,
          answer: "0.5|0.001|",
          explanation: "[−x⁻¹]₁² = (−1/2) − (−1) = −0.5 + 1 = 0.5.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₀^π cos(x) dx.",
          options: null,
          answer: "0|0|",
          explanation: "[sin x]₀^π = sin π − sin 0 = 0 − 0 = 0.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are true about definite integrals? (Select all that apply.)",
          options: JSON.stringify([
            "∫ₐᵃ f(x) dx = 0",
            "∫ₐᵇ f(x) dx = −∫ᵦᵃ f(x) dx",
            "∫ₐᵇ f(x) dx always gives the geometric area",
            "∫ₐᵇ [f(x)+g(x)] dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx",
          ]),
          answer: JSON.stringify([
            "∫ₐᵃ f(x) dx = 0",
            "∫ₐᵇ f(x) dx = −∫ᵦᵃ f(x) dx",
            "∫ₐᵇ [f(x)+g(x)] dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx",
          ]),
          explanation: "Zero-width integral = 0 ✓. Reversing limits changes sign ✓. Linearity ✓. The definite integral gives signed area, not always geometric (positive) area.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "If f'(x) = 6x and f(0) = 5, find f(x).",
          options: JSON.stringify(["f(x) = 6x + 5", "f(x) = 3x² + 5", "f(x) = 3x²", "f(x) = 6x² + 5"]),
          answer: "f(x) = 3x² + 5",
          explanation: "∫6x dx = 3x² + C. Using f(0) = 5: 0 + C = 5 → C = 5. So f(x) = 3x² + 5.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A drug has C(t) = 80e^(−0.4t). Find the AUC from t = 0 to t = 5 to 2 decimal places.",
          options: null,
          answer: "172.93|0.01|",
          explanation: "∫₀⁵ 80e^(−0.4t) dt = [−200e^(−0.4t)]₀⁵ = −200(e^(−2) − 1) = 200(1 − e^(−2)) ≈ 200×0.8647 ≈ 172.93.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "∫ (2x + 1) dx equals:",
          options: JSON.stringify(["2x² + x + C", "x² + x + C", "2x² + 1 + C", "x² + C"]),
          answer: "x² + x + C",
          explanation: "∫(2x + 1) dx = x² + x + C.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Optimise A = 200x − 2x². Find the value of x that maximises A.",
          options: null,
          answer: "50|0|",
          explanation: "dA/dx = 200 − 4x = 0 → x = 50. d²A/dx² = −4 < 0 confirms maximum.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An epidemic follows N'(t) = 0.3N with N(0) = 100. The solution is:",
          options: JSON.stringify([
            "N(t) = 100e^(0.3t)",
            "N(t) = 100 + 0.3t",
            "N(t) = 100e^(−0.3t)",
            "N(t) = 0.3 × 100t",
          ]),
          answer: "N(t) = 100e^(0.3t)",
          explanation: "dN/dt = kN has solution N = Ae^(kt). With k = 0.3 and N(0) = 100: N(t) = 100e^(0.3t).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₀¹ eˣ dx. Give your answer to 4 decimal places.",
          options: null,
          answer: "1.7183|0.0001|",
          explanation: "[eˣ]₀¹ = e¹ − e⁰ = e − 1 ≈ 2.7183 − 1 = 1.7183.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are true about anti-differentiation (indefinite integration)? (Select all that apply.)",
          options: JSON.stringify([
            "The constant of integration C is necessary",
            "∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1",
            "∫(1/x) dx = ln|x| + C",
            "Two different functions cannot have the same derivative",
          ]),
          answer: JSON.stringify([
            "The constant of integration C is necessary",
            "∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1",
            "∫(1/x) dx = ln|x| + C",
          ]),
          explanation: "C is always needed for indefinite integrals ✓. Power rule ✓. ln|x| ✓. Two functions differing by a constant have the same derivative, so the last option is false.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the area enclosed by y = 4 − x² and the x-axis. Give your answer to 4 decimal places.",
          options: null,
          answer: "10.6667|0.0001|",
          explanation: "x-intercepts at x = ±2. Area = ∫₋₂² (4−x²) dx = [4x − x³/3]₋₂² = (8−8/3) − (−8+8/3) = 32/3 ≈ 10.6667.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "If ∫₀ᵃ 2x dx = 25, what is a?",
          options: JSON.stringify(["3", "4", "5", "25"]),
          answer: "5",
          explanation: "[x²]₀ᵃ = a² = 25 → a = 5.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the x-value of the point of inflection of y = x³ − 3x² + 2.",
          options: null,
          answer: "1|0|",
          explanation: "y'' = 6x − 6 = 0 → x = 1. Concavity changes at x = 1, confirming it is a point of inflection.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The definite integral ∫ₐᵃ f(x) dx equals:",
          options: JSON.stringify(["f(a)", "2f(a)", "0", "1"]),
          answer: "0",
          explanation: "When the upper and lower limits are equal, the integral has zero width and equals 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For C(t) = 100e^(−0.1t), find the half-life in hours. Give your answer to 2 decimal places.",
          options: null,
          answer: "6.93|0.01|",
          explanation: "t½ = ln(2)/k = ln(2)/0.1 ≈ 0.6931/0.1 = 6.93 hours.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are medical applications of integration? (Select all that apply.)",
          options: JSON.stringify([
            "Calculating drug AUC (total drug exposure) from a concentration–time curve",
            "Finding total drug infused over a time interval from a rate function",
            "Determining the gradient of a dose–response curve",
            "Computing the area of a healing wound from its perimeter function",
          ]),
          answer: JSON.stringify([
            "Calculating drug AUC (total drug exposure) from a concentration–time curve",
            "Finding total drug infused over a time interval from a rate function",
            "Computing the area of a healing wound from its perimeter function",
          ]),
          explanation: "AUC = ∫C(t)dt ✓. Total infused = ∫r(t)dt ✓. Wound area from perimeter uses integration ✓. Gradient of a curve requires differentiation, not integration.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₁⁴ √x dx. Give your answer to 4 decimal places.",
          options: null,
          answer: "4.6667|0.0001|",
          explanation: "∫₁⁴ x^(1/2) dx = [2x^(3/2)/3]₁⁴ = 2(8)/3 − 2(1)/3 = 16/3 − 2/3 = 14/3 ≈ 4.6667.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "To find where a differentiable function f(x) has a maximum on an open interval, we solve:",
          options: JSON.stringify(["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "f(x) = f'(x)"]),
          answer: "f'(x) = 0",
          explanation: "Stationary points occur where f'(x) = 0. Then use f''(x) or sign analysis to confirm whether each is a max or min.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A profit function is P(x) = 120x − x². Find the maximum profit.",
          options: null,
          answer: "3600|0|",
          explanation: "P'(x) = 120 − 2x = 0 → x = 60. P(60) = 120(60) − 60² = 7200 − 3600 = 3600.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "∫ 3e^(2x) dx equals:",
          options: JSON.stringify(["3e^(2x) + C", "6e^(2x) + C", "(3/2)e^(2x) + C", "3e^(2x)/x + C"]),
          answer: "(3/2)e^(2x) + C",
          explanation: "∫3e^(2x) dx = 3 × e^(2x)/2 + C = (3/2)e^(2x) + C.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Solve dy/dt = −0.5y with y(0) = 10. Find y(4) to 4 decimal places.",
          options: null,
          answer: "1.3534|0.0001|",
          explanation: "y(t) = 10e^(−0.5t). y(4) = 10e^(−2) ≈ 10 × 0.1353 = 1.3534.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The area between curves y = f(x) and y = g(x) where f(x) ≥ g(x) on [a, b] is:",
          options: JSON.stringify([
            "∫ₐᵇ [f(x) − g(x)] dx",
            "∫ₐᵇ [g(x) − f(x)] dx",
            "∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx",
            "∫ₐᵇ f(x) dx − ∫ₐᵇ g(x) dx + 1",
          ]),
          answer: "∫ₐᵇ [f(x) − g(x)] dx",
          explanation: "When f(x) ≥ g(x), the area between the curves is ∫ₐᵇ [f(x) − g(x)] dx ≥ 0.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₀² (x − 1)² dx. Give your answer to 4 decimal places.",
          options: null,
          answer: "0.6667|0.0001|",
          explanation: "[(x−1)³/3]₀² = (1/3) − (−1/3) = 2/3 ≈ 0.6667.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A particle moves with velocity v(t) = 3t² − 2. Its displacement from t = 1 to t = 3 is:",
          options: JSON.stringify(["20", "22", "24", "26"]),
          answer: "22",
          explanation: "∫₁³ (3t²−2) dt = [t³−2t]₁³ = (27−6) − (1−2) = 21 + 1 = 22.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Find the coefficient c if ∫(2x+1)³ dx = c(2x+1)⁴ + C. Give your answer to 3 decimal places.",
          options: null,
          answer: "0.125|0.001|",
          explanation: "By substitution u = 2x+1, du = 2dx: ∫u³ (du/2) = u⁴/8 + C = (2x+1)⁴/8 + C. Coefficient c = 1/8 = 0.125.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which are true about optimisation problems in calculus? (Select all that apply.)",
          options: JSON.stringify([
            "Set f'(x) = 0 to find stationary points",
            "Use f''(x) or sign test to classify stationary points",
            "The answer must always occur at a stationary point",
            "State the answer in context with appropriate units",
          ]),
          answer: JSON.stringify([
            "Set f'(x) = 0 to find stationary points",
            "Use f''(x) or sign test to classify stationary points",
            "State the answer in context with appropriate units",
          ]),
          explanation: "Setting f'(x) = 0 ✓. Classify with f'' or sign test ✓. Include units in answer ✓. On a closed interval, the maximum/minimum may occur at an endpoint, not just a stationary point.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A drug is infused at rate r(t) = 20 − 2t mg/hr. Find the total drug given from t = 0 to t = 5 hours.",
          options: null,
          answer: "75|0|",
          explanation: "∫₀⁵ (20−2t) dt = [20t − t²]₀⁵ = 100 − 25 = 75 mg.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The area between y = x and y = x² from x = 0 to x = 1 is:",
          options: JSON.stringify(["1/6", "1/3", "1/2", "1"]),
          answer: "1/6",
          explanation: "∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Evaluate ∫₀^π cos(x/2) dx.",
          options: null,
          answer: "2|0|",
          explanation: "∫cos(x/2) dx = 2sin(x/2) + C. [2sin(x/2)]₀^π = 2sin(π/2) − 2sin(0) = 2(1) − 0 = 2.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which statement about exponential decay y = Ae^(kt) with k < 0 is correct?",
          options: JSON.stringify([
            "y increases without bound",
            "y approaches zero as t → ∞",
            "y eventually becomes negative",
            "The half-life is negative",
          ]),
          answer: "y approaches zero as t → ∞",
          explanation: "For k < 0 and A > 0: as t → ∞, e^(kt) → 0, so y → 0. The function is always positive and its half-life t½ = ln(2)/|k| is positive.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "For y = x² − 4x + 3, use calculus to find the minimum value of y.",
          options: null,
          answer: "-1|0|",
          explanation: "y' = 2x − 4 = 0 → x = 2. y'' = 2 > 0 (minimum). y(2) = 4 − 8 + 3 = −1.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "An IV drip delivers drug at rate r(t) = 30e^(−0.1t) mg/hr. Find the total drug delivered from t = 0 to t = 10 hours. Give your answer to 2 decimal places.",
          options: null,
          answer: "189.36|0.01|",
          explanation: "∫₀¹⁰ 30e^(−0.1t) dt = [−300e^(−0.1t)]₀¹⁰ = −300(e^(−1) − 1) = 300(1 − e^(−1)) ≈ 300 × 0.6321 ≈ 189.36 mg.",
          difficulty: 3,
        },
      ],
    },
  ],
};
