/* Course manifest. One entry per line so a new lesson is a one-line patch.
   status: "ready" (file exists in lessons/) or "planned". */
window.LESSONS = [
  {slug:"0001-why-a-checkout-needs-a-queue", title:"Why a checkout needs a queue", blurb:"Split a slow checkout into what must happen now and what can wait, then meet the four RabbitMQ nouns.", minutes:12, status:"ready"},
  {slug:"0002-exchanges-queues-bindings", title:"How an exchange picks the queue", blurb:"Routing keys, binding keys and the three exchange types (fanout, direct, topic) using order events.", minutes:12, status:"ready"},
  {slug:"0003-laravel-meets-rabbitmq", title:"Laravel meets RabbitMQ", blurb:"What dispatch() actually does when the queue connection is RabbitMQ, and what the driver configures for you.", minutes:15, status:"planned"},
  {slug:"0004-not-losing-orders", title:"Not losing orders", blurb:"Acknowledgements, durability, publisher confirms and dispatching after the database commit.", minutes:15, status:"planned"},
  {slug:"0005-when-jobs-fail", title:"When jobs fail", blurb:"Retries, backoff, dead-lettering and idempotency: how to avoid double charges and double emails.", minutes:15, status:"planned"},
  {slug:"0006-running-workers-in-production", title:"Running workers in production", blurb:"Worker processes, prefetch, supervision, Horizon support and what to monitor.", minutes:15, status:"planned"},
  {slug:"0007-interview-day", title:"Interview day", blurb:"Questions to ask, answers to give, and a review checklist for AI-assisted queue code.", minutes:15, status:"planned"}
];
