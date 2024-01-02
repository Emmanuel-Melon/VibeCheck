import { create, Queues } from "./queue";

export type Enqueue<T> = (data: T, options: any) => Promise<any>;

export const eventsQueue = create<any>(Queues.Event);

export const pushEvent: Enqueue<any> = message =>
  eventsQueue.add(message, { removeOnComplete: false });
