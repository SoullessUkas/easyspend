import { formatAmount } from "@/lib/utils";
import CountUp from "react-countup/build/CountUp";
import AnimatedCounter from "./AnimatedCounter";


export const TotalBalanceBox = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance,
  }: TotalBalanceBoxProps) => {
    return (
      <section className="total-balance">
        <div className="total-balance-chart">{/* DoughnutChart */}</div>
        <div className="flex flex-col gap-6">
          <h2 className="header-2">Conta Bancaria: {totalBanks}</h2>
          <div className="flex flex-col gap-2">
            <p className="total-balance-label">Valor total atual</p>
            <p className="total-balance-amount flex-center gap-2">
             <AnimatedCounter amount = {totalCurrentBalance}/>
              
            </p>
          </div>
        </div>
      </section>
    )
  }
export default TotalBalanceBox