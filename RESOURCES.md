# RabbitMQ in Laravel Resources

## Knowledge

- [RabbitMQ: AMQP 0-9-1 Model Explained](https://www.rabbitmq.com/tutorials/amqp-concepts)
  Official explanation of exchanges, queues, bindings, acknowledgements. Use for: all vocabulary and routing questions.
- [RabbitMQ: Exchanges](https://www.rabbitmq.com/docs/exchanges)
  Exchange types, default exchange, pre-declared exchanges. Use for: Lesson 2 routing detail.
- [RabbitMQ: Publishers](https://www.rabbitmq.com/docs/publishers)
  Publishing, publisher confirms, unroutable messages. Use for: reliability lessons.
- [RabbitMQ documentation index](https://www.rabbitmq.com/docs)
  Entry point to guides on consumers, acknowledgements, dead lettering, prefetch, monitoring. Use for: finding the right guide per lesson.
- [Laravel: Queues](https://laravel.com/docs/queues)
  Official Laravel docs on jobs, workers, connections vs queues, retries, failed jobs, testing. Use for: every Laravel-side claim.
- [vladimir-yuldashev/laravel-queue-rabbitmq (Packagist)](https://packagist.org/packages/vladimir-yuldashev/laravel-queue-rabbitmq)
  README for the community RabbitMQ driver: config, Horizon support, failed-job rerouting, custom job classes. Use for: Lesson 3 onward. Source: https://github.com/vyuldashev/laravel-queue-rabbitmq

## Wisdom (Communities)

- [RabbitMQ GitHub Discussions](https://github.com/rabbitmq/rabbitmq-server/discussions)
  The core team's recommended place for questions and root-cause discussion. Use for: real-world behaviour questions.
- RabbitMQ community Discord server (linked from the rabbitmq-server GitHub README)
  Best-effort community help. Use for: quick usage questions.

## Gaps
- Retry-safety and idempotency in Laravel jobs: only secondary blog posts found so far; verify against the Laravel docs before teaching Lesson 5.
- No vetted Laravel-plus-RabbitMQ community found yet.
- Which driver the target company uses is unknown.
