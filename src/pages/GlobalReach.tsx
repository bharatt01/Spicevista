import GlobalHeader from '@/components/GlobalHeader';
import WorldMap from '@/components/WorldMap';
import GlobalStats from '@/components/GlobalStats';
import MarketList from '@/components/MarketList';
import ExportCertifications from '@/components/ExportCertifications';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GlobalReachPage = () => (
  <div className="bg-white min-h-screen">
    <Header />
    <GlobalHeader />
    <WorldMap />
    <GlobalStats />
    <MarketList />
    <ExportCertifications />
    <Footer />
  </div>
);

export default GlobalReachPage;
