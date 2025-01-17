type PortfolioCardProps = {
  stock: {
    name: string;
    logo?: string;
    logoBg?: string;
    logoNoZoom?: boolean;
    stake?: number;
    sold: boolean;
    soldDetail?: string;
    gainLoss?: number;
  };
  totalStake: number; // Total stake across all stocks
};

export default function PortfolioCard({ stock, totalStake  }: PortfolioCardProps) {
  const { name, logo, stake, sold, gainLoss, soldDetail, logoNoZoom, logoBg } = stock;

  const stripColor =
  gainLoss && gainLoss > 0 ? "bg-green-500" : gainLoss && gainLoss < 0 ? "bg-red-500" : "";

  const gainLossText = gainLoss !== null ? ((gainLoss ?? 0) > 0  ? `${gainLoss}% Gain` : `${gainLoss}% Loss`) : "Sold";

  const portfolioPercentage = (((stake ? stake : 0) / totalStake) * 100).toFixed(2);

  const defaultLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;


  return (
    // <div className="relative p-4 border rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300 group">
    //   {/* Diagonal Text Gain/Loss Strip */}
    //   {sold && (
        
    //     <div
    //       className={`absolute top-0 right-0 z-10 text-white px-3 py-1 text-sm font-semibold transform rotate-45 w-24 translate-x-8 translate-y-4 ${stripColor}`}
    //     >
    //       {gainLossText}
    //     </div>
    //   )}
    <div className={`relative border rounded-lg shadow-lg ${logoBg ? logoBg : "bg-white"} hover:scale-105 transition-transform duration-300 group overflow-hidden`}>
    
    {/* Diagonal Text Gain/Loss Strip */}
    {sold && (
        <div
        className={`absolute top-0 right-0 z-10 text-white px-3 text-center  py-1 text-sm font-semibold transform rotate-45 w-32 translate-x-[2.2rem] translate-y-4 ${stripColor}`}
        >
        {gainLossText}
        </div>
    )}

      {/* Company Logo */}
      <div className={`relative w-full h-32 md:h-48 ${logoNoZoom ? "p-4" : undefined} overflow-hidden rounded-md z-0`}>
        <img
          src={logo || defaultLogo}
          alt={`${name} logo`}
          className={`w-full h-full  ${logoNoZoom ? "object-contain" : "object-cover"}`}
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
        <h2 className="text-lg font-bold">{name}</h2>
        {/* Only show stake and portfolio percentage if not sold */}
        {!sold && (
          <>
            <p className="text-sm">Portfolio: <span className="font-semibold">{portfolioPercentage}%</span></p>
          </>
        )}
        {sold && (
             soldDetail && (<p className="text-sm">Sold: <span className="font-semibold">{soldDetail}</span></p>)
        )}
      </div>
    </div>
  );
}