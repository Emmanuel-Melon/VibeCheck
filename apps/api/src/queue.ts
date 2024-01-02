import { Queue } from 'bullmq';

export enum Queues {
  Mail = "Mail",
  Event = "Event",
  Notification = "Notification",
  User = "User"
}

export function withErrorHandling<T>(
  name: Queues
) {
  const queue = create(name);

  // queue.isReady().then(() => {
  //   // tslint:disable-next-line:no-console
  //   console.log(`${name} queue is ready!`);
  // });

  queue.on("error", (error: Error) => {
    // tslint:disable-next-line:no-console
    console.error(error);
    process.exit(1);
  });

  // queue.on("failed", (job: any, error: Error) => {
  //   // tslint:disable-next-line:no-console
  //   console.log(`Job ${job.id} failed`, error);
  // });

  process.once("SIGINT", () => {
    queue
      .close()
      .then(() => {
        process.exit(0);
      })
      .catch((error: any) => {
        // tslint:disable-next-line:no-console
        console.log("Bull closed with error: %s", error);
        process.exit(1);
      });
  });

  return queue;
}

export function create<T>(name: Queues) {
  return new Queue(name);
}