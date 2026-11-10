# RabbitMQ in Laravel Resources

## Knowledge

- [RabbitMQ: AMQP 0-9-1 Model Explained](https://www.rabbitmq.com/tutorials/amqp-concepts)
  Official explanation of exchanges, queues, bindings, acknowledgements. Use for: all vocabulary and routing questions.
- [RabbitMQ tutorial 5: Topics](https://www.rabbitmq.com/tutorials/tutorial-five-go)
  Official worked example of topic routing keys, `*` and `#`. Use for: topic exchange rules (a PHP series also exists under Get Started).
- [RabbitMQ: Exchanges](https://www.rabbitmq.com/docs/exchanges)
  Exchange types, default exchange, pre-declared exchanges. Use for: Lesson 2 routing detail.
- [RabbitMQ: Consumer Acknowledgements and Publisher Confirms](https://www.rabbitmq.com/docs/confirms)
  Manual vs automatic acknowledgement, redelivery, publisher confirms. Use for: reliability and failure lessons.
- [RabbitMQ: Dead Letter Exchanges](https://www.rabbitmq.com/docs/dlx)
  When messages are dead-lettered, routing, and safety caveats. Use for: failure-handling lessons.
- [Stripe: Idempotent requests](https://docs.stripe.com/api/idempotent_requests)
  Primary source for idempotency keys on payment calls. Use for: double-charge and retry-safety explanations.
- [RabbitMQ: Publishers](https://www.rabbitmq.com/docs/publishers)
  Publishing, publisher confirms, unroutable messages. Use for: reliability lessons.
- [RabbitMQ documentation index](https://www.rabbitmq.com/docs)
  Entry point to guides on consumers, acknowledgements, dead lettering, prefetch, monitoring. Use for: finding the right guide per lesson.
- [Laravel: Queues](https://laravel.com/docs/queues)
  Official Laravel docs on jobs, workers, connections vs queues, after_commit, retries and backoff, timeout vs retry_after, failed jobs, Supervisor, testing. Use for: every Laravel-side claim.
- [vladimir-yuldashev/laravel-queue-rabbitmq (Packagist)](https://packagist.org/packages/vladimir-yuldashev/laravel-queue-rabbitmq)
  README for the community RabbitMQ driver (v15.0.2, Sept 2026; Laravel 10 to 13): exchange options, consuming commands, Horizon, failed-job rerouting, custom job classes. Use for: Lesson 3 onward. Source: https://github.com/vyuldashev/laravel-queue-rabbitmq

## Wisdom (Communities)

- [RabbitMQ GitHub Discussions](https://github.com/rabbitmq/rabbitmq-server/discussions)
  The core team's recommended place for questions and root-cause discussion. Use for: real-world behaviour questions.
- RabbitMQ community Discord server (linked from the rabbitmq-server GitHub README)
  Best-effort community help. Use for: quick usage questions.

## Gaps
- Idempotency patterns inside Laravel jobs (state checks, markers): no primary source found; Lesson 5 labels these as general practice. Stripe covers the external-API side.
- No vetted Laravel-plus-RabbitMQ community found yet.
- Which driver the target company uses is unknown.
- The driver README is also silent on queue durability, message persistence, publisher confirms and acknowledgement mode; check on a live system.
- The driver README does not state what happens when no exchange options are set; check the management UI on a real system rather than assuming.
