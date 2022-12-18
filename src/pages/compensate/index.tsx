import CompensateInterface from "../../components/CompensateInterface/CompensateInterface";
import Layout from "../../components/Layout/Layout";
import "./index.scss";

export default function Compensate() {
  return (
    <Layout>
      <section className="compensate__main-box">
        <section className="compensate__content-box">
          <div className="compensate__content">
            <CompensateInterface />
          </div>
        </section>
      </section>
    </Layout>
  );
}
