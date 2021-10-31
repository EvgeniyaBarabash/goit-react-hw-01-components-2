import Profile from './components/Profile/Profile.js';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Statistics from './components/Statistical/Statistical.js';
import Container from './components/Container/Container.js';
import FriendList from './components/Friends/Friends.js';
import TransactionHistory from './components/Transactions/Transactions.js';
function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Container>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
      </Container>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
