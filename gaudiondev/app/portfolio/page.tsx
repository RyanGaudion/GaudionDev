import portfolioData from "@/public/portfolio.json";
import PortfolioCard from "../../components/PortfolioCard";

export default function PortfolioPage() {

    const totalStake = portfolioData.reduce((acc, stock) => acc + stock.stake, 0);


  return (
    <div className='wrapper'>
        <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {portfolioData.map((stock, index) => (
            <PortfolioCard key={index} stock={stock} totalStake={totalStake}/>
            ))}
        </div>
    </div>
  );
}