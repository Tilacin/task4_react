const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Добавить друга</Button>
      </div>
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Ты должен {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Тебе должен {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          Ты в расчёте с {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      <Button>Выбрать</Button>
    </li>
  );
}

function Button({children}) {
  return(
    <button className="button">{children}</button>
  )
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👩🏼‍🤝‍👩🏻 Имя друга</label>
      <input type="text" />

      <label>🖼url-адрес изображения</label>
      <input type="text" />
      <Button>Добавить</Button>
    </form>
   
  );
}
