import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
const Home = () => {
  const loggedIn = { firstName: "Lucas" , lastName: 'Almeida', email :"lucas@gmail.com"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Bem vindo"
            user={loggedIn?.firstName || "Guest"}
            subtext="Para acessar e manejar sua conta e tansações com eficiência."
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.38}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{},{}]}
      />
    </section>
  );
};

export default Home;
