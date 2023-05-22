import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions';
import transactions from './Data/transactions.json';
import friends from './Data/friends.json';
import data from './Data/data.json';
import user from './Data/user.json';
export const App = () => {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics key={data.id} title="Upload stats" stats={data} />
      <FriendList key={friends.id} friends={friends} />
      <TransactionHistory key={transactions.id} items={transactions} />
    </div>
  );
};
