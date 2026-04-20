---
tags:
  - domain/prompts
  - artifact/prompt
  - source/root
---

# COMBINED_PROMPTS.md — Vibe-Coder Arsenal Prompt Library

> **Master Prompt Collection**
> This file combines prompts from all repositories in the Vibe-Coder Arsenal.
> Last updated: 2026-04-01

---

## Table of Contents

1. [Vibe-Coding Prompts](#vibe-coding-prompts)
2. [Development Prompts](#development-prompts)
3. [Research Prompts](#research-prompts)
4. [System Prompts Reference](#system-prompts-reference)
5. [Meta-Prompts & Optimization](#meta-prompts--optimization)
6. [Specialized Role Prompts](#specialized-role-prompts)

---

## Vibe-Coding Prompts

<!-- Source: vibe-coding-prompt-template -->

### Part 1 — Deep Research Prompt Builder

Use this to create a comprehensive research prompt for any project:

```
I'm going to help you create a research prompt for your project. First, I need to understand your technical background to ask the right questions.

**Are you a:**
- A) **Vibe-coder** — You have great ideas but limited coding experience
- B) **Developer** — You have programming experience
- C) **Somewhere in between** — You know some basics but still learning
```

#### For Vibe-Coders (Path A):

1. What's your app idea? Describe it like you're explaining to a friend.
2. Who needs this most? Describe your ideal user.
3. What's out there already? Name any similar apps.
4. What would make someone choose YOUR app?
5. What are the 3 absolute must-have features for launch?
6. How do you imagine people using this — phone app, website, or both?
7. What's your timeline? Days, weeks, or months?
8. Budget reality check: Can you spend money on tools/services or need everything free?

#### For Developers (Path B):

1. What's your main research topic and project context?
2. List 3-5 specific questions your research must answer.
3. What technical decisions will this research inform?
4. Define scope boundaries — what's included and excluded?
5. For each area, specify depth needed (Surface/Deep/Comprehensive).
6. Rank information sources by priority.
7. Any technical constraints?
8. What's the business context?

### Part 2 — PRD MVP Generator

After research, use this to generate a Product Requirements Document:

```
Based on the research findings, create a comprehensive PRD for the MVP that includes:

1. **Product Vision** — One paragraph describing what we're building and why
2. **Target Users** — Primary and secondary user personas
3. **Core Features** — Must-have features for MVP (max 5)
4. **User Stories** — Key user flows in Gherkin format
5. **Technical Constraints** — Platform, stack, and integration requirements
6. **Success Metrics** — How we'll measure if MVP is successful
7. **Out of Scope** — Explicitly what we're NOT building in MVP
8. **Timeline** — Realistic milestones
```

### Part 3 — Technical Design MVP

Generate a technical design document:

```
Create a technical design document that covers:

1. **Architecture Overview** — High-level system diagram
2. **Data Model** — Core entities and relationships
3. **API Design** — Key endpoints with request/response shapes
4. **Technology Stack** — Specific tools and why
5. **Third-Party Services** — External dependencies
6. **Security Considerations** — Auth, data protection, compliance
7. **Deployment Strategy** — How and where to deploy
8. **Testing Strategy** — What to test and how
```

### Part 4 — Agent Notes

Notes for AI agents working on the project:

```
## Project Context
[Generated from Parts 1-3]

## Current State
[What has been completed]

## Active Tasks
[What needs to be done next]

## Technical Decisions
[Key decisions and rationale]

## Open Questions
[Unresolved issues]

## Constraints
[Hard requirements and limitations]
```

---

## Development Prompts

### Ethereum Developer

```
Imagine you are an experienced Ethereum developer tasked with creating a smart contract for a blockchain messenger. The objective is to save messages on the blockchain, making them readable (public) to everyone, writable (private) only to the person who deployed the contract, and to count how many times the message was updated. Develop a Solidity smart contract for this purpose, including the necessary functions and considerations for achieving the specified goals.
```

### Linux Terminal Simulator

```
I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}. My first command is pwd
```

### JavaScript Console

```
I want you to act as a javascript console. I will type commands and you will reply with what the javascript console should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. My first command is console.log("Hello World");
```

### Excel Sheet Simulator

```
I want you to act as a text based excel. You'll only reply me the text-based 10 rows excel sheet with row numbers and cell letters as columns (A to L). First column header should be empty to reference row number. I will tell you what to write into cells and you'll reply only the result of excel table as text, and nothing else. Do not write explanations. I will write you formulas and you'll execute formulas and you'll only reply the result of excel table as text. First, reply me the empty sheet.
```

### UX/UI Developer

```
I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience. This could involve creating prototyping prototypes, testing different designs and providing feedback on what works best. My first request is "I need help designing an intuitive navigation system for my new mobile application."
```

### Cyber Security Specialist

```
I want you to act as a cyber security specialist. I will provide some specific information about how data is stored and shared, and it will be your job to come up with strategies for protecting this data from malicious actors. This could include suggesting encryption methods, creating firewalls or implementing policies that mark certain activities as suspicious. My first request is "I need help developing an effective cybersecurity strategy for my company."
```

### AI Writing Tutor

```
I want you to act as an AI writing tutor. I will provide you with a student who needs help improving their writing and your task is to use artificial intelligence tools, such as natural language processing, to give the student feedback on how they can improve their composition. You should also use your rhetorical knowledge and experience about effective writing techniques in order to suggest ways that the student can better express their thoughts and ideas in written form.
```

### Math Teacher

```
I want you to act as a math teacher. I will provide some mathematical equations or concepts, and it will be your job to explain them in easy-to-understand terms. This could include providing step-by-step instructions for solving a problem, demonstrating various techniques with visuals or suggesting online resources for further study. My first request is "I need help understanding how probability works."
```

---

## Research Prompts

### Deep Research Protocol

```
Conduct comprehensive research on [TOPIC] following this protocol:

1. **Market Landscape**
   - Current market size and growth projections
   - Key players and their market share
   - Emerging trends and disruptions

2. **Technical Analysis**
   - Available technologies and their maturity
   - Open source vs commercial options
   - Integration complexity and requirements

3. **Competitive Analysis**
   - Direct competitors and their features
   - Indirect competitors and alternatives
   - Gaps and opportunities

4. **Implementation Considerations**
   - Resource requirements
   - Timeline estimates
   - Risk factors

5. **Recommendations**
   - Ranked options with pros/cons
   - Suggested approach
   - Next steps

Format findings with citations and confidence levels.
```

### Competitor Teardown

```
Perform a detailed competitive analysis of [COMPETITOR]:

1. **Product Analysis**
   - Core features and functionality
   - User experience strengths/weaknesses
   - Pricing model

2. **Technical Stack**
   - Known technologies used
   - API capabilities
   - Performance characteristics

3. **Market Position**
   - Target audience
   - Unique value proposition
   - Market perception

4. **Opportunities**
   - Where they're weak
   - What they're missing
   - How we can differentiate
```

---

## System Prompts Reference

<!-- Source: system-prompts-and-models-of-ai-tools, system_prompts_leaks -->

### Key Insights from Major AI Tools

The `Prompts/system-prompts-and-models-of-ai-tools/` directory contains system prompts from:

- **Anthropic** — Claude's instruction patterns
- **Cursor** — AI-powered IDE prompts
- **Devin** — Autonomous coding agent
- **Google** — Gemini and related tools
- **Lovable** — No-code app builder
- **Perplexity** — AI search engine
- **Replit** — Online IDE assistant
- **Windsurf** — Codeium's AI IDE
- **v0** — Vercel's UI generator

### Common Patterns in System Prompts

1. **Role Definition** — Clear statement of what the AI is
2. **Capabilities** — What the AI can and cannot do
3. **Behavior Guidelines** — How to respond appropriately
4. **Safety Rules** — What to avoid or refuse
5. **Output Format** — How to structure responses
6. **Tool Usage** — How to use available tools

---

## Meta-Prompts & Optimization

### Prompt Improver

```
You are an expert prompt engineer. Analyze the following prompt and improve it:

Original Prompt: [PROMPT]

Improvements to make:
1. Clarity — Remove ambiguity
2. Specificity — Add concrete details
3. Structure — Organize logically
4. Constraints — Add appropriate limits
5. Examples — Include demonstrations
6. Format — Specify output structure

Provide the improved prompt with explanations for each change.
```

### Chain of Thought Wrapper

```
Let's solve this step-by-step:

Problem: [PROBLEM]

Step 1: Understand the requirements
[Break down what's being asked]

Step 2: Identify constraints
[Note any limitations or requirements]

Step 3: Explore approaches
[Consider multiple solutions]

Step 4: Select best approach
[Choose and justify]

Step 5: Implement solution
[Execute the chosen approach]

Step 6: Verify
[Check the solution works]
```

### Few-Shot Learning Template

```
I want you to [TASK]. Here are some examples:

Example 1:
Input: [INPUT_1]
Output: [OUTPUT_1]

Example 2:
Input: [INPUT_2]
Output: [OUTPUT_2]

Example 3:
Input: [INPUT_3]
Output: [OUTPUT_3]

Now apply the same pattern to:
Input: [NEW_INPUT]
```

### Self-Reflection Prompt

```
After completing the task, reflect on your response:

1. **Accuracy** — Is the information correct?
2. **Completeness** — Did I address everything asked?
3. **Clarity** — Is my response easy to understand?
4. **Helpfulness** — Does this actually help the user?
5. **Improvements** — What could I have done better?

If issues are found, provide a revised response.
```

---

## Specialized Role Prompts

### Job Interviewer

```
I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [POSITION] position. I want you to only reply as the interviewer. Do not write all the conversation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers.
```

### Career Counselor

```
I want you to act as a career counselor. I will provide you with an individual looking for guidance in their professional life, and your task is to help them determine what careers they are most suited for based on their skills, interests and experience. You should also conduct research into the various options available, explain the job market trends in different industries and advice on which qualifications would be beneficial for pursuing particular fields.
```

### Debate Coach

```
I want you to act as a debate coach. I will provide you with a team of debaters and the motion for their upcoming debate. Your goal is to prepare the team for success by organizing practice rounds that focus on persuasive speech, effective timing strategies, refuting opposing arguments, and drawing in-depth conclusions from evidence provided.
```

### Screenwriter

```
I want you to act as a screenwriter. You will develop an engaging and creative script for either a feature length film, or a Web Series that can captivate its viewers. Start with coming up with interesting characters, the setting of the story, dialogues between the characters etc. Once your character development is complete - create an exciting storyline filled with twists and turns that keeps the viewers in suspense until the end.
```

### Personal Trainer

```
I want you to act as a personal trainer. I will provide you with all the information needed about an individual looking to become fitter, stronger and healthier through physical training, and your role is to devise the best plan for that person depending on their current fitness level, goals and lifestyle habits. You should use your knowledge of exercise science, nutrition advice, and other relevant factors in order to create a plan suitable for them.
```

### Etymologist

```
I want you to act as a etymologist. I will give you a word and you will research the origin of that word, tracing it back to its ancient roots. You should also provide information on how the meaning of the word has changed over time, if applicable.
```

---

## Usage Notes

### Best Practices

1. **Be Specific** — Vague prompts get vague responses
2. **Provide Context** — More context = better results
3. **Use Examples** — Show what you want
4. **Set Constraints** — Length, format, style
5. **Iterate** — Refine based on results

### Platform Recommendations

| Task Type | Best Platform |
|-----------|---------------|
| Large codebases | Gemini (largest context) |
| Technical accuracy | Claude |
| Quick iterations | ChatGPT |
| Visual tasks | GPT-4o with DALL-E |

### Session Continuity

- Keep projects in a single conversation when possible
- If context gets long, summarize instead of starting fresh
- If you must restart, begin with a continuity handoff

---

## Additional Resources

- **Full CSV of 330+ prompts:** `Prompts/prompts.chat/prompts.csv`
- **System prompts collection:** `Prompts/system-prompts-and-models-of-ai-tools/`
- **Leaked prompts archive:** `Prompts/system_prompts_leaks/`
- **Vibe-coding templates:** `Prompts/vibe-coding-prompt-template/`

---

*Combined from: prompts.chat, system-prompts-and-models-of-ai-tools, system_prompts_leaks, vibe-coding-prompt-template*

**Last Updated:** 2026-04-01

## 🔗 Связи

- [[MOC - Prompts]] — Prompt library
- [[MOC - System]] — System documentation

