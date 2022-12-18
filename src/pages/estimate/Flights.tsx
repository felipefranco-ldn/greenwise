import Layout from "../../components/Layout/Layout";
import EstimateOptions from "../../components/EstimateOptions/EstimateOptions";
import FlightsInterface from "../../components/FlightsInterface/FlightsInterface";
export default function Flights() {
  return (
    <Layout>
      <section className="estimate__main-box">
        <EstimateOptions />
        <section className="estimate__content-box">
          <div className="estimate__content">
            <FlightsInterface />
          </div>
        </section>
      </section>
    </Layout>
  );
}
