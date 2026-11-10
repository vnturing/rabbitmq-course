# Mission: RabbitMQ in a Laravel e-commerce app

## Why
Prepare for a job interview at a company whose main app is Laravel, which uses RabbitMQ, runs an e-commerce site selling electronics equipment, and is experimenting with AI tools in its workflow. Everything else about the company is unknown.

## Success looks like
- Explain in 30 seconds why an e-commerce order flow uses a message queue, using the correct RabbitMQ vocabulary
- Trace a Laravel `dispatch()` through exchange, binding, queue and worker, and say what happens when things go wrong (lost message, failed job, duplicate delivery)
- Ask the interviewers informed questions about their setup
- Review AI-generated queue/job code and spot the usual risks

## Constraints
- Interview is this week (stated 2026-11-10): prioritise Lessons 3 to 5 and the interview-day lesson; keep other lessons short
- Learns sequentially: each idea builds on the previous one
- Course is a static HTML site on GitHub Pages; new lessons arrive as git patches

## Out of scope
- Running and clustering RabbitMQ itself
- Comparisons with Kafka or other brokers beyond what an interview answer needs
- Non-Laravel clients
