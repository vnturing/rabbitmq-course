/* Course manifest. One entry per line so a new lesson is a one-line patch.
   status: "ready" (file exists in lessons/) or "planned". */
window.LESSONS = [
  {slug:"0001-why-a-checkout-needs-a-queue", title:"Why a checkout needs a queue", blurb:"Split a slow checkout into what must happen now and what can wait, then meet the four RabbitMQ nouns.", minutes:12, status:"ready"},
  {slug:"0002-exchanges-queues-bindings", title:"Exchanges, queues and bindings", blurb:"How routing decides which queue gets an order event: direct, fanout and topic.", minutes:12, status:"planned"},
  {slug:"0003-laravel-meets-rabbitmq", title:"Laravel meets RabbitMQ", blurb:"What dispatch() actually does when the queue connection is RabbitMQ, and what the driver configures for you.", minutes:15, status:"planned"},
  {slug:"0004-not-losing-orders", title:"Not losing orders", blurb:"Acknowledgements, durability, publisher confirms and dispatching after the database commit.", minutes:15, status:"planned"},
  {slug:"0005-when-jobs-fail", title:"When jobs fail", blurb:"Retries, backoff, dead-lettering and idempotency: how to avoid double charges and double emails.", minutes:15, status:"planned"},
  {slug:"0006-one-event-many-consumers", title:"One event, many consumers", blurb:"Topic exchanges for order.placed: inventory, email and analytics each get their own queue.", minutes:12, status:"planned"},
  {slug:"0007-running-workers-in-production", title:"Running workers in production", blurb:"Worker processes, prefetch, supervision, Horizon support and what to monitor.", minutes:15, status:"planned"},
  {slug:"0008-interview-day", title:"Interview day", blurb:"Questions to ask, answers to give, and a review checklist for AI-assisted queue code.", minutes:15, status:"planned"}
];
