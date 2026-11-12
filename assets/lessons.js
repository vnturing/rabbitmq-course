/* Course manifest. One entry per line so a new lesson is a one-line patch.
   status: "ready" (file exists in lessons/) or "planned". */
window.LESSONS = [
  {slug:"0001-why-a-checkout-needs-a-queue", title:"Why a checkout needs a queue", blurb:"Split a slow checkout into what must happen now and what can wait, then meet the four RabbitMQ nouns.", minutes:12, status:"ready"},
  {slug:"0002-exchanges-queues-bindings", title:"How an exchange picks the queue", blurb:"Routing keys, binding keys and the three exchange types (fanout, direct, topic) using order events.", minutes:12, status:"ready"},
  {slug:"0003-laravel-meets-rabbitmq", title:"Laravel meets RabbitMQ", blurb:"What dispatch() does when the queue connection is RabbitMQ: exchange options, consuming commands, and how to read a config.", minutes:15, status:"ready"},
  {slug:"0004-not-losing-orders", title:"Not losing orders", blurb:"Four hand-offs from checkout to finished job: after_commit, publisher confirms, durability and acknowledgements.", minutes:15, status:"ready"},
  {slug:"0005-when-jobs-fail", title:"When jobs fail", blurb:"Laravel retries and failed_jobs, RabbitMQ redelivery and dead letters, and making jobs safe to run twice.", minutes:15, status:"ready"},
  {slug:"0006-running-workers-in-production", title:"Running workers in production", blurb:"Long-lived workers, Supervisor, graceful restarts on deploy, recycling limits and RabbitMQ prefetch.", minutes:15, status:"ready"},
  {slug:"0007-interview-day", title:"Interview day", blurb:"A retrieval round, the one-minute story, questions to ask, and a review checklist for AI-assisted queue code.", minutes:20, status:"ready"}
];
