const girls = [
  {
    id: "1",
    name: "Emma Johnson",
    age: 26,
    vibe: "adventurous",
    avatar:
      "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400",
    interests: ["reading", "traveling", "cooking", "music"],
    bio: "I love exploring new places and trying new recipes. I also enjoy reading books and listening to music.",
    distance: 10.5,
    controls: {
      like: true,
      dislike: false,
    },
  },
  {
    id: "2",
    name: "Sophia Williams",
    age: 28,
    vibe: "romantic",
    avatar: "https://www.refinery29.com/images/10353760.jpg",
    interests: ["gaming", "hiking", "art"],
    bio: "I love spending time outdoors and exploring new hiking trails. I also enjoy gaming and creating art.",
    distance: 15.3,
    controls: {
      like: false,
      dislike: true,
    },
  },
  {
    id: "3",
    name: "Isabella Jones",
    age: 25,
    vibe: "fun",
    avatar:
      "https://i.pinimg.com/736x/fb/9f/04/fb9f040640c59b1b78d283218c58edfb.jpg",
    interests: ["sports", "music", "cooking"],
    bio: "I enjoy playing sports and listening to music. I also love trying out new recipes.",
    distance: 12.7,
    controls: {
      like: true,
      dislike: false,
    },
  },
  {
    id: "5",
    name: "Ava Taylor",
    age: 29,
    vibe: "adventurous",
    avatar:
      "https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg",
    interests: ["music", "sports", "cooking"],
    bio: "I love exploring new places and trying out new recipes. I also enjoy playing sports and listening to music.",
    distance: 11.8,
    controls: {
      like: true,
      dislike: false,
    },
  },
];

const Match = ({ girl }) => {
  return (
    <div className="basis-2/5 grow h-full">
      <div className="card h-56 card-compact bg-white shadow image-full ">
        <figure>
          <img src={girl.avatar} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{girl.name}</h2>
   
        </div>
      </div>
    </div>
  );
};
export const Matches = () => {
  return (
    <div className="flex flex-wrap gap-1">
      {girls.map((girl) => (
        <Match key={girl.id} girl={girl} />
      ))}
    </div>
  );
};
