import { Worker } from 'bullmq';
import { Queues, withErrorHandling } from "../queue";

export const usersQueue = withErrorHandling<any>(Queues.User);

const worker = new Worker('foo', async job => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    console.log(job.data);
  });