import { CallOverview } from "./CallOverview";

const calls = [
    {
        id: 1,
        duration: 15,
        createdAt: "2023-12-28T04:11:05.78205+00:00",
        type: "Outgoing",
        user: {
            avatar: "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400≈",
            name: "Emma Johnson", 
        }
    },
    {
        id: 1,
        duration: 15,
        createdAt: "2023-12-27T04:11:05.78205+00:00",
        type: "Incoming",
        user: {
            avatar: "https://www.refinery29.com/images/10353760.jpg",
            name: "Sohpia Williams", 
        }
    },
    {
        id: 1,
        duration: 15,
        createdAt: "2023-12-27T04:11:05.78205+00:00",
        type: "Missed",
        user: {
            avatar: "https://i.pinimg.com/736x/fb/9f/04/fb9f040640c59b1b78d283218c58edfb.jpg",
            name: "Isabella Jones", 
        }
    }
]

export const CallHistory = () => {
    return (
        <div className="space-y-4 w-full">
            <div>
                <h3 className="text-xl">Call Log</h3>
            </div>
            <div className="space-y-4">
                {
                    calls.map(call => <CallOverview key={call.id} call={call} />)
                }
            </div>
        </div>
    )
}